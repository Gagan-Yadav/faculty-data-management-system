import "../Styling/Manage-sub-admin.css"
import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import DeleteIcon from "../assets/delete.png"
import EditIcon from "../assets/edit.png"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Eye from "../assets/eye.png"
import {useRef} from "react"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import "jspdf-autotable"
import swal from 'sweetalert';
import { toast } from 'react-toastify';


function ManageSubadmin(){
    let [show,setShow] =useState(false)
    let {answer,range,getFacultyList,setAnswer}=useContext(AuthContext)
    let navigate=useNavigate()    
    const handleDelete = async (username) => {
        const confirmed = window.confirm(`Are you sure you want to delete ${username} sub-admin?`);
        if (confirmed) {
            try {
                await axios.get(`http://localhost:7000/api/sub-admin/remove-sub-admin?username=${username}`);
                setAnswer(answer.filter(item => item.username !== username));
                toast.success(`${username} Subadmin Deleted Successfully!`, {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    alert(error.response.data.message || "Something went wrong!");
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                    alert("No response received from server!");
                } else {
                    // Something else happened in making the request
                    console.log('Error', error.message);
                    alert("An error occurred while making the request!");
                }
            }
        }
    };
    function handleEdit(userna){
        navigate(`/admin/edit-subadmin-details/${userna}`)
    }
 function handleVIew(uname){
       navigate(`/admin/view-sub-admin-detail/${uname}`)
 }
    useEffect(function(){
                getFacultyList()
    },[])


//ref copy data
let tableRef=useRef(null)
    function copyData(){
        let table=tableRef.current
        let data=''
        for (let row of table.rows) {
            for (let cell of row.cells) {
              data += cell.innerText + '\t';
            }
            data += '\n';
          }

          navigator.clipboard.writeText(data).then(() => {
            swal({
                title: "Table Data Copied!",
                icon: "success",
              });
          }).catch(err => {
            console.error('Failed to copy: ', err);
          });
    }

//excel file

    function excelFile(){
        const table = tableRef.current;
        const worksheet = XLSX.utils.table_to_sheet(table);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    
        // Create a Blob from the workbook output
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        
        // Create a URL for the Blob and trigger a download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'table_data.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    
        swal({
            title: "Good job!",
            text: "Excel file Downloaded!",
            icon: "success",
          });
    }

//PDF data
    function pdfData(){
        const table = tableRef.current;
         const doc = new jsPDF();

    // Use the autotable plugin to convert HTML table to PDF
    doc.autoTable({ html: table });

    // Save the PDF
    doc.save('table_data.pdf');

    swal({
        title: "Good job!",
        text: "PDF File Generated!",
        icon: "success",
      });
    }

// print table
function PrintData(){
    window.print()
}
    return <>
     <Dashboard/>
                <div className="manage-sub-admin">
                   <div className="manage-sub-admin-header">
                    <div><span className="manage-admin-heading">Manage Sub Admins</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate">Home</span> </Link>/ <span  className="dashboard-navigate">Manage Sub Admin</span></div>
                   </div>
                   <div id="manage-subadmin-form-container" >
                                <p>Sub Admin Details</p>
                                <hr />
                                <div className="printing-and-searching">
                                    <div className="printing">
                                        <div onClick={copyData}>Copy</div>
                                        <div onClick={excelFile}>Excel</div>
                                        <div onClick={pdfData}>PDF</div>
                                        <div onClick={PrintData}>Print</div>
                                        <div className="visibility-container">
                                            <p className="dropbtn" onClick={()=>setShow(!show)}>Column visibility &#9660;</p>
                                            <div class="dropdown-content" style={{display:show?"block":"none"}}>
                                                <p>#</p>
                                                <p>Username</p>
                                                <p>Full Name</p>
                                                <p>Email ID</p>
                                                <p>Mobile Number</p>
                                                <p>Reg. Date</p>
                                                <p>Action</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search">
                                        <label htmlFor="">Search:</label>
                                        <input type="search" name="" id="" />
                                    </div>
                                </div>
                    
                         <div className="manage-subadmin-table">
                            <table className="sub-admin-tabulation" border={1} ref={tableRef}>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Full Name</th>
                                        <th>Email ID</th>
                                        <th>Mobile Number</th>
                                        <th>Reg. Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                     
                                    <tbody>
                                    {answer && answer.map((ele,index)=>(
                                             <tr>
                                               <td>{index+1}</td>
                                               <td>{ele.username}</td>
                                               <td>{ele.fullname}</td>
                                               <td>pending</td>
                                               <td>{ele.phone}</td>
                                               <td>{ele.created_at}</td>
                                               <td style={{textAlign:"center",width:"10%"}}>
                                               
                                                   <img src={EditIcon} alt=""  style={{width:"15%",margin:"5px"}} onClick={()=>handleEdit(ele.username)}/>
                                           
                                                   <img src={DeleteIcon} alt="" style={{width:"15%",margin:"5px"}} onClick={()=>handleDelete(ele.username)} />
                                                   <img src={Eye} alt=""  style={{width:"20%",}} onClick={()=>handleVIew(ele.username)}/>
                                                   </td>
                                             </tr>
                               ))}       
                               </tbody>
                            
                            </table>
                            
                         </div>

                         <div className="sub-admin-pagination">
                            <div>
                                <p>Showing 0 to 0 of {range} entries</p>
                            </div>
                            <div className="prev-next-button">
                                <button>Previous</button>
                                <button>Next</button>
                            </div>
                         </div>
                         <hr style={{paddingBottom:"1%"}}/>
                   </div>
                </div>
            
    </>
}
export default ManageSubadmin