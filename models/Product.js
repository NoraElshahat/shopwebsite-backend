const mongoose = require('mongoose')

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
    category_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
})

const Product = mongoose.model('Product' , ProductSchema)

module.exports = Product