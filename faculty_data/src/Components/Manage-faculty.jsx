import "../Styling/Manage-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DeleteIcon from "../assets/delete.png";
import EditIcon from "../assets/edit.png";
import axios from "axios";
function ManageFaculty() {
    let [show, setShow] = useState(false);
    let {incdata,dataLength,manageFaculty,setIncoming}=useContext(AuthContext)

    useEffect(() => {
        manageFaculty();
    }, []);

    return (
        <>
            <Dashboard />
            <div className="manage-sub-admin">
                <div className="manage-sub-admin-header">
                    <div><span className="manage-admin-heading">Manage Faculty</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span className="dashboard-navigate">Home</span></Link>/ <span className="dashboard-navigate">Manage Faculty</span></div>
                </div>
                <div id="manage-subadmin-form-container">
                    <p>Faculty Details</p>
                    <hr />
                    <div className="printing-and-searching">
                        <div className="printing">
                            <div>Copy</div>
                            <div>CSV</div>
                            <div>Excel</div>
                            <div>PDF</div>
                            <div>Print</div>
                            <div className="visibility-container">
                                <p className="dropbtn" onClick={() => setShow(!show)}>Column visibility &#9660;</p>
                                <div className="dropdown-content" style={{ display: show ? "block" : "none" }}>
                                    <p>#</p>
                                    <p>Faculty Name</p>
                                    <p>Faculty Gender</p>
                                    <p>Faculty Mobile Number</p>
                                    <p>Faculty Email</p>
                                    <p>Faculty Date of Joining</p>
                                    <p>Added By</p>
                                    <p>Creation Date</p>
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
                                    <th>Faculty Name</th>
                                    <th>Faculty Gender</th>
                                    <th>Faculty Mobile Number</th>
                                    <th>Faculty Email</th>
                                    <th>Faculty Date of Joining</th>
                                    <th>Added By</th>
                                    <th>Creation Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incdata.map((ele, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{ele.faculty_name}</td>
                                        <td>{ele.gender}</td>
                                        <td>{ele.phone}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.date_of_joining}</td>
                                        <td>pending</td>
                                        <td>{ele.created_at}</td>
                                        <td style={{ textAlign: "center", width: "10%" }}>
                                                <img src={EditIcon} alt="" style={{ width: "15%", margin: "3px" }} />
                                                <img src={DeleteIcon} alt="" style={{ width: "15%", margin: "3px" }} />
                                                </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-admin-pagination">
                        <div>
                            <p>Showing 0 to 0 of {dataLength} entries</p>
                        </div>
                        <div className="prev-next-button">
                            <button>Previous</button>
                            <button>Next</button>
                        </div>
                    </div>
                    <hr style={{ paddingBottom: "1%" }} />
                </div>
            </div>
        </>
    );
}

export default ManageFaculty;
