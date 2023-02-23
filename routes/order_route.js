const express = require('express')
const router = express.Router()

const {verifyToken} = require('../middleware/auth')
const {verifyTokenAndAdmin} = require('../middleware/verifyTokenAdmin')
const {verifyTokenAndAuthorization} = require('../middleware/verifyTokenAndAuth')

const {
    addOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getOrder
} = require('../controllers/order_controller')

router.post('/add/order', verifyToken, addOrder)
router.put('/update/order:id', verifyTokenAndAdmin, updateOrder)
router.delete('/delete/order:id', verifyTokenAndAdmin, deleteOrder)
router.get('/single/order:id', verifyTokenAndAuthorization, getOrder)
router.get('/all/orders', verifyTokenAndAdmin, getAllOrders)

module.exports = router