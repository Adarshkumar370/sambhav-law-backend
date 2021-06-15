const express = require("express");
const { placeOrder,getCourses} = require("../controller/orderController");
const router = express.Router();


router.post("/place-order",placeOrder);
router.get('/get-order',getCourses);
module.exports=router