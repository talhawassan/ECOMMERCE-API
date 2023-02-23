const express = require('express')
const router = express.Router()
const {registerUser, userLogin} = require('../controllers/auth')
const {updateUser, deleteUser, getUser, getAllUser, getUserStats} = require('../controllers/user_controller')
const {verifyToken} = require('../middleware/auth')
const {verifyTokenAndAuthorization} = require('../middleware/verifyTokenAndAuth')
const {verifyTokenAndAdmin} = require('../middleware/verifyTokenAdmin')

router.put('/:id', verifyTokenAndAuthorization ,updateUser )
router.delete('/delete/:id', verifyTokenAndAuthorization, deleteUser)
router.get('/single/:id', verifyTokenAndAdmin, getUser)
router.get('/users/list',verifyTokenAndAdmin ,getAllUser)
router.get('/stats', verifyTokenAndAdmin, getUserStats)

module.exports = router