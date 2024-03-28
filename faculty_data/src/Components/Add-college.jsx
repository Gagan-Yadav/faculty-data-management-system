import "../Styling/Add-sub-admin.css"
import { Link } from "react-router-dom"
import Dashboard from "./Dashboard"
function AddCollege(){
    return <>
    <Dashboard/>
                <div className="add-sub-admin">
                   <div className="add-sub-admin-header">
                    <div><span className="sub-admin-heading">Add College</span></div>
                    <div><Link to="/admin/dashboard"><span  className="dashboard-navigate">Dashboard</span> </Link>/ <span  className="dashboard-navigate">Add College</span></div>
                   </div>
                   <div id="add-subadmin-form-container">
                                <div className="form-heading-container">
                                        <h3 className="form-heading">Add College Details</h3>
                                </div>
                                <div className="form-details-container">
                                        <form action="" id="add-sub-admin-form">
                                                <label htmlFor="">College Name</label>
                                                <input type="text" name="" id="" className="form-inputs"  placeholder="Enter The Name of College"/><br />
                                                <label htmlFor="">College Code</label>
                                                <input type="text" name="" id=""  className="form-inputs" placeholder="Enter The Code of College"/><br />
                                              
                                        <button className="add-subadmin-submit-button">Submit</button>
                                        </form>
                                </div>
                   </div>
                </div>
    </>
}
export default AddCollege