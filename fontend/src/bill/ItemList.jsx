import {useState,useEffect} from "react"
import { TbArrowBack } from "react-icons/tb";

const ItemList = ({
    setFormSelect,
    allProject,
    allItem,
    projectId,
})=>{
    const [itemIds,setItemIds]=useState(()=>{
        if(projectId && allProject.length > 0){
            return allProject.find(v=>v._id===projectId)?.list
        }
    })
    
    return <div
        className="absolute top-0 left-0 w-full min-h-full bg-[rgba(255,255,255,1)] text-[rgba(31,41,55,1)]"
    >
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center gap-2">
                <span className="capitalize tracking-wider text-2xl font-bold">Sonar Kella</span>
                <span className="text-[rgba(139,90,43,1)]">[ Sneha Das ]</span>
            </div>
            <div
                onClick={()=>setFormSelect("")}
                className="font-bold"
            >
                <TbArrowBack size={30}/>
            </div>
        </div>
        <div className="font-semibold ml-8">
            <div>E-villas goshpara, langalberia 700143</div>
            <div>+91 9876-543-210</div>
            <div className="flex items-center gap-1 text-[rgba(139,90,43,1)]">
                <span className="font-semibold">Advance :</span>
                <span>8000</span>
                <span>/-</span>
            </div>
        </div>
        <div className="px-4 py-2 my-4 flex justify-center gap-4 items-center">
            <button
                onClick={()=>setFormSelect("item")}
                className="border rounded px-4 py-2 font-semibold tracking-wide bg-[rgb(0,170,90,1)] text-white"
            >
                Add item
            </button>
        </div>
        {/*List item*/}
        <div
            className="border border-2 rounded my-6 mx-2 [&>*:nth-child(odd)]:bg-[rgba(240,240,240,1)]"
        >
            <div className="capitalize font-bold text-center py-2 mb-4 text-[12px] grid grid-cols-[10%_30%_10%_10%_10%_10%_20%] bg-[rgba(240,240,240,1)] text-[rgba(55,65,81,1)]">
                <span>No.</span>
                <span>Item Name</span>
                <span>Rate</span>
                <span>Width</span>
                <span>Height</span>
                <span>Qty.</span>
                <span>Amount</span>
            </div>
            {/*Changing Data*/}
            {itemIds?.map(v=>v)}
            <div className="capitalize font-semibold text-center py-2 text-[10px] grid grid-cols-[10%_30%_10%_10%_10%_10%_20%] text-[rgba(rgba(17,24,39,1))]">
                <span>1.</span>
                <span>wardobe</span>
                <span>300</span>
                <span>7.6</span>
                <span>7</span>
                <span>1</span>
                <span>35000/-</span>
            </div>
            <div className="capitalize font-semibold text-center py-2 text-[10px] grid grid-cols-[10%_30%_10%_10%_10%_10%_20%] text-[rgba(rgba(17,24,39,1))]">
                <span>10.</span>
                <span>modular kitchen</span>
                <span>300</span>
                <span>7.6</span>
                <span>7</span>
                <span>10</span>
                <span>35000/-</span>
            </div>
            {/*Footer*/}
            <div className="capitalize rounded font-bold text-center py-2 mt-8 text-[12px] grid grid-cols-[65%_15%_20%] bg-[rgba(240,240,240,1)]">
                <span>Note:- all item successfully render</span>
                <span className="text-right">Total :</span>
                <span className="text-[rgba(139,90,43,1)]">153000/-</span>
            </div>
        </div>
    </div>
}

export default ItemList;