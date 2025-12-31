const {Customer} = require("../models/customer.model.js");

const createCustomer = async (req,res)=>{
    try{
        const customerData = await Customer.create(req.body)
        console.log(customerData)
        res.status(201).json({
            success:true,
            message:"Data successfuly saved..",
            data:customerData,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}

const getAllCustomer = async (req,res)=>{
    try{
        const customerAllData = await Customer.find();
        console.log(customerAllData)
        res.status(200).json({
            success:true,
            message:"find all customer data successfully",
            data:customerAllData,
        })
    }catch (err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}

module.exports = {createCustomer,getAllCustomer}