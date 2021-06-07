const express = require("express");
const {sendFile}=require('../controller/fileController');
const router = express.Router();


router.post("/file",sendFile);

module.exports=router