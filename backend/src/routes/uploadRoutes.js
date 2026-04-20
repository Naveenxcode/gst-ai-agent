const express = require("express");
const router = express.Router();
const upload = require("../utils/upload");
const { uploadFiles } = require("../controllers/uploadController");

router.post(
  "/upload",
  upload.fields([
    { name: "purchase", maxCount: 1 },
    { name: "gstr2b", maxCount: 1 },
  ]),
  uploadFiles
);

module.exports = router;