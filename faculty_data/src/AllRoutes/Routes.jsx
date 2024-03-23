import { useContext } from "react"
import {Link, Route,Routes} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import Navbar from "../Navbar/Navbar"

function RoutesComp(){
  
    return <>
       <div>
       
            <Routes>
                <Route path="/" element={<Navbar/>}/>
            </Routes>
       </div>
    </>
}
export default RoutesComp