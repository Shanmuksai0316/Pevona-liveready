const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const STRAPI_URL = process.env.STRAPI_URL || 'http://31.97.117.9:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_API_TOKEN) {
  console.error('ERROR: STRAPI_API_TOKEN environment variable is required');
  process.exit(1);
}

const excelPath = path.join('C:', 'Users', 'Nagraj Y R', 'Downloads', 'Updated Property Details - Tenancy & Tenants Details.xlsx');

// Helper function to convert Excel values to appropriate types
function convertValue(value, fieldType) {
  if (value === null || value === undefined || value === '' || value === 'N/A') {
    return null;
  }
  
  if (fieldType === 'number' || fieldType === 'decimal') {
    const num = typeof value === 'number' ? value : parseFloat(value);
    return isNaN(num) ? null : num;
  }
  
  return String(value);
}

// Helper function to parse combined field (e.g., "Cladding - Building Safety - Rights & Restrictions - Flood Risk")
function parseCombinedField(value) {
  if (!value || value === 'N/A') return {};
  
  const result = {};
  const parts = value.split(' - ');
  
  parts.forEach(part => {
    if (part.includes('Cladding:')) {
      result.cladding = part.replace('Cladding:', '').trim();
    } else if (part.includes('Building Safety:')) {
      result.building_safety = part.replace('Building Safety:', '').trim();
    } else if (part.includes('Rights & Restrictions:')) {
      result.rights_restrictions = part.replace('Rights & Restrictions:', '').trim();
    } else if (part.includes('Flood Risk:')) {
      result.flood_risk = part.replace('Flood Risk:', '').trim();
    }
  });
  
  return result;
}

// Helper function to build address from Excel columns
function buildAddress(row) {
  const parts = [];
  
  const houseNumber = row['Property Address                          House Name/House Number'];
  const addressLine1 = row['Property                        Address Line 1'];
  const addressLine2 = row['Propertyt                      Address Line 2'];
  
  if (houseNumber) parts.push(String(houseNumber));
  if (addressLine1) parts.push(addressLine1);
  if (addressLine2 && addressLine2 !== '(empty)') parts.push(addressLine2);
  
  return parts.join(' ').trim();
}

async function updatePropertyInStrapi(propertyRef, data, postcode) {
  try {
    let property = null;
    
    // First, try to match by postcode (most reliable)
    if (postcode) {
      const postcodeResponse = await fetch(
        `${STRAPI_URL}/api/properties?filters[zipcode][$eq]=${encodeURIComponent(postcode)}&populate=*`,
        {
          headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
          },
        }
      );
      
      const postcodeData = await postcodeResponse.json();
      if (postcodeData.data && postcodeData.data.length > 0) {
        property = postcodeData.data[0];
        console.log(`   Matched by postcode: ${postcode}`);
      }
    }
    
    // If not found by postcode, try by address
    if (!property && data.address) {
      const addressParts = data.address.split(' ').filter(p => p.length > 2);
      if (addressParts.length > 0) {
        const searchTerm = addressParts[0]; // First part of address
        const addressResponse = await fetch(
          `${STRAPI_URL}/api/properties?filters[address][$contains]=${encodeURIComponent(searchTerm)}&populate=*`,
          {
            headers: {
              'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
            },
          }
        );
        
        const addressData = await addressResponse.json();
        if (addressData.data && addressData.data.length > 0) {
          property = addressData.data[0];
          console.log(`   Matched by address: ${searchTerm}`);
        }
      }
    }
    
    // Last resort: try by title containing reference
    if (!property) {
      const titleResponse = await fetch(
        `${STRAPI_URL}/api/properties?filters[title][$contains]=${encodeURIComponent(propertyRef)}&populate=*`,
        {
          headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
          },
        }
      );
      
      const titleData = await titleResponse.json();
      if (titleData.data && titleData.data.length > 0) {
        property = titleData.data[0];
        console.log(`   Matched by title: ${propertyRef}`);
      }
    }
    
    if (!property) {
      console.log(`⚠️  Property not found for reference: ${propertyRef} (Postcode: ${postcode || 'N/A'})`);
      return;
    }
    
    // Update the property
    const updateResponse = await fetch(
      `${STRAPI_URL}/api/properties/${property.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        },
        body: JSON.stringify({ data }),
      }
    );
    
    if (updateResponse.ok) {
      const result = await updateResponse.json();
      console.log(`✅ Updated property: ${propertyRef} (ID: ${property.id})`);
      return result.data;
    } else {
      const errorText = await updateResponse.text();
      console.error(`❌ Failed to update ${propertyRef}:`, errorText);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error updating ${propertyRef}:`, error.message);
    return null;
  }
}

