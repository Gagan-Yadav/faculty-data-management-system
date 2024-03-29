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
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/dashboard" element={<Dashboard/>}/>{/*temp*/}
                <Route path="/admin/dashboard-page" element={<Home/>}/>
                <Route path="/admin/add-sub-admin" element={<AddSubAdmin/>}/>
                <Route path="/admin/add-college" element={<AddCollege/>}/>
                <Route path="/admin/add-faculty" element={<AddFaculty/>}/>
                <Route path="/admin/manage-sub-admin" element={<ManageSubadmin/>}/>
                <Route path="/admin/manage-college" element={<ManageCollege/>}/>
                <Route path="/admin/manage-faculty" element={<ManageFaculty/>}/>
                <Route path="/admin/about-us" element={<AdminAbout/>}/>
                <Route path="/admin/contact-us" element={<AdminContact/>}/>
                <Route path="/admin/profile" element={<AdminProfile/>}/>
                <Route path="/admin/change-password" element={<AdminPassword/>}/>
            </Routes>
       </div>
    </>
}
import AddFaculty from "../Components/Add-faculty"
import ManageSubadmin from "../Components/Manage-subadmins"
import ManageCollege from "../Components/Manage-college"
import ManageFaculty from "../Components/Manage-faculty"
import AdminAbout from "../Components/Admin-about"
import AdminContact from "../Components/Admin-contact"
import AdminProfile from "../Components/Admin-profile"
import AdminPassword from "../Components/Admin-chagepwd"
import Home from "../Components/Home"
export default RoutesComp