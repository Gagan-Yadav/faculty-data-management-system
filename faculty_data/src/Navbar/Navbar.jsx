import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import "../Styling/Navbar.css"
function Navbar(){
    return <>
      <nav>
          <div id="main-container-navbar">
            <div className="nav-logo">
                      <div><b>Online College</b><br/>Faculty Data Management System</div>
            </div>
            <div className="nav-items">
                       <Link to="/"><div>HOME</div></Link>
                       <Link to="/about"><div>ABOUT</div></Link>
                        <Link to="/faculties"><div>FACULTIES</div></Link>
                        <Link to="admin-login"><div>ADMIN</div></Link>
            </div>
          </div>
          <Slider/>
      </nav>
    </>
}
export default Navbar;