// import React from "react";
import React, { useState, useEffect } from "react";
// import "./Pending.css";
import "./styles/Pending.css"
import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";

const Pending = () => {

  const [customerDetails, setCustomerDetails] = useState({
    customerName: "",
    customerEmail: "", // Add customerEmail to the state
    customerSubject: ""
  });


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("customerName");
  const email = searchParams.get("customerEmail");
  const subject = searchParams.get("customerSubject");
  
  
  console.log("Customer Name 3:", name); // Log customerName to console
  console.log("Customer Email 2:", email); // Log customerName to console
  console.log("Customer subject 6:", subject); // Log customerName to console

  

  // useEffect(() => {
  //   if (name && email) {
  //     // If both customerName and customerEmail are available
  //     // Set an empty string if customerSubject is null
  //     const subjectValue = subject !== null ? subject : "";
  //     // Update the state
  //     setCustomerDetails((prevDetails) => ({
  //       ...prevDetails,
  //       customerName: name,
  //       customerEmail: email,
  //       customerSubject: subjectValue // Use the modified subject value
  //     }));
  //   }
  // }, [name, email, subject]);

  useEffect(() => {
    if (name && email && subject) {
      // Decode the subject
      const decodedSubject = decodeURIComponent(subject);
      // Update the state
      setCustomerDetails((prevDetails) => ({
        ...prevDetails,
        customerName: name,
        customerEmail: email,
        customerSubject: decodedSubject
      }));
    }
  }, [name, email, subject]);
  


  return (
    <div className="PendingPage">
    <Topbar />
    <Navbar />
    {/* middle section */}
    <div className="PendingPage-middleDiv">
      {/* 1st cont */}
      <div className="PendingPage-middleDiv-A">
        <div className="PendingPage-middleDiv-A-child">
          {/* value */}
          <div className="PendingPage-middleDiv-A-child-val1">
            <div className="PendingPage-middleDiv-A-child-val2">
              <div className="PendingPage-middleDiv-A-child-val3">
                <div className="PendingPage-middleDiv-A-child-customer">
                  Customer
                </div>
              </div>
            </div>
            <div className="PendingPage-middleDiv-A-child-side1">
              <div className="PendingPage-middleDiv-A-child-side2"></div>
            </div>
          </div>
          <div className="PendingPage-middleDiv-A-child2-val1">
            <div className="PendingPage-middleDiv-A-child2-val2">
              <div className="PendingPage-middleDiv-A-child-val3">
                <div className="PendingPage-middleDiv-A-child-customer">
                  Material
                </div>
              </div>
            </div>
            {/* width 12px */}
            <div className="PendingPage-middleDiv-A-child-side1">
              <div className="PendingPage-middleDiv-A-child-side2"></div>
            </div>
          </div>
          <div className="PendingPage-middleDiv-A-child3-val1">
            <div className="PendingPage-middleDiv-A-child-val2">
              <div className="PendingPage-middleDiv-A-child-val3">
                <div className="PendingPage-middleDiv-A-child-customer">
                  Quantity
                </div>
              </div>
            </div>
            <div className="PendingPage-middleDiv-A-child-side1">
              <div className="PendingPage-middleDiv-A-child-side2"></div>
            </div>
          </div>
          <div className="PendingPage-middleDiv-A-child4-val1">
            <div className="PendingPage-middleDiv-A-child-val2">
              <div className="PendingPage-middleDiv-A-child-val3">
                <div className="PendingPage-middleDiv-A-child-customer">
                  Shipping
                </div>
              </div>
            </div>
            <div className="PendingPage-middleDiv-A-child-side1">
              <div className="PendingPage-middleDiv-A-child-side2"></div>
            </div>
          </div>
        </div>
        {/* values */}
        <div className="PendingPage-ValueDiv">
          <div className="PendingPage-ValueDiv-sec1">
            {/* val -1  */}
            <div className="PendingPage-ValueDiv-sec1-val1">
              <div className="PendingPage-ValueDiv-sec1-val2">
                <div className="PendingPage-ValueDiv-sec1-val3">
                  <div className="PendingPage-ValueDiv-sec1-val4">
                    {/* John Deo */}
                    {customerDetails.customerName}

                  </div>
                </div>
              </div>
            </div>
            <div className="PendingPage-ValueDiv-sec1-val1">
              <div className="PendingPage-ValueDiv-sec2-val2">
                <div className="PendingPage-ValueDiv-sec2-val3">Acrylic</div>
              </div>
            </div>
            <div className="PendingPage-ValueDiv-sec1-val1">
              <div className="PendingPage-ValueDiv-sec1-val2">
                <div className="PendingPage-ValueDiv-sec1-val3">
                  <div className="PendingPage-ValueDiv-sec1-val4">20</div>
                </div>
              </div>
            </div>
            <div className="PendingPage-ValueDiv-sec1-val1">
              <div className="PendingPage-ValueDiv-sec4-val2">
                <div className="PendingPage-ValueDiv-sec1-val3">
                  <div className="PendingPage-ValueDiv-sec2-val3">
                    Location
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd cont */}
      <div className="PendingPage-Cont2">
        <div className="PendingPage-Cont2-Sec1">
          
          <div className="PendingPage-Cont2-Sec1-child1">
            <div className="PendingPage-Cont2-Sec1-child2">
              <div className="PendingPage-Cont2-Sec1-child3">
                <div className="PendingPage-Cont2-Sec1-child4">
                  <div className="PendingPage-Cont2-Sec1-CustomerMail">
                    Customer mail
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="PendingPage-Cont2-Sec2-child1">
            <div className="PendingPage-Cont2-Sec2-child2">
              <div className="PendingPage-Cont2-Sec2-child3">
                <div className="PendingPage-Cont2-Sec2-child4">
                  <div className="PendingPage-Cont2-Sec2-mailContent">
                    Subject": {customerDetails.customerSubject}
                    <br />
                    <br />
                    
                    {customerDetails.customerEmail}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* 2nd */}

      <Footer />
  </div>
  );
};

export default Pending;
