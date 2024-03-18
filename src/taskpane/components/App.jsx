import * as React from "react";
import { useCallback, useEffect, useState } from 'react';
// import Office from '@microsoft/office-js';

import PropTypes from "prop-types";
import Header from "./Header";
import HeroList from "./HeroList";
import TextInsertion from "./TextInsertion";
import { makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";

// import jwt_decode from "jwt-decode";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Delegate from "../Pages/Delegate/Delegate";
import Login from "./Login";
import Contact from "./Contact/Contact";
import Queue from "./Queue"

import Unauthorized from "./Unauthorized/Unauthorized";
// import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props) => {


    // const history = useHistory();
    // const [loginDialog, setLoginDialog] = useState(null);

    // const processLoginMessage = useCallback(async (args) => {
    //     let messageFromDialog = JSON.parse(args.message);
    //     if (messageFromDialog.status === 'success') {
    //       loginDialog.close();
    //       console.log(messageFromDialog.result.accessToken);
    //       // You might want to do something with the accessToken here,
    //       // like storing it in your component's state or in global state
    //     } else {
    //       // Something went wrong with authentication or the authorization of the web application.
    //       loginDialog.close();
    //     }
    //   }, [loginDialog]);
    
    //   useEffect(() => {
    //     const dialogLoginUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/login.html`;
    
    //     const openDialog = async () => {
    //       await Office.context.ui.displayDialogAsync(
    //         dialogLoginUrl,
    //         { height: 40, width: 30 },
    //         (result) => {
    //           if (result.status === Office.AsyncResultStatus.Failed) {
    //             // Handle error
    //           } else {
    //             const dialog = result.value;
    //             setLoginDialog(dialog);
    //             dialog.addEventHandler(Office.EventType.DialogMessageReceived, processLoginMessage);
    //           }
    //         }
    //       );
    //     };
    
    //     openDialog();
        
    //     // Clean up the dialog on component unmount
    //     return () => {
    //       if (loginDialog) {
    //         loginDialog.close();
    //       }
    //     };
    //   }, [processLoginMessage]);
    


  // testing mirroring
  const [emailAddress, setEmailAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [replyMail, setReplyEmail] = useState(true);
  const [val, setVal] = useState("");

  const [emailDetails, setEmailDetails] = useState({
    msgId: "",
    from: "",
    senderName: "",
    company: "",
    to: [],
    cc: [],
    subject: "",
    body: "",
    attachments: [],
  });

  
  // useEffect(() => {
  //     Office.onReady(() => {

  //         Office.context.mailbox.item.loadCustomPropertiesAsync(function(asyncResult){
  //             if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
  //                 var customProps = asyncResult.value;
  //                 var emailData = customProps.get("emailBody");
  //                 setEmailItem(emailData);
  //         }
  //         if (asyncResult.status === Office.AsyncResultStatus.Failed) {
  //             console.error("Failed to save custom property: " + asyncResult.error.message);
  //         }
  //           });
  // });

  // }, []);

//   useEffect(() => {

//     const mailData =  {
//         sender_email: "vigu1401@outlook.com",
//         subject: "WISE 1.0",
//         email_body:
//           "Ref Material Type Size Length 23-0002-XX Gray PVC 1.25 RD 20 lengths @ 10' long 23-0004-01 Gray PVC 1.125 RD 28 Lengths @ 10' of 20mm*45mm*89cm long Integral Machining & Engineering 12060 31st. Ct. N. St. Petersburg FL 33716 Cell #: 727-643-8945 Thank you, Abby Rodriguez Integral Machining Cell# 727-643-8945",
//         Wisecustomer: "INTR100",
//         Customerofcustomer: "200",
//         AcctId: "GY248",
//       };

//     fetch("http://50.19.4.239/ml-backend/classify_email/",{
//     method: 'POST', // Specify the method
//     headers: {
//         // Content-Type header is important for sending JSON data
//         'Content-Type': 'application/json',
//         // If authorization is needed, add the Authorization header
//         // 'Authorization': 'Bearer YOUR_TOKEN_HERE'
//     },
//     body: JSON.stringify(mailData)
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json(); // or .text() if the response is text and not JSON
//     })
//       .then((data) => {
//         console.log(json);
//         setVal(json.name); // Process the success response
//       })
//       .catch((error) => {
//         console.error("There was a problem with your fetch operation:", error);
//       });
//   }, []);



  useEffect(() => {
    // Function to fetch email content
    const getEmailContent = async () => {
      try {
        if (Office.context.mailbox.item) {
          const item = Office.context.mailbox.item;
          console.log(item);
          console.log(item.itemId);
          const emailAddress = Office.context.mailbox.userProfile.emailAddress;
          let displayName = Office.context.mailbox.userProfile.displayName;
            displayName = displayName.split(" ")[0]
          const extractBusinessName = (email) => {
            // Split the email by '@' and take the second part (domain part)
            const domainPart = email.split("@")[1];

            // Split the domain part by '.' and take the first part as the business name
            const businessName = domainPart.split(".")[0];

            return businessName;
          };

          const companyName = extractBusinessName(item.from.emailAddress);
          console.log(companyName);

          // item.sender?.displayName ? item.sender.displayName :
          setEmailAddress(emailAddress);
          console.log(emailAddress);
          setUserName(displayName);
          setEmailDetails({
            msgId: item.itemId,
            from: item.from && item.from.emailAddress,
            senderName: item.from && item.from.displayName,

            to: item.to && item.to.map((recipient) => recipient.emailAddress),
            cc: item.cc && item.cc.map((recipient) => recipient.emailAddress),
            company: companyName,
            subject: item.subject,
            body: "", // Body is loaded asynchronously
            attachments: item.attachments,
            
          });
          console.log(emailDetails);

          // Load body content asynchronously
          item.body.getAsync(Office.CoercionType.Text, (result) => {
            if (result.status === Office.AsyncResultStatus.Succeeded) {
              setEmailDetails((prevState) => ({ ...prevState, body: result.value }));
            } else {
              console.error("Error retrieving email body:", result.error);
            }
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    Office.onReady(() => {
      // Check if the Office context is ready and if it's a mail read scenario
      if (Office.context.mailbox && Office.context.mailbox.item) {
        getEmailContent();
      }
    });
  }, []);



  

//   useEffect(() => {

//     function sendMail(accessToken) {
//         // Example function to send an email using Microsoft Graph and the access token
//         const sendMailUrl = 'https://graph.microsoft.com/v1.0/me/sendMail';
//         const emailData = {
//           message: {
//             subject: "Hello from Office Add-in",
//             body: {
//               contentType: "Text",
//               content: "Hello, This is a test email sent from an Office Add-in! from Vigu"
//             },
//             toRecipients: [{
//               emailAddress: {
//                 address: "laserlikefocus000@gmail.com" // Specify the recipient's email address
//               }
//             }]
//           }
          
//         };
      
//         fetch(sendMailUrl, {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(emailData)
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log("Mail sent successfully", data);
//         })
//         .catch(error => {
//           console.error("Error sending mail", error);
//         });
//       }


   
//         // Ensure Office is ready

//         async function getIDToken() {
//             try {
//               let userTokenEncoded = await OfficeRuntime.auth.getAccessToken({
//                 allowSignInPrompt: true,
//               });
//               let userToken = jwt_decode(userTokenEncoded);
//               //you can use oid from userToken
//               console.log('This is the access token ', userTokenEncoded);
//               console.log('This is the decoded access token ', userToken);
//               sendMail(userTokenEncoded);
          
//             } catch (error) {
//               console.log(error);
//             }
//           }

// Office.onReady((info) => {
//   if (info.host === Office.HostType.Outlook) {
//      getIDToken();
//   }
// });


//   }, [])
  
  
  


//   useEffect( () => {
    
//     const fetchToken = async () => {
//         try{
//             let middletierToken = await Office.auth.getAccessToken({
//                 allowSignInPrompt: true,
//                 allowConsentPrompt: true,
//                 forMSGraphAccess: true,
//               });
//               console.log('Access Token', middletierToken )
//                   setAccessToken(middletierToken);
//         }
//         catch(error){

//               console.error("Error retrieving access Token", result.error);
//         }
        
//     };

//     Office.onReady(() => {
//         fetchToken();    
//     });

//   }, [])
  

  useEffect(() => {
    // Office.js ready check
    Office.onReady((info) => {
      if (info.host === Office.HostType.Outlook) {
        // Handler for item change event
        function onItemChanged() {
          try {
            if (Office.context.mailbox.item) {
              const item = Office.context.mailbox.item;

              const extractBusinessName = (email) => {
                // Split the email by '@' and take the second part (domain part)
                const domainPart = email.split("@")[1];

                // Split the domain part by '.' and take the first part as the business name
                const businessName = domainPart.split(".")[0];

                return businessName;
              };

              const companyName = extractBusinessName(item.from.emailAddress);

              console.log(companyName);
              setEmailDetails({
                from: item.from && item.from.emailAddress,
                senderName: item.from && item.from.displayName,
                to: item.to && item.to.map((recipient) => recipient.emailAddress),
                cc: item.cc && item.cc.map((recipient) => recipient.emailAddress),
                company: companyName,
                subject: item.subject,
                body: "", // Body is loaded asynchronously
                attachments: item.attachments,
              });

              console.log(emailDetails);

              // Load body content asynchronously

              // Logic to handle item change
              Office.context.mailbox.item.body.getAsync("text", (result) => {
                if (result.status === Office.AsyncResultStatus.Succeeded) {
                  setEmailDetails((prevState) => ({ ...prevState, body: result.value }));
                } else {
                  console.error("Error retrieving email body:", result.error);
                }
              });
            }
          } catch (error) {
            console.error("Error:", error);
          }
        }

        // Add the event handler
        Office.context.mailbox.addHandlerAsync(Office.EventType.ItemChanged, onItemChanged, (addResult) => {
          if (addResult.status === Office.AsyncResultStatus.Failed) {
            console.error("Failed to add event handler:", addResult.error);
          }
        });
      }
    });
  }, []);

  // useEffect(() => {
  //     try{
  //         fetch('https://dummyjson.com/products/1')
  //         .then(res => res.json())
  //         .then((json) => {
  //             console.log(" Test json data", json);
  //             setData(json.description)
  //         })

  //     }catch(err){
  //         console.log(err);
  //     }
  // }, []);

  const styles = useStyles();
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.
  const listItems = [
    {
      icon: <Ribbon24Regular />,
      primaryText: "The apt tool for wise sales",
    },
    {
      icon: <LockOpen24Regular />,
      primaryText: "Reply to your ISR as soon as possible",
    },
    {
      icon: <DesignIdeas24Regular />,
      primaryText: "visualize your inventory",
    },
  ];

  return (
    // <div className={styles.root}>
    //   <Header logo="assets/logo-filled.png" title={props.title} message="Welcome" />
    //   <HeroList message="Discover what this add-in can do for you today!" items={listItems} />
    //   <TextInsertion />
    // </div>

    // <div>
    //     <Login />
    // </div>
    // <div>
    //     Custom Property Value: {emailBody}
    // </div>

    <Router>
      <Switch>
        {" "}
        {/* Use Switch to render the first Route that matches the location */}
        <Route exact path="/" 
            render={(props) => (
                <Login {...props} emailAddress={emailAddress} />
            )}
        />
        {/* <Route exact path="/home" component={Home}  emailBody={emailBody}/> */}
        <Route exact path="/queue" component={Queue} />

        <Route  path="/unauthorized"
            render={(props) => (
                <Unauthorized {...props} />
            )}
         />


        <Route
          exact
          path="/del"
          render={(props) => (
            <Delegate
              {...props}
              emailDetails={emailDetails}
              emailAddress={emailAddress}
              userName={userName}
              val={val}
            />
          )}
        />
         <Route exact path="/contact" component={Contact} />

        {/* <Route 
                exact
                path="/home" 
                render={(props) => (
                    <Home {...props} emailDetails={emailDetails} emailAddress={emailAddress} userName={userName} val={val} />
                )} 
            />        */}
        {/* Add other Routes here as needed */}
      </Switch>
    </Router>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
