# Import Excel Data to Strapi

This script imports property data from the Excel file into Strapi.

## Prerequisites

1. **Get Strapi API Token:**
   - Log into Strapi Admin: `http://31.97.117.9:1337/admin`
   - Go to **Settings** → **API Tokens**
   - Create a new token with **Full access**
   - Copy the token

2. **Ensure Strapi Schema is Updated:**
   - The schema has been updated with new fields:
     - `rent_price` (decimal)
     - `annual_ground_rents` (text)
     - `estimated_annual_service_charges` (text)
     - `number_of_years_of_lease` (string)
     - `hmo` (string)
     - `local_council` (string)
   - **Restart Strapi** after schema changes:
     ```bash
     pm2 restart strapi
     ```

## Running the Import

1. **Navigate to project root:**
   ```bash
   cd "C:\Users\Nagraj Y R\OneDrive\Desktop\Pevona"
   ```

2. **Set environment variables and run:**
   ```powershell
   $env:STRAPI_URL="http://31.97.117.9:1337"
   $env:STRAPI_API_TOKEN="your-token-here"
   node strapi/seed/import-excel-to-strapi.js
   ```

   Or in one line:
   ```powershell
   $env:STRAPI_URL="http://31.97.117.9:1337"; $env:STRAPI_API_TOKEN="your-token-here"; node strapi/seed/import-excel-to-strapi.js
   ```

## What the Script Does

1. Reads the Excel file: `C:\Users\Nagraj Y R\Downloads\Updated Property Details - Tenancy & Tenants Details.xlsx`
2. For each property:
   - Finds the property in Strapi by matching the "Property Internal Reference"
   - Updates the property with data from Excel:
     - Rent price
     - Annual ground rents
     - Estimated annual service charges
     - Number of years of lease
     - HMO status
     - Council tax band
     - Local council
     - And other fields

## Notes

- Properties are matched by "Property Internal Reference" (e.g., "9McGredy", "Flat 2HH")
- If a property is not found, it will be skipped with a warning
- Fields with "N/A" or empty values will be set to null (and hidden on frontend)
- The script only updates existing properties - it does not create new ones

