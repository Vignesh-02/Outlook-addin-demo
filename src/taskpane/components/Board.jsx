import React, { useState, useEffect } from "react";
import "./styles/Board.css"; // Import the CSS file
import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


import Extend from "../../../public/extender.png";

import { useLocation } from "react-router-dom";
import MailPopup from "./MailPopup/MailPopup";
import InfoPopup from "./InfoPopup/InfoPopup";
import Stocks from "./Stocks/Stocks";
import Model from "react-modal";


const Board = () => {
  const [customerDetails, setCustomerDetails] = useState({
    customerName: "",
    customerEmail: "", // Add customerEmail to the state
    customerSubject: "",
  });

  const [isPopupOpenMail, setIsPopupOpenMail] = useState(false);
  const [isPopupOpenInfo, setIsPopupOpenInfo] = useState(false);

  const location = useLocation();
  const { customerName } = location.state || {}; // Destructure customerName from state
  const { customerEmail } = location.state || {}; // Destructure customerName from state

  console.log("Customer Name:", customerName); // Log customerName to console
  console.log("Customer Email:", customerEmail); // Log customerName to console

  useEffect(() => {
    if (customerName && customerEmail) {
      // If both customerName and customerEmail are available, update the state
      setCustomerDetails((prevDetails) => ({
        ...prevDetails,
        customerName: customerName,
        customerEmail: customerEmail, // Update customerEmail in the state
      }));
    }
  }, [customerName, customerEmail]);

  const togglePopupMail = () => {
    setIsPopupOpenMail(!isPopupOpenMail);
  };
  const togglePopupInfo = () => {
    setIsPopupOpenInfo(!isPopupOpenInfo);
  };

  return (
    <div className="PendingPage">
      <Topbar />
      <Navbar />
      {/* middle section */}

      <div className="pendingMiddle" id="abc">
        {/* sent table */}
        <div className="pendingMiddle-A">
          <div className="pendingMiddle-B">
            <div className="pendingMiddle-B2">
              <div className="pendingMiddle-B3">
                <div className="pendingMiddle-B4">
                  <div className="pendingMiddle-B4-RFQ">RFQ</div>
                </div>
              </div>
              <div className="pendingMiddle-B4-side1">
                <div className="pendingMiddle-B4-side2"></div>
              </div>
            </div>
            <div className="pendingMiddle-C">
              <div className="pendingMiddle-C2">
                <div className="pendingMiddle-C3">
                  <div className="pendingMiddle-C4">Status</div>
                </div>
              </div>
              <div className="pendingMiddle-C4-side1">
                <div className="pendingMiddle-C4-side2"></div>
              </div>
            </div>
            <div className="pendingMiddle-D">
              <div className="pendingMiddle-D2">
                <div className="pendingMiddle-B4">
                  <div className="pendingMiddle-C4">Date</div>
                </div>
              </div>
              <div className="pendingMiddle-B4-side1">
                <div className="pendingMiddle-B4-side2"></div>
              </div>
            </div>
          </div>
          <div className="pendingMiddle-BVal">
            <div className="pendingMiddle-BVal-2">
              <div className="pendingMiddle-BVal-3">
                <div className="pendingMiddle-BVal-3a">Ryan</div>
                <div className="pendingMiddle-BVal-3b">ABC80OFF</div>
              </div>
            </div>
            <div className="pendingMiddle-BVal-4">
              <div className="pendingMiddle-BVal-4a">
                <div className="pendingMiddle-BVal-4b">Sent</div>
              </div>
            </div>
            <div className="pendingMiddle-BVal-5">
              <div className="pendingMiddle-BVal-5a">
                <div className="pendingMiddle-BVal-5b">
                  <div className="pendingMiddle-BVal-3a">02/13/2024</div>
                </div>
                <div className="pendingMiddle-BVal-3b">10:00 am</div>
              </div>
            </div>
          </div>
        </div>

        {/* mail */}
        {/* mail */}
        <div className="Board-RFQ-Section">
          <div className="Board-RFQ-Div">
            <div className="Board-RFQ-Parent">
              <div className="Board-RFQ-Child">
                <div className="Board-RFQ-TextParent">
                  {/* <div className="Board-RFQ-Text"> RFQ {materialDetails.RFQ_ID || "RFQ"}</div> */}
                  <div className="Board-RFQ-Text">
                    {" "}
                    RFQ{" "}
                    {/* {materialDetails.RFQ_ID
                          ? `{${materialDetails.RFQ_ID}}`
                          : ""} */}
                  </div>
                </div>
              </div>
              <div className="Board-RFQ-Image">
                <img
                  className={{
                    width: "12.83px",
                    height: "12.83px",
                  }}
                  src={Extend}
                  alt="Logo"
                  onClick={togglePopupMail}
                />
                {isPopupOpenMail && (
                  // <MailPopup
                  //   isOpen={isPopupOpenMail}
                  //   close={togglePopupMail}
                  //   // emailSubject={emailSubject}
                  //   // body={body}
                  // />
                  <Model isOpen={isPopupOpenMail} close={togglePopupMail} className="overlayBoardMail">
                    <MailPopup
                      isOpen={isPopupOpenMail}
                      //   close={togglePopupMail}
                      close={togglePopupMail}
                    />
                  </Model>
                )}
              </div>
            </div>
          </div>
          <div className="Board-RFQ-EmailParent">
            <div className="Board-RFQ-EmailChild">
              <div className="Board-RFQ-EmailDiv">
                <div className="Board-RFQ-EmailSec">
                  <div className="Board-RFQ-Email-Cont">
                    <div className="Board-RFQ-Email-Content">
                      subject
                      <br />
                      <br />
                      BODY <br /> hi afshan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="Board-userInfo">
          <div className="Board-userInfo-1">
            <div className="Board-userInfo-2">
              <div className="Board-userInfo-3">
                <div className="Board-userInfo-4">
                  <div className="Board-userInfo-5">
                    <div className="Board-userInfo-Name">Name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Board-userInfo-Val">
              <div className="Board-userInfo-Val-2">
                <div className="Board-userInfo-Val-3">
                  <div className="Board-userInfo-Val-4">
                    <div className="Board-userInfo-Val-5">
                      <div className="Board-userInfo-Val-6">Angie Pankuch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Board-userInfo-img">
              <div className="Board-userInfo-img2">
                <img className="Board-userInfo-img3" src={Extend} alt="Logo" onClick={togglePopupInfo} />
                {isPopupOpenInfo && (
                  // <InfoPopup
                  //   isOpen={isPopupOpenInfo}
                  //   close={togglePopupInfo}
                  //   senderName={senderName}
                  //   senderEmail={senderEmail}
                  //   senderCC={senderCC}
                  //   senderDomain={senderDomain}
                  //   shipping_address={materialDetails.shipping_address}

                  // />
                  <Model isOpen={isPopupOpenInfo} close={togglePopupInfo} className="overlayBoardInfo">
                    <InfoPopup isOpen={isPopupOpenInfo} close={togglePopupInfo} />
                  </Model>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Material Table */}
        <Stocks />

        {/* customer */}
        <div className="Board-Cutomer-EmailDiv">
          <div className="Board-Cutomer-EmailDiv-2">
            <div className="Board-Cutomer-EmailDiv-3">
              <div className="Board-Cutomer-EmailDiv-4">
                <div className="Board-Cutomer-EmailDiv-5">
                  <div className="Board-Cutomer-EmailDiv-Mail">Customer mail</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Board-Cutomer-EmailDiv-Value">
            <div className="Board-Cutomer-EmailDiv-Value-2">
              <div className="Board-Cutomer-EmailDiv-Value-3">
                <div className="Board-Cutomer-EmailDiv-Value-4">
                  <div className="Board-Cutomer-EmailDiv-Value-Content">
                    Subject: "Order Details and Quote Breakdown"
                    <br />
                    <br />
                    Thank you for choosing our services. We appreciate your trust in us and strive to meet your
                    expectations.
                    <br />
                    Please find below a detailed breakdown of your order costs:
                    <br />| Material | Dimensions       | Quantity             | Color | Availability          |
                    Individual Cost | Total Cost | Lead Time | Freight Cost | | --------   | ------------------ |
                    ------------------- | ------ | ------------------- | ------------------ | ------------ |
                    ------------ | ------------ | | PTFE     | Thick: .020 inch | 2 sqft or MOQ   |     -    |
                    IN-STOCK           |   10.0                 | 100.0        | 3 days       | $50            | |
                    PTFE     | Thick: .187 inch | 16 sqft or MOQ |     -    | NOT IN-STOCK |    12.0                 |
                    120.0        | 5 days       | $52            |<br />
                    Below are the details of the materials used in your order:
                    <br />
                    **PTFE** - Specifications: Thick: .020 inch, Thick: .187 inch - Manufacturer: Not provided -
                    Shipping Location: 15619 Blackburn Ave, Norwalk, CA 90650
                    <br />
                    Please note that the PTFE with dimension .187 inch is currently not in stock. However, we have
                    started working on procuring them and will let you know as soon as they become available.
                    <br />
                    We are committed to delivering high-quality materials on time and we are open to negotiation. We
                    look forward to your reply and are eager to meet your needs.
                    <br />
                    Thank you once again for choosing us.
                    <br />
                    Best regards:
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="boardFooter">
        <Footer />
      </div>
    </div>
  );
};

export default Board;
