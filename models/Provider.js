const mongoose = require('mongoose')

const ProviderSchema = new mongoose.Schema({
    _id:{
        type : Number
    },
    name:{
        type:String,
        required:[true , 'Name Required'],
        trim:true
    }
})

const Provider = mongoose.model('Provider' , ProviderSchema)

module.exports = Provider