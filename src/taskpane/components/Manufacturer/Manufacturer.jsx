// import React from 'react'
import "./Manufacturer.css";
import React, { useRef, useEffect } from "react";

const Manufacturer = ({ isOpen, close }) => {
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
    <div className="overlay4">
      <div
        ref={popupRef}
        className={`Mft-compDiv ${isOpen ? "popup-enter" : ""}`}
      >
        <div className="Mft-compSec">
          <div className="Mft-comp-A">
            <div className="Mft-comp-B">
              <div className="Mft-comp-C">
                <div className="Mft-comp-D">Manufacturer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="Mft-comp-D1">
          <div className="Mft-comp-D2">
            <div className="Mft-comp-D3">
              <div className="Mft-comp-D4">
                <div className="Mft-comp-D5">
                  <div className="Mft-comp-D6">ABCD</div>
                </div>
                <div className="Mft-comp-Values">ABCD</div>
                <div className="Mft-comp-Values">ABCD</div>
                <div className="Mft-comp-Values">ABCD</div>
                <div className="Mft-comp-Values">ABCD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
