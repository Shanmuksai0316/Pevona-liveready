const XLSX = require('xlsx');
const path = require('path');

const excelPath = path.join('C:', 'Users', 'Nagraj Y R', 'Downloads', 'Updated Property Details - Tenancy & Tenants Details.xlsx');

try {
  // Read the Excel file
  const workbook = XLSX.readFile(excelPath);
  
  // Get all sheet names
  const sheetNames = workbook.SheetNames;
  console.log('Sheet Names:', sheetNames);
  console.log('\n' + '='.repeat(80) + '\n');
  
  // Read each sheet
  sheetNames.forEach((sheetName, index) => {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`SHEET ${index + 1}: ${sheetName}`);
    console.log('='.repeat(80));
    
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { defval: null });
    
    if (data.length > 0) {
      // Display column headers
      console.log('\nColumn Headers:');
      console.log(Object.keys(data[0]).join(' | '));
      console.log('\n' + '-'.repeat(80));
      
      // Display first few rows
      console.log('\nFirst 5 rows of data:');
      data.slice(0, 5).forEach((row, i) => {
        console.log(`\nRow ${i + 1}:`);
        Object.entries(row).forEach(([key, value]) => {
          console.log(`  ${key}: ${value !== null && value !== undefined ? value : '(empty)'}`);
        });
      });
      
      console.log(`\n\nTotal rows in sheet: ${data.length}`);
    } else {
      console.log('Sheet is empty');
    }
    
    console.log('\n');
  });
  
  // Also output as JSON for easier inspection
  console.log('\n' + '='.repeat(80));
  console.log('FULL DATA AS JSON (first sheet only):');
  console.log('='.repeat(80));
  if (sheetNames.length > 0) {
    const firstSheet = workbook.Sheets[sheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(firstSheet, { defval: null });
    console.log(JSON.stringify(jsonData, null, 2));
  }
  
} catch (error) {
  console.error('Error reading Excel file:', error.message);
  console.error('Stack:', error.stack);
}

