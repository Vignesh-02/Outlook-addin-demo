// import React, { useEffect } from "react";
import React, { useState } from "react";
import "./styles/Login.css"
import logo from "../../../public/logo1.png";
import animation from "../../../public/animation.gif";
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
      history.push('/del');
    };

    const loginWithOAuth = () => {

    
    const authPage = "https://outlook-addin-v9y9.onrender.com/auth-dialog.html";
    Office.context.ui.displayDialogAsync(authPage, { height: 60, width: 30, promptBeforeOpen: false }, (result) => {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        dialog.addEventHandler(Office.EventType.DialogMessageReceived, handleMessageReceived);
      } else {
        console.error('Failed to open dialog:', result.error);
      }
    });
  }

  const handleMessageReceived = (arg) => {
    const message = JSON.parse(arg.message);
    if (message.status === 'success') {
      // Close the dialog window
      arg.source.close();
      // Exchange the authorization code for a token
      exchangeCodeForToken(message.code);
    }
  }

  const exchangeCodeForToken = (code) => {
    const tokenUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    const clientId = "1ce719b8-44a7-4a11-8c4c-e5c9e2e5ba6f";
    const redirectUri = "https://https://outlook-addin-v9y9.onrender.com/login.html";
    const clientSecret = "3Bv8Q~lVCrFG1YYgXoA05E~pMwvWLs0fZs5x_a9N"; // Only if required, for web apps

    // Prepare the form data to post
    const formData = new FormData();
    formData.append('client_id', clientId);
    formData.append('scope', 'Mail.Send');
    formData.append('code', code);
    formData.append('redirect_uri', redirectUri);
    formData.append('grant_type', 'authorization_code');
    formData.append('client_secret', clientSecret); // Only if required

    // Use fetch or similar to post to the token URL
    fetch(tokenUrl, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Token:', data.access_token);
      // Here you can store the token securely and use it to make API calls
    })
    .catch(error => console.error('Error fetching token:', error));
  }

  

//   const handleCrossClick = () => {
//     // Close the extension when the cross is clicked
//     window.close();
//   };

  return (
    <>
      <div className="loginPage">
      <img className="globe" src={animation} />

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
            Log in now to unlock the potential for 10x sales growth and transform your sales strategy.

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
            <div onClick={loginWithOAuth} className="OAuth-text">Sign In with Outlook</div>
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
