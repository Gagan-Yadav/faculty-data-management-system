import "../Styling/Manage-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DeleteIcon from "../assets/delete.png"
import EditIcon from "../assets/edit.png"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {useRef} from "react"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import "jspdf-autotable"
import swal from 'sweetalert';
import { toast } from 'react-toastify';
function ManageCollege() {
  let [show, setShow] = useState(false);
  let navigate=useNavigate()
  let {incoming,len,manageCollege,setIncomingData}=useContext(AuthContext)
 
async function handleDelete(college_code,college_name){
         let confirmed=window.confirm(`Are you sure you want to delete ${college_name} college details?`)
         if(confirmed){
          try {
            await axios.get(`http://localhost:7000/api/college/remove-college?college_code=${college_code}`)
            setIncomingData(incoming.filter(item=>item.college_code!==college_code))
            toast.success(`${college_name} college details deleted successfully`, {
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
function handleEdit(college_code){
  navigate(`/admin/edit-college-details/${college_code}`)
}
  useEffect(() => {
    manageCollege();
  }, []);

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
          <div><span className="manage-admin-heading">Manage College</span></div>
          <div>
            <Link to="/admin/dashboard" className="routing-link">
              <span className="dashboard-navigate">Home</span>
            </Link>{" "}
            / <span className="dashboard-navigate">Manage College</span>
          </div>
        </div>
        <div id="manage-subadmin-form-container">
          <p>College Details</p>
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
                  <p>College Name</p>
                  <p>College Code</p>
                  <p>Creation Date</p>
                  <p>Updation Date Date</p>
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
                  <th>College Name</th>
                  <th>College Code</th>
                  <th>Creation Date</th>
                  <th>Updation Date</th>
                  <th>Action</th>
                </tr>
              </thead>
             {
              len>0?(
                <tbody>
                {incoming.map((ele, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ele.college_name}</td>
                    <td>{ele.college_code}</td>
                    <td>{ele.created_at}</td>
                    <td>{ele.updated_at}</td>
                    <td style={{textAlign:"center",width:"10%"}}>
                                                   <img src={EditIcon} alt=""  style={{width:"15%",margin:"5px"}} onClick={()=>handleEdit(ele.college_code)}/>
                                                   <img src={DeleteIcon} alt="" style={{width:"15%",margin:"5px"}} onClick={()=>handleDelete(ele.college_code,ele.college_name)} />
                                                   </td>
                  </tr>
                ))}
              </tbody>
              ):(<tbody><div className="no-data-cell">No data found</div></tbody>)
             }
            </table>
          </div>

          <div className="sub-admin-pagination">
            <div>
              <p>Showing 0 to 0 of {len} entries</p>
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

export default ManageCollege;
