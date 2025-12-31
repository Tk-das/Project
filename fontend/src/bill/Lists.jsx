import useProject from "./hooks/usrProject.js";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Lists = ()=>{
    const {allProject} = useProject();
    return <div>
        <ul
            className="px-4"
        >
            {allProject.length < 1 ? "Data not found..." : allProject.map((v,i)=>{
                return <li
                    key={v._id}
                    className="flex justify-between items-center px-4 py-2 border rounded mb-4 bg-[rgba(220,240,255,1)]"
                >
                    <span
                        className="capitalize text-[18px] font-bold tracking-wider text-[rgba(0,60,155,1)]"
                    >
                        {v.projectName}
                    </span>
                    <div
                        className="flex justify-center items-center gap-6"
                    >
                        <button
                            className="p-1 text-[rgba(180,0,255,1)]"
                        >
                            <FaRegEdit size={20}/>
                        </button>
                        <button
                            className="p-1 text-[rgba(255,20,0,1)]"
                        >
                            <MdDeleteOutline size={22}/>
                        </button>
                    </div>
                </li>
            })}
        </ul>
    </div>
}
export default Lists;