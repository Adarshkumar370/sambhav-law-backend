const express = require("express");

const { notifyList} = require("../controller/notifyController");
const router = express.Router();


router.post("/notify",notifyList);
module.exports=router