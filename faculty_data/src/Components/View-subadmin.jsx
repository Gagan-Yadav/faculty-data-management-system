import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
import "../Styling/Manage-sub-admin.css"
import {useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Boy from "../assets/boy.png"
function ViewSubAdmin(){
    let {username} = useParams()
    var [upcoming,setUpcoming]=useState([])
    var ans
    async function ViewDetail(){
        try {
            ans=await axios.get(`http://localhost:7000/api/sub-admin/sub-admin-details?username=${username}`);
            setUpcoming(ans.data.data[0])
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(function(){
            ViewDetail()
    },[])
        return <>
          <Dashboard />
      <div className="add-sub-admin">
                <div id="view-main-container">
                                <div className="view-main-container-sub">
                                      <div className="showing-id">{upcoming.id}</div>
                                         <div className="all-detail-viewed">
                                            <img src={Boy} alt="" style={{width:"20%",marginLeft:"15%"}}/>
                                                <h2 style={{textDecoration:"underline",color:"blue"}}>{upcoming.fullname}</h2>
                                                <div style={{textAlign:"left",paddingLeft:"50px"}}>
                                                <p><strong>Username:</strong> {upcoming.username}</p>
                                                <p><strong>Email:</strong> {upcoming.address}</p>
                                                <p><strong>Mobile:</strong> {upcoming.phone}</p>
                                                <p><strong>Joining Date:</strong> {upcoming.created_at}</p>
                                                <p><strong>Updated Date:</strong> {upcoming.updated_at}</p>
                                                <p><strong>Salary: </strong>{upcoming.salary}</p>
                                                <p><strong>DOB:</strong>{upcoming.dob}</p>
                                                <p><strong>Address:</strong>{upcoming.pata}</p>
                                                </div>
                                                
                                         </div>
                                </div>
                </div>
      </div>
        </>
}
export default ViewSubAdmin