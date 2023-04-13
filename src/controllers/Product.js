const Product = require("../models/Product");

const getAllProducts = (req, res) => {
    Product.find().then(data=>{
        res.status(200).json({
            msg: "Fetched Products Successfully",
            data
        });
    }).catch(err => {
        res.status(400).json({
            msg: "Invalid Product Data",
            error: err
        });
    })
}

const getAProduct = (req, res) => {
    Product.findOne({id:req.params.productId}).then(data=>{
        if(data){
            res.status(200).json({
                msg: "Fetched Product Successfully",
                data
            });
        }else{
            res.status(204).json({
                msg: "No Product with this Product ID"
            })
        }
    }).catch(err => {
        res.status(400).json({
            msg: "Invalid Product Data",
            error: err
        });
    })
}

const addProduct = (req, res) => {
    const product = new Product(req.body);
    product.save().then(data=>{
        res.status(201).json({
            msg: "Product Added Successfully",
            data
        });
    }).catch(err=>{
        res.status(400).json({
            msg: "Invalid Data Provided",
            error: err
        })
    })
}

const updateProduct = (req, res) => {
    Product.findOneAndUpdate({id:req.params.productId}, req.body).then(data=>{
        if(data){
            Product.findOne({id:req.params.productId}).then(updated=>{
                res.status(202).json({
                    msg: "Updated Successfully",
                    updated
                });
            })
        }else{
            res.status(204).json({
                msg: "No Product with this Product ID"
            })
        }
    }).catch(err => {
        res.status(400).json({
            msg: "Invalid Product Data",
            error: err
        });
    })
}

const deleteProduct = (req, res) => {
    Product.findOneAndDelete({id:req.params.productId}).then(data=>{
        if(data){
            res.status(202).json({
                msg: "Deleted Successfully",
                data
            });
        }else{
            res.status(204).json({
                msg: "No Product with this Product ID"
            })
        }
    }).catch(err => {
        res.status(400).json({
            msg: "Invalid Product Data",
            error: err
        });
    })
}

module.exports = {
    getAllProducts,
    getAProduct,
    addProduct,
    updateProduct,
    deleteProduct
}