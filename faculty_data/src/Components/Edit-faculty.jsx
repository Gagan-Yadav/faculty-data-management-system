import Dashboard from "./Dashboard"
import { Link} from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import swal from 'sweetalert';
function EditFaculty(){
    let {faculty_id}=useParams()
   let [faculty_name,setFname]=useState("")
   let [gender,setGender]=useState("")
   let [phone,setPhone]=useState("")
   let [designation,setDesignation]=useState("")
   let [department,setDepartment]=useState("")
   let [job_natures,setNature]=useState("")
   let [date_of_joining,setDoj]=useState("")

    async function EditF(){
        try {
            let ans=await axios.post("http://localhost:7000/api/faculty/edit-faculty",{
                    faculty_id,
                    faculty_name,
                    gender,
                    phone,
                    designation,
                    department,
                    job_natures,
                    date_of_joining
            })
        } catch (error) {
            console.log(error);
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        swal({
            title: "Are you sure?",
            text: "Do you want to update the details of this faculty!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                EditF()
              swal("Details updated successfully!", {
                icon: "success",
              });
            } 
          });
       
    }
return <>
    <Dashboard/>
                <div className="add-sub-admin">
                   <div className="add-sub-admin-header">
                    <div><span className="sub-admin-heading">Edit Faculty Details</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate">Dashboard</span> </Link>/ <span  className="dashboard-navigate">Edit Faculty Details</span></div>
                   </div>
                   <div id="add-subadmin-form-container">
                                <div className="form-heading-container">
                                        <h3 className="form-heading">Personal Info</h3>
                                </div>
                                <div className="form-details-container">
                                        <form action="" id="add-sub-admin-form" onSubmit={handleSubmit} >
                                                  <label htmlFor="">Faculty Name</label>
                                                <input type="text" name="" id=""  className="form-inputs" placeholder="Enter Faculty Full Name" value={faculty_name} onChange={(e)=>setFname(e.target.value)}/>
                                                <label htmlFor="">Gender</label>
                                                <select name="" id="gender" className="form-inputs" value={gender} onChange={(e)=>setGender(e.target.value)}>
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                              <label htmlFor="">Mobile Number</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br />
                                                <label htmlFor="">Designation</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)}/><br />
                                                <label htmlFor="">Department</label>
                                                <input type="tel" name="" id="" className="form-inputs"  placeholder="Enter Department" value={department} onChange={(e)=>setDepartment(e.target.value)}/><br />
                                                <label htmlFor="">Job Nature</label>
                                                <select name="" id="gender" className="form-inputs"  value={job_natures} onChange={(e)=>setNature(e.target.value)}>
                                                    <option value="">Select Job Nature</option>
                                                    <option value="Contractual">Contractual</option>
                                                    <option value="Permanent">Permanent</option>
                                                </select>
                                                <label htmlFor="">Date of Joining</label>
                                                <input type="date" name="" id="" className="form-inputs"value={date_of_joining} onChange={(e)=>setDoj(e.target.value)} /><br />
                                            
                                        <button className="add-subadmin-submit-button" type="submit">Update</button>
                                        </form>
                                </div>
                   </div>
                </div>
    </>
}
export default EditFaculty