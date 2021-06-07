const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    addressl1: {
      type: String,
      required: true,
      trim: true,
    },
    addressl2: {
      type: String,
      required: true,
      trim: true,
    },
    postCode: {
      type: String,
      required: true,
      trim: true,
    },
    town: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNo: {
      type: String,
      required: true,
      trim:true
    },
    email: {
        type: mongoose.Schema.Types.ObjectId,ref:'User',
        required: true,
        trim: true,
        index: true,
        lowercase: true
    },
    
    price:{type:Number, required:true},
    courseName:{type:String, required:true}
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", OrderSchema);