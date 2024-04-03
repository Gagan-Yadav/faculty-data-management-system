import "../Styling/Add-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
function AddFaculty(){
   let [college_name,setCollege]=useState('')
   let [faculty_name,setFname]=useState('')
   let [gender,setGender]=useState('')
   let [email,setEmail]=useState('')
   let [phone,setPhone]=useState('')
   let [designation,setDesignation]=useState('')
   let [department,setDepartment]=useState('')
   let [job_natures,setJobnature]=useState('')
   let [date_of_joining,setDate]=useState('')
   let [qualification,setQualification]=useState('')
   let [image,setImage]=useState(null)
    async function addFaculty(){
        let answer=await axios.post("http://localhost:7000/api/faculty/add-faculty",{
            college_name,
            faculty_name,
            gender,
            email,
            phone,
            designation,
            department,
            job_natures,
            date_of_joining,
            qualification,
            image
        })
        if(answer.status==200){
            alert("Faculty added successfully")
        }
    }
    function handleSubmit(){
        addFaculty()
    }
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
                                        <form action="" id="add-sub-admin-form" onSubmit={handleSubmit}>
                                                <label htmlFor="">College Name</label>
                                                <input type="text" name="" id="" className="form-inputs"  placeholder="Enter College Name"  value={college_name} onChange={(e)=>setCollege(e.target.value)}/>
                                                <label htmlFor="">Faculty Name</label>
                                                <input type="text" name="" id=""  className="form-inputs" placeholder="Enter Faculty Full Name" value={faculty_name} onChange={(e)=>setFname(e.target.value)}/>
                                                <label htmlFor="">Gender</label>
                                                <select name="" id="gender" className="form-inputs" value={gender} onChange={(e)=>setGender(e.target.value)}>
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                                <label htmlFor="">Email address</label>
                                                <input type="email" name="" id=""  className="form-inputs" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
                                                <label htmlFor="">Mobile Number</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br />
                                                <label htmlFor="">Designation</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)}/><br />
                                                <label htmlFor="">Department</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Department" value={department} onChange={(e)=>setDepartment(e.target.value)}/><br />
                                                <label htmlFor="">Job Nature</label>
                                                <select name="" id="gender" className="form-inputs" value={job_natures} onChange={(e)=>setJobnature(e.target.value)}>
                                                    <option value="">Select Job Nature</option>
                                                    <option value="Contractual">Contractual</option>
                                                    <option value="Permanent">Permanent</option>
                                                </select>
                                                <label htmlFor="">Date of Joining</label>
                                                <input type="date" name="" id="" className="form-inputs" value={date_of_joining} onChange={(e)=>setDate(e.target.value)}/><br />
                                                  <label htmlFor="">Academic Qualification</label>
                                                  <textarea name="" id="" className="form-inputs" placeholder="Academic Qualification" value={qualification} onChange={(e)=>setQualification(e.target.value)}></textarea>
                                                  <label htmlFor="">Profile Pic <span style={{color:"red"}}>(Only jpg | jpeg | png | gif format allowed)</span></label>
                                                <input type="file" name="" id="" className="form-inputs"accept="image/*" value={image} onChange={(e)=>setImage(e.target.files[0])}/><br />
                                           
                                        <button className="add-subadmin-submit-button" type="submit">Submit</button>
                                        </form>
                                </div>
                   </div>
                </div>
    </>
}
export default AddFaculty