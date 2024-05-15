import "../Styling/Add-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import swal from 'sweetalert';
function AddFaculty(){
   let [college_id,setCollege]=useState('')
   let [faculty_name,setFname]=useState('')
   let [gender,setGender]=useState('')
   let [address,setAddress]=useState('')
   let [phone,setPhone]=useState('')
   let [designation,setDesignation]=useState('')
   let [department,setDepartment]=useState('')
   let [job_natures,setJobnature]=useState('')
   let [date_of_joining,setDate]=useState('')
   let [qualification,setQualification]=useState('')
   let [image,setImage]=useState(null)
   let [salary,setSalary]=useState(0)
   let [dob,setDob]=useState("")
   let [gmail,setGmail]=useState("")
    async function addFaculty(){
        let answer=await axios.post("http://localhost:7000/api/faculty/add-faculty",{
            college_id,
            faculty_name,
            gender,
            address,
            phone,
            designation,
            department,
            job_natures,
            date_of_joining,
            qualification,
            salary,
            dob,
            gmail
        })
        if(answer.status==200){
            let text=`${faculty_name} added as a faculty!`
            swal({
                title: "Good job!",
                text: text,
                icon: "success",
                button: "Ok!",
              });
        }
        
    }
    function handleSubmit(e){
        e.preventDefault()
        addFaculty()
    }
    const handleImageUpload = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage)
      };
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
                                                <label htmlFor="">College ID</label>
                                                <input type="text" name="" id="" className="form-inputs"  placeholder="Enter College ID"  value={college_id} onChange={(e)=>setCollege(e.target.value)}/>
                                                <label htmlFor="">Faculty Name</label>
                                                <input type="text" name="" id=""  className="form-inputs" placeholder="Enter Faculty Full Name" value={faculty_name} onChange={(e)=>setFname(e.target.value)}/>
                                                <label htmlFor="">Gender</label>
                                                <select name="" id="gender" className="form-inputs" value={gender} onChange={(e)=>setGender(e.target.value)}>
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                                <label htmlFor="">Address</label>
                                                <input type="text" name="" id=""  className="form-inputs" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)} /><br />
                                                <label htmlFor="">Mobile Number</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br />
                                                <label htmlFor="">Salary</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Salary" value={salary} onChange={(e)=>setSalary(e.target.value)}/><br />
                                                <label htmlFor="">Date Of Birth</label>
                                                <input type="date" name="" id="" className="form-inputs"  value={dob} onChange={(e)=>setDob(e.target.value)}/><br />
                                                <label htmlFor="">Email</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Email" value={gmail} onChange={(e)=>setGmail(e.target.value)}/><br />
                                              
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
                                                <input type="file" name="" id="" className="form-inputs"accept="image/*" onChange={handleImageUpload}/><br />
                                           
                                        <button className="add-subadmin-submit-button" type="submit">Submit</button>
                                        </form>
                                </div>
                   </div>
                </div>
    </>
}
export default AddFaculty