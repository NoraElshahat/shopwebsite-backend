const mongoose = require('mongoose')
const Product = require('./Product')

const CategorySchema = new mongoose.Schema({
    _id:{
        type : Number
    },
    name:{
        type:String,
        required:[true , 'Name Required'],
        trim:true
    },
    parent_id:{
        type:Number,
        ref:"Product"
    }
})

const Category = mongoose.model('Category' , CategorySchema)

module.exports = Category