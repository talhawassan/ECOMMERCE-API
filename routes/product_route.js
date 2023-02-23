const express = require('express')
const router = express.Router()

const {verifyTokenAndAdmin} = require('../middleware/verifyTokenAdmin')
const {verifyToken} = require('../middleware/auth')
const {verifyTokenAndAuthorization} = require('../middleware/verifyTokenAndAuth')
const {addProducts, updateProduct, deleteProduct ,getProduct ,getAllProducts} = require('../controllers/product_controller')

router.post('/add/product', verifyTokenAndAdmin, addProducts)
router.put('/update/prod/:id', verifyTokenAndAdmin, updateProduct)
router.delete('/delete/product:id', verifyTokenAndAdmin, deleteProduct)
router.get('/products/list', getAllProducts)
router.get('/products/single:id', getProduct)


module.exports = router