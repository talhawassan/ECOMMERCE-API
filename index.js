const express = require('express')
const app = express()
require('dotenv').config()
require('./db/db.connection')

app.use(express.json())

const routes = {
    testRouter: require('./routes/routes'),
    authRouter: require('./routes/auth_route')
}

app.use('/api', routes.testRouter)
app.use('/api', routes.authRouter)

const port = process.env.port 

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})