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
                  Hi John Deo,
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Tortor mus rutrum sed
                  dui malesuada risus tempor. Elit auctor eget libero et lacinia
                  elit purus elit. Tellus egestas quam massa ac aliquam lorem.{" "}
                  <br />
                  Material Cost: 120 $<br />
                  Lead time: 2 Days
                  <br />
                  Freight Cost: 100 Total cost: 220$
                  <br />
                  <br />
                  Scelerisque dignissim porta libero eu auctor aliquam donec
                  duis rhoncus. Nunc duis mattis sed dui rhoncus. Sed interdum
                  dolor lacus a enim vel interdum odio. Lobortis eu enim viverra
                  gravida nec in sagittis justo.
                  <br />
                  <br />
                  Thanks & Regards, ABC
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
