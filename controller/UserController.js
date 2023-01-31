const user = require("../models/UserModels")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.RegisterUser = async(req,res) => {
    try {
        // const {password} = req.body
        console.log(req.body);
        req.body.password = await bcrypt.hash(req.body.password,10)

        const result = await user.create(req.body)

        const token = jwt.sign({id:result._id},process.env.JWT_SECRET_KEY)

        res.status(201).json({

            message : "User Register Successfully",
            result:{
                name:result.name,
                email:result.email,
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            message:"ERROR" + error
        })
    }
}

exports.getAllUser = async (req,res) =>{
    try {
        const result = await user.find()
        res.json({
            message:"Fetch Success",
            result
        })
    } catch (error) {
        res.status(401).json({
            message:"ERROR" + error
        })
    }
}

exports.loginUser = async (req,res) =>{
    try {
        const result = await user.find({email:req.body.email})
        if (!result) {
            return res.status(400).json({
                message:"email not register With us"
            })
        }

        const bcrypt = await bcrypt.compare(req.body,password,result.password)
        if (!verify) {
            return res.status(400).json({
                message:"password not match"
            }),
            res.json({
                message:"Login Success",
                result
            })
        }
        res.json({
            message:"Fetch Success",
            result
        })
    } catch (error) {
        res.status(401).json({
            message:"ERROR" + error
        })
    }
}

exports.DeletAllUaer = async (req,res) =>{
    try {
        const result = await user.deleteMany()
        res.json({
            message:"Delete Success",
            result
        })
    } catch (error) {
        res.status(401).json({
            message:"ERROR" + error
        })
    }
}

