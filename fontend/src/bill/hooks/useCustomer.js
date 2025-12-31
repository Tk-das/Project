import {useState,useEffect} from "react"
import {createCustomer,getAllCustomer} from "../backendFun/customer.js"

const useCustomer = ()=>{
    const [allCustomer,setAllCustomer]=useState([])
    
    const addCustomer = async (data)=>{
        await createCustomer(data)
    };
    
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
    
    return {
        addCustomer,
        allCustomer,
    };
}

export default useCustomer;