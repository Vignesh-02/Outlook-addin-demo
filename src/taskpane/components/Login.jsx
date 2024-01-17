import React, { useState } from "react";
import "./styles/Login.css"
import logo from "../../../public/logo1.png";
import "@fontsource/orbitron"; // Defaults to weight 400
import "@fontsource/orbitron/400.css"; // Specify weight
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router-dom";



const Login = () => {

    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const handleLogin = () => {
      // Your login logic goes here
      console.log("Login button is clicked");
      history.push('/home');
    };


    
  return (
    <>
      <div className="page">
        <div className="cont1">
          <div id="image">
            <img src={logo} alt="Logo" />
          </div>
          <div className="cont1-child2">
            <div id="heading">Login</div>
            <div id="para">
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Orci in pellentesque.
            </div>
          </div>
        </div>

        <div className="cont2">
          <label htmlFor="organization" className="label">
            Organization
          </label>
          <select name="org" id="org" className="input">
            <option>Select your organization</option>
            <option>Onelab Ventures</option>
            <option>Turnkey</option>
          </select>

          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder="Enter email"
          />

          <label htmlFor="password" className="label">
            Password
          </label>

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <i
              className={`password-toggle ${showPassword ? "visible" : ""}`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </i>
          </div>

          <div className="forgot">
            <div id="forgot-heading">Forgot Password ?</div>
            <div id="forgot-anchor">
              <a href="#">Click Here</a>
            </div>
          </div>
          <button onClick={handleLogin} id="loginBtn" type="submit">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
