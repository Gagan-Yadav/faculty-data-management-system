import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "../Styling/Add-sub-admin.css";
import { AuthContext } from "../Context/AuthContext";

function AddSubAdmin() {
  let [username, setUsername] = useState('');
  let [fullname, setFull] = useState('');
  let [address, setAddress] = useState('');
  let [phone, setPhone] = useState('');
  let [password, setPassword] = useState('');
  let naviage=useNavigate()
  let {answer}=useContext(AuthContext)
  async function addSubAdmin() {
    try {
      let ans = await axios.post("http://localhost:7000/api/sub-admin/add-sub-admin", {
        username,
        fullname,
        address,
        phone,
        password
      });
     if(ans.data.status==400){
      
      alert(ans.data.message)
     }
    else  if(ans.status==200 && ans.data.status!==400){
        alert("Sub Admin Added Successfully")
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
