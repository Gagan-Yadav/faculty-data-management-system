import "../Styling/Manage-sub-admin.css"
import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"

function ManageSubadmin(){
    return <>
     <Dashboard/>
                <div className="manage-sub-admin">
                   <div className="manage-sub-admin-header">
                    <div><span className="manage-admin-heading">Manage Sub Admins</span></div>
                    <div><Link to="/admin/dashboard"><span  className="dashboard-navigate">Home</span> </Link>/ <span  className="dashboard-navigate">Manage Sub Admin</span></div>
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
                                        <div>Column visiblilty</div>
                                    </div>
                                    <div className="search">
                                        <label htmlFor="">Search:</label>
                                        <input type="search" name="" id="" />
                                    </div>
                                </div>
                      
                   </div>
                </div>
    </>
}
export default ManageSubadmin