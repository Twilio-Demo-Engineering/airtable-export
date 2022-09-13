require("dotenv").config()

// Get Airtable Base
const Airtable = require("airtable")
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
)

console.log(base)

// Get Airtable Table

// Convert to JSON

// Output to JSON file
