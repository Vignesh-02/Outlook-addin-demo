// import React from 'react'
import React, { useRef, useEffect } from "react";
import "./MailPopup.css";
import Compress from "../../../../public/Compress-2.png";

const MailPopup = ({ isOpen, close, body }) => {
  const popupRef = useRef(null); // Define the ref
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        close();
      }
    };
    // Attach event listener if the popup is open
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    // Cleanup the event listener when the component unmounts or the popup closes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, close]); // Dependencies array ensures effect runs only if isOpen or close changes
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div
        ref={popupRef}
        className={`MailPopUp-Div ${isOpen ? "popup-enter" : ""}`}
      >
        <div className="MailPopUp-Sec">
          <div className="MailPopUp-Parent">
            <div className="MailPopUp-Child">
              <div className="MailPopUp-Child-1">
                <div className="MailPopUp-Child-2">
                  <div className="MailPopUp-Child-2B">RFQ</div>
                </div>
                <div className="MailPopUp-Child-3">
                  <div className="MailPopUp-Child-3B">
                    <div className="MailPopUp-Child-3C">-</div>
                  </div>
                  <div className="MailPopUp-Child-4">
                    <div className="MailPopUp-Child-4B">30%</div>
                  </div>
                  <div className="MailPopUp-Child-5">
                    <div className="MailPopUp-Child-5B">+</div>
                  </div>
                </div>
              </div>
              <div className="MailPopUp-Child-Image">
                <img className="MailPopUp-Child-Img" src={Compress} />
              </div>
            </div>
          </div>
          <div className="MailPopUp-Email">
            <div className="MailPopUp-EmailDiv">
              <div className="MailPopUp-EmailSec">
                <div className="MailPopUp-EmailParent">
                  <div className="MailPopUp-Email-Text">{body}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailPopup;
