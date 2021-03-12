const mongoose = require('mongoose')


const provider_productSchema = new mongoose.Schema({
    product_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    provider_id:{
        type: mongoose.Schema.Types.ObjectId,
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