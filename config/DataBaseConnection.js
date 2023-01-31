const mongoose = require("mongoose")

const db = () => {
    try {
        mongoose.connect(process.env.MONGOSE_URL)
        console.log(process.env.MONGOSE_URL);
        console.log("DB CONNECTED");

    } catch (error) {
        console.log("unable to connect", error);
    }
}

module.exports = db 