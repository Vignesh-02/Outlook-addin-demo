/* eslint-disable react/prop-types */
// import React from "react";
import React, {useState} from 'react';
import "./Customer.css"; // Import the CSS file
import Pen_Image from "../../../public/pen.png";
import CustomerResponsePopup from './CustomerResponsePopup';
import RegeneratePopup from '../RegeneratePopup/RegeneratePopup';
const Customer = ({ isPopupOpenRegenerate, togglePopupRegenerate, isOpen, togglePopup}) => {
  
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const togglePopup = () => {
  //          setIsPopupOpen(!isPopupOpen);
  // };
  return (
    <div>
      <div className="VendorSec">
        <div className="Vendor1">
          <div className="V2">
            <div className="V3">
              <div className="V4">
                <div className="Vendor-Customer">Customer</div>
              </div>
            </div>
            <div className="Vendor-Img">
              <img id="PenCV" alt="Logo" src={Pen_Image} onClick={togglePopup}/>
            
              {
                      isOpen && <CustomerResponsePopup isOpen={isOpen} close={togglePopup}/>
                }
          {console.log("Ispopcutomer: ", isOpen)}
            </div>
          </div>
        </div>
        <div className="V2-1">
          <div className="V2-2">
            <div className="V2-3">
              <div className="V2-4">
                <div className="V2-5">
                Dear Lina, <br />  
                We hope this message finds you well. Thank you for choosing us for your material needs. We appreciate your trust in us and we are committed to providing high-quality materials and services.      We encourage you to check the breakdown of your order costs in the table below for your better understanding. <br />  
                | Material | Dimensions                               | Quantity   | Color | Availability | Individual Cost | Total Cost | Lead Time | Freight Cost |    <br />
                | -------- | ---------------------------------------- | ---------- | ----- | ------------ | --------------- | ---------- | --------- | ------------ |   <br />  
                | PVC      | Diameter: 1.25 inch RD, Length: 10 feet  | 20 lengths | Gray  | IN-STOCK     | 10.0            | 200.0      | 3 days    | $50          |    <br />
                | PVC      | Diameter: 1.125 inch RD, Length: 10 feet | 28 Lengths | Gray  | NOT IN-STOCK | 12.0            | 336.0      | 5 days    | $52          |      <br />
                Below are the additional details for your order:      **PVC**     - Specifications: Diameter: 1.25 inch RD, Length: 10 feet     - Manufacturer: None     - Shipping Location: 12060 31st. Ct. N. St. Petersburg FL 33716   <br />
                Please note that some of the items in your order are currently not in stock. We have already started the process to procure them and we will keep you updated on the progress.   <br />
                We are committed to delivering high-quality materials on time and we assure you that we will do our best to meet the lead time provided.      We are open to negotiation and look forward to your reply.      Once again, thank you for choosing us. If you have any questions or need further clarification, feel free to reach out to us.      <br />
                Best regards, Afshan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}

      <div className="Quote-DelegateBtnDiv">
        <div className="Quote-DelegateBtn" onClick={togglePopupRegenerate}>Regenerate</div>
        {
                      isPopupOpenRegenerate && <RegeneratePopup isOpen={isPopupOpenRegenerate} close={togglePopupRegenerate}/>
        }
                    
      </div>
    </div>
  );
};

export default Customer;
