import "../Styling/Add-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
function AddFaculty(){
    return <>
     <Dashboard/>
                <div className="add-sub-admin">
                   <div className="add-sub-admin-header">
                    <div><span className="sub-admin-heading">Add Faculty</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate">Dashboard</span> </Link>/ <span  className="dashboard-navigate">Add Faculty</span></div>
                   </div>
                   <div id="add-subadmin-form-container">
                                <div className="form-heading-container">
                                        <h3 className="form-heading">Personal Info</h3>
                                </div>
                                <div className="form-details-container">
                                        <form action="" id="add-sub-admin-form">
                                                <label htmlFor="">College Name</label>
                                                <input type="text" name="" id="" className="form-inputs"  placeholder="Enter College Name"/><br />
                                                <label htmlFor="">Faculty Name</label>
                                                <input type="text" name="" id=""  className="form-inputs" placeholder="Enter Faculty Full Name"/><br />
                                                <label htmlFor="">Gender</label>
                                                <select name="" id="gender" className="form-inputs">
                                                    <option value="">Select Gender</option>
                                                    <option value="">Male</option>
                                                    <option value="">Female</option>
                                                </select>
                                                <label htmlFor="">Email address</label>
                                                <input type="email" name="" id=""  className="form-inputs" placeholder="Enter Email"/><br />
                                                <label htmlFor="">Mobile Number</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Number"/><br />
                                                <label htmlFor="">Designation</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Designation"/><br />
                                                <label htmlFor="">Department</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Department"/><br />
                                                <label htmlFor="">Job Nature</label>
                                                <select name="" id="gender" className="form-inputs">
                                                    <option value="">Select Job Nature</option>
                                                    <option value="">Contractual</option>
                                                    <option value="">Permanent</option>
                                                </select>
                                                <label htmlFor="">Date of Joining</label>
                                                <input type="date" name="" id="" className="form-inputs" /><br />
                                                  <label htmlFor="">Academic Qualification</label>
                                                  <textarea name="" id="" className="form-inputs" placeholder="Academic Qualification"></textarea>
                                                  <label htmlFor="">Profile Pic <span style={{color:"red"}}>(Only jpg | jpeg | png | gif format allowed)</span></label>
                                                <input type="file" name="" id="" className="form-inputs"/><br />
                                           
                                        <button className="add-subadmin-submit-button">Submit</button>
                                        </form>
                                </div>
                   </div>
                </div>
    </>
}
export default AddFaculty