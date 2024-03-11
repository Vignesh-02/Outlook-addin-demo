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
        customerEmail: customerEmail // Update customerEmail in the state
      }));
    }
  }, [customerName, customerEmail]);


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
                      John Deo
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
                      Subject": "Order Details and Quote Breakdown"
                      <br />
                      <br />
                      Thank you for choosing our services. We appreciate your
                      trust in us and strive to meet your expectations.
                      <br />
                      Please find below a detailed breakdown of your order
                      costs:
                      <br />| Material | Dimensions | Quantity
                      | Color | Availability | Individual Cost | Total
                      Cost | Lead Time | Freight Cost || -------- |
                      ------------------ | ------------------- | ------ |
                      ------------------- | ------------------ | ------------ |
                      ------------ | ------------ || PTFE | Thick: .020
                      inch | 2 sqft or MOQ| -| IN-STOCK|
                      10.0 | 100.0| 3 days|
                      $50 | PTFE | Thick: .187 inch | 16 sqft
                      or MOQ |-| NOT IN-STOCK | 12.0
                      | 120.0 | 5 days| $52 |<br />
                      Below are the details of the materials used in your order:
                      <br />
                      **PTFE** - Specifications: Thick: .020 inch, Thick: .187
                      inch - Manufacturer: Not provided - Shipping Location:
                      15619 Blackburn Ave, Norwalk, CA 90650
                      <br />
                      Please note that the PTFE with dimension .187 inch is
                      currently not in stock. However, we have started working
                      on procuring them and will let you know as soon as they
                      become available.
                      <br />
                      We are committed to delivering high-quality materials on
                      time and we are open to negotiation. We look forward to
                      your reply and are eager to meet your needs.
                      <br />
                      Thank you once again for choosing us.
                      <br />
                      Best regards,
                      
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
