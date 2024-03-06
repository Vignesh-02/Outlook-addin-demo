import React from "react";
import "./Footer.css";
import W_Image from "../../../../public//w1.png";
import WiseImage2 from "../../../../public//wise3.png";



const Footer = () => {
  return (
    <div className="Quote-Footer">
      <div className="Quote-Footer-Text">Made by</div>
      <div className="Quote-Footer-Images">
        <img
          style={{
            width: "24.57px",
            height: "21.12px",
            left: "0px",
            top: "0px",
            position: "absolute",
          }}
          src={W_Image}
        />

        <img
          style={{
            width: "99.07px",
            height: "11.29px",
            left: "18.11px",
            top: "5.17px",
            position: "absolute",
          }}
          src={WiseImage2}
        />
      </div>
    </div>
  );
};

export default Footer;
