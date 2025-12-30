const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Helper function to make HTTP requests
function makeRequest(url, options, data) {
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
        resolve({
          ok: res.statusCode >= 200 && res.statusCode < 300,
          status: res.statusCode,
          statusText: res.statusMessage,
          text: () => Promise.resolve(body),
          json: () => Promise.resolve(JSON.parse(body)),
        });
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

if (!API_TOKEN) {
  console.error("❌ STRAPI_API_TOKEN environment variable is required");
  console.error("   Get your token from: Settings → API Tokens in Strapi admin");
  console.error("   Create a token with 'Full access' permissions");
  process.exit(1);
}

async function addProperties() {
  console.log("🌱 Starting to add new properties...\n");

  // Load property data
  const propertiesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "new-properties.json"), "utf8")
  );

  // Add Properties
  console.log("📦 Adding properties...");
  for (const property of propertiesData) {
    try {
      // Generate slug from title
      const slug = property.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      
      const propertyData = {
        ...property,
        slug: slug,
      };

      const response = await makeRequest(
        `${STRAPI_URL}/api/properties`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        },
        { data: propertyData }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(`  ✅ Created: ${property.title}`);
        console.log(`     ID: ${result.data.id}, Slug: ${result.data.attributes.slug}`);
      } else {
        const errorText = await response.text();
        console.error(`  ❌ Failed: ${property.title} (Status: ${response.status})`);
        console.error(`     Error: ${errorText.substring(0, 200)}`);
      }
    } catch (error) {
      console.error(`  ❌ Error creating ${property.title}:`, error.message || error);
    }
  }

  console.log("\n✨ Process completed!");
}

addProperties().catch((error) => {
  console.error("❌ Process failed:", error);
  process.exit(1);
});

