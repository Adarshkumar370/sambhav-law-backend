const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
     
    },
    addressl1: {
      type: String,
      
      trim: true,
    },
    addressl2: {
      type: String,
      
      trim: true,
    },
    postCode: {
      type: String,
     
      trim: true,
    },
    city: {
      type: String,
      
      trim: true,
    },
    phoneNo: {
      type: String,
      required: true,
      trim:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true
    },
    
    price:{type:Number},
    courseId:{type:String, required:true},
    courseName:{type:String,required:true},
    purchaseSuccessful:{type:String,required:true}
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", OrderSchema);
