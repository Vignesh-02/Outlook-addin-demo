import React, { useState } from "react";
import "./VendorFollowUp.css";
import Pen_Image from "../../../../public/pen.png";
import Regenerate from "../Regenerate/Regenerate";
import Model from "react-modal";

// import VendorResponsePopup from "./VendorResponsePopup";
const VendorFollowUp = ({  }) => {
  
    // props - isOpen, togglePopup, vendordetail

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // State to keep track of selected vendor
  
    const [selectedVendor, setSelectedVendor] = useState(null);
  
  // Filter out the "Customer_quote" key from vendordetail
  
//   const vendors = Object.keys(vendordetail).filter((key) => key !== "Customer_quote");

  
//   const [isPopupRegenerate2, setIsPopupRegenerate2] = useState(false);
  
//   const togglePopupRegenerate2 = () => {
//     console.log("toggle Regenerate");
//     setIsPopupRegenerate2(!isPopupRegenerate2);
//     console.log(isPopupRegenerate2);
//   };

  return (
    <div className="vendorPage">
      {/* Vendors section */}
      <div className="VendorSec2">
        {/* VendorFollowUp 1 */}
        <div className="Vendor1">
          <div className="V2">
            <div className="V3">
              <div className="V4">
                <div className="VendorFollowUp-Customer">Vendor Follow-up Mail</div>
              </div>
            </div>
            <div className="VendorFollowUp-Img">
              <img id="PenCV" alt="Logo" src={Pen_Image} onClick={togglePopup} />
              {/* {isOpen && (
                <VendorResponsePopup isOpen={isOpen} close={togglePopup} />
              )} */}
            </div>
          </div>
        </div>
        {/* VendorFollowUp content section */}
        <div className="vendorSecB">
          <div className="vendorSecB-1">
            <div className="vendorSecB-2">
              <div className="vendorSecB-3">
                {/* Iterate over vendors */}
                {/* {vendors.map((vendor, index) => ( */}
                  
                {/* ${selectedVendor === vendor ? "selected" : ""}`} */}
                  <div
                    className={`vendorSecB-4`} 
                      
                    // key={index}
                    // onClick={() => setSelectedVendor(vendor)}
                  >
                    <div className="vendorSecB-4b">
                      <div className="vendorSecB-4c">Vendor 1
                      {/* {vendor.replace("_", " ")} */}
                      </div>
                    </div>
                  </div>
                {/* ))} */}
              </div>
              {/* VendorFollowUp email content */}
              <div className="vendorSecB-Email">
                <div className="vendorSecB-EmailCont">
                  {/* Display selected vendor email body */}
                  {/* {selectedVendor && (
                    <div dangerouslySetInnerHTML={{ __html: vendordetail[selectedVendor].Body }}></div>
                  )} */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* onClick={togglePopupRegenerate2} for 2nd div */}
      <div className="vendor-footer">
        <div className="vendor-footer-btn" >
          Regenerate
          {/* {
          isPopupRegenerate2 && (
            <Model
            isOpen={isPopupRegenerate2}
            onRequestClose={togglePopupRegenerate2}
            className="overlayNoRFQ"
          >
            <Regenerate close={togglePopupRegenerate2} />
          </Model>
          )
         } */}
        </div>
      </div>
    </div>
  );
};
export default VendorFollowUp;
