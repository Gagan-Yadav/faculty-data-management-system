import image3 from "../assets/image3.jpg"
import "../Styling/Slide.css"
function Slide3(){
    return <>
   <div className="lower-container">
        <img src={image3} alt="" style={{width:"100%",height:"87vh"}} className="image-blur"/>
      </div>
       <div className="upper-container2">
        <h1 className="heading"><span className="two-words">Online College</span> Faculty Data <br />Management System</h1>
         <p className="slide-ptag">View the details of college Faculty.</p>

       <button class="glow-on-hover" type="button">Contact Us</button>
       </div>
    </>
}
export default Slide3