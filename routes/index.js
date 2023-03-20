const express = require("express");
const router = express.Router();
const fileControl = require("../controller/file_controller");

router.get('/',fileControl.homePage)
router.post("/upload-post", fileControl.handleFile);
router.get('/download-file/:id',fileControl.dowloadFile)

module.exports = router;
