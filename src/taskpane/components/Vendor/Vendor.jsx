import React from "react";
import "./Vendor.css";
import Pen_Image from "../../../../public/pen.png";
import VendorResponsePopup from "./VendorResponsePopup";
const Vendor = ({  isPopupOpenRegenerate, togglePopupRegenerate,  isOpen, togglePopup}) => {
  return (
    <div>
      <div className="VendorSec2">
        <div className="Vendor1">
          <div className="V2">
            <div className="V3">
              <div className="V4">
                <div className="Vendor-Customer">Vendor</div>
              </div>
            </div>
            <div className="Vendor-Img">
              <img id="PenCV" alt="Logo" src={Pen_Image} onClick={togglePopup}/>
              {
                      isOpen && <VendorResponsePopup isOpen={isOpen} close={togglePopup}/>
                }
          {console.log("Ispopcutomer: ", isOpen)};
            </div>
          </div>
        </div>
        
        <div className="V2-1">
          <div className="V2-2">
            <div className="V2-3">
              <div className="V2-4">
                <div className="V2-5">
                  Hi John,
                  <br />
                  I hope this email finds you well.  My name is Afshan, and I am reaching out to request a quote for some materials that we need for our upcoming project{" "}
                  <br />
                  We are interested in procuring PVC in gray color. The specific dimensions we are looking for are a 1.125 inch RD diameter and a length of 10 feet. We will require 28 lengths of this material.  As we plan our production and budgeting, could you please provide us with the following additional information?  1. Lead time 2. Minimum prepaid freight policy 3. Minimum order quantity (MOQ) 4. Price brackets for the quantity specified  Your prompt response to this request will be highly appreciated as it will help us to move forward with our planning process.
                  <br />
                  Thanks & Regards, Afshan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Quote-DelegateBtnDiv">
        <div className="Quote-DelegateBtn">Regenerate</div>
      </div>
    </div>
  );
};

export default Vendor;
