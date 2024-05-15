import "../Styling/Admin.css";
import HomeImg from "../assets/home.png";
import Forgot from "../assets/forgot.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { toast } from 'react-toastify';
function Admin() {
  
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  var [message, setMessage] = useState('');
  var [message2, setMessage2] = useState('');
  async function adminProf(res) {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:7000/api/admin/admin-login', {
        username,
        password
      });
      setLoading(false)
      var responseData = response.data; 

      responseData.message=="success"?( toast.success(`Login Successfull!`, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }), navigate(`/admin/dashboard/`)):(setMessage("*Invalid Email or Password"),toast.error(`Login Failed!`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          }))

      // responseData.valid =="true"?(setMessage("")):();
      
      
    } catch (error) {
      console.log(error);
    }
   
  }


  function handleSubmit(e) {
    e.preventDefault()
    adminProf();
  }
function handleInput(){
  setMessage('')
}

  return (
    <div className="admin-login">
  
      <div className="admin-main-container">
        <h1 className="admin-header">Admin Login</h1>
        <hr />
        <p>Sign in to start your session</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Username"
            className="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           onInput={handleInput}
          /><br/>
  
          <br/>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
             <span id="message">{message}</span><br />
          <div className="singin-button-container">
            <button type="submit" className="singin-button">
              Sign In
            </button>
          </div>
        </form>
        <div className="home-and-forgot">
          <Link to="/admin/recovery-password" className="home-icon">
            <p className="forgot-icon">
              <span className="admin-images"><img className="icon" src={Forgot} alt="" style={{width:"7%"}} /></span>Forgot Password
            </p>
          </Link>
          <Link to="/" className="home-icon">
            <p className="home-navigator">
              <span className="admin-images"><img className="icon" src={HomeImg} alt="" style={{width:"7%"}} /></span>Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Admin;
