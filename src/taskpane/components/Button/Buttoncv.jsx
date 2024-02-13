/* eslint-disable react/prop-types */
import React from "react";
import Customer from "../Customer/Customer";
import Vendor from "../Vendor/Vendor";
import "./Buttoncv.css";

const Buttoncv = ({
    isPopupOpenRegenerate,
    togglePopupRegenerate,
  isPopupOpen1,
  togglePopup1,
  isPopupOpen2,
  togglePopup2,
}) => {
  return (
    <div className="cvButtondiv">
      <Customer  
      isPopupOpenRegenerate={isPopupOpenRegenerate} togglePopupRegenerate={togglePopupRegenerate}
      isOpen={isPopupOpen1} togglePopup={togglePopup1} />
      {console.log("ispopup", isPopupOpen1)}
      {console.log("istogglepopup", togglePopup1)}
      <Vendor 
      isPopupOpenRegenerate={isPopupOpenRegenerate} togglePopupRegenerate={togglePopupRegenerate}
      isOpen={isPopupOpen2} togglePopup={togglePopup2} />
    </div>
  );
};

export default Buttoncv;