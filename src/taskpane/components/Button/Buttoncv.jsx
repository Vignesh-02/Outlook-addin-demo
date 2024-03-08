

import React, { useState, useEffect } from "react";
import Customer from "../Customer/Customer";
import Vendor from "../Vendor/Vendor";
import "./Buttoncv.css";
// import lottie from "lottie-web";
// import animationData from "./dot.json";

const Buttoncv = ({
  isPopupOpenRegenerate,
  togglePopupRegenerate,
  isPopupOpen1,
  togglePopup1,
  isPopupOpen2,
  togglePopup2,
  customerBody,
  vendorBody,
  vendordetail,
}) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  // const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const startTime = new Date().getTime();

    const timeout = setTimeout(() => {
      setLoadingPercentage(100);
      setShowAnimation(false); // Hides animation when loading completes
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

  // useEffect(() => {
  //   const anim = lottie.loadAnimation({
  //     container: document.getElementById("animationContainer"),
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //   });

  //   return () => {
  //     anim.destroy();
  //   };
  // }, []);

  return (
    <div className="cvButtondiv">
     {
       <div className="L1">
       <div className="L2"></div>
       <div className="L3"></div>
       <div className="L4"></div>
     </div>
     }
      {loadingPercentage < 100 ? (
        <div id="loadingProgress">
          {/* Loading... {loadingPercentage.toFixed(2)}% */}
          Loading... {loadingPercentage.toFixed(0)}% {/* Removed decimal points */}
        </div>
      ) : (
        <>
          <Customer
            isPopupOpenRegenerate={isPopupOpenRegenerate}
            togglePospupRegenerate={togglePopupRegenerate}
            isOpen={isPopupOpen1}
            togglePopup={togglePopup1}
            customerBody={customerBody}
          />
          <Vendor
            isPopupOpenRegenerate={isPopupOpenRegenerate}
            togglePopupRegenerate={togglePopupRegenerate}
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
