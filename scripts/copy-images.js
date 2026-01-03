const fs = require("fs");
const path = require("path");

const SOURCE_DIR = path.join(
  process.env.USERPROFILE,
  "Downloads",
  "Pevona images-20251215T052433Z-1-001",
  "Pevona images"
);
const DEST_DIR = path.join(__dirname, "..", "public", "images");

// Create destination directory if it doesn't exist
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Function to copy file
function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log(`  ✅ Copied: ${path.basename(src)}`);
}

// Function to recursively copy all files from a directory
function copyDirectory(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.log(`  ⚠️  Directory not found: ${srcDir}`);
    return;
  }

  const files = fs.readdirSync(srcDir);

  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(srcPath, path.join(destDir, file));
    } else {
      // Copy file to destination, flattening the structure
      const sanitizedFileName = file.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9._-]/g, "");
      const destPath = path.join(destDir, sanitizedFileName);
      copyFile(srcPath, destPath);
    }
  }
}

console.log("📁 Copying images from Downloads to public/images...\n");
console.log(`Source: ${SOURCE_DIR}`);
console.log(`Destination: ${DEST_DIR}\n`);

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
  process.exit(1);
}

// Copy all images
copyDirectory(SOURCE_DIR, DEST_DIR);

console.log("\n✨ Image copy completed!");






