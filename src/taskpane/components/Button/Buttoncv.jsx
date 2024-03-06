// /* eslint-disable react/prop-types */
// import React from "react";
// import Customer from "../Customer/Customer";
// import Vendor from "../Vendor/Vendor";
// import "./Buttoncv.css";

// const Buttoncv = ({
//     isPopupOpenRegenerate,
//     togglePopupRegenerate,
//   isPopupOpen1,
//   togglePopup1,
//   isPopupOpen2,
//   togglePopup2,
//   customerBody,
//   setCustomerBody,
//   vendorBody,
//   vendordetail

// }) => {
//   return (
//     <div className="cvButtondiv">
//       <Customer  
//       isPopupOpenRegenerate={isPopupOpenRegenerate} togglePopupRegenerate={togglePopupRegenerate}
//       isOpen={isPopupOpen1} togglePopup={togglePopup1} customerBody={customerBody} setCustomerBody={setCustomerBody} />
//       {console.log("ispopup", isPopupOpen1)}
//       {console.log("istogglepopup", togglePopup1)}
//       <Vendor 
//       isPopupOpenRegenerate={isPopupOpenRegenerate} togglePopupRegenerate={togglePopupRegenerate}
//       isOpen={isPopupOpen2} togglePopup={togglePopup2} vendorBody={vendorBody}  vendordetail={vendordetail} />
//     </div>
//   );
// };

// export default Buttoncv;



import React, { useState, useEffect } from "react";
import Customer from "../Customer/Customer";
import Vendor from "../Vendor/Vendor";
import "./Buttoncv.css";
import lottie from "lottie-web";
import animationData from "./dot.json";

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
  const [showAnimation, setShowAnimation] = useState(true);

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

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById("animationContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className="cvButtondiv">
      {showAnimation && (
        <div id="animationContainer" className="animation-container" />
      )}
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
