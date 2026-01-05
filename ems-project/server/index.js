// server/index.js
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg"); // Client to connect to DB
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ems_db",
  password: "YOUR_PASSWORD_HERE", // Replace with the password you set during install
  port: 5432,
});

// Route: Get all employees
app.get("/employees", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});