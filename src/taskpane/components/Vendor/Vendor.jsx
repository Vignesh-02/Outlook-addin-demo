import React from "react";
import "./Vendor.css";
import Pen_Image from "../../../../public/pen.png";
import VendorResponsePopup from "./VendorResponsePopup";
const Vendor = ({  isPopupOpenRegenerate, togglePopupRegenerate,  isOpen, togglePopup, vendorBody}) => {
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
                      <Modal
                            isOpen={isOpen}
                            onRequestClose={togglePopup}
                            className="Modal"
                            // overlayClassName="Overlay"
                            style={{
                                overlay: {
                                        position: 'fixed',
                                        top: '98px',
                                        width: '325px',
                                        height: '586px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            
                                }
                            }}
                        >
                            {/* setVendorBody={setVendorBody} */}
                            <VendorResponsePopup close={togglePopup} vendorBody={vendorBody} />
                      </Modal>

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
                  {vendorBody}
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
