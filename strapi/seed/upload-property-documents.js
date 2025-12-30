const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const FormData = require("form-data");

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Property documents mapping
const PROPERTY_DOCUMENTS = {
  "9McGredy": {
    folder: "9McGredy",
    keywords: ["mcgredy", "cheshunt"],
    documents: {
      epc_document: "EPC.pdf",
      electrical_safety_report: "EICR (Elec Installation Condition Report & Certification).pdf",
      gas_safety_certificate: "Gas Safety (31 March 2025 to 31 March 2026).pdf",
      floor_plans: ["Floor Plan Sketch.pdf"],
      documents: ["EICR (Elec Installation Condition Report & Certification).pdf", "EPC.pdf", "Gas Safety (31 March 2025 to 31 March 2026).pdf", "Floor Plan Sketch.pdf"],
    },
  },
  "Flat 2HH": {
    folder: "Flat 2HH",
    keywords: ["westwood", "ilford", "harrison"],
    documents: {
      epc_document: "Energy Performance Certificate (EPC) April 2023.pdf",
      electrical_safety_report: "EICR- Electrical Installation Condition Report - 5 Years.pdf",
      gas_safety_certificate: "Gas Safety Cert (18 Oct 2024 - 18 Oct 2025).pdf",
      floor_plans: ["Floor Plan.pdf"],
      documents: ["EICR- Electrical Installation Condition Report - 5 Years.pdf", "Energy Performance Certificate (EPC) April 2023.pdf", "Gas Safety Cert (18 Oct 2024 - 18 Oct 2025).pdf", "Floor Plan.pdf", "Selective Licence.pdf"],
    },
  },
  "Flati50SLS": {
    folder: "Flati50SLS",
    keywords: ["leonards", "st leonards", "london"],
    documents: {
      epc_document: "EPC Report - July 2024 to 2034.pdf",
      electrical_safety_report: "Electrical Install Cond Report (22-03-2023 to 21-03-2028).pdf",
      gas_safety_certificate: "Gas Safety Cert (Mar 29, 2025 - 2026).pdf",
      floor_plans: ["Floor Plan.pdf"],
      documents: ["Electrical Install Cond Report (22-03-2023 to 21-03-2028).pdf", "EPC Report - July 2024 to 2034.pdf", "Gas Safety Cert (Mar 29, 2025 - 2026).pdf", "Floor Plan.pdf"],
    },
  },
  "18CRW": {
    folder: "18CRW",
    keywords: ["crystal", "dagenham"],
    documents: {
      epc_document: "EPC (21 - 20 March 2022 - 2032).pdf",
      electrical_safety_report: "Elect Instal Cond - Report (Apr-2023 to April-2028).pdf",
      floor_plans: ["Floor Plan.pdf"],
      documents: ["Elect Instal Cond - Report (Apr-2023 to April-2028).pdf", "EPC (21 - 20 March 2022 - 2032).pdf", "Floor Plan.pdf", "Selective License.pdf"],
    },
  },
  "20GG": {
    folder: "20GG",
    keywords: ["grantham", "romford", "maisonette"],
    documents: {
      epc_document: "EPC 17 DEC 2021 - 16 DEC 2031.pdf",
      electrical_safety_report: "EICR (Feb 2025-Feb 2030) RM6 6HJ.pdf",
      floor_plans: ["Floor Plan Sketch 1.pdf"],
      documents: ["EICR (Feb 2025-Feb 2030) RM6 6HJ.pdf", "EPC 17 DEC 2021 - 16 DEC 2031.pdf", "Floor Plan Sketch 1.pdf", "Selective Liceince.pdf"],
    },
  },
  "25AMC": {
    folder: "25AMC",
    keywords: ["armstrong", "chadwell", "dagenham"],
    documents: {
      epc_document: "EPC - EXP January 07, 2031.pdf",
      electrical_safety_report: "ELECTRICAL INSTALLATION CONDITION REPORT.pdf",
      floor_plans: ["Floor Plan Sketch.pdf"],
      documents: ["ELECTRICAL INSTALLATION CONDITION REPORT.pdf", "EPC - EXP January 07, 2031.pdf", "Floor Plan Sketch.pdf"],
    },
  },
};

const SOURCE_DIR = path.join(
  process.env.USERPROFILE,
  "Downloads",
  "Website Information"
);

