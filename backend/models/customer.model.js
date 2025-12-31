const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    customerName:{
        type:String,
        required:true,
    },
    customerAddress:{
        type:String,
    },
    customerContact:{
        type:String,
        unique:true,
    }
},{timestamps:true})

const Customer = mongoose.model("Customer",customerSchema);
module.exports = {Customer}