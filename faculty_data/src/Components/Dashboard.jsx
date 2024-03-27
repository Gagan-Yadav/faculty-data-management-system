import "../Styling/Dashboard.css"
import Manager from "../assets/manager.png"
import Dashbord from "../assets/dashboard.png"
import Subadmin from "../assets/people.png"
import College from "../assets/college.png"
import Faculty from "../assets/faculty.png"
import Pages from "../assets/pages.png"
import Setting from "../assets/settings.png"
import Leftarrow from "../assets/left-arrow.png"
import About from "../assets/about.png"
import Contact from "../assets/contacts.png"
import Key from "../assets/key.png"
import Logout from "../assets/logout.png"
import User from "../assets/user.png"
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
                    <div  className="menu-items">
                        <div className="menu-items-left-side">
                        <img src={Dashbord} alt="" style={{width:"8%"}}/><span className="dashboard-text">Dashboard</span>   
                            </div>   
                    </div>
                    <div  className="menu-items">
                            <div className="menu-items-left-side">
                            <img src={Subadmin} alt="" style={{width:"12%"}}/><span className="dashboard-text">Sub-Admins</span>

                            </div>
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className="left-arrow"/>
                            </div>
                    </div>
                    <div className="show-and-hide-menu">
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Add</span>
                        </div>
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Manage</span>
                        </div>
                    </div>
                    <div  className="menu-items">
                         <div className="menu-items-left-side">
                         <img src={College} alt="" style={{width:"12%"}}/><span className="dashboard-text">Colleges</span>
                         </div>
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className="left-arrow"/>
                            </div>
                    </div>
                    <div className="show-and-hide-menu">
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Add</span>
                        </div>
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Manage</span>
                        </div>
                    </div>
                    <div  className="menu-items">
                            <div className="menu-items-left-side">
                            <img src={Faculty} alt="" style={{width:"12%"}}/><span className="dashboard-text">Faculty</span>
                            </div>
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className="left-arrow"/>
                            </div>
                    </div>
                    <div className="show-and-hide-menu">
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Add</span>
                        </div>
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Manage</span>
                        </div>
                    </div>
                    <div  className="menu-items">
                           <div className="menu-items-left-side">
                           <img src={Pages} alt="" style={{width:"12%"}}/><span className="dashboard-text">Pages</span>
                           </div>
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className="left-arrow"/>
                            </div>
                    </div>
                    <div className="show-and-hide-menu">
                        <div className="add-manage-circle">
                        <img src={About} alt="" style={{width:"10%"}}/><span>About us</span>
                        </div>
                        <div className="add-manage-circle">
                          < img src={Contact} alt="" style={{width:"10%"}}/><span>Contact us</span>
                        </div>
                    </div>
                    <div  className="menu-items">
                            <div className="menu-items-left-side">
                            <img src={Setting} alt="" style={{width:"12%"}}/><span className="dashboard-text">Account Setting</span>    
                            </div>          
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className="left-arrow"/>          
                            </div>        
                    </div>

                    <div className="show-and-hide-menu">
                        <div className="add-manage-circle">
                        <img src={User} alt="" style={{width:"9%"}}/><span>Profile</span>
                        </div>
                        <div className="add-manage-circle">
                        <img src={Key} alt="" style={{width:"9%"}}/><span>Change Password</span>
                        </div>
                        <div className="add-manage-circle">
                        <img src={Logout} alt="" style={{width:"9%"}}/><span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="right-container"></div>
        </div>
    </>
}
export default Dashboard