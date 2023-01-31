const express = require('express')
const db = require('./config/DataBaseConnection')
require("dotenv").config({ path: "./config/.env" })
const userRoute = require("./routes/UserRoute")
const cors = require("cors")
const app = express()
db()

app.use(express.json())

app.use(cors())

app.use("/api/user", userRoute)
const PORT = process.env.PORT || 5000
app.listen(
    PORT, err => {
        if (err) {
            console.log("ERROR" + err);
        } else {
            console.log(`SERVER IS RUNNING ON>>....😊😊 POST http://localhost:${PORT}`);
        }
    }
)