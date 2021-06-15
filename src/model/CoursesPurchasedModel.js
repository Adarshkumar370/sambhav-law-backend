const mongoose = require("mongoose");
const CoursePurchasedSchema = new mongoose.Schema({
    testId: {
        type: String,
        required: true
    },
    questionId: {
        type: String,
        required: true
    },
    optionSelected: {
        type: String,
        enum: ["A", "B", "C", "D"],
        required:true
    },
    
}, {
    timestamps: true
});



module.exports = mongoose.model('CoursesPurchased', CoursePurchasedSchema);