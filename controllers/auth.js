const User = require('../models/user')

exports.registerUser = async (req, res) => {
            const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
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