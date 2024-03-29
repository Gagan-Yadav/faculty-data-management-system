import Navbar1 from "../Navbar/Navbar1.jsx"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import "../Styling/About.css"
import Footer from "../Components/Footer.jsx"
function About(){
    return <>
        <div>
                <div>
                    <Navbar1/>
                </div>
                <div className="innerimage">
                    <img src={image4} alt="" style={{width:"100%"}}/>
                </div>
                <div className="outertext">
                    <h1>About Us</h1>
                </div>
                <div className="main-container">
                    <div className="textcontainer">
                        <h1 className="about-header">About Us</h1>
                        <p className="about-description">Welcome to the Faculty Data Management System (FDMS), your comprehensive solution for streamlining faculty-related processes within educational institutions. At FDMS, we understand the critical role that faculty members play in shaping the academic landscape. Our platform is meticulously crafted to empower institutions with the tools necessary to optimize faculty management, enhance collaboration, and foster academic excellence.</p>
                    </div>
                    <div className="image-container">
                        <img src={image5} alt=""  style={{width:"80%",borderRadius:"10px"}}/>
                    </div>
                </div>
                <Footer/>
        </div>
    </>
}
export default About