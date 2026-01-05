import {useState,useEffect} from "react";
import { TbArrowBack } from "react-icons/tb";

const ProjectForm = ({
    setFormSelect,
    customerId,
    allCustomer,
    projectId,
    addProject,
    allProject,
    editProject,
})=>{
    const [projectDta,setProjectDta]=useState(()=>{
        if(projectId && allProject.length > 0){
            return allProject.find((v)=>v._id===projectId)
        }
        return {
            projectName:"",
            projectAddress:"",
            projectContact:"",
            advance:""
        }
    })
    const dtaChangeFun = (e)=>{
        setProjectDta({...projectDta,[e.target.name]:e.target.value})
    }
    const projectSubFun = (e)=>{
        e.preventDefault()
        const newDta = {
            ...projectDta,
            customerId:customerId,
            itemId:[],
        }
        addProject(newDta)
        
        setFormSelect("")
        setProjectDta({
            projectName:"",
            projectAddress:"",
            projectContact:"",
            advance:""
        })
    }
    
    const projectEditFun = (e)=>{
        e.preventDefault();
        editProject(projectDta._id,projectDta);
        setFormSelect("")
    }
    
    return <div 
        className="absolute flex justify-center items-center min-h-full w-full top-0 left-0 bg-[rgba(0,30,25,1)]"
    >
        <div className="bg-[rgba(235,255,225,1)] pb-4 my-8 text-[rgba(15,0,90,1)]">
        <div className="flex justify-between px-4 py-2">
            <span
                className="capitalize text-2xl font-bold"
            >Project Form</span>
            <button onClick={()=>setFormSelect("")}>
                <TbArrowBack size={30}/>
            </button>
        </div>
        <span className="px-6 font-semibold text-[12px]">
            Customer :- {allCustomer.find(v=>v._id===projectDta.customerId)?.customerName}
        </span>
        
        <form
            onSubmit={projectDta._id ? projectEditFun : projectSubFun}
            className="border mx-4 p-4 mt-4 rounded"
        >
            <input 
                onChange={dtaChangeFun}
                value={projectDta.projectName}
                name="projectName"
                type="text"
                required
                placeholder="Project name..."
                className="bg-white outline-none border rounded px-4 py-2 mb-4 w-full"
            />
            <input 
                onChange={dtaChangeFun}
                value={projectDta.projectAddress}
                name="projectAddress"
                type="text"
                placeholder="Address..."
                className="bg-white outline-none border rounded px-4 py-2 mb-4 w-full"
            />
            <div
                className="flex gap-1 justify-center items-center mb-4"
            >
                <select
                    className="border outline-none px-2 py-2.5 rounded bg-white"
                >
                    <option>+91</option>
                    <option>+92</option>
                    <option>+93</option>
                </select>
                <input 
                    onChange={dtaChangeFun}
                    value={projectDta.projectContact}
                    name="projectContact"
                    type="tel"
                    maxlength={10}
                    minlength={10}
                    placeholder="Phone no..."
                    className="bg-white outline-none border rounded px-4 py-2 w-full"
                />
            </div>
            <div
                className="flex justify-center items-center gap-1 mb-4"
            >
                <input 
                    onChange={dtaChangeFun}
                    value={projectDta.advance}
                    name="advance"
                    type="number"
                    placeholder="Advance pay..."
                    className="bg-white outline-none border rounded px-4 py-2 w-full"
                />
                <select
                    className="bg-white py-2.5 px-1 border rounded outline-none"
                >
                    <option>INR</option>
                    <option>USD</option>
                    <option>TAKA</option>
                </select>
            </div>
            <button
                className="bg-[rgba(0,160,200,1)] w-full text-white rounded py-2 font-semibold my-6"
            >
                {!projectId ? "Submit" : "Update"}
            </button>
        </form>
        </div>
    </div>
}
export default ProjectForm;