/**
 * Image mapping from old localhost URLs to new public/images paths
 * Maps design asset names to actual image files
 */

export const imageMap: Record<string, string> = {
  // Hero Section
  "383fd913059b8fb108d652e2bd3bf80d19e18a3e.png": "/images/Home_page_banner.png",
  
  // Hero Avatars (using placeholder team cards for now)
  "dfa6305a9e48ea1ed03addef9eb64fb12bad5810.png": "/images/our_team_-_Card_1.png",
  "411de54d61a7617902ad97c7fd9973fb72ec2506.png": "/images/our_team_-_Card_2.png",
  "12b4974b719ef2c1b71d0fea78774c141bb45b0d.png": "/images/our_team_-_Card_3.png",
  "2c44a0f83d50d3df5cc3ee99e6bf5a6051da2f67.png": "/images/our_team_-_Card_4.png",
  
  // About Section
  "069af032e465c46ca3308131d6b7c34885ece7db.png": "/images/About_Pevona_sec.png",
  
  // Certifications (using placeholder - these may need to be uploaded separately)
  "19feda37ef69497eca7d91cbd01090baaab3f743.png": "/images/RB1.png",
  "46472afdf2bdc3cfd299193dd3a17ab8e076dc31.png": "/images/RB2.png",
  "39c743fab306ee25242788dab6dfb936987df437.png": "/images/RB3.png",
  
  // Solutions Section
  "6271a7d00ed6ac50b236623f908417de9ef70cc1.png": "/images/5th_sec_Lettings.png",
  "aa86c424b3f4a71c56a2065c77d590f4b3f1c8fa.png": "/images/5th_sec_Property_Management.png",
  "67b55c6ccaa7e563976cce39b0d51b258d560847.png": "/images/5th_sec_Investments.png",
  
  // Investment Section
  "e95fc985941feb01d9a5975e6ed8d9296695239e.png": "/images/Investment_Opportunities_banner.png",
  
  // Process Section
  "c02b8d4af2b26ceb9d0b718edff5f94b80605d3a.png": "/images/3rd_Step-by-Step_Application_Process.png",
  
  // News Section
  "a97a5aa30f13ecd4570c1d9e9ee90a873d6928e5.png": "/images/blog_sec_img.png",
  "07a557574815279543d37d495ed554cdb551df64.png": "/images/Market_Insights_blog_-1.png",
  "2f72377b212fb714c68c92922c92bf81d2a745d4.png": "/images/Market_Insights_blog_-2.png",
  "2d12a2ea64ba3f55e8a59e5052c7df6831ec3e32.png": "/images/Market_Insights_blog_-3.png",
  
  // Why Choose Section
  "4edd08a8b2d3ea1759d47f29a4a82c8172b8f762.png": "/images/Our_Values_-_Integrity.png",
  "473570d6a4280f74af3dd8e7b74198f916854763.png": "/images/Our_Values_-_Guardianship.png",
  
  // Navbar & Footer Logo
  "7a2701fb966036535436d14bcd14e227ddb2d932.png": "/images/Banner_image.png",
  
  // Property Card placeholder
  "aa33c91e69d73183b798e5599c17f58c41134c20.png": "/images/prop_card_image-1.png",
};

/**
 * Get the mapped image path, or return the original if not found
 */
export function getMappedImage(originalPath: string): string {
  // Extract filename from URL
  const filename = originalPath.split('/').pop() || originalPath;
  
  // Check if we have a mapping
  if (imageMap[filename]) {
    return imageMap[filename];
  }
  
  // Return original if no mapping found
  return originalPath;
}

/**
 * Direct image paths for common images
 */
export const images = {
  hero: {
    banner: "/images/Home_page_banner.png",
    avatars: [
      "/images/our_team_-_Card_1.png",
      "/images/our_team_-_Card_2.png",
      "/images/our_team_-_Card_3.png",
      "/images/our_team_-_Card_4.png",
    ],
  },
  about: {
    background: "/images/About_Pevona_sec.png",
    certifications: [
      "/images/RB1.png",
      "/images/RB2.png",
      "/images/RB3.png",
      "/images/services_-_For_Landlords.png",
    ],
  },
  solutions: {
    lettings: "/images/5th_sec_Lettings.png",
    propertyManagement: "/images/5th_sec_Property_Management.png",
    investments: "/images/5th_sec_Investments.png",
  },
  investment: {
    banner: "/images/Investment_Opportunities_banner.png",
  },
  process: {
    application: "/images/3rd_Step-by-Step_Application_Process.png",
  },
  news: {
    main: "/images/blog_sec_img.png",
    blogs: [
      "/images/Market_Insights_blog_-1.png",
      "/images/Market_Insights_blog_-2.png",
      "/images/Market_Insights_blog_-3.png",
    ],
  },
  logo: "/images/Banner_image.png",
  propertyPlaceholder: "/images/prop_card_image-1.png",
};

