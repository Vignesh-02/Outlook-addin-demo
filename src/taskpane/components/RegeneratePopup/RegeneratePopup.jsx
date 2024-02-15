/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";
import "./RegeneratePopup.css";

const RegeneratePopup = ({ isOpen, close }) => {
  const popupRef = useRef(null); // Define the ref

  const items = ["Formal Response", "Casual Response", "Friendly Response"];

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
      <div ref={popupRef} className={`frame23 ${isOpen ? "popup-enter" : ""}`}>
        <div className="tableHeader">
          <div className="datagridheader">
            <div className="container">
              <div className="typography">
                <div className="typographyBody1">Regenerate Response</div>
              </div>
            </div>
            <div className="xnixLineCross">
              <img className="vector47" alt="cross" onClick={close} />
            </div>
          </div>
        </div>
        <div className="frame16">
          <div className="frame18">
            <div className="frame25">
              {items.map((item, index) => (
                <div key={index} className="frame24">
                  <div className="tableHeaderInner">
                    <div className="datagridheaderInner">
                      <div className="containerInner">
                        <div className="typographyInner">
                          <div className="typographyBody1Inner">{item}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="frame17">
            <div className="button1">
            <div className="text1">Cancel</div>
            </div>
            <div className="button2">
            <div className="text2">Regenerate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegeneratePopup;
