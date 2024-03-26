// import React from "react";
import React, { useState, useEffect } from "react";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Extend from "../../../../public/extender.png";
import MailPopup from "../MailPopup/MailPopup";
import InfoPopup from "../InfoPopup/InfoPopup";
import Pendingstocks from "../PendingStocks/Pendingstocks";
import Model from "react-modal";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Clarifypage.css";

const Clarifypage = () => {
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

  // const location = useLocation();
  // const { customerName } = location.state || {}; // Destructure customerName from state
  // const { customerEmail } = location.state || {}; // Destructure customerName from state
  // const { date } = location.state || {}; // Destructure customerName from state
  // const { time } = location.state || {}; // Destructure customerName from state
  // const { RFQ_ID } = location.state || {}; // Destructure customerName from state
  // const { customer_response_subject } = location.state || {}; // Destructure customerName from state
  // const { day } = location.state || {}; // Destructure customerName from state

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerName = searchParams.get("customerName");
  const customerEmail = searchParams.get("customerEmail");
  const RFQ_ID = searchParams.get("RFQ_ID");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const customer_response_subject = searchParams.get("customer_response_subject");
  const day = searchParams.get("day");

  console.log("clarify Customer Name:", customerName); // Log customerName to console

  useEffect(() => {
    if (customerName && customerEmail && RFQ_ID) {
      // If both customerName and customerEmail are available, update the state
      setCustomerDetails((prevDetails) => ({
        ...prevDetails,
        customerName: customerName,
        customerEmail: customerEmail, // Update customerEmail in the state
        RFQ_ID: RFQ_ID,
      }));
    }
  }, [customerName, customerEmail, RFQ_ID]);

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
    <div className="clarifypagePage">
      <Topbar />
      <Navbar />
      {/* middle section */}

      <div className="clarifypageMiddle" id="abc">
        {/* sent table */}
        <div className="clarifypageMiddle-A">
          <div className="clarifypageMiddle-B">
            <div className="clarifypageMiddle-B2">
              <div className="clarifypageMiddle-B3">
                <div className="clarifypageMiddle-B4">
                  <div className="clarifypageMiddle-B4-RFQ">RFQ</div>
                </div>
              </div>
              <div className="clarifypageMiddle-B4-side1">
                <div className="clarifypageMiddle-B4-side2"></div>
              </div>
            </div>
            <div className="clarifypageMiddle-C">
              <div className="clarifypageMiddle-C2">
                <div className="clarifypageMiddle-C3">
                  <div className="clarifypageMiddle-C4">Status</div>
                </div>
              </div>
              <div className="clarifypageMiddle-C4-side1">
                <div className="clarifypageMiddle-C4-side2"></div>
              </div>
            </div>
            <div className="clarifypageMiddle-D">
              <div className="clarifypageMiddle-D2">
                <div className="clarifypageMiddle-B4">
                  <div className="clarifypageMiddle-C4">Date</div>
                </div>
              </div>
              <div className="clarifypageMiddle-B4-side1">
                <div className="clarifypageMiddle-B4-side2"></div>
              </div>
            </div>
          </div>
          <div className="clarifypageMiddle-BVal">
            <div className="clarifypageMiddle-BVal-2">
              <div className="clarifypageMiddle-BVal-3">
                <div className="clarifypageMiddle-BVal-3a">{customerName}</div>
                <div className="clarifypageMiddle-BVal-3b">{RFQ_ID}</div>
              </div>
            </div>
            <div className="clarifypageMiddle-BVal-4">
              <div className="clarifypageMiddle-BVal-4a">
                <div className="clarifypageMiddle-BVal-4b">Clarification Pending</div>
                <div className="clarifypageMiddle-BVal-4b">{day}</div>
              </div>
            </div>
            <div className="clarifypageMiddle-BVal-5">
              <div className="clarifypageMiddle-BVal-5a">
                <div className="clarifypageMiddle-BVal-5b">
                  <div className="clarifypageMiddle-BVal-3a">{date}</div>
                </div>
                <div className="clarifypageMiddle-BVal-3b">{time}</div>
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
                      close={togglePopupMail}
                      subject={senderSubject}
                      body={senderBody}
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
                      {/* {customerSubject} */}
                      subject : {senderSubject}
                      <br />
                      <br />
                      BODY <br /> hi afshan
                      {/* {customerEmail} */}
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
                      <div className="Board-userInfo-Val-6">
                        {/* Angie Pankuch */}
                        {customerName}
                      </div>
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
                    <InfoPopup
                      isOpen={isPopupOpenInfo}
                      close={togglePopupInfo}
                      senderName={senderName}
                      senderEmail={senderEmail}
                      senderCC={senderCC}
                      senderDomain={senderDomain}
                      shipping_address={senderSA}
                    />
                  </Model>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Material Table */}
        {/* <clarifypagestocks materialDetails={materialDetails} /> */}
        <Pendingstocks materialDetails={materialDetails} />

        {/* customer */}
        <div className="Board-Cutomer-EmailDiv">
          <div className="Board-Cutomer-EmailDiv-2">
            <div className="Board-Cutomer-EmailDiv-3">
              <div className="Board-Cutomer-EmailDiv-4">
                <div className="Board-Cutomer-EmailDiv-5">
                  <div className="Board-Cutomer-EmailDiv-Mail">Clarification Mail Request</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Board-Cutomer-EmailDiv-Value">
            <div className="Board-Cutomer-EmailDiv-Value-2">
              <div className="Board-Cutomer-EmailDiv-Value-3">
                <div className="Board-Cutomer-EmailDiv-Value-4">
                  <div className="Board-Cutomer-EmailDiv-Value-Content">{customerEmail}</div>
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

export default Clarifypage;
