const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,

    },
    lastName: {
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
        lowercase: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'pandeyji'],
        default: 'user'
    },
    mobileNumber: {
        type: String,
        required: true,
        maxlength: 10,
        trim: true
    },
    collegeName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    }
}, {
    timestamps: true
});
userSchema.virtual('password')
    .set(function (password) {
        this.hashPassword = bcrypt.hashSync(password, 7);

    });

userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});

userSchema.methods={
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hashPassword);
    }
}
module.exports = mongoose.model('User', userSchema);