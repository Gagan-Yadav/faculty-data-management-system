import { useContext } from "react"
import image2 from "../assets/image2.jpg"
import { AuthContext } from "../Context/AuthContext"
function Slide2(){
    let {count}=useContext(AuthContext)
    return <>
    <div className="lower-container">
        <img src={image2} alt="" style={{width:"100%",height:"87vh"}} className="image-blur" />
      </div>
       <div className="upper-container1">
        <h1 className="heading"><span className="two-words">Online College</span> Faculty Data <br />Management System</h1>
         <p className="slide-ptag">View the details of college Faculty.</p>

       <button class="glow-on-hover" type="button">Contact Us</button>
       </div>
    </>
}
export default Slide2