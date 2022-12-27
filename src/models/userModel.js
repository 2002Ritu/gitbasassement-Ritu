const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    lastName: String,
    mobile: {
        type: String,

        
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
