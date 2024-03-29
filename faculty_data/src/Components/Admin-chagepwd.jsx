import "../Styling/Add-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
function AdminPassword(){
    return <>
     <Dashboard/>
                <div className="add-sub-admin">
                   <div className="add-sub-admin-header">
                    <div><span className="sub-admin-heading">Change Password</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate">Dashboard</span> </Link>/ <span  className="dashboard-navigate">Change Password</span></div>
                   </div>
                   <div id="add-subadmin-form-container">
                                <div className="form-heading-container">
                                        <h3 className="form-heading">Change Your Password</h3>
                                </div>
                                <div className="form-details-container">
                                        <form action="" id="add-sub-admin-form">
                                                <label htmlFor="">Current Password</label>
                                                <input type="text" name="" id="" className="form-inputs"  placeholder="Enter your current password"/><br />
                                                <label htmlFor="">New Password</label>
                                                <input type="text" name="" id=""  className="form-inputs" placeholder="Enter new password"/><br />
                                                <label htmlFor="">Confirm Password</label>
                                                <input type="email" name="" id=""  className="form-inputs" placeholder="Re-enter new password"/><br />
                                                 <button className="add-subadmin-submit-button">Change</button>
                                        </form>
                                </div>
                   </div>
                </div>
    </>
}
export default AdminPassword