import "../Styling/Admin.css";
import HomeImg from "../assets/home.png";
import Forgot from "../assets/forgot.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Admin() {
  let navigate = useNavigate();
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  async function adminProf() {
    try {
      await axios.post('http://localhost:7000/api/admin/admin-login', {
        username,
        password
      });
     console.log("login successful");
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    navigate("/admin/dashboard");
  }

  return (
    <div className="admin-login">
      <div className="admin-main-container">
        <h1 className="admin-header">Admin Login</h1>
        <hr />
        <p>Sign in to start your session</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="singin-button-container">
            <button type="submit" className="singin-button">
              Sign In
            </button>
          </div>
        </form>
        <div className="home-and-forgot">
          <Link to="/admin/recovery-password" className="home-icon">
            <p className="forgot-icon">
              <span className="admin-images"><img src={Forgot} alt="" style={{width:"7%"}} /></span>Forgot Password
            </p>
          </Link>
          <Link to="/" className="home-icon">
            <p className="home-navigator">
              <span className="admin-images"><img src={HomeImg} alt="" style={{width:"7%"}} /></span>Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
