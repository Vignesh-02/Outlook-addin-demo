import React, { useState, useEffect } from "react";
import "./styles/VendorResponsePending.css"; // Import the CSS file
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Extend from "../../../../public/extender.png";

import { useLocation } from "react-router-dom";
import MailPopup from "../MailPopup/MailPopup";
import InfoPopup from "../InfoPopup/InfoPopup";
import Pendingstocks from "../PendingStocks/Pendingstocks";
import Modal from "react-modal";
import axios from "axios";

const VendorResponsePending = () => {
  const [customerDetails, setCustomerDetails] = useState({
    customerName: "",
    customerEmail: "", // Add customerEmail to the state
    customerSubject: "",
    RFQ_ID: "",
  });

  const [isPopupOpenMail, setIsPopupOpenMail] = useState(false);
  const [isPopupOpenInfo, setIsPopupOpenInfo] = useState(false);
  const [materialDetails, setMaterialDetails] = useState([]);

  const [senderName, setSenderName] = useState(null);
  const [senderEmail, setSenderEmail] = useState(null);
  const [senderSubject, setSenderSubject] = useState(null);
  const [senderBody, setSenderBody] = useState(null);
  const [senderCC, setSenderCC] = useState(null);
  const [senderDomain, setSenderDomain] = useState(null);
  const [senderSA, setSenderSA] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("customerName");
  const email = searchParams.get("customerEmail");
  const RFQ_ID = searchParams.get("RFQ_ID");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const customer_response_subject = searchParams.get("customer_response_subject");

  console.log("Customer Name:", name); // Log customerName to console
  console.log("Customer Email:", email); // Log customerName to console
  console.log("Customer RFQ_ID:", RFQ_ID); // Log customerName to console
  console.log("Customer date:", date); // Log customerName to console
  console.log("Customer time:", time); // Log customerName to console
  console.log("customer_response_subject:", customer_response_subject); // Log customerName to console

  useEffect(() => {
    if (name && email && RFQ_ID) {
      // If both customerName and customerEmail are available, update the state
      setCustomerDetails((prevDetails) => ({
        ...prevDetails,
        customerName: name,
        customerEmail: email, // Update customerEmail in the state
        RFQ_ID: RFQ_ID,
      }));
    }
  }, [name, email, RFQ_ID]);

  const togglePopupMail = () => {
    setIsPopupOpenMail(!isPopupOpenMail);
  };
  const togglePopupInfo = () => {
    setIsPopupOpenInfo(!isPopupOpenInfo);
  };

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        if (RFQ_ID) {
          const res = await axios.get(`https://api-dev.wise-sales.com/backend/api/getEmailDetails/${RFQ_ID}/`);
          console.log("Customer API response from backend: ", res.data);
          // console.log("a",res.data.customer_name)
          // Check if the response contains any data
          const customerName2 = res.data.data[0].customer_name;
          console.log("abc:", customerName2);
          setSenderName(res.data.data[0].customer_name);
          setSenderEmail(res.data.data[0].customer_email);
          setSenderCC(res.data.data[0].cc);
          setSenderDomain(res.data.data[0].company);
          setSenderSA(res.data.data[0].shipping_address);
          setSenderSubject(res.data.data[0].email_subject);
          setSenderBody(res.data.data[0].email_body);
          console.log("Email subject board: ", senderSubject);
        }
      } catch (error) {
        console.error("Error occurred while calling API:", error);
      }
    };

    fetchCustomerDetails();

    const fetchMaterialDetails = async () => {
      try {
        if (RFQ_ID) {
          const res = await axios.get(`https://api-dev.wise-sales.com/backend/api/getMaterial/${RFQ_ID}/`);
          console.log("Material API response from backend: ", res.data);
          setMaterialDetails(res.data);
        }
      } catch (error) {
        console.error("Error occurred while calling API:", error);
      }
    };
    fetchMaterialDetails();
  }, [RFQ_ID]);

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
                <div className="pendingMiddle-BVal-3a">{name}</div>
                <div className="pendingMiddle-BVal-3b">{RFQ_ID}</div>
              </div>
            </div>
            <div className="pendingMiddle-BVal-4">
              <div className="pendingMiddle-BVal-4a">
                <div className="pendingMiddle-BVal-4b">Vendor Quote Pending</div>
              </div>
            </div>
            <div className="pendingMiddle-BVal-5">
              <div className="pendingMiddle-BVal-5a">
                <div className="pendingMiddle-BVal-5b">
                  <div className="pendingMiddle-BVal-3a">{date}</div>
                </div>
                <div className="pendingMiddle-BVal-3b">{time}</div>
              </div>
            </div>
          </div>
        </div>

        {/* mail */}
        {/* mail */}
        <div className="VendorResponsePending-RFQ-Section">
          <div className="VendorResponsePending-RFQ-Div">
            <div className="VendorResponsePending-RFQ-Parent">
              <div className="VendorResponsePending-RFQ-Child">
                <div className="VendorResponsePending-RFQ-TextParent">
                  {/* <div className="VendorResponsePending-RFQ-Text"> RFQ {materialDetails.RFQ_ID || "RFQ"}</div> */}
                  <div className="VendorResponsePending-RFQ-Text">
                    {" "}
                    RFQ{" "}
                    {/* {materialDetails.RFQ_ID
                        ? `{${materialDetails.RFQ_ID}}`
                        : ""} */}
                  </div>
                </div>
              </div>
              <div className="VendorResponsePending-RFQ-Image">
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
                  <Modal isOpen={isPopupOpenMail} close={togglePopupMail} className="overlayBoardMail">
                    <MailPopup
                      isOpen={isPopupOpenMail}
                      //   close={togglePopupMail}

                      close={togglePopupMail}
                      subject={senderSubject}
                      body={senderBody}
                    />
                  </Modal>
                )}
              </div>
            </div>
          </div>
          <div className="VendorResponsePending-RFQ-EmailParent">
            <div className="VendorResponsePending-RFQ-EmailChild">
              <div className="VendorResponsePending-RFQ-EmailDiv">
                <div className="VendorResponsePending-RFQ-EmailSec">
                  <div className="VendorResponsePending-RFQ-Email-Cont">
                    <div className="VendorResponsePending-RFQ-Email-Content">
                      {/* {customerSubject} */}
                      subject : {senderSubject}
                      <br />
                      <br />
                      BODY <br /> hi Vignesh
                      {/* {customerEmail} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="VendorResponsePending-userInfo">
          <div className="VendorResponsePending-userInfo-1">
            <div className="VendorResponsePending-userInfo-2">
              <div className="VendorResponsePending-userInfo-3">
                <div className="VendorResponsePending-userInfo-4">
                  <div className="VendorResponsePending-userInfo-5">
                    <div className="VendorResponsePending-userInfo-Name">Name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="VendorResponsePending-userInfo-Val">
              <div className="VendorResponsePending-userInfo-Val-2">
                <div className="VendorResponsePending-userInfo-Val-3">
                  <div className="VendorResponsePending-userInfo-Val-4">
                    <div className="VendorResponsePending-userInfo-Val-5">
                      <div className="VendorResponsePending-userInfo-Val-6">
                        {/* Angie Pankuch */}
                        {/* {customerName} */}
                        {name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="VendorResponsePending-userInfo-img">
              <div className="VendorResponsePending-userInfo-img2">
                <img
                  className="VendorResponsePending-userInfo-img3"
                  src={Extend}
                  alt="Logo"
                  onClick={togglePopupInfo}
                />
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
                  <Modal isOpen={isPopupOpenInfo} close={togglePopupInfo} className="overlayBoardInfo">
                    <InfoPopup
                      isOpen={isPopupOpenInfo}
                      close={togglePopupInfo}
                      senderName={senderName}
                      senderEmail={senderEmail}
                      senderCC={senderCC}
                      senderDomain={senderDomain}
                      shipping_address={senderSA}
                    />
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Material Table */}
        <Pendingstocks materialDetails={materialDetails} />

        {/* customer */}
        <div className="VendorResponsePending-Cutomer-EmailDiv">
          <div className="VendorResponsePending-Cutomer-EmailDiv-2">
            <div className="VendorResponsePending-Cutomer-EmailDiv-3">
              <div className="VendorResponsePending-Cutomer-EmailDiv-4">
                <div className="VendorResponsePending-Cutomer-EmailDiv-5">
                  <div className="VendorResponsePending-Cutomer-EmailDiv-Mail">Pending (3 days)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="VendorResponsePending-Cutomer-EmailDiv-Value">
            <div className="VendorResponsePending-Cutomer-EmailDiv-Value-2">
              <div className="VendorResponsePending-Cutomer-EmailDiv-Value-3">
                <div className="VendorResponsePending-Cutomer-EmailDiv-Value-4">
                  <div className="VendorResponsePending-Cutomer-EmailDiv-Value-Content">
                    Subject: "{customer_response_subject}"
                    <br />
                    <br />
                    {/* Thank you for choosing our services. We appreciate your
                  trust in us and strive to meet your expectations.
                  <br />
                  Please find below a detailed breakdown of your order costs:
                  <br />| Material | Dimensions       | Quantity             |
                  Color | Availability          | Individual Cost | Total Cost
                  | Lead Time | Freight Cost | | --------   |
                  ------------------ | ------------------- | ------ |
                  ------------------- | ------------------ | ------------ |
                  ------------ | ------------ | | PTFE     | Thick: .020 inch
                  | 2 sqft or MOQ   |     -    | IN-STOCK           |  
                  10.0                 | 100.0        | 3 days       |
                  $50            | | PTFE     | Thick: .187 inch | 16 sqft or
                  MOQ |     -    | NOT IN-STOCK |    12.0                 |
                  120.0        | 5 days       | $52            |<br />
                  Below are the details of the materials used in your order:
                  <br />
                  **PTFE** - Specifications: Thick: .020 inch, Thick: .187
                  inch - Manufacturer: Not provided - Shipping Location: 15619
                  Blackburn Ave, Norwalk, CA 90650
                  <br />
                  Please note that the PTFE with dimension .187 inch is
                  currently not in stock. However, we have started working on
                  procuring them and will let you know as soon as they become
                  available.
                  <br />
                  We are committed to delivering high-quality materials on
                  time and we are open to negotiation. We look forward to your
                  reply and are eager to meet your needs.
                  <br />
                  Thank you once again for choosing us.
                  <br />
                  Best regards: */}
                    {email}
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

export default VendorResponsePending;