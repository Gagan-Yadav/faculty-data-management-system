import "../Styling/Manage-sub-admin.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import DeleteIcon from "../assets/delete.png"
import EditIcon from "../assets/edit.png"
import axios from "axios";
function ManageCollege() {
  let [show, setShow] = useState(false);
  let {incoming,len,manageCollege,setIncomingData}=useContext(AuthContext)
 
async function handleDelete(college_code,college_name){
         let confirmed=window.confirm(`Are you sure you want to delete ${college_name} college details?`)
         if(confirmed){
          try {
            await axios.get(`http://localhost:7000/api/college/remove-college?college_code=${college_code}`)
            setIncomingData(incoming.filter(item=>item.college_code!==college_code))
            alert(`${college_name} college details deleted successfully`)
          } catch (error) {
            console.log(error);
          }
         }
}

  useEffect(() => {
    manageCollege();
  }, []);

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
              <div>Copy</div>
              <div>CSV</div>
              <div>Excel</div>
              <div>PDF</div>
              <div>Print</div>
              <div className="visibility-container">
                <p className="dropbtn" onClick={() => setShow(!show)}>Column visibility &#9660;</p>
                <div className="dropdown-content" style={{ display: show ? "block" : "none" }}>
                  <p>#</p>
                  <p>College Name</p>
                  <p>College Code</p>
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
            <table className="sub-admin-tabulation" border={1}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>College Name</th>
                  <th>College Code</th>
                  <th>Added By</th>
                  <th>Creation Date</th>
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
                    <td>pending</td>
                    <td>{ele.created_at}</td>
                    <td style={{textAlign:"center",width:"10%"}}>
                                                   <img src={EditIcon} alt=""  style={{width:"15%",margin:"5px"}}/>
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
