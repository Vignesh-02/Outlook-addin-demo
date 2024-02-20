import React, { useRef, useEffect } from "react";
import "./InfoPopup.css";

const InfoPopup = ({
  isOpen,
  close,
  senderName,
  senderEmail,
  senderCC,
  senderDomain,
  
}) => {
  const popupRef = useRef(null);

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
    <div className="overlay1">
      <div
        ref={popupRef}
        className={`Infopopup-Div  ${isOpen ? "popup-enter" : ""}`}
      >
        {/* Name */}
        <div className="Infopopup-Name">
          <div className="Infopopup-Name-1">
            <div className="Infopopup-Name-2">
              <div className="Infopopup-Name-Div">
                <div className="Infopopup-Name-Sec">
                  <div className="Infopopup-Name-Text">Name</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Infopopup-Name-Val">
            <div className="Infopopup-Name-ValDiv">
              <div className="Infopopup-Name-ValSec">
                <div className="Infopopup-Name-ValParent">
                  <div className="Infopopup-Name-ValChild">
                    <div className="Infopopup-Name-Val-Text">
                      {senderName || ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="Infopopup-Name">
          <div className="Infopopup-Name-1">
            <div className="Infopopup-Name-2">
              <div className="Infopopup-Name-Div">
                <div className="Infopopup-Name-Sec">
                  <div className="Infopopup-Name-Text">Email</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Infopopup-Name-Val">
            <div className="Infopopup-Name-ValDiv">
              <div className="Infopopup-Name-ValSec">
                <div className="Infopopup-Name-ValParent">
                  <div className="Infopopup-Name-ValChild">
                    <div className="Infopopup-Name-Val-Text">
                      {senderEmail || ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CC */}
        <div className="Infopopup-CC">
          <div className="Infopopup-CCDiv">
            <div className="Infopopup-Name-2">
              <div className="Infopopup-Name-Div">
                <div className="Infopopup-Name-Sec">
                  <div className="Infopopup-Name-Text">CC</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Infopopup-Name-Val">
            <div className="Infopopup-CC-val">
              <div className="Infopopup-CC-valDiv">
                <div className="Infopopup-Name-ValParent">
                  <div className="Infopopup-Name-ValChild">
                    <div className="Infopopup-Name-Val-Text">
                      {senderCC || ""}
                    </div>
                  </div>
                  <div className="Infopopup-Name-ValChild">
                    <div className="Infopopup-Name-Val-Text"></div>
                  </div>
                  <div className="Infopopup-Name-ValChild">
                    <div className="Infopopup-Name-Val-Text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="Infopopup-Name">
          <div className="Infopopup-Name-1">
            <div className="Infopopup-Name-2">
              <div className="Infopopup-Name-Div">
                <div className="Infopopup-Name-Sec">
                  <div className="Infopopup-Name-Text">Company</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Infopopup-Name-Val">
            <div className="Infopopup-Name-ValDiv">
              <div className="Infopopup-Name-ValSec">
                <div className="Infopopup-Name-ValParent">
                  <div className="Infopopup-Name-ValChild">
                    <div className="Infopopup-Name-Val-Text">
                      {senderDomain || ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SA */}

        <div className="Infopopup-SA">
          <div className="Infopopup-SADiv">
            <div className="Infopopup-SASec">
              <div className="Infopopup-Name-Div">
                <div className="Infopopup-Name-Sec">
                  <div className="Infopopup-Name-Text">Shipping_address</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Infopopup-SA-Val">
            <div className="Infopopup-SA-ValDiv">
              <div className="Infopopup-SA-ValParent">
                <div className="Infopopup-SA-ValChild">
                  <div className="Infopopup-SA-ValChild-A">
                    <div className="Infopopup-SA-ValChild-Text">
                      885 Jarvis Dr., Morgan Hill, CA 95037, United States
                    </div>
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

export default InfoPopup;
