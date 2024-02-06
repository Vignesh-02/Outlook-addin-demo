// import React, { useEffect } from "react";
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

  
  

//   const handleCrossClick = () => {
//     // Close the extension when the cross is clicked
//     window.close();
//   };

  return (
    <>
      <div className="loginPage">
      <img className="globe" src="animation.gif" />

        <div className="Ellipse-1"></div>
        <div className="Ellipse-2"></div>

        {/* Container- 1 */}
        <div className="loginCont-1">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "127.90px", height: "129.89px" }}
          />
          <div className="LoginCont1-child2">
            <div className="loginText">Login</div>
            <div className="Logintext2">
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Orci in pellentesque.
            </div>
          </div>
        </div>

        {/* Container - 2 */}
        <div className="loginCont-2">
          <div className="LoginCont2-child1">
            <div className="LoginCont2-child1-a">
              <div className="LoginCont2-child1-a-1">
                <div className="LoginOrganization">Organization </div>
              </div>
              <div className="LoginCont2-child1-a-2">
                <select className="loginSelect">
                  <option>Select your organization</option>
                  <option>Onelab Ventures</option>
                  <option>Turnkey</option>
                </select>
              </div>
            </div>
          </div>
          <div  className="GoogleOAuth">
            {/* <div className="OAuth">
              <img src={GoogleImage} alt="Google Logo" />
            </div> */}
            <div onClick={handleLogin} className="OAuth-text">Sign In with Outlook</div>
          </div>
        </div>

        {/* Cross */}
        {/* <div className="Cross" onClick={handleCrossClick}>
          <img
            src={CrossImage}
            alt="Logo"
            style={{ width: "10px", height: "10px" }}
          />
        </div> */}
      </div>
    </>
  );
};

export default Login;
