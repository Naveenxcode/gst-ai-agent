const express = require("express");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(express.json());

app.use("/", uploadRoutes);

app.get("/", (req, res) => {
  res.send("GST AI Agent Running");
});

module.exports = app;

