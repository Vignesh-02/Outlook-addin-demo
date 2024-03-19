/* eslint-disable react/prop-types */
// import React from "react";
import React, { useState } from "react";
import "./Customer.css"; // Import the CSS file
import Pen_Image from "../../../../public/pen.png";
import CustomerResponsePopup from "./CustomerResponsePopup";
import RegeneratePopup from "../RegeneratePopup/RegeneratePopup";
import Modal from "react-modal";
import Regenerate from "../Regenerate/Regenerate";
const Customer = ({
  // isPopupOpenRegenerate,
  // togglePopupRegenerate,
  isOpen,
  togglePopup,
  customerBody,
  setCustomerBody,
}) => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const togglePopup = () => {
  //          setIsPopupOpen(!isPopupOpen);
  // };

  const [isPopupRegenerate, setIsPopupRegenerate] = useState(false);
  const togglePopupRegenerate = () => {
    console.log("toggle Regenerate");
    setIsPopupRegenerate(!isPopupRegenerate);
    console.log(isPopupRegenerate);
  };
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
              <img id="PenCV" alt="Logo" src={Pen_Image} onClick={togglePopup} />

              {
                <Modal
                  isOpen={isOpen}
                  onRequestClose={togglePopup}
                  className="Modal"
                  // overlayClassName="Overlay"
                  style={{
                    overlay: {
                      position: "fixed",
                      // top: '98px',
                      width: "325px",
                      height: "586px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                  }}
                >
                  <CustomerResponsePopup
                    close={togglePopup}
                    customerBody={customerBody}
                    setCustomerBody={setCustomerBody}
                  />
                </Modal>
              }
              {console.log("Ispopcutomer: ", isOpen)}
            </div>
          </div>
        </div>
        <div className="V2-1">
          <div className="V2-2">
            <div className="V2-3">
              <div className="V2-4">
                <div className="V2-5">{customerBody}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}

      <div className="Quote-DelegateBtnDiv">
        <div className="Quote-DelegateBtn" onClick={togglePopupRegenerate}>
          Regenerate
          {
          isPopupRegenerate && (
            <Modal
            isOpen={isPopupRegenerate}
            onRequestClose={togglePopupRegenerate}
            className="overlayNoRFQ"
          >
            <Regenerate close={togglePopupRegenerate} />
          </Modal>
          )
         }
        </div>
        
      </div>
    </div>
  );
};

export default Customer;
