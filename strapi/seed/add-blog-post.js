const https = require("https");
const http = require("http");

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Blog post data
const blogPost = {
  title: "Your Complete Guide to Smarter Home Buying Decisions",
  slug: "your-complete-guide-to-smarter-home-buying-decisions",
  author: "Pevona Team",
  excerpt: "A comprehensive guide to making informed home buying decisions - from budgeting and financing to inspection and negotiation.",
  content: `<p>Buying a home is one of the most important decisions you'll ever make - emotionally and financially. In today's competitive real estate market, making a smart choice goes beyond just finding a beautiful property. It's about understanding the market trends, evaluating location value, and aligning your purchase with long-term goals.</p>

<p>In this guide, we break down every step of the home-buying process - from budgeting and financing to inspection and negotiation - so you can invest with confidence. Whether you're a first-time buyer or upgrading to your dream villa, this blog will help you make informed, stress-free decisions that truly feel like home.</p>

<h2>Start with a Clear Budget Plan</h2>
<p>Before you begin house-hunting, define your financial limits. Include all costs - down payment, taxes, maintenance, and furnishing. A clear budget prevents emotional decisions and ensures you explore only what's truly affordable.</p>

<h2>Research Market Trends</h2>
<p>Before finalizing a property, study current market trends. Understand price movements, demand in specific areas, and builder reputation. Informed research can save you from overpaying and help identify great investment opportunities.</p>

<h2>Inspect Before You Invest</h2>
<p>Never skip a thorough home inspection. Check construction quality, plumbing, electrical systems, and legal documentation. A small inspection today can prevent major expenses tomorrow.</p>

<h2>Think Long-Term Value</h2>
<p>A smart home purchase should hold or increase in value. Consider factors like resale potential, neighborhood development, and energy efficiency to ensure your home remains a strong asset.</p>`,
  category: "Buying Guide",
  tags: ["Home Buying", "Real Estate", "Investment", "Property Guide"],
  publishedAt: new Date().toISOString(),
};

// Helper function to make API request
function createBlogPost(data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(`${STRAPI_URL}/api/blogs`);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;

    const postData = JSON.stringify({
      data: data,
    });

    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Length": Buffer.byteLength(postData),
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
    req.write(postData);
    req.end();
  });
}

async function addBlogPost() {
  if (!API_TOKEN) {
    console.error("❌ STRAPI_API_TOKEN environment variable is required");
    process.exit(1);
  }

  console.log("📝 Adding blog post to Strapi...\n");
  console.log(`Title: ${blogPost.title}`);
  console.log(`Slug: ${blogPost.slug}\n`);

  try {
    const result = await createBlogPost(blogPost);
    console.log("✅ Blog post created successfully!");
    console.log(`\nBlog ID: ${result.data.id}`);
    console.log(`Title: ${result.data.attributes.title}`);
    console.log(`Slug: ${result.data.attributes.slug}`);
    console.log(`\nView in Strapi: ${STRAPI_URL}/admin/content-manager/collection-types/api::blog.blog/${result.data.id}`);
  } catch (error) {
    console.error("❌ Failed to create blog post:", error.message);
    process.exit(1);
  }
}

addBlogPost();


