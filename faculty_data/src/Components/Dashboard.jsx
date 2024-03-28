import "../Styling/Dashboard.css"
import Manager from "../assets/manager.png"
import Dashbord from "../assets/dashboard.png"
import Subadmin from "../assets/people.png"
import College from "../assets/college.png"
import Faculty from "../assets/faculty.png"
import Pages from "../assets/pages.png"
import Setting from "../assets/settings.png"
import Leftarrow from "../assets/left.png"
import About from "../assets/about.png"
import Contact from "../assets/contacts.png"
import Key from "../assets/key.png"
import Logout from "../assets/logout.png"
import User from "../assets/user.png"
import { useState } from "react"
import Fullscreen from "../assets/full-screen.png"
import SmallScreen from "../assets/small-screen.png"
import Hamburger from "../assets/hamburger.png"
import { Link } from "react-router-dom"
function Dashboard(){
    let [subadmin,setSubadmin]=useState(false);
    let [college,setCollege]=useState(false);
    let [faculty,setFaculty]=useState(false);
    let [pages,setPages]=useState(false);
    let [setting,setSetting]=useState(false);

    return <>
        <div className="dashboard-main-container">
            <div className="left-container">
                <div className="dashboard-heading">
                    <h2>OCFDMS | Admin</h2>
                </div> <hr />
                <div className="dashboard-admin-logo">
                    <img src={Manager} alt="" style={{width:"15%"}}/>
                    <span className="dashboard-text">admin</span>
                </div><hr />
                <div className="dashboard-items">
                    <div  className="menu-items">
                        <div className="menu-items-left-side">
                        <img src={Dashbord} alt="" style={{width:"8%"}}/><span className="dashboard-text">Dashboard</span>   
                            </div>   
                    </div>
                    <div  className="menu-items" onClick={()=>setSubadmin(!subadmin)}>
                            <div className="menu-items-left-side">
                            <img src={Subadmin} alt="" style={{width:"12%"}}/><span className="dashboard-text">Sub-Admins</span>

                            </div>
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className={subadmin?"left-arrows":"myclass"}/>
                            </div>
                    </div>
                    <div className="show-and-hide-menu" style={{display:subadmin?"block":"none"}}>
                    <Link to='/admin/add-sub-admin'>  <div className="add-manage-circle">
                       <div className="add-button"></div><span>Add</span>
                        </div></Link>
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Manage</span>
                        </div>
                    </div>
                    <div  className="menu-items" onClick={()=>setCollege(!college)}>
                         <div className="menu-items-left-side">
                         <img src={College} alt="" style={{width:"12%"}}/><span className="dashboard-text">Colleges</span>
                         </div>
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className={college?"left-arrows":"myclass"}/>
                            </div>
                    </div>
                    <div className="show-and-hide-menu" style={{display:college?"block":"none"}}>
                       <Link to="/admin/add-college"> <div className="add-manage-circle">
                        <div className="add-button"></div><span>Add</span>
                        </div></Link>
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Manage</span>
                        </div>
                    </div>
                    <div  className="menu-items" onClick={()=>setFaculty(!faculty)}>
                         <div className="menu-items-left-side">
                            <img src={Faculty} alt="" style={{width:"12%"}}/><span className="dashboard-text">Faculty</span>
                            </div>
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className={faculty?"left-arrows":"myclass"}/>
                            </div>
                    </div>
                    <div className="show-and-hide-menu" style={{display:faculty?"block":"none"}}>
                    <Link to="/admin/add-faculty">    <div className="add-manage-circle">
                        <div className="add-button"></div><span>Add</span>
                        </div></Link>
                        <div className="add-manage-circle">
                        <div className="add-button"></div><span>Manage</span>
                        </div>
                    </div>
                    <div  className="menu-items" onClick={()=>setPages(!pages)}>
                           <div className="menu-items-left-side">
                           <img src={Pages} alt="" style={{width:"12%"}}/><span className="dashboard-text">Pages</span>
                           </div>
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className={pages?"left-arrows":"myclass"}/>
                            </div>
                    </div>
                    <div className="show-and-hide-menu" style={{display:pages?"block":"none"}}>
                        <div className="add-manage-circle">
                        <img src={About} alt="" style={{width:"10%"}}/><span>About us</span>
                        </div>
                        <div className="add-manage-circle">
                          < img src={Contact} alt="" style={{width:"10%"}}/><span>Contact us</span>
                        </div>
                    </div>
                    <div  className="menu-items" onClick={()=>setSetting(!setting)} >
                            <div className="menu-items-left-side">
                            <img src={Setting} alt="" style={{width:"12%"}}/><span className="dashboard-text">Account Setting</span>    
                            </div>          
                            <div className="right-side-arrow">
                            <img src={Leftarrow} alt="" style={{width:"50%"}} className={setting?"left-arrows":"myclass"}/>          
                            </div>        
                    </div>

                    <div className="show-and-hide-menu" style={{display:setting?"block":"none"}}>
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
            <div className="right-container">
                             <div className="right-side-sub-container">
                                <div>
                                    <img src={Hamburger} alt="" style={{width:"3%"}}/>
                                </div>
                                <div className="min-max-screen">
                                    <img src={Fullscreen} alt="" style={{width:"3%"}}/>
                                </div>
                             </div>
            
            </div>
        </div>
    </>
}
export default Dashboard