const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    itemName:{
        type:String,
        required:true,
    },
    itemDescription:String,
    width:{
        type:Number,
        min:1,
        required:true,
    },
    height:{
        type:Number,
        min:1,
        required:true,
    },
    rate:{
        type:Number,
        min:0,
        default:300,
    },
    qty:{
        type:Number,
        min:1,
        default:1,
    }
},{timestamps:true})


const Item = mongoose.model("Item",itemSchema)
module.exports = {Item}