async function importExcelData() {
  try {
    console.log('Reading Excel file...');
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { defval: null });
    
    console.log(`Found ${data.length} properties in Excel file\n`);
    
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const propertyRef = row['Property Internal Reference'];
      
      if (!propertyRef) {
        console.log(`⚠️  Skipping row ${i + 1}: No property reference`);
        continue;
      }
      
      console.log(`\nProcessing: ${propertyRef}`);
      const postcode = row['Postcode'] || '';
      
      // Parse combined field
      const combinedField = parseCombinedField(row['Cladding - Building Safety - Rights & Restrictions - Flood Risk']);
      
      // Build property data
      const propertyData = {
        // Basic info
        title: row['Property Description']?.split('\n')[0] || `${row['Bedrooms']} Bed ${row['Property                        Address Line 1']}`,
        
        // Address
        address: buildAddress(row),
        city: row['Town'] || '',
        state: row['County'] || '',
        zipcode: row['Postcode'] || '',
        
        // Property details
        bedrooms: convertValue(row['Bedrooms'], 'number'),
        bathrooms: convertValue(row['Bathrooms'], 'number'),
        area: convertValue(row['PROPERTY SIZE (SQUARE METERS)'], 'number') ? 
              Math.round(convertValue(row['PROPERTY SIZE (SQUARE METERS)'], 'number') * 10.764) : null, // Convert sq meters to sq ft
        property_type: row['Tenure']?.replace(' Property', '').trim() || null,
        tenure_information: row['Tenure'] || null,
        
        // Pricing
        price: convertValue(row['Sales'], 'number'),
        rent_price: convertValue(row['Rent pm'], 'number'),
        currency: 'GBP',
        
        // Leasehold info
        annual_ground_rents: convertValue(row['ANNUAL GROUND RENTS'], 'string'),
        estimated_annual_service_charges: convertValue(row['ESTIMATED ANNUAL SERVICE CHARGE'], 'string'),
        number_of_years_of_lease: convertValue(row['NUMBER YEARS OF LEASE'], 'string'),
        ground_rent: convertValue(row['ANNUAL GROUND RENTS'], 'number'),
        service_charge: convertValue(row['ESTIMATED ANNUAL SERVICE CHARGE'], 'number'),
        lease_remaining: convertValue(row['NUMBER YEARS OF LEASE'], 'string'),
        
        // Other details
        hmo: convertValue(row['HMO'], 'string'),
        epc_rating: convertValue(row['EPC RATINGS'], 'string'),
        council_tax_band: convertValue(row['Council Tax Band'], 'string'),
        local_council: convertValue(row['Local (Authority) Council'], 'string'),
        utilities: convertValue(row['UTILITES'], 'string'),
        parking: convertValue(row['Parking'], 'string'),
        accessibility: convertValue(row['Accessibilities'], 'string'),
        
        // Risk & Safety (from combined field)
        cladding_building_safety: combinedField.cladding && combinedField.building_safety 
          ? `Cladding: ${combinedField.cladding} - Building Safety: ${combinedField.building_safety}`
          : null,
        rights_restrictions: combinedField.rights_restrictions || null,
        flood_risk: combinedField.flood_risk || null,
        
        // Description
        description: row['Property Description'] || null,
        
        // Status
        status: row['Rent pm'] ? 'For Rent' : 'For Sale',
      };
      
      // Remove null/undefined values
      Object.keys(propertyData).forEach(key => {
        if (propertyData[key] === null || propertyData[key] === undefined || propertyData[key] === '') {
          delete propertyData[key];
        }
      });
      
      await updatePropertyInStrapi(propertyRef, propertyData, postcode);
    }
    
    console.log('\n✅ Import completed!');
  } catch (error) {
    console.error('Error importing Excel data:', error);
    process.exit(1);
  }
}

importExcelData();

