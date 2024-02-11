import React from 'react';
import './styles/VendorResponsePopup.css'; // Import the CSS file for styles
import cross from "../../../public/Cross.png";


const VendorResponsePopup = () => {
  return (
    <div className="frame21">
      <div className="tableHeader">
        <div className="datagridheader">
          <div className="container">
            <div className="typography">
              <div className="typographyBody1">Vendor Response</div>
            </div>
          </div>
          <div className="xnixLineCross">
            <img className="vector47" src={cross} alt="icon"/>
          </div>
        </div>
      </div>
      <div className="frame16">
        <div className="row">
          <div className="frame4">
            <div className="selectVendor">Select vendor</div>
          </div>
          <div className="frame39">
            <div className="frame38">
              <div className="frame37">
                <div className="vendor1">Vendor 1</div>
              </div>
            </div>
            <div className="frame39">
              <div className="frame37">
                <div className="vendor1">Vendor 2</div>
              </div>
            </div>
            <div className="frame40">
              <div className="frame37">
                <div className="vendor1">Vendor 3</div>
              </div>
            </div>
          </div>
          <div className="datagridcell">
            <div className="container">
              <div className="hiJohnDeoLoremIpsumDolorSitAmet">Hi John Deo,  Lorem ipsum dolor sit amet consectetur...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame17">
        <div className="button regenerate">Regenerate</div>
        <div className="button save">Save</div>
      </div>
    </div>
  );
};

export default VendorResponsePopup;
