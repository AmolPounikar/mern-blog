const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        ref: "user",
        require: true
    },
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    publish: {
        type: String,
        require: true
    },

}, { timeStamps: true })

module.exports = mongoose.modal("blog", blogSchema)