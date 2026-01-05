import {useState,useEffect} from "react"
import {createProject,getAllProject,updateProject} from "../backendFun/project.js"

const useProject = ()=>{
    const [allProject,setAllProject]=useState([])
    // Add project
    const addProject = async (data)=>{
        await createProject(data)
    }
    // Read project
    const fetchProject = async ()=>{
        try{
            const res = await getAllProject()
            setAllProject(res.data.data)
        }catch (err){
            alert(err.message)
        }
    }
    useEffect(()=>{
        fetchProject()
    },[allProject])
    // Edit project
    const editProject = async (id,data)=>{
        await updateProject(id,data)
    }
    
    return {
        addProject,
        allProject,
        editProject,
    }
}

export default useProject;