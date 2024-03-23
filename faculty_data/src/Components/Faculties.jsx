import "../Styling/Faculties.css"
import Navbar1 from "../Navbar/Navbar1.jsx"
import image4 from "../assets/image4.jpg"
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
        {/*  faculty details after the entry  */}
        <p>/*  faculty details after the entry  */</p>
        </div>
      </div>
    </>
}
export default Faculties