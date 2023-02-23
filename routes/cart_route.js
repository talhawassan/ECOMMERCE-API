const express = require('express')
const router = express.Router()

const {verifyToken} = require('../middleware/auth')
const {verifyTokenAndAdmin} = require('../middleware/verifyTokenAdmin')
const {verifyTokenAndAuthorization} = require('../middleware/verifyTokenAndAuth')

const {
    addCart,
    updateCart,
    deleteCart,
    getCart,
    getAllCarts,
} = require('../controllers/cart_controller')

router.post('/add/cart', verifyToken, addCart)
router.put('/update/cart:id', verifyTokenAndAuthorization, updateCart)
router.delete('/delete/cart/:id', verifyTokenAndAuthorization, deleteCart)
router.get('/single/cart:id', verifyTokenAndAuthorization, getCart)
router.get('/carts/list', verifyTokenAndAdmin, getAllCarts)


module.exports = router