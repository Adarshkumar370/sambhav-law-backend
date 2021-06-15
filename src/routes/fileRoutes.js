const express = require("express");
const {sendFile}=require('../controller/fileController');
const router = express.Router();
const {requireSignin}=require('../common-middleware/index');

router.post("/file",requireSignin ,sendFile);

module.exports=router