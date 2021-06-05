const mongoose = require("mongoose");
const careerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      maxlength: 10,
      trim: true,
    },
    joinDate: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Career", careerSchema);
