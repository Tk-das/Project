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

const getAllItem = async (req,res)=>{
    try{
        const ItemAllData = await Item.find();
        res.status(200).json({
            success:true,
            message:"get all Item data successfully",
            data:ItemAllData,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}

const updateItem = async (req,res)=>{
    try{
        const {id} = req.params;
        const updateData = await Item.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true },
        )
        
        if(!updateData){
            res.status(400).json({
                success:false,
                message:"! Data not update.."
            })
        }
        
        res.status(200).json({
            success:true,
            message:"Data successfully update in item",
            data:updateData,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}

module.exports = {createItem,getAllItem,updateItem}