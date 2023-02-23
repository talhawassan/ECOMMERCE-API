const Cart = require('../models/cart')

exports.addCart = async (req, res) => {
    const cart = new Cart(req.body);
    console.log(cart)
    try {
        const savedCart = await cart.save();
        res.status(201).json({
            status: true,
            message: "cart added successfully",
            savedCart
        })
    } catch (error) {
        res.status(500).json("something went wrong")
    }
}

exports.updateCart = async (req, res) => {
    console.log('hellooooooooo')
    try {
     
        const id = req.params.id
        console.log('heloooooo')
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true
            })
            console.log(updatedCart)
            if(updatedCart){
                res.status(200).json({
                    status: true,
                    message: "Cart updated successfully",
                    updatedCart
                })
            }else{
                res.status(400).json({
                    status: true,
                    message: "not updated",
                    
                })
            }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "something went wrong",
            error
        })
    }
}

exports.deleteCart = async (req, res) => {
    try {
        let id = req.params.id
        const cart = await Cart.findByIdAndDelete(id)
        if(cart){
            res.status(200).json({
                status: true,
                message: "cart deleted successfully",
                cart
            })
        }else{
            res.status(400).json({
                status: false,
                message: "cart already deleted",
                error
            })
        }
    } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong",
                error
            })
    }
}

exports.getCart = async (req, res) => {
    try {
        let id = req.params.id
        const cart = await Cart.findById(id)
        console.log(cart)
        if(cart){
            res.status(200).json({
                status: true,
                message: "cart fetched successfully",
                cart
            })
        }else{
            res.status(400).json({
                status: false,
                message: "cart not found",
                error
            })
        }
    } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong",
                error
            })
    }
}


exports.getAllCarts = async (req, res) => {
    try {

        const carts = await Cart.find();
        if(carts){
            res.status(200).json({
                status: true,
                message: "carts fetched successfully",
                carts
            })
        }else if(carts.length === 0){
            res.status(400).json({
                status: false,
                message: "no carts found"
            })
        }
        console.log(carts)
    
    } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong",
                error
            })
    }
}