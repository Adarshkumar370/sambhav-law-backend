const mongoose = require('mongoose');

const notifySchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Notify', notifySchema);