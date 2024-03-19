import React, { useState } from "react";
import "./Vendor.css";
import Pen_Image from "../../../../public/pen.png";
import Regenerate from "../Regenerate/Regenerate";
import Model from "react-modal";

// import VendorResponsePopup from "./VendorResponsePopup";
const Vendor = ({ isOpen, togglePopup, vendordetail }) => {
  // State to keep track of selected vendor
  const [selectedVendor, setSelectedVendor] = useState(null);
  // Filter out the "Customer_quote" key from vendordetail
  const vendors = Object.keys(vendordetail).filter((key) => key !== "Customer_quote");

  
  const [isPopupRegenerate2, setIsPopupRegenerate2] = useState(false);
  const togglePopupRegenerate2 = () => {
    console.log("toggle Regenerate");
    setIsPopupRegenerate2(!isPopupRegenerate2);
    console.log(isPopupRegenerate2);
  };

  return (
    <div className="vendorPage">
      {/* Vendors section */}
      <div className="VendorSec2">
        {/* Vendor 1 */}
        <div className="Vendor1">
          <div className="V2">
            <div className="V3">
              <div className="V4">
                <div className="Vendor-Customer">Vendor</div>
              </div>
            </div>
            <div className="Vendor-Img">
              <img id="PenCV" alt="Logo" src={Pen_Image} onClick={togglePopup} />
              {/* {isOpen && (
                <VendorResponsePopup isOpen={isOpen} close={togglePopup} />
              )} */}
            </div>
          </div>
        </div>
        {/* Vendor content section */}
        <div className="vendorSecB">
          <div className="vendorSecB-1">
            <div className="vendorSecB-2">
              <div className="vendorSecB-3">
                {/* Iterate over vendors */}
                {vendors.map((vendor, index) => (
                  <div
                    className={`vendorSecB-4 ${selectedVendor === vendor ? "selected" : ""}`}
                    key={index}
                    onClick={() => setSelectedVendor(vendor)}
                  >
                    <div className="vendorSecB-4b">
                      <div className="vendorSecB-4c">{vendor.replace("_", " ")}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Vendor email content */}
              <div className="vendorSecB-Email">
                <div className="vendorSecB-EmailCont">
                  {/* Display selected vendor email body */}
                  {selectedVendor && (
                    <div dangerouslySetInnerHTML={{ __html: vendordetail[selectedVendor].Body }}></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="vendor-footer">
        <div className="vendor-footer-btn" onClick={togglePopupRegenerate2}>
          Regenerate
          {
          isPopupRegenerate2 && (
            <Model
            isOpen={isPopupRegenerate2}
            onRequestClose={togglePopupRegenerate2}
            className="overlayNoRFQ"
          >
            <Regenerate close={togglePopupRegenerate2} />
          </Model>
          )
         }
        </div>
      </div>
    </div>
  );
};
export default Vendor;
