import { Link } from "react-router-dom"
import "../Styling/Footer.css"
function Footer(){
           return <>
            <div id="footer-main-container">
                    <div>
                        <h1>About Us</h1><hr />
                        <p id="about-us">Welcome to the Faculty Data Management System (FDMS), your comprehensive solution for streamlining faculty-related processes
                             within educational institutions. At FDMS, we understand the critical role that faculty members play in shaping the academic landscape.
                              Our platform is meticulously crafted to empower institutions with the tools necessary to optimize faculty management, enhance collaboration,
                               and foster academic excellence.</p><hr />
                    </div>
                    <div>
                        <h1>Information Link</h1><hr />
                        <div>
                          <Link to="/" className="links"><div>Home</div></Link><hr />
                          <Link to="/about" className="links"><div>About</div></Link><hr />
                          <Link to="/faculties" className="links"><div>Faculties</div></Link><hr />
                          <Link to="/" className="links"><div>Contact</div></Link><hr />
                          <Link to="/admin" className="links"><div>Admin</div></Link><hr />
                        </div>
                    </div>
                    <div>
                        <h1>Contact Details</h1><hr />
                        <p>email</p><hr />
                        <p>address</p><hr />
                        <p>phone number</p><hr />
                    </div>
            </div>
            <div className="footer-script">
                 <p>Online Faculty Data Management System, ©2024 Aman Yadav,Beekseh Ahirwar, Durgesh Kumar and Uday Meena | All Rights Reserved</p>
            </div>
           </>
}
export default Footer