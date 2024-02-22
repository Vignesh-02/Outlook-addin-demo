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

const Delegate = ({
    emailDetails,
    emailAddress,
    userName, 
    val, ...props }) => {

  const [customerBody, setCustomerBody] = useState(null);
  const [vendorBody, setVendorBody] = useState(null);      
  const [isDelegateClicked, setIsDelegateClicked] = useState(false);
  const [isDelegateClicked2, setIsDelegateClicked2] = useState(false);
  const [isDelegate2Clicked, setIsDelegate2Clicked] = useState(false);
  const [delegatebtn1, setDelegatebtn1] = useState(false);
  const [btn, setBtn] = useState(false);

//   const [body, setBody] = useState(null);
//   const [emailSubject, setEmailSubject] = useState(null);
//   const [emailDetails, setEmailDetails] = useState([]);
//   const [senderName, setSenderName] = useState(null);
//   const [senderEmail, setSenderEmail] = useState(null);
//   const [senderCC, setSenderCC] = useState(null);
//   const [senderDomain, setSenderDomain] = useState(null);
  const [classifyEmail, setClassifyEmail] = useState({});
  const [materialDetails, setMaterialDetails] = useState({
    shipping_address: "",
    RFQ_ID: "",
  });



  // function to click Delegate Button on screen 1
  const DelegateBtn = () => {


    setDelegatebtn1(true); // set to true when  Delegate Button on screen 1 is clicked

    setIsDelegateClicked(true);
    setIsDelegateClicked2(true);
    var quoteRfqSection = document.querySelector(".Quote-RFQ-Section");
    var quoteRfqEmailParent = document.querySelector(".Quote-RFQ-EmailParent");

    quoteRfqSection.style.height = "54px";
    quoteRfqEmailParent.style.height = "27px";
  };

  const handleLaunch = () => {
    const accessToken = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAcTrjr5ebfMwIqqERsk3WY49wdOEF8JCiugJqx2Va009nQTZ30ZEjMDJVIt+r/Mljk+k4JGs0Cg/KYZnx9GmUqjQqfX4apKe5qyz/ihriXozUJpp2mGzfsiVOxFLrVSegu2Y+7N5zKVtNCEUNiFGWLPA6NKF40Zz/oAMdPQGsJ4NeIHvm1ZbfG4OX4zj1yNaOCjAlcozhuNg5bO8Iifh9LQsO2bhqItNQAtWjeNzlntwuId0Mbm1kIAbjP2JHCtxftMqck8K+4Xgs2j8/0ipeOfzP1GPOd2en2wG+i8yLHaMkF0HCVWs3XV6tD0rhw6QvCMeaT754ZLAroiHCBqNKbMDZgAACKO63vt6nkzYQAKCgYq3zrrF9hl+11KB1SWlE2bmXP49f0k/ouyyWVEicxXc1lQrDLFcyEBNrBcIlt2JY2de52uRpeyco+rfm42Gq+xgHh0OlEKZCf8Lr+EKPoT366nDVsxDsxW9JyGUaT9YsDV9r4Ht7dcSowXuiIV7B6l/HbWJgJqvEmAD0jrWTFaxaNn+E2YHAQ7AX9HbIWwQqutTjTCsW2l6Z3XH+V4nfFcfSfCau71/yx1pPYvpR4eBry9N9/bVAHzRdeMwVAruu0+9iWMUGf+QBDqF5BzvJeT9GBIt4OmGrbvIBCHll9phZGFGadrl2XJG3At1eJPcMm9Kya8kBKDnGYFJKjMe0xZkTgKIHPjZDQYnNisc9PBzMO3Viop+txHElmg1g9pe8HZpsSDpI0fMbWFSP43yN8WK8bHSg1t5YN2CoM4QC5PXy1tDWSG3ADF4Gu+8ehh0OE5PSLfmG/ZjQdfJUTu0otvkXwmFoabhdsjXyGwBnyC7JGYqQ51AW3GOaepYqhSLeSvJgd4XAF3fDb2uNJuFeOILbxB1FIEHBrywaXIUiHhyBm+m7S5ljDlk6+h+riyDW4C7/pCQ3dlUc+GEpyhpI8QQOiGN+pSzasDAGZFfwcNKtSlYyJdD/h1KOMMFDrqoXn9buufiTD0x5k+PXLIe1wxCzxs9zbziN/4p51k56YI3w22ep3q08FIH/KoeZYZRLd9p8qxErbiBXpbIuW0AvurzHmLyrSHOP9GxMktSTp0ilUHYU0D3UPJ2I2X7Rap9Ag=='
    const sendMailUrl = 'https://graph.microsoft.com/v1.0/me/sendMail';
        const emailData = {
          message: {
            subject: "Hello from Office Add-in",
            body: {
              contentType: "Text",
              content: "This is a test email sent from an Office Add-in!"
            },
            toRecipients: [{
              emailAddress: {
                address: "laserlikefocus000@gmail.com" // Specify the recipient's email address
              }
            }]
          }
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
      }


  useEffect(() => {
    if (delegatebtn1) {
        const SendEmailDetails = async () => {
          try {
            const res = await axios.post("https://api-dev.wise-sales.com/ml-backend/classify_email/", {
              'subject': emailDetails.subject,
              'email_body': emailDetails.body,
              'sender_email': emailDetails.from,
              'sender_name': emailDetails.senderName,
              "Wisecustomer": "intr001",
              "Customerofcustomer": "20917",
              "AcctId": "239029"

          });
          console.log("classify API response from backend: ", res.data);
          setClassifyEmail(res.data);

      }
          catch (error) {
            console.error("Error occurred while calling API:", error);
          }
        };
        SendEmailDetails();
    //   const jsonObj = {
    //     RFQ_status: 1,
    //     name: "Abby Rodriguez",
    //     email: "operations@integralmachining.com",
    //     company: "Integral Machining & Engineering",
    //     shipping_address: "12060 31st. Ct. N. St. Petersburg FL 33716",
    //     cert_need: false,
    //     product_1: {
    //       material: "PVC",
    //       size: {
    //         diameter: "1.25 inch RD",
    //         thick: null,
    //         length: "10 feet",
    //         width: null,
    //       },
    //       shape: "Rod",
    //       specification: "23-0002-XX",
    //       manufacturer: null,
    //       color: "Gray",
    //       quantity: "20 lengths",
    //     },
    //     product_2: {
    //       material: "PVC",
    //       size: {
    //         diameter: "1.125 inch RD",
    //         thick: null,
    //         length: "10 feet",
    //         width: null,
    //       },
    //       shape: "Rod",
    //       specification: "23-0004-01",
    //       manufacturer: null,
    //       color: "Gray",
    //       quantity: "28 Lengths",
    //     },
    //     RFQ_ID: "intr0012091723902921",
    //   };
    }
  }, [delegatebtn1]);


  // Log the state outside of the useEffect to see the updated value
  console.log("Classify Email: ", classifyEmail);
  useEffect(() => {
    if (classifyEmail.shipping_address || classifyEmail.RFQ_ID) {
      setMaterialDetails({
        shipping_address: classifyEmail.shipping_address || "N/A",
        RFQ_ID: classifyEmail.RFQ_ID || "N/A",
      });
    }
  }, [classifyEmail]);

  console.log("Classify Email-SA: ", classifyEmail.shipping_address);
  console.log("Classify Email-RFQ_ID: ", classifyEmail.RFQ_ID);

  const SA = classifyEmail.shipping_address;
  const RFQID = classifyEmail.RFQID;

  const DelegeBtn2 = () => {
    setBtn(true);
    setIsDelegate2Clicked(true);
  };

  useEffect(() => {
    if (isDelegate2Clicked) {
      const generateEmail = async () => {
        try {
          const res = await axios.post(
            "https://api-dev.wise-sales.com/ml-backend/generate_email/",
            {
              classifyEmail: classifyEmail,
            }
          );

         const customerResponse = res.data.Customer_quote.body;
         const VendorResponse = res.data.vendor_1.Body
          setCustomerBody(customerResponse);
          setVendorBody(res.data.vendor_1.Body);
          console.log("Customer's Body:", customerBody);
          console.log("Vendor's Body:", vendorBody); 

          // Fetching the body of the customer from the response
          // const customerBody = res.data.Customer_quote.Body;
          // console.log("Customer's Body:", customerBody);
          
          console.log("generate Email API response from backend: ", res.data);
        } catch (error) {
          console.error("Error occurred while calling API:", error);
        }
      };
      generateEmail();
    }
  }, [isDelegate2Clicked]);


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

  const handleCrossClick = () => {
    // Close the extension when the cross is clicked
    window.close();
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
            <img onClick={handleCrossClick} src={cross} alt="Logo" />
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
            <div className="A">{userName}</div>
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
                  {/* <div className="Quote-RFQ-Text"> RFQ {materialDetails.RFQ_ID || "RFQ"}</div> */}
                  <div className="Quote-RFQ-Text">
                    {" "}
                    RFQ{" "}
                    {materialDetails.RFQ_ID
                      ? `{${materialDetails.RFQ_ID}}`
                      : ""}
                  </div>
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
                    subject={emailDetails.subject}
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
                    <div className="Quote-RFQ-Email-Content">
                      {emailDetails.subject || ""}
                      <br />
                      <br />
                      {emailDetails.body || ""}
                    </div>
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
                        shipping_address={materialDetails.shipping_address}
                        // shipping_address={SA}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Stocks
              isPopupOpenStock={isPopupOpenStock}
              togglePopupStock={togglePopupStock}
              classifyEmail={classifyEmail}
            />
            {isDelegate2Clicked && <Status />}

            {isDelegate2Clicked && (
              <Decision
                isPopupOpenStock={isPopupOpenStock}
                togglePopupStock={togglePopupStock}
              />
            )}


            {isDelegate2Clicked && (
              <Buttoncv
                isPopupOpen1={isPopupOpen1}
                togglePopup1={togglePopup1}
                isPopupOpenRegenerate={isPopupOpenRegenerate}
                togglePopupRegenerate={togglePopupRegenerate}
                isPopupOpen2={isPopupOpen2}
                togglePopup2={togglePopup2}
                customerBody={customerBody}
                setCustomerBody={setCustomerBody}
                vendorBody={vendorBody}
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
                      
                          {emailDetails.cc ? emailDetails.cc.map((item) => {
                            return (
                                <div className="Quote-Table-CC-ValuesChild1">
                        <div className="Quote-Table-CC-ValuesChild1-text">
                                {item}
                        </div>
                      </div>
                            )
                          }) : ""}
                        
                      
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
        <div className="Quote-DelegateBtnDiv" onClick={handleLaunch}>
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
