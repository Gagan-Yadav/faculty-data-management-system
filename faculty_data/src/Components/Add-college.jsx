import "../Styling/Add-sub-admin.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
function AddCollege() {
  let [college_name, setCollegeName] = useState("");
  let [college_code, setCollegeCode] = useState("");

  async function addCollege() {
    try {
      let ans = await axios.post("http://localhost:7000/api/college/add-college", {
        college_code,
        college_name
      });
     if(ans.status==200){
      let text=`${college_name} college added successfully!`
      swal({
        title: "Good job!",
        text: text,
        icon: "success",
        button: "Ok!",
      });
     }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    addCollege();
  }

  return (
    <>
      <Dashboard />
      <div className="add-sub-admin">
        <div className="add-sub-admin-header">
          <div><span className="sub-admin-heading">Add College</span></div>
          <div>
            <Link to="/admin/dashboard" className="routing-link">
              <span className="dashboard-navigate">Dashboard</span>
            </Link>{" "}
            / <span className="dashboard-navigate">Add College</span>
          </div>
        </div>
        <div id="add-subadmin-form-container">
          <div className="form-heading-container">
            <h3 className="form-heading">Add College Details</h3>
          </div>
          <div className="form-details-container">
            <form action="" id="add-sub-admin-form" onSubmit={handleSubmit}>
              <label htmlFor="">College Code</label>
              <input type="text" name="" id="" className="form-inputs" placeholder="Enter The Code of College" value={college_code} onChange={(e) => setCollegeCode(e.target.value)} /><br />
              <label htmlFor="">College Name</label>
              <input type="text" name="" id="" className="form-inputs" placeholder="Enter The Name of College" value={college_name} onChange={(e) => setCollegeName(e.target.value)} /><br />
              <button className="add-subadmin-submit-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCollege;
