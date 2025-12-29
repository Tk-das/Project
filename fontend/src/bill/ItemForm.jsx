import {useState} from "react"

import { TbArrowBack } from "react-icons/tb";

const ItemForm = ({setFormSelect})=>{
    const [itemDta,setItemDta]=useState({
        itemName:"",
        itemDescription:"",
        width:"",
        height:"",
        rate:"",
        qty:""
    })
    const dataChangeFun = (e)=>{
        setItemDta({...itemDta,[e.target.name]:e.target.value})
    }
    const itemSubFun = (e)=>{
        e.preventDefault()
        alert(JSON.stringify(itemDta))
        setItemDta({
            itemName:"",
            itemDescription:"",
            width:"",
            height:"",
            rate:"",
            qty:""
        })
    }
    
    return <div
        className="flex justify-center items-center absolute w-full min-h-full top-0 left-0 bg-[rgba(0,30,25,1)]"
    >
        <div className="bg-[rgba(235,255,225,1)] text-[rgba(15,0,90,1)] w-full">
            <div
                className="flex justify-between items-center p-4"
            >
                <span className="text-2xl font-bold">Item Form</span>
                <div onClick={()=>setFormSelect("")}>
                    <TbArrowBack size={25}/>
                </div>
            </div>
            <form
                onSubmit={itemSubFun}
                className="border rounded p-4 mx-2 my-4"
            >
                <input 
                    onChange={dataChangeFun}
                    value={itemDta.itemName}
                    name="itemName"
                    type="text"
                    required
                    placeholder="Item name..."
                    className="w-full px-4 py-2 border rounded bg-white outline-none mb-4"
                />
                <input 
                    onChange={dataChangeFun}
                    value={itemDta.itemDescription}
                    name="itemDescription"
                    type="text"
                    placeholder="Description..."
                    className="w-full px-4 py-2 border rounded bg-white outline-none mb-4"
                />
                <div className="flex justify-between items-center gap-4 mb-4">
                    <div className="flex justify-center items-center w-1/2 border rounded bg-white">
                        <input 
                            onChange={dataChangeFun}
                            value={itemDta.width}
                            name="width"
                            type="number"
                            required
                            placeholder="Width..."
                            className="w-full px-4 py-2 outline-none"
                        />
                        <span className="px-1 font-semibold">/rf.</span>
                    </div>
                    <div className="flex justify-center items-center w-1/2 border rounded bg-white">
                        <input 
                            onChange={dataChangeFun}
                            value={itemDta.height}
                            name="height"
                            type="number"
                            required
                            placeholder="Height..."
                            className="w-full px-4 py-2 outline-none"
                        />
                        <span className="px-1 font-semibold">/rf.</span>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-4 mb-4">
                    <div className="flex justify-center items-center w-1/2 border rounded bg-white">
                        <input 
                            onChange={dataChangeFun}
                            value={itemDta.rate}
                            name="rate"
                            type="number"
                            placeholder="Rate..."
                            className="w-full px-4 py-2 outline-none"
                        />
                        <select className="px-1 font-semibold outline-none">
                            <option>INR</option>
                            <option>USD</option>
                            <option>TAKA</option>
                        </select>
                    </div>
                    <div className="flex justify-center items-center w-1/2 border rounded bg-white">
                        <input 
                            onChange={dataChangeFun}
                            value={itemDta.qty}
                            name="qty"
                            type="number"
                            placeholder="Quantity..."
                            className="w-full px-4 py-2 outline-none"
                        />
                        <span className="px-1 font-semibold">/pic</span>
                    </div>
                </div>
                <input 
                    type="submit"
                    className="bg-[rgba(0,160,200,1)] w-full text-white rounded py-2 font-semibold my-6"
                />
            </form>
        </div>
    </div>
}
export default ItemForm;