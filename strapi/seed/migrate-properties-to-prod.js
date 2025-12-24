const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// Local Strapi (source)
const LOCAL_STRAPI_URL = process.env.LOCAL_STRAPI_URL || "http://localhost:1337";
const LOCAL_API_TOKEN = process.env.LOCAL_STRAPI_API_TOKEN;

// Production Strapi (destination)
const PROD_STRAPI_URL = process.env.PROD_STRAPI_URL || "http://31.97.117.9:1337";
const PROD_API_TOKEN = process.env.PROD_STRAPI_API_TOKEN;

// Helper function to make HTTP requests
function makeRequest(url, options = {}, data = null) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;
    
    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };

    const req = client.request(requestOptions, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        try {
          const jsonBody = body ? JSON.parse(body) : {};
          resolve({
            ok: res.statusCode >= 200 && res.statusCode < 300,
            status: res.statusCode,
            statusText: res.statusMessage,
            text: () => Promise.resolve(body),
            json: () => Promise.resolve(jsonBody),
          });
        } catch (e) {
          resolve({
            ok: res.statusCode >= 200 && res.statusCode < 300,
            status: res.statusCode,
            statusText: res.statusMessage,
            text: () => Promise.resolve(body),
            json: () => Promise.resolve({}),
          });
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

// Fetch all properties from local Strapi
async function fetchLocalProperties() {
  console.log("📥 Fetching properties from local Strapi...");
  
  try {
    const response = await makeRequest(
      `${LOCAL_STRAPI_URL}/api/properties?pagination[pageSize]=1000&populate=*`,
      {
        method: "GET",
        headers: LOCAL_API_TOKEN ? {
          Authorization: `Bearer ${LOCAL_API_TOKEN}`,
        } : {},
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Found ${data.data?.length || 0} properties`);
    return data.data || [];
  } catch (error) {
    console.error("❌ Error fetching local properties:", error.message);
    throw error;
  }
}

// Create multipart form data boundary
function createMultipartFormData(fields, files) {
  const boundary = `----WebKitFormBoundary${Date.now()}`;
  const parts = [];
  
  // Add file fields
  for (const [fieldName, fileData] of Object.entries(files)) {
    parts.push(
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="${fieldName}"; filename="${fileData.filename}"\r\n` +
      `Content-Type: ${fileData.contentType || "application/octet-stream"}\r\n\r\n`
    );
    parts.push(fileData.data);
    parts.push("\r\n");
  }
  
  // Add text fields
  for (const [key, value] of Object.entries(fields)) {
    parts.push(
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="${key}"\r\n\r\n` +
      `${value}\r\n`
    );
  }
  
  parts.push(`--${boundary}--\r\n`);
  
  return {
    boundary,
    body: Buffer.concat(parts.map(part => Buffer.isBuffer(part) ? part : Buffer.from(part, "utf8"))),
  };
}

// Upload media file to production Strapi
async function uploadMediaToProd(mediaUrl, fileName) {
  if (!mediaUrl || !fileName) return null;

  try {
    // Download file from local
    const fullUrl = mediaUrl.startsWith('http') ? mediaUrl : `${LOCAL_STRAPI_URL}${mediaUrl}`;
    const urlObj = new URL(fullUrl);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;

    const fileData = await new Promise((resolve, reject) => {
      const req = client.get(urlObj.href, (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      });
      req.on("error", reject);
    });

    // Determine content type
    const contentType = fileName.endsWith('.pdf') ? 'application/pdf' :
                       fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') ? 'image/jpeg' :
                       fileName.endsWith('.png') ? 'image/png' :
                       fileName.endsWith('.gif') ? 'image/gif' :
                       'application/octet-stream';

    // Create multipart form data
    const formData = createMultipartFormData({}, {
      files: {
        data: fileData,
        filename: fileName,
        contentType: contentType,
      },
    });

    // Upload to production
    const prodUrlObj = new URL(`${PROD_STRAPI_URL}/api/upload`);
    const prodIsHttps = prodUrlObj.protocol === "https:";
    const prodClient = prodIsHttps ? https : http;

    return new Promise((resolve, reject) => {
      const req = prodClient.request(
        {
          hostname: prodUrlObj.hostname,
          port: prodUrlObj.port || (prodIsHttps ? 443 : 80),
          path: prodUrlObj.pathname,
          method: "POST",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData.boundary}`,
            "Content-Length": formData.body.length,
            Authorization: `Bearer ${PROD_API_TOKEN}`,
          },
        },
        (res) => {
          let body = "";
          res.on("data", (chunk) => {
            body += chunk;
          });
          res.on("end", () => {
            try {
              const json = JSON.parse(body);
              if (res.statusCode >= 200 && res.statusCode < 300 && json[0]) {
                resolve(json[0].id);
              } else {
                console.warn(`⚠️  Failed to upload ${fileName}: ${res.statusCode}`);
                resolve(null);
              }
            } catch (e) {
              console.warn(`⚠️  Failed to parse upload response for ${fileName}`);
              resolve(null);
            }
          });
        }
      );

      req.on("error", (error) => {
        console.warn(`⚠️  Error uploading ${fileName}:`, error.message);
        resolve(null);
      });

      req.write(formData.body);
      req.end();
    });
  } catch (error) {
    console.warn(`⚠️  Error uploading media ${fileName}:`, error.message);
    return null;
  }
}

