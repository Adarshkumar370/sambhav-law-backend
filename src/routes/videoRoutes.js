const express = require("express");
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");
const { createProduct } = require("../controller/videoController");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + "." + file.originalname.split('.').pop());
    },
});
const upload = multer({ storage });

router.post("/video/create",upload.single("thumbnail"),createProduct);
module.exports=router