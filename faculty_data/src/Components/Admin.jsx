import "../Styling/Admin.css"
import HomeImg from "../assets/home.png"
import Forgot from "../assets/forgot.png"
import {Link} from "react-router-dom"
function Admin(){
    return <>
     <div className="admin-login">
     <div className="admin-main-container">
                    <h1 className="admin-header">Admin Login</h1>
                    <hr/>
                    <p>Sign in to start your session</p>
                    <input type="text" name="" id="" placeholder="Username" className="username" required/>
                    <input type="password" name="" id=""  placeholder="Password" className="username" required/>
                    <div className="singin-button-container">
                     
                        <button className="singin-button"><Link to="/admin/dashboard" className="singin-routing">Sign In</Link></button>
                    </div>
                    <div className="home-and-forgot">
                        <p className="forgot-icon"><span className="admin-images"><img src={Forgot} alt="" style={{width:"7%"}} /></span>Forgot Password</p>
                      <Link to="/" className="home-icon"><p><span className="admin-images"><img src={HomeImg} alt="" style={{width:"7%"}} /></span>Home</p></Link>
                    </div>
            </div>
     </div>
    </>
}
export default Admin