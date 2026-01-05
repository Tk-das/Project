import {useState,useEffect} from "react";
import {createItem,getAllItem,updateItem} from "../backendFun/item.js";

const useItem = ()=>{
    const [allItem,setAllItem]=useState([])
    // Add Item
    const addItem = async (data)=>{
        await createItem(data)
    }
    // Read Item
    const readItem = async ()=>{
        try{
            const res = await getAllItem()
            setAllItem(res.data.data)
        }catch(err){
            alert(err.message)
        }
    }
    useEffect(()=>{
        readItem()
    },[allItem])
    // Edit Item
    const editItem = async (id,data)=>{
        await updateItem(id,data)
    }
    
    return {
        addItem,
        allItem,
        editItem,
    }
}

export default useItem;