const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true,
    },
    projectAddress:String,
    projectContact:String,
    advance:Number,
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    itemId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Item"
        }
    ]
},{timestamps:true})


const Project = mongoose.model("Project",projectSchema)
module.exports = {Project}