import { NextRequest, NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "nagraj@grape5.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return NextResponse.json(
        { error: "Invalid request body", details: parseError instanceof Error ? parseError.message : "Unknown error" },
        { status: 400 }
      );
    }
    
    const { name, email, phone, message, propertySlug, propertyTitle, subject } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Save to Strapi
    const enquiryData: {
      data: {
        name: string;
        email: string;
        phone: string;
        message: string;
        property_slug: string;
        property_title: string;
        status: string;
        property?: number;
      };
    } = {
      data: {
        name,
        email,
        phone,
        message: message || "",
        property_slug: propertySlug || "",
        property_title: propertyTitle || "",
        status: "new",
      },
    };

    // If property slug is provided, try to link to property
    if (propertySlug) {
      try {
        const propertyRes = await fetch(
          `${STRAPI_URL}/api/properties?filters[slug][$eq]=${propertySlug}`,
          {
            headers: {
              Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
          }
        );
        const propertyData = await propertyRes.json();
        if (propertyData.data && propertyData.data.length > 0) {
          enquiryData.data.property = propertyData.data[0].id;
        }
      } catch (e) {
        console.warn("Could not link property:", e);
      }
    }

    if (!STRAPI_API_TOKEN) {
      console.error("STRAPI_API_TOKEN is not set");
      return NextResponse.json(
        { error: "Server configuration error: Strapi API token missing" },
        { status: 500 }
      );
    }

    // Log the data being sent to Strapi (without sensitive info)
    console.log("Saving to Strapi:", {
      url: `${STRAPI_URL}/api/property-enquiries`,
      hasToken: !!STRAPI_API_TOKEN,
      dataFields: Object.keys(enquiryData.data),
    });

    let strapiResponse;
    try {
      strapiResponse = await fetch(`${STRAPI_URL}/api/property-enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        body: JSON.stringify(enquiryData),
      });
    } catch (fetchError) {
      console.error("Failed to connect to Strapi:", fetchError);
      const errorMessage = fetchError instanceof Error ? fetchError.message : "Unknown network error";
      return NextResponse.json(
        { 
          error: "Failed to connect to Strapi backend",
          message: errorMessage,
          strapiUrl: STRAPI_URL,
          hasToken: !!STRAPI_API_TOKEN,
        },
        { status: 500 }
      );
    }

    const responseText = await strapiResponse.text();
    console.log("Strapi response status:", strapiResponse.status);
    console.log("Strapi response:", responseText.substring(0, 500)); // Log first 500 chars
    console.log("Data being sent to Strapi:", JSON.stringify(enquiryData, null, 2));

    if (!strapiResponse.ok) {
      console.error("Strapi error details:", {
        status: strapiResponse.status,
        statusText: strapiResponse.statusText,
        url: `${STRAPI_URL}/api/property-enquiries`,
        response: responseText,
        requestData: enquiryData,
      });
      
      // Try to parse error for better message
      let errorMessage = "Failed to save enquiry to database";
      let errorDetails: any = null;
      
      try {
        const errorJson = JSON.parse(responseText);
        console.error("Parsed Strapi error JSON:", JSON.stringify(errorJson, null, 2));
        
        if (errorJson.error?.message) {
          errorMessage = errorJson.error.message;
        } else if (errorJson.error?.details) {
          errorDetails = errorJson.error.details;
          errorMessage = JSON.stringify(errorJson.error.details);
        } else if (errorJson.error) {
          errorMessage = JSON.stringify(errorJson.error);
        }
        
        // Check for validation errors
        if (errorJson.error?.details?.errors) {
          const validationErrors = errorJson.error.details.errors;
          errorMessage = `Validation errors: ${JSON.stringify(validationErrors)}`;
          errorDetails = validationErrors;
        }
      } catch (e) {
        console.error("Failed to parse Strapi error response:", e);
        errorMessage = `Strapi returned error: ${responseText.substring(0, 200)}`;
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          errorDetails: errorDetails,
          details: responseText,
          strapiUrl: STRAPI_URL,
          hasToken: !!STRAPI_API_TOKEN,
          statusCode: strapiResponse.status,
        },
        { status: strapiResponse.status >= 400 && strapiResponse.status < 600 ? strapiResponse.status : 500 }
      );
    }

    let savedEnquiry;
    try {
      savedEnquiry = JSON.parse(responseText);
      console.log("Successfully saved to Strapi:", savedEnquiry.data?.id);
    } catch (e) {
      console.error("Failed to parse Strapi response:", e);
      console.error("Response text that failed to parse:", responseText);
      return NextResponse.json(
        { 
          error: "Failed to parse response from Strapi", 
          details: responseText.substring(0, 500),
          strapiUrl: STRAPI_URL,
          hasToken: !!STRAPI_API_TOKEN,
        },
        { status: 500 }
      );
    }

    // Send email notification via Mailgun
    try {
      await sendEmailNotification({
        name,
        email,
        phone,
        message,
        propertyTitle: propertyTitle || subject || "General Enquiry",
        propertySlug: propertySlug || "",
        subject: subject || "",
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { success: true, data: savedEnquiry.data },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorName = error instanceof Error ? error.name : "Error";
    
    console.error("Error details:", {
      name: errorName,
      message: errorMessage,
      stack: errorStack,
      error: error,
      strapiUrl: STRAPI_URL,
      hasToken: !!STRAPI_API_TOKEN,
      env: {
        NODE_ENV: process.env.NODE_ENV,
        hasStrapiUrl: !!STRAPI_URL,
        hasStrapiToken: !!STRAPI_API_TOKEN,
      },
    });
    
    // Ensure we always return a valid JSON response
    try {
      return NextResponse.json(
        { 
          error: "Internal server error",
          message: errorMessage,
          errorName: errorName,
          strapiUrl: STRAPI_URL,
          hasToken: !!STRAPI_API_TOKEN,
          details: process.env.NODE_ENV === "development" ? errorStack : "Check server logs for details",
        },
        { status: 500 }
      );
    } catch (jsonError) {
      // Fallback if JSON.stringify fails
      console.error("Failed to create JSON response:", jsonError);
      return new NextResponse(
        `Internal server error: ${errorMessage}`,
        { 
          status: 500,
          headers: { "Content-Type": "text/plain" },
        }
      );
    }
  }
}

async function sendEmailNotification(data: {
  name: string;
  email: string;
  phone: string;
  message?: string;
  propertyTitle: string;
  propertySlug: string;
  subject?: string;
}) {
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    console.warn("Mailgun not configured, skipping email");
    // Log enquiry details for local development
    console.log("📧 Property Enquiry (Email not configured):", {
      property: data.propertyTitle,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    return;
  }

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: MAILGUN_API_KEY,
  });

  const propertyLink = data.propertySlug
    ? `${SITE_URL}/properties/${data.propertySlug}`
    : SITE_URL;

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Property Enquiry</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="background-color: #002f57; padding: 30px 40px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; font-family: 'Georgia', serif;">
                    New Property Enquiry
                  </h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <p style="margin: 0 0 24px 0; color: #333333; font-size: 16px; line-height: 24px;">
                    You have received a new property enquiry through the Pevona website.
                  </p>
                  
                  <div style="background-color: #f9f9f9; border-left: 4px solid #22C55E; padding: 20px; margin: 24px 0; border-radius: 4px;">
                    <h2 style="margin: 0 0 16px 0; color: #002f57; font-size: 20px; font-weight: 600;">
                      ${escapeHtml(data.propertyTitle)}
                    </h2>
                    ${data.subject && !data.propertySlug ? `<p style="margin: 0 0 8px 0; color: #666666; font-size: 14px;">Subject: ${escapeHtml(data.subject)}</p>` : ""}
                    ${data.propertySlug ? `<p style="margin: 0; color: #666666; font-size: 14px;"><a href="${propertyLink}" style="color: #0073B5; text-decoration: none;">View Property →</a></p>` : ""}
                  </div>
                  
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 24px 0;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                        <strong style="color: #002f57; font-size: 14px; display: inline-block; width: 120px;">Name:</strong>
                        <span style="color: #333333; font-size: 14px;">${escapeHtml(data.name)}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                        <strong style="color: #002f57; font-size: 14px; display: inline-block; width: 120px;">Email:</strong>
                        <span style="color: #333333; font-size: 14px;"><a href="mailto:${escapeHtml(data.email)}" style="color: #0073B5; text-decoration: none;">${escapeHtml(data.email)}</a></span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                        <strong style="color: #002f57; font-size: 14px; display: inline-block; width: 120px;">Phone:</strong>
                        <span style="color: #333333; font-size: 14px;"><a href="tel:${escapeHtml(data.phone)}" style="color: #0073B5; text-decoration: none;">${escapeHtml(data.phone)}</a></span>
                      </td>
                    </tr>
                    ${data.message ? `
                    <tr>
                      <td style="padding: 12px 0;">
                        <strong style="color: #002f57; font-size: 14px; display: block; margin-bottom: 8px;">Message:</strong>
                        <p style="margin: 0; color: #333333; font-size: 14px; line-height: 20px; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
                      </td>
                    </tr>
                    ` : ""}
                  </table>
                  
                  <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
                    <p style="margin: 0 0 16px 0; color: #666666; font-size: 14px;">
                      <strong>Next Steps:</strong>
                    </p>
                    <ul style="margin: 0; padding-left: 20px; color: #666666; font-size: 14px; line-height: 24px;">
                      <li>Contact the enquirer to arrange a viewing</li>
                      <li>Update the enquiry status in Strapi admin</li>
                      <li>Follow up within 24 hours for best results</li>
                    </ul>
                  </div>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f9f9f9; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e5e5;">
                  <p style="margin: 0; color: #666666; font-size: 12px; line-height: 18px;">
                    This email was sent from the Pevona property enquiry system.<br>
                    <a href="${SITE_URL}" style="color: #0073B5; text-decoration: none;">Visit Pevona</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const emailText = `
New Property Enquiry

Property: ${data.propertyTitle}
${data.propertySlug ? `View: ${propertyLink}` : ""}

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.message ? `\nMessage:\n${data.message}` : ""}

---
This email was sent from the Pevona property enquiry system.
  `.trim();

  await mg.messages.create(MAILGUN_DOMAIN, {
    from: `Pevona <noreply@${MAILGUN_DOMAIN}>`,
    to: [ADMIN_EMAIL],
    subject: `New Property Enquiry: ${data.propertyTitle}`,
    text: emailText,
    html: emailHtml,
  });
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

