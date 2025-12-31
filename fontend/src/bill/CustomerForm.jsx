import {useState} from "react"
import useCustomer from "./hooks/useCustomer.js"
import { TbArrowBack } from "react-icons/tb";

const CustomerForm = ({setFormSelect,setCustomerId})=>{
    const [tgl,setTgl]=useState("hidden")
    const {allCustomer} = useCustomer();
    const selectCustomerFun = (e)=>{
        const id = e.target.value
        if(id.length > 0){
            setCustomerId(id);
            setFormSelect("project")
        }
    }
    
    return <div
        className="flex justify-center items-center absolute top-0 left-0 min-h-full w-full bg-[rgba(0,30,25,1)]"
    >
        <div className="bg-[rgba(235,255,225,1)] text-[rgba(15,0,90,1)] w-full p-4">
            <div className="flex justify-between items-center">
                <span className="font-bold">Select your customer</span>
                <div onClick={()=>setFormSelect("")}>
                    <TbArrowBack size={25}/>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center gap-4 p-4 mb-6">
                    <select 
                        onChange={selectCustomerFun}
                        className="outline-none border rounded py-2 px-4 text-[rgba(0,100,200,1)]"
                    >
                        <option value="">Select Customer</option>
                        {allCustomer.map((v,i)=>{
                            return <option key={v._id} value={v._id}>{v.customerName}</option>
                        })}
                    </select>
                    <button 
                        onClick={()=>(tgl==="hidden") ? setTgl("block") : setTgl("hidden")}
                        className="border rounded font-semibold px-4 py-2 text-white bg-[rgba(0,100,200,1)]"
                    >
                        Add Customer
                    </button>
                </div>
            </div>
            <CusForm tgl={tgl} setFormSelect={setFormSelect}/>
        </div>
    </div>
}
export default CustomerForm;

const CusForm = ({tgl,setFormSelect})=>{
    const [customerDta,setCustomerDta]=useState({
        customerName:"",
        customerAddress:"",
        customerContact:""
    })
    const {addCustomer} = useCustomer();
    const dataChangeFun = (e)=>{
        setCustomerDta({...customerDta,[e.target.name]:e.target.value})
    }
    const customerSubFun = (e)=>{
        e.preventDefault()
        addCustomer(customerDta)
        setFormSelect("")
        setCustomerDta({
            customerName:"",
            customerAddress:"",
            customerContact:""
        })
    }
    
    return <div className={`${tgl}`}>
        <form
            onSubmit={customerSubFun}
            className="border rounded p-4"
        >
            <div className="text-center font-bold text-2xl py-4">
                Customer Form
            </div>
            <input 
                onChange={dataChangeFun}
                value={customerDta.customerName}
                name="customerName"
                type="text"
                required
                placeholder="Customer name..."
                className="w-full px-4 py-2 border rounded bg-white outline-none mb-4"
            />
            <input 
                onChange={dataChangeFun}
                value={customerDta.customerAddress}
                name="customerAddress"
                type="text"
                placeholder="Customer address..."
                className="w-full px-4 py-2 border rounded bg-white outline-none mb-4"
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
                    onChange={dataChangeFun}
                    value={customerDta.customerContact}
                    name="customerContact"
                    type="tel"
                    required
                    maxlength={10}
                    minlength={10}
                    placeholder="Phone no..."
                    className="bg-white outline-none border rounded px-4 py-2 w-full"
                />
            </div>
            <input 
                type="submit"
                className="bg-[rgba(0,160,200,1)] w-full text-white rounded py-2 font-semibold my-6"
            />
        </form>
    </div>
}