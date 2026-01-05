import {useState,useEffect} from "react"
import {createCustomer,getAllCustomer,updateCustomer} from "../backendFun/customer.js"

const useCustomer = ()=>{
    const [allCustomer,setAllCustomer]=useState([])
    // Add customer
    const addCustomer = async (data)=>{
        await createCustomer(data)
    };
    // Read customer
    const fetchCustomer = async ()=>{
        try{
            const res = await getAllCustomer()
            setAllCustomer(res.data.data)
        }catch (err){
            alert(err.message)
        }
    };
    useEffect(()=>{
        fetchCustomer();
    },[allCustomer])
    // Edit customer
    const editCustomer = async (id,data)=>{
        await updateCustomer(id,data)
    }
    
    return {
        addCustomer,
        allCustomer,
        editCustomer,
    };
}

export default useCustomer;