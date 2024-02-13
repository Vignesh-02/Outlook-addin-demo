import React, { useState, useEffect } from "react";
import "./Delegate.css";
import "@fontsource/orbitron";
import "@fontsource/orbitron/400.css";
import W_Image from "../../../../public/w1.png";
import WiseImage from "../../../../public/wise.png";
import WiseImage2 from "../../../../public/wise3.png";
import cross from "../../../../public/Vector.png";
import Extend from "../../../../public/extender.png";
import InsideImage from "../../../../public/Insidesale.png";
import Stocks from "../../components/Stocks/Stocks";
import Status from "../../components/Status/Status";
import Decision from "../../components/Decision/Decision";
import Buttoncv from "../../components/Button/Buttoncv";
import InfoPopup from "../../components/InfoPopup/InfoPopup";
import MailPopup from "../../components/MailPopup/MailPopup";
import axios from "axios";

const Delegate = ({  emailDetails, userName, emailAddress, val, ...rest  } ) => {
  const [isDelegateClicked, setIsDelegateClicked] = useState(false);
  const [isDelegateClicked2, setIsDelegateClicked2] = useState(false);
  const [isDelegate2Clicked, setIsDelegate2Clicked] = useState(false);
  const [btn, setBtn] = useState(false);

//   const [body, setBody] = useState(null);
//   const [emailDetails, setEmailDetails] = useState([]);
//   const [senderName, setSenderName] = useState(null);
//   const [senderEmail, setSenderEmail] = useState(null);
//   const [senderCC, setSenderCC] = useState(null);
//   const [senderDomain, setSenderDomain] = useState(null);

  const [fontSize, setFontSize] = useState(10); // Default font size

//   useEffect(() => {
//     // Listen for messages from background.js
//     chrome.runtime.onMessage.addListener((message) => {
//       if (message.action === "updateEmailDetails" && message.emailDetails) {
//         // Extract the body from the message and update the state
//         const updatedBody = message.emailDetails.body;
//         console.log("Email Details in useEffect: ", message.emailDetails);
//         console.log("CC", message.emailDetails.Cc);

//         //  CC
//         const ccField = message.emailDetails.Cc;
//         const ccParts = ccField ? ccField.split("<") : [];
//         const ccEmail =
//           ccParts.length > 1 ? ccParts[1].replace(">", "").trim() : null;
//         setSenderCC(ccEmail);

//         // Extract sender details
//         const senderField = message.emailDetails.sender;
//         const senderParts = senderField.split("<");

//         // Extracting the name
//         let senderName = "";
//         if (senderParts.length > 1) {
//           senderName = senderParts[0].trim();
//         }

//         // Extracting the email
//         let senderEmail = "";
//         if (senderParts.length > 1) {
//           senderEmail = senderParts[1].replace(">", "").trim();
//         }

//         console.log("Name:", senderName);
//         setSenderName(senderName);
//         console.log("Email:", senderEmail);
//         setSenderEmail(senderEmail);

//         // senderEmail contains the email address
//         const senderEmailDomain = senderEmail.split("@")[1];
//         console.log("Domain:", senderEmailDomain);
//         setSenderDomain(senderEmailDomain);

//         setEmailDetails(message.emailDetails);
//         setBody(updatedBody);
//       }
//     });
//   }, []);

  // getEmail API Endpoint
//   useEffect(() => {
//     if (body !== null) {
//       const SendEmailDetails = async () => {
//         try {
//           const res = await axios.post("http://127.0.0.1:8000/api/getEmail/", {
//             emailbody: body,
//             emailDetails: emailDetails,
//           });
//           console.log("getEmail API response from backend: ", res.data);
//         } catch (error) {
//           console.error("Error occurred while calling API:", error);
//         }
//       };
//       SendEmailDetails();
//     }
//   }, [body]);

  const DelegateBtn = () => {
    setIsDelegateClicked(true);
    setIsDelegateClicked2(true);
    var quoteRfqSection = document.querySelector(".Quote-RFQ-Section");
    var quoteRfqEmailParent = document.querySelector(".Quote-RFQ-EmailParent");

    quoteRfqSection.style.height = "54px";
    quoteRfqEmailParent.style.height = "27px";
  };

  const DelegeBtn2 = () => {
    setBtn(true);
    setIsDelegate2Clicked(true);
  };

  const [isPopupOpen1, setIsPopupOpen1] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);

  const [isPopupOpenRegenerate, setIsPopupOpenRegenerate] = useState(false);

  const [isPopupOpenStock, setIsPopupOpenStock] = useState(false);
  const [isPopupOpenInfo, setIsPopupOpenInfo] = useState(false);
  const [isPopupOpenMail, setIsPopupOpenMail] = useState(false);
  const [isPopupOpenManufacturer, setIsPopupOpenManufacturer] = useState(false);

  const togglePopup1 = () => {
    setIsPopupOpen1(!isPopupOpen1);
  };
  const togglePopup2 = () => {
    setIsPopupOpen2(!isPopupOpen2);
  };
  const togglePopupStock = () => {
    setIsPopupOpenStock(!isPopupOpenStock);
  };
  const togglePopupInfo = () => {
    setIsPopupOpenInfo(!isPopupOpenInfo);
  };

  const togglePopupRegenerate = () => {
    setIsPopupOpenRegenerate(!isPopupOpenRegenerate);
  };

  const togglePopupMail = () => {
    setIsPopupOpenMail(!isPopupOpenMail);
  };

  const togglePopupManufacturer = () => {
    setIsPopupOpenManufacturer(!isPopupOpenManufacturer);
  };

  const isAnyPopupOpen = () => {
    return (
      isPopupOpen1 ||
      isPopupOpen2 ||
      isPopupOpenStock ||
      isPopupOpenInfo ||
      isPopupOpenManufacturer ||
      isPopupOpenRegenerate ||
      isPopupOpenMail
    );
  };

  return (
    <div className={`QuotePage ${isAnyPopupOpen() ? "backdrop" : ""}`}>
      {/* TOP BAR */}
      <div className="topbar-frame">
        {/* Section -1A */}
        <div className="topbar">
          <div className="topframe">
            <img src={W_Image} alt="Logo" />
            <div className="topframe-b">
              <img src={WiseImage} alt="Logo" id="b1" />
              <img src={InsideImage} alt="Logo" id="b2" />
            </div>
          </div>
          <div className="topframe-c">
            <img src={cross} alt="Logo" />
          </div>
        </div>

        {/* Section - 1B*/}
        <div className="topbar2">
          <div className="navbar">
            <div className="DEL-delegate-div">
              <div className="DEL-delegate">Delegate</div>
            </div>

            <div className="queue-div">
              <div className="queue">Queue</div>
            </div>
            <div className="contact-div">
              <div className="contact">Contact Us</div>
            </div>
          </div>
          <div className="A-div">
            <div className="A">A</div>
          </div>
        </div>
      </div>

      {/* SECTION - 2 */}
      <div className="Quote-Sec-2">
        {/* RFQ - SECTION */}
        <div className="Quote-RFQ-Section">
          <div className="Quote-RFQ-Div">
            <div className="Quote-RFQ-Parent">
              <div className="Quote-RFQ-Child">
                <div className="Quote-RFQ-TextParent">
                  <div className="Quote-RFQ-Text">RFQ (ABC30OFF)</div>
                </div>
              </div>
              <div className="Quote-RFQ-Image">
                <img
                  style={{
                    width: "12.83px",
                    height: "12.83px",
                  }}
                  src={Extend}
                  alt="Logo"
                  onClick={togglePopupMail}
                />
                {isPopupOpenMail && (
                  <MailPopup
                    isOpen={isPopupOpenMail}
                    close={togglePopupMail}
                    body={emailDetails.body}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="Quote-RFQ-EmailParent">
            <div className="Quote-RFQ-EmailChild">
              <div className="Quote-RFQ-EmailDiv">
                <div className="Quote-RFQ-EmailSec">
                  <div className="Quote-RFQ-Email-Cont">
                    <div className="Quote-RFQ-Email-Content">{emailDetails.bodyy || ""}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS TABLE */}
        {isDelegateClicked ? (
          // Table 2.0
          <div>
            <div className="Quote-Table-Name2">
              <div className="Quote-Table-Name">
                <div className="Quote-Table-Name2-a">
                  <div className="Quote-Table-Name2-b">
                    <div className="Quote-Table-NameParent">
                      <div className="Quote-Table-NameChild ">
                        <div className="Quote-Table-Name2-Text">Name</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Quote-Table-NameValue">
                  <div className="Quote-Table-NameValueDiv2">
                    <div className="Quote-Table-NameValueSec">
                      <div className="Quote-Table-NameValueParent">
                        <div className="Quote-Table-NameValueChild">
                          <div className="Quote-Table-NameValueText">
                            {emailDetails.senderName || ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Quote-Table-Name2-Image">
                  <div className="Quote-Table-Name2-ImageC">
                    <img
                      style={{
                        width: "12.83px",
                        height: "12.83px",
                      }}
                      src={Extend}
                      alt="Logo"
                      onClick={togglePopupInfo}
                    />

                    {isPopupOpenInfo && (
                      <InfoPopup
                        isOpen={isPopupOpenInfo}
                        close={togglePopupInfo}
                        senderName={emailDetails.senderName}
                        senderEmail={emailDetails.from}
                        senderCC={emailDetails.cc}
                        senderDomain={emailDetails.company}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Status />
            <Stocks
              isPopupOpenStock={isPopupOpenStock}
              togglePopupStock={togglePopupStock}
              isPopupOpenManufacturer={isPopupOpenManufacturer}
              togglePopupManufacturer={togglePopupManufacturer}
            />

            {isDelegate2Clicked && <Decision />}
            {isDelegate2Clicked && (
              <Buttoncv
                isPopupOpen1={isPopupOpen1}
                togglePopup1={togglePopup1}
                isPopupOpenRegenerate={isPopupOpenRegenerate}
                togglePopupRegenerate={togglePopupRegenerate}
                isPopupOpen2={isPopupOpen2}
                togglePopup2={togglePopup2}
              />
            )}
          </div>
        ) : (
          // Table 1.0
          <div className="Quote-Table">
            {/* NAME */}
            <div className="Quote-Table-Name">
              <div className="Quote-Table-NameDiv">
                <div className="Quote-Table-NameSec">
                  <div className="Quote-Table-NameParent">
                    <div className="Quote-Table-NameChild">
                      <div className="Quote-Table-Name-Text">Name</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* NAME : VALUE */}
              <div className="Quote-Table-NameValue">
                <div className="Quote-Table-NameValueDiv">
                  <div className="Quote-Table-NameValueSec">
                    <div className="Quote-Table-NameValueParent">
                      <div className="Quote-Table-NameValueChild">
                        <div className="Quote-Table-NameValueText">
                          {emailDetails.senderName || ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* EMAIL SECTION */}
            <div className="Quote-Table-Email">
              <div className="Quote-Table-EmailDiv">
                <div className="Quote-Table-NameSec">
                  <div className="Quote-Table-NameParent">
                    <div className="Quote-Table-NameChild">
                      <div className="Quote-Table-Name-Text">Email</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Email : VALUE */}
              <div className="Quote-Table-NameValue">
                <div className="Quote-Table-NameValueDiv">
                  <div className="Quote-Table-NameValueSec">
                    <div className="Quote-Table-NameValueParent">
                      <div className="Quote-Table-NameValueChild">
                        <div className="Quote-Table-NameValueText">
                          {emailDetails.from || ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CC - SECTION */}
            <div className="Quote-Table-CC">
              <div className="Quote-Table-CC-Div">
                <div className="Quote-Table-CC-Sec">
                  <div className="Quote-Table-CC-Parent">
                    <div className="Quote-Table-CC-Child">
                      <div className="Quote-Table-CC-Text">CC</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Quote-Table-CC-Values">
                <div className="Quote-Table-CC-ValuesDi">
                  <div className="Quote-Table-CC-ValuesSec">
                    <div className="Quote-Table-CC-ValuesParent">
                      <div className="Quote-Table-CC-ValuesChild1">
                        <div className="Quote-Table-CC-ValuesChild1-text">
                          {emailDetails.cc ?  emailDetails.cc : ""}
                        </div>
                      </div>
                      <div className="Quote-Table-CC-ValuesChild1">
                        <div className="Quote-Table-CC-ValuesChild1-text">
                          {/* Chris.dong@tecan.com */}
                        </div>
                      </div>
                      <div className="Quote-Table-CC-ValuesChild1">
                        <div className="Quote-Table-CC-ValuesChild1-text">
                          {/* Chris.dong@tecan.com */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company - Section */}
            <div className="Quote-Table-Company">
              <div className="Quote-Table-CompanyDiv">
                <div className="Quote-Table-NameSec">
                  <div className="Quote-Table-NameParent">
                    <div className="Quote-Table-NameChild">
                      <div className="Quote-Table-Name-Text">Company</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* COMPANY : VALUE */}
              <div className="Quote-Table-NameValue">
                <div className="Quote-Table-NameValueDiv">
                  <div className="Quote-Table-NameValueSec">
                    <div className="Quote-Table-NameValueParent">
                      <div className="Quote-Table-NameValueChild">
                        <div className="Quote-Table-NameValueText">
                          {emailDetails.company || ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {btn ? (
        <div className="Quote-DelegateBtnDiv">
          <div className="Quote-DelegateBtn">Launch</div>
        </div>
      ) : isDelegateClicked2 ? (
        <div className="DEL-Buttons">
          <div className="Launch-btnParent">
            <div onClick={DelegeBtn2} id="Launch-btn">
              Delegate
            </div>
          </div>
          <div className="Launch-btnParent">
            <div id="Launch-btn">Clarification</div>
          </div>
        </div>
      ) : (
        <div onClick={DelegateBtn} className="Quote-DelegateBtnDiv">
          <div className="Quote-DelegateBtn">Delegate</div>
        </div>
      )}

      {/* FOOTER SECTION */}
      <div className="Quote-Footer">
        <div className="Quote-Footer-Text">Made by</div>
        <div className="Quote-Footer-Images">
          <img
            style={{
              width: "24.57px",
              height: "21.12px",
              left: "0px",
              top: "0px",
              position: "absolute",
            }}
            src={W_Image}
          />

          <img
            style={{
              width: "99.07px",
              height: "11.29px",
              left: "18.11px",
              top: "5.17px",
              position: "absolute",
            }}
            src={WiseImage2}
          />
        </div>
      </div>
    </div>
  );
};

export default Delegate;
