import "../Styling/Manage-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DeleteIcon from "../assets/delete.png";
import EditIcon from "../assets/edit.png";
import axios from "axios";
import Eye from '../assets/eye.png'
import {useNavigate} from "react-router-dom"
import {useRef} from "react"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import "jspdf-autotable"
import swal from 'sweetalert';
import { toast } from 'react-toastify';

function ManageFaculty() {
    let [show, setShow] = useState(false);
    let {incdata,dataLength,manageFaculty,setIncomingData}=useContext(AuthContext)
  let navigate=useNavigate()
    async function handleDelete(id,faculty_name){
        let confirmed=window.confirm(`Are you sure you want to remove the details of ${faculty_name} faculty?`)
        if(confirmed){
            try {
                await axios.get(`http://localhost:7000/api/faculty/remove-faculty?id=${id}`)
                 setIncomingData(incdata.filter(item=>item.id!==id))
                toast.success(`${faculty_name} Removed Successfully!`, {
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
                console.log(error);
            }
        }
    }
    function handleEdit(id){
        navigate(`/admin/edit-faculty-details/${id}`)
    }
   function handleView(id){
        navigate(`/admin/view-faculty-details/${id}`)
   }
    useEffect(() => {
        manageFaculty();
    }, [incdata]);


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

    return (
        <>
            <Dashboard />
            <div className="manage-sub-admin">
                <div className="manage-sub-admin-header">
                    <div><span className="manage-admin-heading">Manage Faculty</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span className="dashboard-navigate">Home</span></Link>/ <span className="dashboard-navigate">Manage Faculty</span></div>
                </div>
                <div id="manage-subadmin-form-container">
                    <p>Faculty Details</p>
                    <hr />
                    <div className="printing-and-searching">
                        <div className="printing">
                        <div onClick={copyData}>Copy</div>
                        <div onClick={excelFile}>Excel</div>
                        <div onClick={pdfData}>PDF</div>
                        <div onClick={PrintData}>Print</div>
                            <div className="visibility-container">
                                <p className="dropbtn" onClick={() => setShow(!show)}>Column visibility &#9660;</p>
                                <div className="dropdown-content" style={{ display: show ? "block" : "none" }}>
                                    <p>#</p>
                                    <p>Faculty Name</p>
                                    <p>Faculty Gender</p>
                                    <p>Faculty Mobile Number</p>
                                    <p>Faculty Address</p>
                                    <p>Faculty Date of Joining</p>
                                    <p>Added By</p>
                                    <p>Creation Date</p>
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
                                    <th>Faculty Name</th>
                                    <th>Faculty Gender</th>
                                    <th>Faculty Mobile Number</th>
                                    <th>Faculty Address</th>
                                    <th>Faculty Date of Joining</th>
                                    <th>Added By</th>
                                    <th>Creation Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                           {/* {dataLength>0?( */}
                             <tbody>
                             {incdata.map((ele, index) => (
                                 <tr key={index}>
                                     <td>{index + 1}</td>
                                     <td>{ele.faculty_name}</td>
                                     <td>{ele.gender}</td>
                                     <td>{ele.phone}</td>
                                     <td>{ele.address}</td>
                                     <td>{ele.date_of_joining}</td>
                                     <td>pending</td>
                                     <td>{ele.created_at}</td>
                                     <td style={{ textAlign: "center", width: "10%" }}>
                                            <img src={EditIcon} alt="" style={{ width: "15%", margin: "3px" }}  onClick={()=>handleEdit(ele.id)}/>
                                             <img src={DeleteIcon} alt="" style={{ width: "15%", margin: "3px" }} onClick={()=>handleDelete(ele.id, ele.faculty_name)} />
                                             <img src={Eye} alt=""  style={{width:"20%",}} onClick={()=>handleView(ele.id)}/>
                                             </td>
                                 </tr>
                             ))}
                         </tbody>
                           {/* ):(<tbody><div className="no-data-cell" style={{marginLeft:"460%"}}>No data found</div></tbody>)} */}
                        </table>
                    </div>
                    <div className="sub-admin-pagination">
                        <div>
                            <p>Showing 0 to 0 of {dataLength} entries</p>
                        </div>
                        <div className="prev-next-button">
                            <button>Previous</button>
                            <button>Next</button>
                        </div>
                    </div>
                    <hr style={{ paddingBottom: "1%" }} />
                </div>
            </div>
        </>
    );
}

export default ManageFaculty;
