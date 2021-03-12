const mongoose = require('mongoose')
const Product = require('./Product')
const Provider = require('./Provider')

const provider_productSchema = new mongoose.Schema({
    product_id:{
        type : Number,
        ref:"Product"
    },
    provider_id:{
        type : Number,
        ref:"Provider"
    },
    price:{
        type:Double,
    },
    available :{
        type:Boolean
    },
  
})

const provider_product = mongoose.model('provider_product' , provider_productSchema)

module.exports = provider_product