const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const LOCAL_STRAPI_URL = process.env.LOCAL_STRAPI_URL || "http://localhost:1337";
const TRANSFER_TOKEN = process.env.TRANSFER_TOKEN || process.argv[2];

if (!TRANSFER_TOKEN) {
  console.error("❌ Transfer token is required");
  console.error("   Usage: node seed/export-properties.js <transfer-token>");
  console.error("   Or set TRANSFER_TOKEN environment variable");
  process.exit(1);
}

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

// Export all properties
async function exportProperties() {
  console.log("📥 Exporting properties from local Strapi...");
  console.log(`URL: ${LOCAL_STRAPI_URL}\n`);

  try {
    // Fetch all properties with populate
    const response = await makeRequest(
      `${LOCAL_STRAPI_URL}/api/properties?pagination[pageSize]=1000&populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TRANSFER_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Failed to fetch properties: ${response.status} ${response.statusText}`);
      console.error(`   Error: ${errorText}`);
      process.exit(1);
    }

    const data = await response.json();
    const properties = data.data || [];

    console.log(`✅ Found ${properties.length} properties`);

    // Save to JSON file
    const exportPath = path.join(__dirname, "properties-export.json");
    fs.writeFileSync(exportPath, JSON.stringify(properties, null, 2));
    
    console.log(`\n✅ Properties exported to: ${exportPath}`);
    console.log(`   Total properties: ${properties.length}`);
    
    return exportPath;
  } catch (error) {
    console.error("❌ Error exporting properties:", error.message);
    process.exit(1);
  }
}

// Run export
exportProperties();



