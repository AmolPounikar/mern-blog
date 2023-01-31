const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: String,
        default: false
    },
    passwordResetAt: {
        type: Date
    },

}, { timeStamps: true })

module.exports = mongoose.model("user", userSchema)