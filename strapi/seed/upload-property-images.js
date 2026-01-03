const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const FormData = require("form-data");

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Property image folders mapping - match by address/keywords in title
const PROPERTY_IMAGES = {
  "mcgredy": {
    folder: "wetransfer_export-2-property-ref-9mcgredy-professional-photos_2025-12-03_1159/Proffessional Photos",
    keywords: ["mcgredy", "cheshunt"],
  },
  "westwood": {
    folder: "wetransfer_export-3-property-ref-flat-2hh-professional-photos_2025-12-03_1203/New Photos - Jan 2022",
    keywords: ["westwood", "ilford", "harrison"],
  },
  "leonards": {
    folder: "wetransfer_export-4-property-ref-flati50sls-professional-photos_2025-12-03_1206/Proffesional Takes",
    keywords: ["leonards", "st leonards", "london"],
  },
  "crystal": {
    folder: "wetransfer_export-5-property-ref-18crw-professional-photos_2025-12-03_1209/New - Aug 2023",
    keywords: ["crystal", "dagenham"],
  },
  "grantham": {
    folder: "wetransfer_export-1-property-ref-20gg-professional-photos_2025-12-03_1153/Proffessional Photos",
    keywords: ["grantham", "romford", "maisonette"],
  },
  "armstrong": {
    folder: "wetransfer_export-6-property-ref-25amc-professional-photos_2025-12-03_1212/Photos",
    keywords: ["armstrong", "chadwell", "dagenham"],
  },
};

const SOURCE_DIR = path.join(
  process.env.USERPROFILE || process.env.HOME,
  "Downloads",
  "Pevona property images"
);

// Helper function to upload file to Strapi
function uploadFile(filePath, fileName) {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append("files", fs.createReadStream(filePath), {
      filename: fileName,
      contentType: "image/jpeg",
    });

    const urlObj = new URL(`${STRAPI_URL}/api/upload`);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;

    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname,
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        ...form.getHeaders(),
      },
    };

    const req = client.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const result = JSON.parse(body);
          resolve(result[0]); // Strapi returns array
        } else {
          reject(new Error(`Upload failed: ${res.statusCode} - ${body}`));
        }
      });
    });

    req.on("error", reject);
    form.pipe(req);
  });
}

// Helper function to update property with images
function updateProperty(propertyId, imageIds) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(`${STRAPI_URL}/api/properties/${propertyId}`);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;

    const data = JSON.stringify({
      data: {
        gallery: imageIds,
      },
    });

    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Length": Buffer.byteLength(data),
      },
    };

    const req = client.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(`Update failed: ${res.statusCode} - ${body}`));
        }
      });
    });

    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

// Helper function to get all properties
function getProperties() {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(`${STRAPI_URL}/api/properties?populate=*`);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;

    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const req = client.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(`Failed: ${res.statusCode} - ${body}`));
        }
      });
    });

    req.on("error", reject);
    req.end();
  });
}

async function uploadPropertyImages() {
  if (!API_TOKEN) {
    console.error("❌ STRAPI_API_TOKEN environment variable is required");
    process.exit(1);
  }

  console.log("📸 Starting property image upload...\n");

  // Get all properties
  const propertiesResponse = await getProperties();
  const properties = propertiesResponse.data;

  for (const [ref, config] of Object.entries(PROPERTY_IMAGES)) {
    // Find property by matching keywords in title or address
    const property = properties.find((p) => {
      const titleLower = p.attributes.title.toLowerCase();
      const addressLower = (p.attributes.address || "").toLowerCase();
      return config.keywords.some((keyword) => 
        titleLower.includes(keyword.toLowerCase()) || 
        addressLower.includes(keyword.toLowerCase())
      );
    });

    if (!property) {
      console.error(`  ❌ Property not found for ${ref}`);
      continue;
    }

    const folderPath = path.join(SOURCE_DIR, config.folder);
    if (!fs.existsSync(folderPath)) {
      console.error(`  ❌ Folder not found: ${folderPath}`);
      continue;
    }

    console.log(`\n📁 Processing ${ref} (${property.attributes.title})...`);

    // Get all image files
    const files = fs
      .readdirSync(folderPath)
      .filter(
        (file) =>
          /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file) &&
          !file.toLowerCase().includes("floor plan") &&
          !file.toLowerCase().includes("epc") &&
          !file.toLowerCase().includes("electrical") &&
          !file.toLowerCase().includes("utility")
      )
      .slice(0, 20); // Limit to 20 images per property

    if (files.length === 0) {
      console.log(`  ⚠️  No images found in ${folderPath}`);
      continue;
    }

    console.log(`  📷 Found ${files.length} images`);

    const uploadedImageIds = [];

    for (const file of files) {
      try {
        const filePath = path.join(folderPath, file);
        console.log(`    Uploading: ${file}...`);
        const uploaded = await uploadFile(filePath, file);
        uploadedImageIds.push(uploaded.id);
      } catch (error) {
        console.error(`    ❌ Failed to upload ${file}:`, error.message);
      }
    }

    if (uploadedImageIds.length > 0) {
      try {
        await updateProperty(property.id, uploadedImageIds);
        console.log(
          `  ✅ Successfully uploaded ${uploadedImageIds.length} images to property`
        );
      } catch (error) {
        console.error(`  ❌ Failed to update property:`, error.message);
      }
    }
  }

  console.log("\n✨ Image upload completed!");
}

uploadPropertyImages().catch((error) => {
  console.error("❌ Process failed:", error);
  process.exit(1);
});

