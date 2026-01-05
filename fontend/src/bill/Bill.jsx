import {useState,useEffect} from "react"
import useProject from "./hooks/usrProject.js";
import useCustomer from "./hooks/useCustomer.js";
import useItem from "./hooks/useItem.js";

import Header from "./Header.jsx"
import Filter from "./Filter.jsx"
import Lists from "./Lists.jsx"
import CustomerForm from "./CustomerForm.jsx"
import ProjectForm from "./ProjectForm.jsx"
import ItemForm from "./ItemForm.jsx"
import ItemList from "./ItemList.jsx"
import CustomerList from "./CustomerList.jsx"

const Bill = ()=>{
    const {addProject,allProject,editProject} = useProject();
    const {addCustomer,allCustomer,editCustomer} = useCustomer();
    const {addItem,allItem,editItem} = useItem();
    
    const [formSelect,setFormSelect]=useState("")
    const [customerId,setCustomerId]=useState("")
    const [projectId,setProjectId]=useState("")
    
    const formSelectFun = ()=>{
        switch(formSelect){
            case "customer":
                return <CustomerForm 
                    addCustomer={addCustomer}
                    allCustomer={allCustomer}
                    editCustomer={editCustomer}
                    setCustomerId={setCustomerId} 
                    setFormSelect={setFormSelect}
                />
                break;
            case "project":
                return <ProjectForm 
                    addProject={addProject}
                    allProject={allProject}
                    editProject={editProject}
                    customerId={customerId} 
                    allCustomer={allCustomer}
                    projectId={projectId}
                    setFormSelect={setFormSelect}
                />
                break;
            case "item":
                return <ItemForm 
                    addItem={addItem}
                    allItem={allItem}
                    editItem={editItem}
                    setFormSelect={setFormSelect}
                />
                break;
                case "itemList":
                return <ItemList 
                    projectId={projectId}
                    allProject={allProject}
                    allItem={allItem}
                    setFormSelect={setFormSelect}
                />
                break;
            default:
                return "";
        }
    }
    useEffect(()=>{
        if(!formSelect){
            setProjectId("")
        }
    },[formSelect])
    
    return <div
        className="min-h-[100vh]"
    >
        {formSelectFun()}
        <Header />
        <Filter setFormSelect={setFormSelect}/>
        <Lists 
            setProjectId={setProjectId} 
            setFormSelect={setFormSelect}
        />
    </div>
}
export default Bill;