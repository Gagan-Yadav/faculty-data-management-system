import "../Styling/Dashboard.css"
import Manager from "../assets/manager.png"
import Dashbord from "../assets/dashboard.png"
import Subadmin from "../assets/people.png"
import College from "../assets/college.png"
import Faculty from "../assets/faculty.png"
import Pages from "../assets/pages.png"
import Setting from "../assets/settings.png"
import Leftarrow from "../assets/left-arrow.png"
function Dashboard(){
    return <>
        <div className="dashboard-main-container">
            <div className="left-container">
                <div className="dashboard-heading">
                    <h2>OCFDMS | Admin</h2>
                </div> <hr />
                <div className="dashboard-admin-logo">
                    <img src={Manager} alt="" style={{width:"15%"}}/>
                    <span className="dashboard-text">Admin</span>
                </div><hr />
                <div className="dashboard-items">
                    <div  className="dashboard-admin-logo">
                            <img src={Dashbord} alt="" style={{width:"10%"}}/><span className="dashboard-text">Dashboard</span>    
                            <img src={Leftarrow} alt="" style={{width:"8%"}}  className="imagess"/>              
                    </div>
                    <div  className="dashboard-admin-logo">
                            <img src={Subadmin} alt="" style={{width:"10%"}}/><span className="dashboard-text">Sub-Admins</span>
                            <img src={Leftarrow} alt="" style={{width:"8%"}} className="left-arrow"/>
                    </div>
                    <div  className="dashboard-admin-logo">
                            <img src={College} alt="" style={{width:"10%"}}/><span className="dashboard-text">Colleges</span>
                            <img src={Leftarrow} alt="" style={{width:"8%"}} className="left-arrow"/>
                    </div>
                    <div  className="dashboard-admin-logo">
                            <img src={Faculty} alt="" style={{width:"10%"}}/><span className="dashboard-text">Faculty</span>
                            <img src={Leftarrow} alt="" style={{width:"8%"}} className="left-arrow"/>
                    </div>
                    <div  className="dashboard-admin-logo">
                            <img src={Pages} alt="" style={{width:"10%"}}/><span className="dashboard-text">Pages</span>
                            <img src={Leftarrow} alt="" style={{width:"8%"}} className="left-arrow"/>
                    </div>
                    <div  className="dashboard-admin-logo">
                            <img src={Setting} alt="" style={{width:"10%"}}/><span className="dashboard-text">Account Setting</span>          
                            <img src={Leftarrow} alt="" style={{width:"8%"}} className="left-arrow"/>              
                    </div>
                </div>
            </div>
            <div className="right-container"></div>
        </div>
    </>
}
export default Dashboard