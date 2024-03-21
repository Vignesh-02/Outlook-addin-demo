import React from "react";
import "./Clarification.css";
import cross from "../../../../public/Cross5.png";

const Clarification = ({messageBody, close}) => {
  return (
    <div className="ClarificationPage">
      <div className="ClarificationPage-cont1">
        <div className="ClarificationPage-cont1-b">
          <div className="ClarificationPage-cont1-c">
            <div className="ClarificationPage-cont1-d">
              <div className="ClarificationPage-cont1-text">
                Customer Clarification Response
              </div>
            </div>
          </div>
          <div className="ClarificationPage-Image">
            <img
              className="ClarificationPage-Image-1"
              src={cross} 
              onClick={close}
            />
          </div>
        </div>
      </div>
      {/* sec - 2 */}
      <div className="ClarificationPage-cont2">
        <div className="ClarificationPage-cont2-a">
          <div className="ClarificationPage-cont2-b">
            <div className="ClarificationPage-cont2-c">
              <div className="ClarificationPage-cont2-Text">
                {/* Hi John Deo, Hello, in order for us to quote you on this we will
                need further clarification on the type of material and color.
                <br />
                <br />
                Thanks & Regards, ABC */}
                {messageBody}
              </div>
            </div>
          </div>
        </div>
        <div className="ClarificationPage-btn">
          <div className="ClarificationPage-btn-1">
            <div className="ClarificationPage-btn-1-text">Cancel</div>
          </div>
          <div className="ClarificationPage-btn-2">
            <div className="ClarificationPage-btn-2-text">Send</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clarification;
