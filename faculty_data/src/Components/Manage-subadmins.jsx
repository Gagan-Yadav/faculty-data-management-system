import "../Styling/Manage-sub-admin.css"
import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import DeleteIcon from "../assets/delete.png"
import EditIcon from "../assets/edit.png"
import axios from "axios"
function ManageSubadmin(){
    let [show,setShow] =useState(false)
    let {answer,range,getFacultyList,setAnswer}=useContext(AuthContext)
    
    const handleDelete = async (username) => {
        const confirmed = window.confirm(`Are you sure you want to delete ${username} sub-admin?`);
        if (confirmed) {
            try {
                await axios.get(`http://localhost:7000/api/sub-admin/remove-sub-admin?username=${username}`);
                setAnswer(answer.filter(item => item.username !== username));
                alert(`${username} sub-admin deleted successfully`);
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    alert(error.response.data.message || "Something went wrong!");
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                    alert("No response received from server!");
                } else {
                    // Something else happened in making the request
                    console.log('Error', error.message);
                    alert("An error occurred while making the request!");
                }
            }
        }
    };
    

    useEffect(function(){
                getFacultyList()
        
    },[])
    return <>
     <Dashboard/>
                <div className="manage-sub-admin">
                   <div className="manage-sub-admin-header">
                    <div><span className="manage-admin-heading">Manage Sub Admins</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate">Home</span> </Link>/ <span  className="dashboard-navigate">Manage Sub Admin</span></div>
                   </div>
                   <div id="manage-subadmin-form-container">
                                <p>Sub Admin Details</p>
                                <hr />
                                <div className="printing-and-searching">
                                    <div className="printing">
                                        <div>Copy</div>
                                        <div>CSV</div>
                                        <div>Excel</div>
                                        <div>PDF</div>
                                        <div>Print</div>
                                        <div className="visibility-container">
                                            <p className="dropbtn" onClick={()=>setShow(!show)}>Column visibility &#9660;</p>
                                            <div class="dropdown-content" style={{display:show?"block":"none"}}>
                                                <p>#</p>
                                                <p>Username</p>
                                                <p>Full Name</p>
                                                <p>Email ID</p>
                                                <p>Mobile Number</p>
                                                <p>Reg. Date</p>
                                                <p>Action</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search">
                                        <label htmlFor="">Search:</label>
                                        <input type="search" name="" id="" />
                                    </div>
                                </div>
                    
                         <div className="manage-subadmin-table">
                            <table className="sub-admin-tabulation" border={1}>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Full Name</th>
                                        <th>Email ID</th>
                                        <th>Mobile Number</th>
                                        <th>Reg. Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                     
                                    <tbody>
                                    {answer && answer.map((ele,index)=>(
                                             <tr>
                                               <td>{index+1}</td>
                                               <td>{ele.username}</td>
                                               <td>{ele.fullname}</td>
                                               <td>pending</td>
                                               <td>{ele.phone}</td>
                                               <td>{ele.created_at}</td>
                                               <td style={{textAlign:"center",width:"10%"}}>
                                                   <img src={EditIcon} alt=""  style={{width:"15%",margin:"5px"}}/>
                                                   <img src={DeleteIcon} alt="" style={{width:"15%",margin:"5px"}} onClick={()=>handleDelete(ele.username)} />
                                                   </td>
                                             </tr>
                               ))}       
                               </tbody>
                            
                            </table>
                         </div>

                         <div className="sub-admin-pagination">
                            <div>
                                <p>Showing 0 to 0 of {range} entries</p>
                            </div>
                            <div className="prev-next-button">
                                <button>Previous</button>
                                <button>Next</button>
                            </div>
                         </div>
                         <hr style={{paddingBottom:"1%"}}/>
                   </div>
                </div>
    </>
}
export default ManageSubadmin