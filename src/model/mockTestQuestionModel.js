const mongoose = require("mongoose");
const mockTestSchema = new mongoose.Schema(
  {
    testId: {
      type: String,
      required: true,
      index:true
    },
    sectionId: {
      type: String,
    },
    questionId: {
      type: String,
      required: true,
    },
    mainQuestion: {
      type: String,
    },
    question: {
      type: String,
      required: true,
    },
    optionA: {
      type: String,
      required: true,
    },
    optionB: {
      type: String,
      required: true,
    },
    optionC: {
      type: String,
      required: true,
    },
    optionD: {
      type: String,
      required: true,
    },
    correctAns: {
      type: String,
      required: true,
      enum: ["A", "B", "C", "D"],
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);



module.exports = mongoose.model("MockTestQuestion", mockTestSchema);
