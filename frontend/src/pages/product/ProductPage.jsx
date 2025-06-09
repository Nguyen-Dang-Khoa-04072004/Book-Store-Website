import GridPage from "./GridPage";
import Sidebar from "./Sidebar";



export default function ProductPage(){
    return (
        <div className="flex">
            <Sidebar/>
            <GridPage/>
        </div>
    )   
}