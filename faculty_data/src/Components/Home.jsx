import "../Styling/Home.css"
import Dashboard from "./Dashboard"
import { Link, useNavigate } from "react-router-dom"
import Next from "../assets/next.png"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
function Home(){
    let navigate =useNavigate();
    let {len,dataLength,range}=useContext(AuthContext)
        return <>
             <Dashboard/>
                <div className="home-admin">
                   <div className="home-admin-header">
                    <div><span className="sub-admin-heading">Dashboard</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate">Dashboard</span> </Link>/ <span  className="dashboard-navigate">Home</span></div>
                   </div>
                   <div id="home-admin-form-container">
                               <div>
                                <h1>{range}</h1>
                                <p>Sub Admins</p>
                                <div onClick={()=>navigate("/admin/manage-sub-admin")}>
                                    <div><span>More Info</span><img src={Next} alt="" style={{width:"3%"}}/></div>
                                </div>
                               </div>
                               <div>
                                <h1>{dataLength}</h1>
                                <p>Listed Faculities</p>
                                <div onClick={()=>navigate("/admin/manage-faculty")}>
                                    <div><span>More Info</span><img src={Next} alt="" style={{width:"3%"}}/></div>
                                </div>
                               </div>
                               <div>
                                <h1>{len}</h1>
                                <p>Listed Colleges</p>
                                <div onClick={()=>navigate("/admin/manage-college")}>
                                    <div><span>More Info</span><img src={Next} alt="" style={{width:"3%"}}/></div>
                                </div>
                               </div>
                   </div>
                </div>
        </>
}
export default Home