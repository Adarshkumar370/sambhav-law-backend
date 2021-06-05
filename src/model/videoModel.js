const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
    videoTitle: {
        type: String,
        required: true,
        trim: true,
    },
    videoDescription: {
        type: String,
        trim: true
    },
    videoLink: {
        type: String,
        required: true,
        trim: true
    },
    videoThumbnail: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Video', videoSchema);