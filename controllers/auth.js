const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.registerUser = async (req, res) => {
    
        const salt = await bcrypt.genSalt(10);

            const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt)
        })
        const token = jwt.sign(
            {_id: user._id, isAdmin: user.isAdmin },
              process.env.JWT_SECRET_KEY,
              {
               expiresIn: 86400,
                 }
               );
             // save user token
            user.token = token;
        try {
          
            const savedUser = await user.save()
                res.status(201).json({
                    status: true,
                    message: 'user created successfully',
                    savedUser
                })
                console.log(savedUser)
        } catch (error) {
            res.status(400).json({
                status: false,
                message: 'user already exist try different credentials to register user',
                error
            })
        }
}

exports.userLogin = async (req, res) => {
    try {
        
       const user = await User.findOne({username: req.body.username})
       const pass = await User.findOne({password: req.body.password})
       const username = user.username
       const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET_KEY, { expiresIn: 86400 } )
       user.token = token
       const { password , ...others } = user._doc
       let userInfo = others
       if(user && pass){
        res.status(200).json({
            status: true,
            message: 'successfully logged in',
            userInfo
        })
       }else{
        res.status(400).json({
            status: false,
            message: 'invalid username or password'
        })
   
       }

    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'something went wrong',
            error
        })
    }
}