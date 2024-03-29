import Calling from "../assets/contact.jpg"
import Navbar1 from "../Navbar/Navbar1"
import "../Styling/Contact.css"
import Footer from "../Components/Footer.jsx"
function Contact(){
        return <>
        <div>
        <div>
            <Navbar1/>
        </div>
        <div>
        <div >
                    <img src={Calling} alt="" style={{width:"100%"}}/>
            </div>
        <div className="uptxt">
                    <h1 style={{color:"blue"}}>Contact</h1>
                    <p>"Empower your business with our expertise. Contact us today for tailored solutions."</p>
                </div>
        </div>

        <div className="contact-details">
            <h1 className="contact-header">Get In Touch!</h1>
            <p><b className="sub-header">Address:</b></p>
            <p><b className="sub-header">Contact Number:</b></p>
            <p><b className="sub-header">Email Address:</b></p>
        </div>
        <Footer/>
      </div>
        </>
}
export default Contact