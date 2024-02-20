// import React from 'react'
import React, { useRef, useState, useEffect } from "react";
import "./MailPopup.css";
import Compress from "../../../../public/Compress-2.png";

const MailPopup = ({ isOpen, close, body, subject }) => {
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


  const [fontSize, setFontSize] = useState(13); // Default font size
  const [fontPercentage, setFontPercentage] = useState(50);
  
  
    // max font size = 20
    // min font size = 14
    const maxFontSize = 16;
    const minFontSize = 10;

    const stepSize = Math.round((maxFontSize - minFontSize) / 5);

  const increaseFontSize = () => {
    
    if (fontPercentage < 100) {
        setFontPercentage(fontPercentage + 10); // Increase percentage by 10
        const newFontSize = calculateFontSize(fontPercentage);
        setFontSize(newFontSize)
    }

};
  const decreaseFontSize = () => {
    
    if (fontPercentage > 0) {
        setFontPercentage(fontPercentage - 10); // Increase percentage by 10
        const newFontSize = calculateFontSize(fontPercentage);
        setFontSize(newFontSize);
    }
  };

  const calculateFontSize = (percentage) => {

    const stepsFrom50 = (percentage - 50) / 10;
    return 13 + (stepsFrom50 * stepSize);
  }
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
                    <div className="MailPopUp-Child-3C" 
                    onClick={decreaseFontSize}>-</div>
                  </div>
                  <div className="MailPopUp-Child-4">
                    <div className="MailPopUp-Child-4B">{fontPercentage}%</div>
                  </div>
                  <div className="MailPopUp-Child-5">
                    <div className="MailPopUp-Child-5B"
                    onClick={increaseFontSize}>+</div>
                  </div>
                </div>
              </div>
              <div className="MailPopUp-Child-Image">
                <img className="MailPopUp-Child-Img" src={Compress}  onClick={close}/>
              </div>
            </div>
          </div>
          <div className="MailPopUp-Email">
            <div className="MailPopUp-EmailDiv">
              <div className="MailPopUp-EmailSec">
                <div className="MailPopUp-EmailParent">
                <div
                    className="MailPopUp-Email-Text"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {subject}
                    <br />
                    <br />
                    {body}
                  </div>

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
