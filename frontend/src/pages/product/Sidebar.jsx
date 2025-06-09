import { useState } from "react"
import DropList from "./DropList"


export default function Sidebar(){
    const [categories, setCategories] = useState([
        {
            id: 1,
            name:"Novel"
        },
        {
            id: 2,
            name:"Romance"
        }
    ])
    return(
        <div className="flex-1  pt-[30px] pb-[30px] pr-[30px] pl-[100px]">
            <h1 className="text-[40px] font-[700] mb-[25px] ">Filter</h1>
            <DropList title="Categories" items={categories}/>
        </div>
    )
}