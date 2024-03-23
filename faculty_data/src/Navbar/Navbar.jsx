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
                        <div>HOME</div>
                        <div>ABOUT</div>
                        <div>FACULTIES</div>
                        <div>ADMIN</div>
            </div>
          </div>
          <Slider/>
      </nav>
    </>
}
export default Navbar;