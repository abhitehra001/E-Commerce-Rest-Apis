const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    category: {
        type: String,
        trim: true,
        required: true
    }
})

module.exports = mongoose.model("products", Product);