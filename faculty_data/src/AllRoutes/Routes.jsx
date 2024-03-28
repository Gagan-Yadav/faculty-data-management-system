import { useContext } from "react"
import {Link, Route,Routes} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import Navbar from "../Navbar/Navbar"
import About from "../Components/About"
import Faculties from "../Components/Faculties"
import Admin from "../Components/Admin"
import Dashboard from "../Components/Dashboard"
import AddSubAdmin from "../Components/Add-subadmin"
import AddCollege from "../Components/Add-college"
function RoutesComp(){
  
    return <>
       <div>
       
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faculties" element={<Faculties/>}/>
                <Route path="/admin-login" element={<Admin/>}/>
                <Route path="/admin/dashboard" element={<Dashboard/>}/>
                <Route path="/admin/add-sub-admin" element={<AddSubAdmin/>}/>
                <Route path="/admin/add-college" element={<AddCollege/>}/>
                <Route path="/admin/add-faculty" element={<AddFaculty/>}/>
            </Routes>
       </div>
    </>
}
import AddFaculty from "../Components/Add-faculty"
export default RoutesComp