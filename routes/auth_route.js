const express = require('express')
const router = express.Router()
const {registerUser, userLogin} = require('../controllers/auth')
const auth = require('../middleware/auth')

router.post('/register/user',registerUser)
router.post('/login/user',auth,userLogin)


module.exports = router