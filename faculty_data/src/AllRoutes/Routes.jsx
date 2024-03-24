import { useContext } from "react"
import {Link, Route,Routes} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import Navbar from "../Navbar/Navbar"
import About from "../Components/About"
import Faculties from "../Components/Faculties"
import Admin from "../Components/Admin"
import Dashboard from "../Components/Dashboard"

function RoutesComp(){
  
    return <>
       <div>
       
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faculties" element={<Faculties/>}/>
                <Route path="/admin-login" element={<Admin/>}/>
                <Route path="/admin/dashboard" element={<Dashboard/>}/>
            </Routes>
       </div>
    </>
}
export default RoutesComp