import "../Styling/Faculties.css"
import Navbar1 from "../Navbar/Navbar1.jsx"
import image4 from "../assets/image4.jpg"
import Footer from "../Components/Footer.jsx"
import axios from "axios"
import { useEffect, useState } from "react"
import Boy from "../assets/boy.png"
function Faculties(){
  let [fdata,setfdata]=useState([])
  async function getDataOfFaculties(){
    try {
      let resp=await axios.get("http://localhost:7000/api/faculty/faculty-list")
      console.log(resp.data.data);
      setfdata(resp.data.data)
    } catch (error) {
      console.log(error);
    }
  }
 useEffect(function(){
    getDataOfFaculties()
 },[])
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
            <h1>!! Faculties Details !!</h1>
                           <div className="fsubdetails">
                            {
                              fdata.map((ele,ind)=>(
                                <div key={ind}>
                                  <img src={Boy} alt="" style={{width:"30%",marginLeft:"32%"}}/>
                                     <h4><strong>Faculty Name: </strong>{ele.faculty_name}</h4>
                                     <p><strong>Address: </strong>{ele.address}</p>
                                     <p><strong>Mobile NO.: </strong>{ele.phone}</p>
                                     <p><strong>Gender: </strong>{ele.gender}</p>
                                     <p><strong>Email: </strong>{ele.gmail}</p>
                                     <p><strong>College ID: </strong>{ele.college_id}</p>
                                     <p><strong>Job Nature: </strong>{ele.job_natures}</p>
                                     <p><strong>Department: </strong>{ele.department}</p>
                                     <p><strong>Designation: </strong>{ele.designation}</p>
                                     <p><strong>Joining Date: </strong>{ele.date_of_joining}</p>
                                </div>
                              ))
                            }
                           </div>
          </div>

        </div>
        <Footer/>
      </div>
    </>
}
export default Faculties