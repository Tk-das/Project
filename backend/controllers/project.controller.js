const {Project} = require("../models/project.model.js");

const createProject = async (req,res)=>{
    try{
        const projectData = await Project.create(req.body)
        
        res.status(201).json({
            success:true,
            message:"Data successfuly saved..",
            data:projectData,
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
        const projectAllData = await Project.find()
        res.status(200).json({
            success:true,
            message:"find all project data successfully",
            data:projectAllData,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}

module.exports = {createProject,getAllCustomer}