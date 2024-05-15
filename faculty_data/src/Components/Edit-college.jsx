import { useState } from "react"
import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
import {useParams} from "react-router-dom"
import axios from "axios"
import swal from 'sweetalert';
function EditCollege(){
  let {college_code}=useParams()
  let [newCname,setCname]=useState("")
  
  async function EditClg(){
    try {
      let ans=await axios.post(`http://localhost:7000/api/college/edit-college?college_code=${college_code}&college_name=${newCname}`)
      
    } catch (error) {
      console.log(error);
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Do you want to update the details of this college!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        EditClg()
        swal("Details updated successfully!", {
          icon: "success",
        });
      } 
    });
    
  }

       return <>
          <Dashboard />
      <div className="add-sub-admin">
        <div className="add-sub-admin-header">
          <div><span className="sub-admin-heading">Edit College Details</span></div>
          <div>
            <Link to="/admin/dashboard" className="routing-link">
              <span className="dashboard-navigate">Dashboard</span>
            </Link>{" "}
            / <span className="dashboard-navigate">Edit College Details</span>
          </div>
        </div>
        <div id="add-subadmin-form-container">
          <div className="form-heading-container">
            <h3 className="form-heading">Edit College Details</h3>
          </div>
          <div className="form-details-container">
            <form action="" id="add-sub-admin-form" onSubmit={handleSubmit}>
              <label htmlFor="">College Code</label>
              <input type="text" name="" id="" className="form-inputs" placeholder="Enter The Code of College" value={college_code}/><br />
              <label htmlFor="">College Name</label>
              <input type="text" name="" id="" className="form-inputs" placeholder="Enter The Name of College" value={newCname} onChange={(e)=>setCname(e.target.value)} /><br />
              <button className="add-subadmin-submit-button" type="submit">Update</button> <br />
            
            </form>
          </div>
        </div>
      </div>
       </>
}
export default EditCollege