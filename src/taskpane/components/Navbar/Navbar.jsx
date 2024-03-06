import React from "react";
import "./Navbar.css";
import ArrowLeft from "../../../../public/ArrowLeft.png";
import { useHistory } from "react-router-dom";


const Navbar = ({ activePage }) => {
  const history = useHistory()

  return (
    <div className="nav-table2">
      <div className="nav-table2Div">
        <img src={ArrowLeft} alt="Logo" />
      </div>
      <div className="nav-table2-Div2">
        <div
          className={`nav-table2-Div2-a ${activePage === "Delegate" ? "active" : ""}`}
          onClick={() => history.push("/del")}
        >
          <div className="nav-table2-Div2-b">Delegate</div>
        </div>
        <div className={`nav-table2-Div2-a2 ${activePage === "Queue" ? "active" : ""}`}>
          <div className="nav-table2-Div2-b">Queue</div>
        </div>
        <div
          className={`nav-table2-Div2-a2 ${activePage === "Contact" ? "active" : ""}`}
          onClick={() => history.push("/contact")}
        >
          <div className="nav-table2-Div2-b">Contact Us</div>
        </div>
      </div>
      <div className="nav-table2-NameDiv">
        <div className="nav-table2-NameDiv-b">A</div>
      </div>
    </div>
  );
};

export default Navbar;
