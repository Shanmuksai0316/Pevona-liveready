const STRAPI_URL = process.env.STRAPI_URL || 'http://31.97.117.9:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_API_TOKEN) {
  console.error('ERROR: STRAPI_API_TOKEN environment variable is required');
  process.exit(1);
}

async function listProperties() {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/properties?pagination[limit]=100&populate=*`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        },
      }
    );
    
    const data = await response.json();
    
    if (data.data && data.data.length > 0) {
      console.log(`\nFound ${data.data.length} properties in Strapi:\n`);
      console.log('='.repeat(80));
      
      data.data.forEach((property, index) => {
        console.log(`\n${index + 1}. ID: ${property.id}`);
        console.log(`   Title: ${property.attributes.title}`);
        console.log(`   Slug: ${property.attributes.slug}`);
        console.log(`   Address: ${property.attributes.address || 'N/A'}`);
        console.log(`   City: ${property.attributes.city || 'N/A'}`);
        console.log(`   Postcode: ${property.attributes.zipcode || 'N/A'}`);
        console.log(`   Status: ${property.attributes.status || 'N/A'}`);
      });
      
      console.log('\n' + '='.repeat(80));
    } else {
      console.log('No properties found in Strapi');
    }
  } catch (error) {
    console.error('Error fetching properties:', error.message);
  }
}

listProperties();

