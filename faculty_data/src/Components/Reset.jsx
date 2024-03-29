import "../Styling/Reset.css"
import { Link, useNavigate } from "react-router-dom"

function Reset(){
    let navigate=useNavigate();
    return <>
    <div className="admin-reset">
    <div className="admin-main-container">
                   <h1 className="admin-header">Admin Login</h1>
                   <hr/>
                   <p>Reset Your Password</p>
                   <input type="text" name="" id="" placeholder="Username" className="username" required/>
                   <input type="text" className="username" required placeholder="Mobile Number" />
                   <input type="password" name="" id=""  placeholder="Password" className="username" required/>
                   <input type="password" name="" id=""  placeholder="Confirm Password" className="username" required/>
                   <div className="singin-button-container">
                       <button className="singin-button" onClick={()=>navigate("/admin")}>Reset</button>
                   </div>
                  <Link to="/admin" className="routes"> <div className="signin">Sign In</div></Link>
           </div>
    </div>
    </>
}
export default Reset