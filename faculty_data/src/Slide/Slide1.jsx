import {AuthContext} from "../Context/AuthContext.jsx"
import { useContext } from "react"
import image1 from "../assets/R.jpg"
import "../Styling/Slide.css"
import {useNavigate} from "react-router-dom"
function Slide1(){
  let {count}=useContext(AuthContext)
  let navigate =useNavigate()
    return <>

        <div className="lower-container">
        <img src={image1} alt="" style={{width:"100%",height:"87vh"}} className="image-blur"/>
      </div>
       <div className="upper-container">
        <h1 className="heading"><span className="two-words">Online College</span> Faculty Data <br />Management System</h1>
         <p className="slide-ptag">View the details of college Faculty.</p>
         <button class="glow-on-hover" type="button" onClick={()=>navigate("/contact")} >Contact Us</button>
       
       </div>

    </>
}
export default Slide1