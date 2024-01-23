import * as React from "react";
import  { useEffect, useState } from 'react';

import PropTypes from "prop-types";
import Header from "./Header";
import HeroList from "./HeroList";
import TextInsertion from "./TextInsertion";
import { makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";





import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home";
import Login from "./Login";
import Home from "./Home";


const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props) => {
    const [emailItem, setEmailItem] = useState('');

    useEffect(() => {
        Office.context.mailbox.item.customProperties.refreshAsync(function (asyncResult) {
            if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                console.error("Failed to refresh custom properties: " + asyncResult.error.message);
            } else {
                const properties = asyncResult.value;
                const myPropertyValue = properties.get("emailItem");
                setEmailItem(myPropertyValue);
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
    <div>
        Custom Property Value: {emailItem}
    </div>

    // <Router>
    //     <Switch> {/* Use Switch to render the first Route that matches the location */}
    //         <Route exact path="/" component={Login} />
    //         <Route exact path="/home" component={Home} />

    //         {/* Add other Routes here as needed */}
    //     </Switch>
    // </Router>

  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
