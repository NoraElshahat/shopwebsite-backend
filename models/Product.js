const mongoose = require('mongoose')
const Category = require('./Category')

const ProductSchema = new mongoose.Schema({
    _id:{
        type : Number
    },
    name:{
        type:String,
        required:[true , 'Name Required'],
        trim:true
    },
    image :{
        type:String
    },
    categoryId :{
        type : Number,
        ref:'Category'
    }
})

const Product = mongoose.model('Product' , ProductSchema)

module.exports = Product