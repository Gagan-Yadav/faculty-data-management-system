import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "../Styling/Add-sub-admin.css";
import { AuthContext } from "../Context/AuthContext";
import swal from 'sweetalert';
function AddSubAdmin() {
  let [username, setUsername] = useState('');
  let [fullname, setFull] = useState('');
  let [address, setAddress] = useState('');
  let [phone, setPhone] = useState('');
  let [password, setPassword] = useState('');
  let [dob,setDob]=useState("")
  let [salary,setSalary]=useState('')
  let [locations,setLocation]=useState("")
  let [pata,setPata]=useState("")
  let naviage=useNavigate()
  let {answer}=useContext(AuthContext)
  
  async function addSubAdmin() {
    try {
      let ans = await axios.post("http://localhost:7000/api/sub-admin/add-sub-admin", {
        username,
        fullname,
        address,
        phone,
         dob,
         salary,
         pata,
        password
      });
     if(ans.data.status==400){
      
      alert(ans.data.message)
     }
    else  if(ans.status==200 && ans.data.status!==400){
      let text=`${fullname} added as a sub-admin`
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
    event.preventDefault();
      addSubAdmin();
  }

  return (
    <>
      <Dashboard />
      <div className="add-sub-admin">
        <div className="add-sub-admin-header">
          <div>
            <span className="sub-admin-heading">Add Subadmin</span>
          </div>
          <div>
            <Link to="/admin/dashboard" className="routing-link">
              <span className="dashboard-navigate">Dashboard</span>
            </Link>{" "}
            / <span className="dashboard-navigate">Add Subadmin</span>
          </div>
        </div>
        <div id="add-subadmin-form-container">
          <div className="form-heading-container">
            <h3 className="form-heading">Fill The Info</h3>
          </div>
          <div className="form-details-container">
            <form id="add-sub-admin-form" onSubmit={handleSubmit}>
              <label htmlFor="username">Username (used for login)</label>
              <input type="text" id="username" className="form-inputs" placeholder="Enter Sub-Admin Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" className="form-inputs" placeholder="Enter Sub-Admin Full Name" value={fullname} onChange={(e) => setFull(e.target.value)} /><br />
              <label htmlFor="address">Email address</label>
              <input type="email" id="address" className="form-inputs" placeholder="Enter Email" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
             
              <label htmlFor="dob">Date Of Birth</label>
              <input type="date" id="dob" className="form-inputs" value={dob} onChange={(e) => setDob(e.target.value)} /><br />
              <label htmlFor="salary">Salary</label>
              <input type="number" id="salary" className="form-inputs" placeholder="Enter salary" value={salary} onChange={(e) => setSalary(e.target.value)} /><br />
              <label htmlFor="location">Location</label>
              <input type="text" id="location" className="form-inputs" placeholder="Enter Address" value={pata} onChange={(e) => setPata(e.target.value)} /><br />
             

              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" className="form-inputs" placeholder="Enter Number" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-inputs" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              <button className="add-subadmin-submit-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSubAdmin;
