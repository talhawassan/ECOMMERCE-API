const express = require('express')
const router = express.Router()
const {testRouter} = require('../controllers/controller')

router.post('/test',testRouter)


module.exports = router