import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import swal from 'sweetalert';
import "../Styling/Manage-sub-admin.css"
function EditSubAdmin(){
  let {username}=useParams()
  let [fname,setFname]=useState("")
  let [naddress,setNaddress]=useState("")
  let [phone,setPhone]=useState('')
  async function handleUpdateData(){
      try {
       let ans=await axios.post(`http://localhost:7000/api/sub-admin/edit-sub-admin?fullname=${fname}&address=${naddress}&phone=${phone}&username=${username}`)
      } catch (error) {
        console.log(error);
      }
  }
  

  function handleUpdatedData(e){
    e.preventDefault()
    swal({
      title: "Are you sure?",
      text: "Do you want to update the details of this sub-admin!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        handleUpdateData()
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
          <div>
            <span className="sub-admin-heading">Edit Subadmin Details</span>
          </div>
          <div>
            <Link to="/admin/dashboard" className="routing-link">
              <span className="dashboard-navigate">Dashboard</span>
            </Link>
            / <span className="dashboard-navigate">Edit Subadmin</span>
          </div>
        </div>
        <div id="add-subadmin-form-container">
          <div className="form-heading-container">
            <h3 className="form-heading">Fill The Info</h3>
          </div>
          <div className="form-details-container">
            <form id="add-sub-admin-form">
              <label htmlFor="username">Username (used for login)</label>
              <input type="text" id="username" className="form-inputs" placeholder="Enter Sub-Admin Username" value={username} disabled/><br />
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" className="form-inputs" placeholder="Enter Sub-Admin Full Name" value={fname} onChange={(e)=>setFname(e.target.value)}/><br />
              <label htmlFor="address">Email address</label>
              <input type="email" id="address" className="form-inputs" placeholder="Enter Email" value={naddress} onChange={(e)=>setNaddress(e.target.value)}/><br />
              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" className="form-inputs" placeholder="Enter Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br />
              <button className="add-subadmin-submit-button" type="submit" onClick={handleUpdatedData}>Update</button>
            </form>
          </div>
        </div>
      </div>
        </>
}
export default EditSubAdmin