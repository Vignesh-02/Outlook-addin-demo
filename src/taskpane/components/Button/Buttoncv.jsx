/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
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
  customerBody,
  setCustomerBody,
  vendorBody,
  vendordetail

}) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show loader until both customerBody and vendordetail are available
    if (customerBody && vendordetail) {
        setShowLoader(false);
    }
}, [customerBody, vendordetail]);



  return (
    <div className="cvButtondiv">
       {showLoader ? (
                <div className="loader">
                    {/* Loading... */}
                </div>
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
