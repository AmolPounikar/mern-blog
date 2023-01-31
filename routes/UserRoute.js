const express = require("express")
const { RegisterUser, getAllUser, DeletAllUaer } = require("../controller/UserController")

const router = express.Router()

router.post("/register",RegisterUser)
router.get("/",getAllUser) 
router.delete("/destroy",DeletAllUaer)

module.exports = router