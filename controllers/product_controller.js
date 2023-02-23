const Product = require('../models/product')

exports.addProducts = async (req, res) => {
    const product = new Product(req.body);
    console.log(product)
    try {
        const savedProduct = await product.save();
        res.status(201).json({
            status: true,
            message: "Product added successfully",
            savedProduct
        })
    } catch (error) {
        res.status(500).json("something went wrong")
    }
}

exports.updateProduct = async (req, res) => {
    console.log('hellooooooooo')
    try {
     
        const id = req.params.id
        console.log('heloooooo')
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true
            })
            console.log(updatedProduct)
            if(updatedProduct){
                res.status(200).json({
                    status: true,
                    message: "product updated successfully",
                    updatedProduct
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

exports.deleteProduct = async (req, res) => {
    try {
        let id = req.params.id
        const product = await Product.findByIdAndDelete(id)
        if(product){
            res.status(200).json({
                status: true,
                message: "product deleted successfully",
                product
            })
        }else{
            res.status(400).json({
                status: false,
                message: "product already deleted",
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

exports.getProduct = async (req, res) => {
    try {
        let id = req.params.id
        const product = await Product.findById(id)
        console.log(product)
        if(product){
            res.status(200).json({
                status: true,
                message: "fetched data successfully",
                product
            })
        }else{
            res.status(400).json({
                status: false,
                message: "product not found",
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


exports.getAllProducts = async (req, res) => {
    try {

        const products = await Product.find();
        if(products){
            res.status(200).json({
                status: true,
                message: "products fetched successfully",
                products
            })
        }else if(products.length === 0){
            res.status(400).json({
                status: false,
                message: "no products found"
            })
        }
        console.log(products)
    
    } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong",
                error
            })
    }
}