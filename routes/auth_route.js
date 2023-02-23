const express = require('express')
const router = express.Router()
const {registerUser, userLogin} = require('../controllers/auth')
//const auth = require('../middleware/auth')
const {verifyToken} = require('../middleware/auth')

router.post('/register/user',registerUser)
router.post('/login/user',verifyToken,userLogin)


module.exports = router