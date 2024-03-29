import "../Styling/Add-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
function AdminProfile(){
    return <>
     <Dashboard/>
                <div className="add-sub-admin">
                   <div className="add-sub-admin-header">
                    <div><span className="sub-admin-heading">My Profile</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate">Dashboard</span> </Link>/ <span  className="dashboard-navigate">Profile</span></div>
                   </div>
                   <div id="add-subadmin-form-container">
                                <div className="form-heading-container">
                                        <h3 className="form-heading">Update The Info</h3>
                                </div>
                                <div className="form-details-container">
                                        <form action="" id="add-sub-admin-form">
                                                <label htmlFor="">Username (used for login)</label>
                                                <input type="text" name="" id="" className="form-inputs"  placeholder="Enter user name"/><br />
                                                <label htmlFor="">Full Name</label>
                                                <input type="text" name="" id=""  className="form-inputs" placeholder="Enter Full Name"/><br />
                                                <label htmlFor="">Email address</label>
                                                <input type="email" name="" id=""  className="form-inputs" placeholder="Enter Email"/><br />
                                                <label htmlFor="">Mobile Number</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Number"/><br />
                                                <label htmlFor="">Registration Date</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Registration Date"/><br />
                                               
                                        <button className="add-subadmin-submit-button">Update</button>
                                        </form>
                                </div>
                   </div>
                </div>
    </>
}
export default AdminProfile