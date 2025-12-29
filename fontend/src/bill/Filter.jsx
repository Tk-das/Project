const Filter = ({setFormSelect})=>{
    return <div
        className="px-4 py-2 flex justify-center gap-4 my-6"
    >
        <input 
            value=""
            type="text"
            placeholder="Search project..."
            className="border rounded-full w-[220px] outline-none px-4 py-2"
        />
        <button
            onClick={()=>setFormSelect("project")}
            className="rounded-full bg-[rgba(0,170,90,1)] text-white font-semibold tracking-wide px-4 py-2"
        >
            Create-Project
        </button>
    </div>
}
export default Filter;