import React from "react";
import "./Topbar.css";
import cross from "../../../../public/Vector.png";
import interState from "../../../../public/interstate.png";


const Topbar = () => {
  return (
    <div className="contactPage-topDiv">
      <img src={interState} />
      <div className="contactPage-topDiv-Child1">
        <img src={cross} />
      </div>
    </div>
  );
};

export default Topbar;
