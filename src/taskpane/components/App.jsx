import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import HeroList from "./HeroList";
import TextInsertion from "./TextInsertion";
import { makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home";
import Login from "./Login";


const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props) => {
    // const [data, setData] = useState('hello');

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

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>

  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
