const mongoose=require('mongoose')
const User = require('../models/userModels');
const Product = require('../models/product');

const cart = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Product,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        subtotal:{
            type:Number,
            required:true
        }
       
    }],
    totalPrice: {
        type: Number,
        required: false
    },
})
module.exports = mongoose.model('cart', cart)
