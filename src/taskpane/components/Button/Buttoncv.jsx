/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Customer from "../Customer/Customer";
import Vendor from "../Vendor/Vendor";
import "./Buttoncv.css";
import animationData from "./per.json";
import lottie from "lottie-web";

const Buttoncv = ({
    isPopupOpenRegenerate,
    togglePopupRegenerate,
  isPopupOpen1,
  togglePopup1,
  isPopupOpen2,
  togglePopup2,
  customerBody,
  setCustomerBody,
  vendorBody,
  vendordetail

}) => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById("animationCV"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  
    const timeout = setTimeout(() => {
      setLoading(false);
      anim.stop();
    }, 5000);
  
    return () => {
      clearTimeout(timeout);
      anim.destroy();
    };
  }, []);



  return (
    <div className="cvButtondiv">
      {loading ? (
        <div id="animationCV" />
      ) : (
                <>
      <Customer  
      isPopupOpenRegenerate={isPopupOpenRegenerate} togglePopupRegenerate={togglePopupRegenerate}
      isOpen={isPopupOpen1} togglePopup={togglePopup1} customerBody={customerBody} setCustomerBody={setCustomerBody} />
      {console.log("ispopup", isPopupOpen1)}
      {console.log("istogglepopup", togglePopup1)}
      <Vendor 
      isPopupOpenRegenerate={isPopupOpenRegenerate} togglePopupRegenerate={togglePopupRegenerate}
      isOpen={isPopupOpen2} togglePopup={togglePopup2} vendorBody={vendorBody}  vendordetail={vendordetail} />
       </>
      )}
    </div>
  );
};

export default Buttoncv;
