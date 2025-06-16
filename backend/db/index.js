const { Pool } = require("pg");
require("dotenv").config();

console.log(" index.js has started");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const router = express.Router();

router.get("/", (req, res) => {
  res.send("To-do route is working!");
});

module.exports = router;

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});


