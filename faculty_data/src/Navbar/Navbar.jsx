import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import "../Styling/Navbar.css"
import Footer from "../Components/Footer";
function Navbar(){
    return <>
      <nav>
          <div id="main-container-navbar">
            <div className="nav-logo">
                      <div><b>Online College</b><br/>Faculty Data Management System</div>
            </div>
            <div className="nav-items">
                       <Link to="/"  className="routing-link"><div className="items">HOME</div></Link>
                       <Link to="/about"  className="routing-link"><div className="items">ABOUT</div></Link>
                        <Link to="/faculties"  className="routing-link"><div className="items">FACULTIES</div></Link>
                        <Link to="/contact" className="routing-link"><div className="items">CONTACT</div></Link>
                        <Link to="/admin"  className="routing-link"><div className="items">ADMIN</div></Link>
            </div>
          </div>
          <Slider/>
          <Footer/>
      </nav>
    </>
}
export default Navbar;