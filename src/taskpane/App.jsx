import * as React from "react";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Header from "./components/Header";
import HeroList from "./components/HeroList";
import TextInsertion from "./components/TextInsertion";
import { makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Delegate from "./Pages/Delegate/Delegate";
// import Home from "./Pages/Home/Home";
// import Login from "./Login";
// import Home from "./Home"/;
// import Queue from "./Queue";
import Login from "./components/Login";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props) => {
  // testing mirroring
  const [emailAddress, setEmailAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [replyMail, setReplyEmail] = useState(true);
  const [val, setVal] = useState("");

  const [emailDetails, setEmailDetails] = useState({
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

  useEffect(() => {
    // Function to fetch email content
    const getEmailContent = async () => {
      try {
        if (Office.context.mailbox.item) {
          const item = Office.context.mailbox.item;
          const emailAddress = Office.context.mailbox.userProfile.emailAddress;
          const displayName = Office.context.mailbox.userProfile.displayName;

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
          setUserName(displayName);
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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setVal(json.title);
      });

    // const replyToEmail = () => {
    //     Office.context.mailbox.item.displayReplyForm({
    //       'htmlBody': 'Thanks for your email!<br><br>', // Prepend your reply message with original email body below
    //       // Optionally, you can add other fields like cc, attachments, etc.
    //     });
    //   }

    //   Office.onReady((info) => {
    //     if (info.host === Office.HostType.Outlook) {
    //         replyToEmail();
    //       }

    // });
  }, []);

  // Office.context.mailbox.getCallbackTokenAsync({isRest: true}, function(result){
  //     if (result.status === "succeeded") {
  //       var accessToken = result.value;

  //       // Use the access token.
  //       getCurrentItem(accessToken);
  //     } else {
  //       // Handle the error.
  //     }
  //   });

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
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/home" component={Home}  emailBody={emailBody}/> */}
        {/* <Route exact path="/queue" component={Queue} /> */}
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
