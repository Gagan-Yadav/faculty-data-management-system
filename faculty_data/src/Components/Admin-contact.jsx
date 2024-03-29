

import "../Styling/Add-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
function AdminContact(){
    return <>
     <Dashboard/>
                <div className="add-sub-admin">
                   <div className="add-sub-admin-header">
                    <div><span className="sub-admin-heading">Contact Us</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate">Dashboard</span> </Link>/ <span  className="dashboard-navigate">contact-us</span></div>
                   </div>
                   <div id="add-subadmin-form-container">
                                <div className="form-heading-container">
                                        <h3 className="form-heading">Fill The Info</h3>
                                </div>
                                <div className="form-details-container">
                                        <form action="" id="add-sub-admin-form">
                                                <label htmlFor="">Page Title</label>
                                                <input type="text" name="" id="" className="form-inputs"  placeholder="Add title"/><br />
                                                  <label htmlFor="">Page Description</label>
                                                  <textarea name="" id="" className="form-inputs" placeholder="Add description"></textarea>
                                                  <label htmlFor="">Email address</label>
                                                <input type="email" name="" id=""  className="form-inputs" placeholder="Enter Email"/><br />
                                                <label htmlFor="">Mobile Number</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Number"/><br />
                                               
                                        <button className="add-subadmin-submit-button">Submit</button>
                                        </form>
                                </div>
                   </div>
                </div>
    </>
}
export default AdminContact