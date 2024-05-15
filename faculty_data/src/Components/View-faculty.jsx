import Dashboard from "./Dashboard"
import Boy from "../assets/boy.png"
import {useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
function ViewFaculty(){
    let {id}=useParams()
  let [upcoming,setUpcoming]=useState([])
    async function getDetails(){
        try {
            let ans =await axios.get(`http://localhost:7000/api/faculty/faculty-details?id=${id}`)
            setUpcoming(ans.data.data[0])
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(function(){
                getDetails()
    },[])
    return <>
     <Dashboard />
      <div className="add-sub-admin">
                <div id="view-main-container">
                                <div className="view-main-container-sub">
                                      <div className="showing-id">{id}</div>
                                         <div className="all-detail-viewed">
                                            <img src={Boy} alt="" style={{width:"20%",marginLeft:"15%"}}/>
                                                <h2 style={{textDecoration:"underline",color:"blue"}}>{upcoming.faculty_name}</h2>
                                                <div style={{textAlign:"left",paddingLeft:"50px"}}>
                                                {/* <p><strong>Email:</strong>{upcoming.gmail} </p> */}
                                                <p><strong>Department:</strong>{upcoming.department}</p>
                                                <p><strong>Designation:</strong>{upcoming.designation}</p>
                                                <p><strong>Mobile:</strong>{upcoming.phone} </p>
                                                <p><strong>DOB:</strong>{upcoming.dob}</p>
                                                <p><strong>Gender:</strong>{upcoming.gender}</p>
                                                <p><strong>Job Nature:</strong> {upcoming.job_natures}</p>
                                                <p><strong>Joining Date:</strong>{upcoming.date_of_joining} </p>
                                                <p><strong>Updated Date:</strong>{upcoming.updated_at} </p>
                                                <p><strong>Created Date:</strong>{upcoming.created_at}</p>
                                                <p><strong>Address:</strong>{upcoming.address}</p>
                                                <p><strong>Salary:{upcoming.salary} </strong></p>
                                                <p><strong>College Code:</strong></p>
                                                <p><strong>College Name:</strong></p>
                                                </div>
                                                
                                         </div>
                                </div>
                </div>
      </div>
    </>
}
export default ViewFaculty