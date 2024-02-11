import React from 'react';
import './styles/RegenerateResponsePopup.css'; // Import the CSS file for styles
import cross from "../../../public/Cross.png";

const RegenerateResponsePopup = () => {

    const items = ['Formal Response', 'Casual Response', 'Friendly Response'];


  return (
    <div className="frame23">
      <div className="tableHeader">
        <div className="datagridheader">
          <div className="container">
            <div className="typography">
              <div className="typographyBody1">Regenerate Response</div>
            </div>
          </div>
          <div className="xnixLineCross">
            <img className="vector47" src={cross} alt="cross" />
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
          <div className="button cancel">Cancel</div>
          <div className="button regenerate">Regenerate</div>
        </div>
      </div>
    </div>
  );
};

export default RegenerateResponsePopup;
