import React, { useRef, useState, useEffect } from "react";
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

  function sendMail() {
    const accessToken = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAc+bSkBFLqj+5ck8r83hgWdZHAlzfv+FntC95fUPKI4Vvt5mNZPqXHB0g0Nn8Mr6MtXSCv/1yXLBc7Q9013+d2vlY0+6M8yDAeD7mH2fCDZWY/86WYAdkIy2YMXUa0PfwQ9+X3oN2kJx2JvdlLJ8A6zFXkdK1q4d8m8UP7kynuDZ24xPWfMsyX2rhVr0eJIjg7Hz6C7aA5Z7Fcb7JjASA1si/Vq4TJj9vV984/u76k7eH7r+VWEN+Zu8QmfsbdJYAjmxX1erdZ+PskXrL42h8WCcKoQKNsZFiAPn5veZ8bLA2HJFBuq4tCgnzm6Aus4kPNz8pksjJ7Q50h7RnVuuGS4DZgAACDMt4p7XEF64QAI32Njg27hwW++SMMmM/QRjctwKtZigKFNBVdimaLLMHeNElW1WdTPIHHObL7GTiLpiv1L7G/7jDZE1ViDum1JdUTmBXsoND5JX25CsKIl2tiu/wjTZNbiouOuL7YHLxvHbBqmy2rOKnI4vRy1dCZwBUwnx9cD5aA31v5SRcx0Bp7ffbrGtyp07ba8yBaiVFXr+PRDgEHFKF1k1uuYqskLGWpZHDb9ib5ok8MOBMCT3Phi6jM3n4V27eH74XjObjmTFlxmARBMsKc03NnTNzXunN9t5NpJpRHshhkqUrJvmi07HiOtms7MM3gxqNUooTN/IRiqhXawrhob2pdCjc0bu+BtHRzT7DEyO25Zc6yuo2j1jX023bxkKnxY+mm14HAxLO7c25R7EwWFAlmN938nE+qDoT64y2OQkLkH/jmwH3nzSLTG2LicF1227vsX9q0S9DguSEx/Awj7w5tikRAL/yzFTuiw6P702KQabqB9FAaLlsGyOqeQfoosqbQxllH1jfNHtOX/nCFnJg9Ueelhrv9lOqFe2qz3W1xUD9arurezLQpjNZH+8ipVeSqmqyzhZ5cXA3XbTyvt0qogXZ0Rgjca/k7A9Rp8HDKFNxESccq5NLl7IgjUXt/X+o/JU3y4dh/afIfIGvYjIa54P3LEVYOc1JtA9C6KYvyNw52/2auxCiKFuOn6WHenfFAbAu3fqdR9xjYuNh4ogVTZeMvbQw2uokYTtCe+aO3LLUbUhRVmPsmoGUtlj9xAEIE9a24x9Ag==';
    const sendMailUrl = 'https://graph.microsoft.com/v1.0/me/messages/AQMkADAwATM0MDAAMS02OGVmLWEyN2EtMDACLTAwCgBGAAADpd4QqRN3K0yHpymIIakdnQcA54fYm3+x4Uy3lcgUc2eXoQAAAgEMAAAA54fYm3+x4Uy3lcgUc2eXoQAAABfpxN8AAAA=/reply';
        const emailData = {
            message: {
                toRecipients: [
                    {
                        emailAddress: {
                            address: "rudranil@onelabventures.com"
                        }
                    }
                ]
            },
            comment: customerBody
    };
      
        fetch(sendMailUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailData)
        })
        .then(response => response.json())
        .then(data => {
          console.log("Mail sent successfully", data);
        })
        .catch(error => {
          console.error("Error sending mail", error);
        });
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
                {isEditing ? (
                        <input
                        type="text"
                        value={customerBody}
                        onChange={handleTextChange}
                        onBlur={toggleEdit}
                        autoFocus
                        // className="Container2"
                        style={{ width: '200%', height: '200%', boxSizing: 'border-box' }} // Make input fill its parent
                        />
                    ) : (
                        <div  className="LongText" onClick={toggleEdit}>
                        {customerBody}
                        </div>
                )}
              </div>
            </div>
          </div>
          <div className="Frame17">
            <div className="Button">
              <div className="Text">Regenerate</div>
            </div>
            <div className="Button" onClick={sendMail}>
              <div className="Text">Save</div>
            </div>
          </div>
        </div>
      </div>
  )
};
export default CustomerResponsePopup;
