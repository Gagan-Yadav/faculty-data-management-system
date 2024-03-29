import "../Styling/Manage-sub-admin.css"
import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
import UpDown from "../assets/up-and-down-arrow.png"
import { useState } from "react"
function ManageSubadmin(){
    let [show,setShow] =useState(false)
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
                                        <div class="visibility-container">
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
                                    <tr>
                                         <td></td>  {/* {append your data here} */}
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                         </div>

                         <div className="sub-admin-pagination">
                            <div>
                                <p>Showing 0 to 0 of 0 entries</p>
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