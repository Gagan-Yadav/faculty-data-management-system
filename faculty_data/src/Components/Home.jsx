import "../Styling/Home.css"
import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
import Next from "../assets/next.png"
function Home(){
        return <>
             <Dashboard/>
                <div className="home-admin">
                   <div className="home-admin-header">
                    <div><span className="sub-admin-heading">Dashboard</span></div>
                    <div><Link to="/admin/dashboard" className="routing-link"><span  className="dashboard-navigate" style={{color:"blue"}}>Dashboard</span> </Link>/ <span  className="dashboard-navigate" style={{color:"black"}}>Home</span></div>
                   </div>
                   <div id="home-admin-form-container">
                               <div>
                                <h1>0</h1>
                                <p>Sub Admins</p>
                                <div>
                                    <div><span>More Info</span><img src={Next} alt="" style={{width:"3%"}}/></div>
                                </div>
                               </div>
                               <div>
                                <h1>0</h1>
                                <p>Listed Faculities</p>
                                <div>
                                    <div><span>More Info</span><img src={Next} alt="" style={{width:"3%"}}/></div>
                                </div>
                               </div>
                               <div>
                                <h1>0</h1>
                                <p>Listed Colleges</p>
                                <div>
                                    <div><span>More Info</span><img src={Next} alt="" style={{width:"3%"}}/></div>
                                </div>
                               </div>
                   </div>
                </div>
        </>
}
export default Home