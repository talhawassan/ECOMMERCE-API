const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models/user')


exports.updateUser = async (req, res) => {
    console.log('hellooooooooo')
    try {
        // const pass = await User.findOne({password: req.body.password})
        const id = req.params.id
        console.log('heloooooo')
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true
            })
            console.log(updatedUser)
            if(updatedUser){
                res.status(200).json({
                    status: true,
                    message: "User updated successfully",
                    updatedUser
                })
            }else{
                res.status(400).json({
                    status: true,
                    message: "not updated",
                    
                })
            }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "something went wrong",
            error
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let id = req.params.id
        const user = await User.findByIdAndDelete(id)
        if(user){
            res.status(200).json({
                status: true,
                message: "user deleted successfully",
                user
            })
        }else{
            res.status(400).json({
                status: false,
                message: "user already deleted",
                error
            })
        }
    } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong",
                error
            })
    }
}

exports.getUser = async (req, res) => {
    try {
        let id = req.params.id
        const user = await User.findById(id)
        const { password , ...others } = user._doc
        let userInfo = others
        console.log(user)
        if(user){
            res.status(200).json({
                status: true,
                message: "fetched data successfully",
                userInfo
            })
        }else{
            res.status(400).json({
                status: false,
                message: "user not found",
                error
            })
        }
    } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong",
                error
            })
    }
}


exports.getAllUser = async (req, res) => {
    try {

        const users = await User.find();
        if(users){
            res.status(200).json({
                status: true,
                message: "data fetched successfully",
                users
            })
        }else if(user.length === 0){
            res.status(400).json({
                status: false,
                message: "no users found"
            })
        }
        console.log(user)
    
    } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong",
                error
            })
    }
}

exports.getUserStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1));
    try {
       const data = User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
            $project: {
                month: { $month: "$createdAt" },
            },
        },
        {
            $group: {
                _id: "$month",
                total: { $sum: 1 }
            }
        }
       ])
       res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "something went wrong",
            error
        })
    }
}