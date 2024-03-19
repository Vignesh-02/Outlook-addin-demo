import React, { useState, useEffect } from "react";
import Customer from "../Customer/Customer";
import Vendor from "../Vendor/Vendor";
import "./Buttoncv.css";

const Buttoncv = ({
  // isPopupOpenRegenerate,
  // togglePopupRegenerate,
  isPopupOpen1,
  togglePopup1,
  isPopupOpen2,
  togglePopup2,
  customerBody,
  vendorBody,
  vendordetail,
}) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const startTime = new Date().getTime();

    const timeout = setTimeout(() => {
      setLoadingPercentage(100);
      setShowLoader(false); // Hides loader when loading completes
    }, 19000);

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      const percentage = Math.floor((elapsedTime / 19000) * 100); // Updated total loading time
      
      setLoadingPercentage(percentage > 100 ? 100 : percentage);
    }, 100);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="cvButtondiv">
      <div className="loadingAndL1ToL4">
        {showLoader && (
          <div className="L1">
            <div className="L2"></div>
            <div className="L3"></div>
            <div className="L4"></div>
          </div>
        )}
        {loadingPercentage < 100 && (
          <div id="loadingProgress">
            Loading... {loadingPercentage.toFixed(0)}% {/* Removed decimal points */}
          </div>
        )}
      </div>
      {loadingPercentage === 100 && (
        <>
          <Customer
            // isPopupOpenRegenerate={isPopupOpenRegenerate}
            // togglePospupRegenerate={togglePopupRegenerate}
            isOpen={isPopupOpen1}
            togglePopup={togglePopup1}
            customerBody={customerBody}
          />
          <Vendor
            // isPopupOpenRegenerate={isPopupOpenRegenerate}
            // togglePopupRegenerate={togglePopupRegenerate}
            isOpen={isPopupOpen2}
            togglePopup={togglePopup2}
            vendorBody={vendorBody}
            vendordetail={vendordetail}
          />
        </>
      )}
    </div>
  );
};

export default Buttoncv;
