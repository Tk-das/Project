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

const updateProject = async (req,res)=>{
    try{
        const {id} = req.params;
        const updateData = await Project.findByIdAndUpdate(
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
            message:"Data successfully update in project",
            data:updateData,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}

module.exports = {createProject,getAllCustomer,updateProject}