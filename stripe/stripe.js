require('dotenv').config({path: '../.env'})
const API_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(API_SECRET_KEY)

exports.stripePayment = async (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    })
}