import "../Styling/Faculties.css"
import Navbar1 from "../Navbar/Navbar1.jsx"
import image4 from "../assets/image4.jpg"
import Footer from "../Components/Footer.jsx"
function Faculties(){
    return <>
      <div>
        <div>
            <Navbar1/>
        </div>
        <div>
        <div className="innerimage">
                    <img src={image4} alt="" style={{width:"100%"}}/>
            </div>
        <div className="outertext">
                    <h1>Faculties</h1>
                    <p>"Empower minds, ignite futures: nurturing brilliance in every student, every day."</p>
                </div>
        </div>

        <div>
        
          <div className="faculties-details">
                          <h1>Faculty details</h1>
          </div>

        </div>
        <Footer/>
      </div>
    </>
}
export default Faculties