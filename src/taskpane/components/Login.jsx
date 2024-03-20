// import React, { useEffect } from "react";
import React, { useState, useEffect } from "react";
import "./styles/Login.css"
import logo from "../../../public/logo1.png";
import animation from "../../../public/animation.gif";
import "@fontsource/orbitron"; // Defaults to weight 400
import "@fontsource/orbitron/400.css"; // Specify weight
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router-dom";
import lottie from "lottie-web"; // Import Lottie library
import animationData from "./animation.json"; // Import your animation JSON file


const Login = ({ emailAddress, ...props}) => {
    let loginDialog = null;

    // const [selectedOrganization, setSelectedOrganization] = useState("");
      const [loading, setLoading] = useState(true); // State to track loading
      const [selectedOrganization, setSelectedOrganization] = useState(null);


    
    const history = useHistory();
    const [accessToken, setAccessToken] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
  
    

 
    
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    
    
    
    const handleLogin = () => {
      // Your login logic goes here
      console.log("Login button is clicked");
      history.push('/del', { token: accessToken});
    };




    const loginWithOAuth = () => {
        if(selectedOrganization != ""){
            console.log(window.localStorage);
            window.localStorage.setItem('emailAddress', emailAddress);   
            const permittedEmails = ['vigu1401@outlook.com', 'viguito1401@outlook.com', 'brando.m@wise-sales.com', 'onelab_anuradha@cinestox.com', 'anuradhamunde25@outlook.com', 'anumunde123@outlook.com', 'anumunde10@outlook.com'];
            console.log('emailAddress ', emailAddress);

            const parts = emailAddress.split('@');

            // localStorage.setItem('emailAddress', emailAddress);
            // Check if the user's email is in the permittedEmails array
            // !permittedEmails.includes(emailAddress)
            if (parts[1].toLowerCase() === 'outlook.com') {
                const authPage = "https://outlook-addin-v9y9.onrender.com/assets/auth-dialog.html";
                Office.context.ui.displayDialogAsync(authPage, { height: 60, width: 30, promptBeforeOpen: false }, (result) => {
                if (result.status === Office.AsyncResultStatus.Succeeded) {
                    loginDialog = result.value;
                    loginDialog.addEventHandler(Office.EventType.DialogMessageReceived, handleMessageReceived);
                } else {
                    console.error('Failed to open dialog:', result.error);
                }
                });

            //   Redirect to a different page if the email is not permitted
               // Change '/unauthorized' to your desired route
            }
            else{
                history.push('/unauthorized');
            }
            
            
        }else{
            console.log('Choose an organization')
        }
       
  }

  const handleMessageReceived = (arg) => {
    console.log(arg);
    const message = arg.message;
    console.log('test 1')
    console.log(message)
    
    // console.log('Received Message', message);
    // if (message) {
      // Close the dialog window
    //   arg.source.close();
    loginDialog.close();
      // Exchange the authorization code for a token
    //   console.log('exchangeCode is called with code ', message) 
     exchangeCodeForToken(message).then(receivedToken => {
        console.log('Received Token', receivedToken);
        // history.push({
        //   pathname: '/del',
        //   state: { token: receivedToken }
        // });
       return refreshAccessToken(receivedToken)
     })
       .then(token => {
        //            history.push({
        //   pathname: '/del',
        //   state: { token: token }
        // });
        history.push(`/del?token=${token}&selectedOrganization=${selectedOrganization}`);
   
        console.log('test 3');
        }).catch(error => {
        console.error('Error in token exchange:', error);
      });
    //   history.push('/del', );
    console.log('test 3');
    // }
  }

  const refreshAccessToken = (token) => {
    console.log('inside refreshAccess Token code', token)
    const tokenUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    const clientId = "1ce719b8-44a7-4a11-8c4c-e5c9e2e5ba6f";
    // const redirectUri = "https://outlook-addin-v9y9.onrender.com/assets/login.html";
    const clientSecret = "3Bv8Q~lVCrFG1YYgXoA05E~pMwvWLs0fZs5x_a9N"; // Only if required, for web apps

    // Prepare the form data to post
    const formData = new FormData();
    formData.append('client_id', clientId);
    // formData.append('scope', 'Mail.Send');
    // formData.append('code', code);
    // formData.append('code_verifier', '3e2727957a1bd9f47b11ff347fca362b6060941decb4');

    formData.append('refresh_token', token);
    formData.append('grant_type', 'refresh_token');
    // formData.append('client_secret', clientSecret); 
    // Only if required

    // Use fetch or similar to post to the token URL
   return fetch(tokenUrl, {
      method: 'POST',
      body: formData,
    }, {
        headers: {
            origin: "https://outlook-addin-v9y9.onrender.com/assets/login.html"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data', data);
        window.localStorage.setItem('Access Token', data.access_token);   
      console.log('Refreshed Access Token:', data.access_token);
      return data.access_token
    //   setAccessToken(data.access_token);
    //   console.log('Access Token', accessToken)
      // Here you can store the token securely and use it to make API calls
    })
    .catch(error => console.error('Error fetching token:', error));
  }

  const exchangeCodeForToken = (code) => {
    console.log('inside exchange code', code)
    const tokenUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    const clientId = "1ce719b8-44a7-4a11-8c4c-e5c9e2e5ba6f";
    const redirectUri = "https://outlook-addin-v9y9.onrender.com/assets/login.html";
    const clientSecret = "3Bv8Q~lVCrFG1YYgXoA05E~pMwvWLs0fZs5x_a9N"; // Only if required, for web apps

    // Prepare the form data to post
    const formData = new FormData();
    formData.append('client_id', clientId);
    formData.append('scope', 'Mail.Send Mail.ReadWrite Mail.Read');
    formData.append('code', code);
    formData.append('code_verifier', '3e2727957a1bd9f47b11ff347fca362b6060941decb4');

    formData.append('redirect_uri', redirectUri);
    formData.append('grant_type', 'authorization_code');
    // formData.append('client_secret', clientSecret); 
    // Only if required

    // Use fetch or similar to post to the token URL
   return fetch(tokenUrl, {
      method: 'POST',
      body: formData,
    }, {
        headers: {
            origin: "https://outlook-addin-v9y9.onrender.com/assets/login.html"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data', data);
      console.log('Token:', data.refresh_token);
      return data.refresh_token
    //   setAccessToken(data.access_token);
    //   console.log('Access Token', accessToken)
      // Here you can store the token securely and use it to make API calls
    })
    .catch(error => console.error('Error fetching token:', error));
  }

  useEffect(() => {
    // Load animation on component mount
    const anim = lottie.loadAnimation({
      container: document.getElementById("animation"), // Specify the container for the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData, // Pass the animation data from the JSON file
    });

    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false); // After the timeout, set loading to false
      anim.stop(); // Stop the animation after 2 seconds
    }, 2300); // Change 2300 to the desired delay time in milliseconds

    // Clean up the timeout to avoid memory leaks
    return () => {
      clearTimeout(timeout);
      anim.destroy();
    };
  }, []);

  

//   const handleCrossClick = () => {
//     // Close the extension when the cross is clicked
//     window.close();
//   };

const handleOrganizationChange = (event) => {
  setSelectedOrganization(event.target.value);
};

  return (
    <>
     {loading ? ( // Display the animation while loading
        <div id="animation" style={{ width: "320px", height: "568px"}} />
      ) : (
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
                <select className="loginSelect" onChange={handleOrganizationChange}>
                  <option value="" disabled hidden>Select an Organization</option>
                  <option value="Onelab Ventures">Onelab Ventures</option>
                  <option value="Wise Sales">Wise Sales</option>
                  <option value="Interstate Advanced Materials">Interstate Advanced Materials</option>
                </select>
              </div>
            </div>
          </div>
          <div  onClick={loginWithOAuth} className={`GoogleOAuth ${!selectedOrganization && "disabled"}`}>
            {/* <div className="OAuth">
              <img src={GoogleImage} alt="Google Logo" />
            </div> */}
            <div  className="OAuth-text">Sign In with Outlook</div>
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
        )}
    </>
  );
};

export default Login;