// Helper function to upload file to Strapi
function uploadFile(filePath, fileName) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      reject(new Error(`File not found: ${filePath}`));
      return;
    }

    const form = new FormData();
    form.append("files", fs.createReadStream(filePath), {
      filename: fileName,
      contentType: "application/pdf",
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

// Helper function to update property with documents
function updateProperty(propertyId, documentData) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(`${STRAPI_URL}/api/properties/${propertyId}`);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;

    const data = JSON.stringify({
      data: documentData,
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

async function uploadPropertyDocuments() {
  if (!API_TOKEN) {
    console.error("❌ STRAPI_API_TOKEN environment variable is required");
    process.exit(1);
  }

  console.log("📄 Starting property document upload...\n");

  // Get all properties
  const propertiesResponse = await getProperties();
  const properties = propertiesResponse.data;

  for (const [ref, config] of Object.entries(PROPERTY_DOCUMENTS)) {
    // Find property by matching keywords
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

    const documentData = {};
    let hasDocuments = false;

    // Upload EPC document
    if (config.documents.epc_document) {
      const filePath = path.join(folderPath, config.documents.epc_document);
      if (fs.existsSync(filePath)) {
        try {
          console.log(`    Uploading EPC: ${config.documents.epc_document}...`);
          const uploaded = await uploadFile(filePath, config.documents.epc_document);
          documentData.epc_document = uploaded.id;
          hasDocuments = true;
          console.log(`    ✅ EPC uploaded`);
        } catch (error) {
          console.error(`    ❌ Failed to upload EPC:`, error.message);
        }
      } else {
        console.log(`    ⚠️  EPC file not found: ${config.documents.epc_document}`);
      }
    }

    // Upload Electrical Safety Report
    if (config.documents.electrical_safety_report) {
      const filePath = path.join(folderPath, config.documents.electrical_safety_report);
      if (fs.existsSync(filePath)) {
        try {
          console.log(`    Uploading EICR: ${config.documents.electrical_safety_report}...`);
          const uploaded = await uploadFile(filePath, config.documents.electrical_safety_report);
          documentData.electrical_safety_report = uploaded.id;
          hasDocuments = true;
          console.log(`    ✅ EICR uploaded`);
        } catch (error) {
          console.error(`    ❌ Failed to upload EICR:`, error.message);
        }
      } else {
        console.log(`    ⚠️  EICR file not found: ${config.documents.electrical_safety_report}`);
      }
    }

    // Upload Gas Safety Certificate
    if (config.documents.gas_safety_certificate) {
      const filePath = path.join(folderPath, config.documents.gas_safety_certificate);
      if (fs.existsSync(filePath)) {
        try {
          console.log(`    Uploading Gas Safety: ${config.documents.gas_safety_certificate}...`);
          const uploaded = await uploadFile(filePath, config.documents.gas_safety_certificate);
          documentData.gas_safety_certificate = uploaded.id;
          hasDocuments = true;
          console.log(`    ✅ Gas Safety uploaded`);
        } catch (error) {
          console.error(`    ❌ Failed to upload Gas Safety:`, error.message);
        }
      } else {
        console.log(`    ⚠️  Gas Safety file not found: ${config.documents.gas_safety_certificate}`);
      }
    }

    // Upload Floor Plans
    if (config.documents.floor_plans && config.documents.floor_plans.length > 0) {
      const floorPlanIds = [];
      for (const floorPlanFile of config.documents.floor_plans) {
        const filePath = path.join(folderPath, floorPlanFile);
        if (fs.existsSync(filePath)) {
          try {
            console.log(`    Uploading Floor Plan: ${floorPlanFile}...`);
            const uploaded = await uploadFile(filePath, floorPlanFile);
            floorPlanIds.push(uploaded.id);
            hasDocuments = true;
            console.log(`    ✅ Floor Plan uploaded`);
          } catch (error) {
            console.error(`    ❌ Failed to upload Floor Plan:`, error.message);
          }
        } else {
          console.log(`    ⚠️  Floor Plan file not found: ${floorPlanFile}`);
        }
      }
      if (floorPlanIds.length > 0) {
        documentData.floor_plans = floorPlanIds;
      }
    }

    // Upload additional documents
    if (config.documents.documents && config.documents.documents.length > 0) {
      const documentIds = [];
      for (const docFile of config.documents.documents) {
        const filePath = path.join(folderPath, docFile);
        if (fs.existsSync(filePath)) {
          try {
            console.log(`    Uploading Document: ${docFile}...`);
            const uploaded = await uploadFile(filePath, docFile);
            documentIds.push(uploaded.id);
            hasDocuments = true;
            console.log(`    ✅ Document uploaded`);
          } catch (error) {
            console.error(`    ❌ Failed to upload Document:`, error.message);
          }
        } else {
          console.log(`    ⚠️  Document file not found: ${docFile}`);
        }
      }
      if (documentIds.length > 0) {
        documentData.documents = documentIds;
      }
    }

    // Update property with documents
    if (hasDocuments) {
      try {
        await updateProperty(property.id, documentData);
        console.log(`  ✅ Successfully updated property with documents`);
      } catch (error) {
        console.error(`  ❌ Failed to update property:`, error.message);
      }
    } else {
      console.log(`  ⚠️  No documents found to upload`);
    }
  }

  console.log("\n✨ Document upload completed!");
}

uploadPropertyDocuments().catch((error) => {
  console.error("❌ Process failed:", error);
  process.exit(1);
});






