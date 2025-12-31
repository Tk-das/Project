import {useState} from "react"

import Header from "./Header.jsx"
import Filter from "./Filter.jsx"
import Lists from "./Lists.jsx"
import CustomerForm from "./CustomerForm.jsx"
import ProjectForm from "./ProjectForm.jsx"
import ItemForm from "./ItemForm.jsx"

const Bill = ()=>{
    const [formSelect,setFormSelect]=useState("")
    const [customerId,setCustomerId]=useState("")
    
    const formSelectFun = ()=>{
        switch(formSelect){
            case "customer":
                return <CustomerForm setCustomerId={setCustomerId} setFormSelect={setFormSelect}/>
                break;
            case "project":
                return <ProjectForm customerId={customerId} setFormSelect={setFormSelect}/>
                break;
            case "item":
                return <ItemForm setFormSelect={setFormSelect}/>
                break;
            default:
                return "";
        }
    }
    
    return <div
        className="min-h-[100vh]"
    >
        {formSelectFun()}
        <Header />
        <Filter setFormSelect={setFormSelect}/>
        <Lists />
    </div>
}
export default Bill;