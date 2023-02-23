const Order = require('../models/order')

exports.addOrder = async (req, res) => {
    const order = new Order(req.body);
    console.log(order)
    try {
        const savedOrder = await order.save();
        res.status(201).json({
            status: true,
            message: "Order placed successfully",
            savedOrder
        })
    } catch (error) {
        res.status(500).json("something went wrong")
    }
}

exports.updateOrder = async (req, res) => {
    console.log('hellooooooooo')
    try {
     
        const id = req.params.id
        console.log('heloooooo')
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true
            })
            console.log(updatedOrder)
            if(updatedOrder){
                res.status(200).json({
                    status: true,
                    message: "order updated successfully",
                    updatedOrder
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

exports.deleteOrder = async (req, res) => {
    try {
        let id = req.params.id
        const order = await Order.findByIdAndDelete(id)
        if(order){
            res.status(200).json({
                status: true,
                message: "order deleted successfully",
                order
            })
        }else{
            res.status(400).json({
                status: false,
                message: "order already deleted",
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

exports.getOrder = async (req, res) => {
    try {
        let id = req.params.id
        const order = await Order.findById(id)
        console.log(order)
        if(order){
            res.status(200).json({
                status: true,
                message: "order fetched successfully",
                order
            })
        }else{
            res.status(400).json({
                status: false,
                message: "order not found",
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


exports.getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find();
        if(orders){
            res.status(200).json({
                status: true,
                message: "orders fetched successfully",
                orders
            })
        }else if(orders.length === 0){
            res.status(400).json({
                status: false,
                message: "no orders found"
            })
        }
        console.log(orders)
    
    } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong",
                error
            })
    }
}