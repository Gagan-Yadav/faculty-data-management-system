import "../Styling/Faculties.css"
import Navbar1 from "../Navbar/Navbar1.jsx"
import image4 from "../assets/image4.jpg"
import Footer from "../Components/Footer.jsx"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext.jsx"
function Faculties(){
  let {incdata}=useContext(AuthContext)
  console.log(incdata);
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
            <h1>Faculties Details</h1>
                           <div className="fsubdetails">
                           {incdata.map((ele)=>(
                                      <div key={ele.id} className="sub-container-for-faculty-details">
                                        <img src={URL.createObjectURL(ele.image)} alt="selected" />
                                            <h4>{ele.faculty_name}</h4>
                                            <p>{ele.address}</p>
                                      </div>
                            ))}
                           </div>
          </div>

        </div>
        <Footer/>
      </div>
    </>
}
export default Faculties