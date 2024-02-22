import React, { useRef, useEffect } from "react";
import "./CustomerResponsePopup.css"; // Import the CSS file
// import cross from "../../../public/Cross.png"
const CustomerResponsePopup = ({  close, customerBody, setCustomerBody }) => {

    const [isEditing, setIsEditing] = useState(false);
    // const [text, setText] = useState('Click to edit');

  const handleTextChange = (e) => {
    setCustomerBody(e.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
      <div className="Frame20">
        <div className="TableHeader">
          <div className="Datagridheader">
            <div className="Container">
              <div className="Typography">
                <div className="TypographyBody1">Customer Response</div>
              </div>
            </div>
            <div className="XnixLineCross">
              <img className="Vector47" onClick={close} />
            </div>
          </div>
        </div>
        <div className="Frame16">
          <div className="Row">
            <div className="Datagridcell">
              <div className="Container2">
                <div className="LongText">
                {isEditing ? (
                        <input
                        type="text"
                        value={customerBody}
                        onChange={handleTextChange}
                        onBlur={toggleEdit}
                        autoFocus
                        />
                    ) : (
                        <div onClick={toggleEdit} style={{ cursor: 'pointer' }}>
                        {customerBody}
                        </div>
                )}
                </div>
              </div>
            </div>
          </div>
          <div className="Frame17">
            <div className="Button">
              <div className="Text">Regenerate</div>
            </div>
            <div className="Button">
              <div className="Text">Save</div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default CustomerResponsePopup;
