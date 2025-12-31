import {useState,useEffect} from "react"
import {createProject,getAllProject} from "../backendFun/project.js"

const useProject = ()=>{
    const [allProject,setAllProject]=useState([])
    
    const addProject = async (data)=>{
        await createProject(data)
    }
    
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
    
    return {
        addProject,
        allProject,
    }
}

export default useProject;