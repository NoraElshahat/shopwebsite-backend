const mongoose = require('mongoose')

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
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }
})

const Category = mongoose.model('Category' , CategorySchema)

module.exports = Category