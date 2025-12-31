const {Item} = require("../models/item.model.js");

const createItem = async (req,res)=>{
    try{
        const itemData = await Item.create(req.body)
        
        res.status(201).json({
            success:true,
            message:"Data successfuly saved..",
            data:itemData,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}

module.exports = {createItem}