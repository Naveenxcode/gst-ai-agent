const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gst_ai_agent",
  password: "naveen",
  port: 5432,
});

module.exports = pool;