// Create property in production Strapi
async function createPropertyInProd(property) {
  console.log(`\n📤 Creating property: ${property.attributes?.title || property.title || "Untitled"}`);

  // Extract attributes
  const attributes = property.attributes || property;
  
  // Prepare property data (remove id, createdAt, updatedAt, publishedAt)
  const propertyData = {
    data: {
      title: attributes.title,
      slug: attributes.slug,
      status: attributes.status,
      price: attributes.price,
      currency: attributes.currency,
      address: attributes.address,
      city: attributes.city,
      state: attributes.state,
      zipcode: attributes.zipcode,
      bedrooms: attributes.bedrooms,
      bathrooms: attributes.bathrooms,
      // Map local area_sqft (or area) to required production field "area"
      area: attributes.area_sqft ?? attributes.area ?? 0,
      // Keep original area_sqft if it exists (production will ignore unknown fields)
      area_sqft: attributes.area_sqft,
      property_type: attributes.property_type,
      description: attributes.description,
      features: attributes.features,
      year_built: attributes.year_built,
      parking: attributes.parking,
      garden: attributes.garden,
      furnished: attributes.furnished,
      pets_allowed: attributes.pets_allowed,
      energy_rating: attributes.energy_rating,
      council_tax: attributes.council_tax,
      monthly_rent: attributes.monthly_rent,
      deposit: attributes.deposit,
      available_from: attributes.available_from,
      minimum_tenancy: attributes.minimum_tenancy,
      epc_rating: attributes.epc_rating,
      tenure_information: attributes.tenure_information,
      key_features: attributes.key_features,
      location_description: attributes.location_description,
      nearby_amenities: attributes.nearby_amenities,
      transport_links: attributes.transport_links,
      schools: attributes.schools,
      additional_information: attributes.additional_information,
    },
  };

  // Handle images
  if (attributes.images?.data && Array.isArray(attributes.images.data)) {
    const imageIds = [];
    for (const image of attributes.images.data) {
      const imageUrl = image.attributes?.url || image.url;
      const imageName = image.attributes?.name || image.name || `image-${Date.now()}.jpg`;
      if (imageUrl) {
        const uploadedId = await uploadMediaToProd(imageUrl, imageName);
        if (uploadedId) {
          imageIds.push(uploadedId);
        }
      }
    }
    if (imageIds.length > 0) {
      propertyData.data.images = imageIds;
    }
  }

  // Handle documents
  if (attributes.documents?.data && Array.isArray(attributes.documents.data)) {
    const docIds = [];
    for (const doc of attributes.documents.data) {
      const docUrl = doc.attributes?.url || doc.url;
      const docName = doc.attributes?.name || doc.name || `doc-${Date.now()}.pdf`;
      if (docUrl) {
        const uploadedId = await uploadMediaToProd(docUrl, docName);
        if (uploadedId) {
          docIds.push(uploadedId);
        }
      }
    }
    if (docIds.length > 0) {
      propertyData.data.documents = docIds;
    }
  }

  try {
    const response = await makeRequest(
      `${PROD_STRAPI_URL}/api/properties`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PROD_API_TOKEN}`,
        },
      },
      propertyData
    );

    if (response.ok) {
      const result = await response.json();
      console.log(`✅ Created property: ${result.data?.attributes?.title || "Success"}`);
      return result.data;
    } else {
      const errorText = await response.text();
      console.error(`❌ Failed to create property: ${response.status} ${response.statusText}`);
      console.error(`   Error: ${errorText}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error creating property:`, error.message);
    return null;
  }
}

// Main migration function
async function migrateProperties() {
  console.log("🚀 Starting property migration from local to production...\n");
  console.log(`Local Strapi: ${LOCAL_STRAPI_URL}`);
  console.log(`Production Strapi: ${PROD_STRAPI_URL}\n`);

  if (!PROD_API_TOKEN) {
    console.error("❌ PROD_STRAPI_API_TOKEN environment variable is required");
    console.error("   Get your token from: Settings → API Tokens in Strapi admin");
    console.error("   Create a token with 'Full access' permissions");
    process.exit(1);
  }

  try {
    // Fetch properties from local
    const localProperties = await fetchLocalProperties();

    if (localProperties.length === 0) {
      console.log("ℹ️  No properties found in local Strapi");
      return;
    }

    // Create each property in production
    let successCount = 0;
    let failCount = 0;

    for (const property of localProperties) {
      const result = await createPropertyInProd(property);
      if (result) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log("\n" + "=".repeat(50));
    console.log(`✅ Migration complete!`);
    console.log(`   Success: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log(`   Total: ${localProperties.length}`);
  } catch (error) {
    console.error("\n❌ Migration failed:", error.message);
    process.exit(1);
  }
}

// Run migration
migrateProperties();

