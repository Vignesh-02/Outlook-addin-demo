import React from 'react';
import './VendorDropdown.css'; // Import the CSS file for styles

const VendorDropdown = () => {
    const items = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];

  return (
    <div className="frame27">
      <div className="frame16">
        <div className="row">
        {items.map((item, index) => (
            <div key={index} className="datagridcell">
              <div className="container">
                <div className="loremIpsum">{item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VendorDropdown;
