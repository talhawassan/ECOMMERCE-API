const express = require('express')
const app = express()
require('dotenv').config()
require('./db/db.connection')

app.use(express.json())

const routes = {
    testRouter: require('./routes/routes'),
    authRouter: require('./routes/auth_route'),
    userRouter: require('./routes/user_route'),
    prodRouter: require('./routes/product_route'),
    orderRouter: require('./routes/order_route')
}

app.use('/api', routes.testRouter)
app.use('/api', routes.authRouter)
app.use('/api', routes.userRouter)
app.use('/api', routes.prodRouter)
app.use('/api', routes.orderRouter)

const port = process.env.port 

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})