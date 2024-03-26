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
import Model from "react-modal";
import Success from "../../components/Success/Success";
import Notrfq from "../../components/NotRFQ/Notrfq";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { responseAdd } from "../../../Store/action/customerBodyAction";
import Clarification from "../../components/Clarification/Clarification";

import { v4 as uuidv4 } from "uuid";

const Delegate = ({ emailDetails, emailAddress, userName, val, ...props }) => {
  const history = useHistory();

  const { accessToken } = useSelector((state) => state.accessToken);
  const location = useLocation();
  // const token = location?.state.token;

  const searchParams = new URLSearchParams(location.search);
  const selectedOrganization = searchParams.get("selectedOrganization");
  console.log("selectedOrganization", selectedOrganization);

  const queueNavigation = () => {
    // history.push(`/queue?selectedOrganization=${selectedOrganization}`);
    history.push({
      pathname: "/queue",
      state: { selectedOrganization: selectedOrganization },
    });
  };
  const contactNavigation = () => {
    // history.push(`/contact?selectedOrganization=${selectedOrganization}`);
    history.push({
      pathname: "/contact",
      state: { selectedOrganization: selectedOrganization },
    });
  };

  const [clarifyBtn, setClarifyBtn] = useState(false);
  const [isPopupClarify, setIsPopupClarify] = useState(false);
  const [isPopupClarify2, setIsPopupClarify2] = useState(false);
  const [hasBody, setHasBody] = useState(false);
  const togglePopupClarify = () => {
    setClarifyBtn(true);
    console.log("toggle Regenerate");
    setIsPopupClarify(!isPopupClarify);
    console.log(isPopupClarify);
  };

  // state to store the message/email body we received from clarification API
  const [clarifyBody, setClarifyBody] = useState(null);
  const [clarifySubject, setClarifySubject] = useState(null);
  const [clarifyFlag, setClarifyFlag] = useState(false);
  // call generate_clarification_emails API when clarification button clciked
  useEffect(() => {
    if (clarifyBtn) {
      const generateClarifyEmail = async () => {
        try {
          // const res = await axios.post("https://api-dev.wise-sales.com/backend/api/generate_clarification_emails/",
          // {

          //     "RFQ_status": 1,
          //     "name": "Oscar Rodriguez",
          //     "email": "orodriguez@roncelli.com",
          //     "company": "Roncelli Plastics",
          //     "shipping_address": "330 W. Duarte Road. Monrovia, CA. 91016",
          //     "cert_need": true,
          //     "products": [
          //         {
          //             "material": "G-10",
          //             "size": {"diameter": "0.187 inch", "thick": null, "length": "48.00 inch", "width": null},
          //             "shape": "Rod",
          //             "specification": "MIL-I-24768/2 GEE",
          //             "manufacturer": null,
          //             "color": null,
          //             "quantity": "20",
          //             "unit": "rods"
          //         },
          //         {
          //             "material": "G-20",
          //             "size": {"diameter": null, "thick": null, "length": null, "width": null},
          //             "shape": "Sheet",
          //             "specification": "MIL-I-24768/2 GEE",
          //             "manufacturer": null,
          //             "color": null,
          //             "quantity": "10",
          //             "unit": "sheets"
          //         }
          //     ]

          // }
          // )
          const res = await axios.post("https://api-dev.wise-sales.com/backend/api/generate_clarification_emails/", {
            classifyEmail: classifyEmail,
          });
          console.log("Clarification API Response : ", res.data);
          if (res.data.message) {
            setClarifyBody(res.data.message);
            setClarifyFlag(false);
          } else if (res.data.body) {
            setClarifyBody(res.data.body);
            setClarifySubject(res.data.subject);
            setClarifyFlag(true);
          }
        } catch (error) {
          console.error("Error occurred while calling API:", error);
        }
      };
      generateClarifyEmail();
      setClarifyBtn(false);
    }
  }, [clarifyBtn]);

  console.log("Clarify Body : ", clarifyBody);

  // Log the updated value of isPopupClarify2
  useEffect(() => {
    const generateClarifyEmail2 = async () => {
      try {
        if (isPopupClarify2) {
          const res = await axios.post("https://api-dev.wise-sales.com/backend/api/generate_clarification_emails/", {
            classifyEmail: classifyEmail,
          });
          console.log("Clarification API Response:", res.data);
          if (res.data.body) {
            setClarifyBody(res.data.body);
            setClarifySubject(res.data.subject);
            setHasBody(true);
            setClarifyFlag(true);
          } else if (res.data.message) {
            setClarifyFlag(false);
            setHasBody(false);
            setIsPopupClarify2(false);
            console.log("popup inside  generateClarifyEmail:", isPopupClarify2);
            setIsDelegate2Clicked(true);
            setBtn(true);
            console.log("LAuch", res.data.message);
          }
          // Set clarifyDelegateBtn to false after processing
          console.log("POPUP 7:", isPopupClarify2);
          // setIsPopupClarify2(false);
        }
      } catch (error) {
        console.error("Error occurred while calling API:", error);
      }
    };

    generateClarifyEmail2();
  }, [isPopupClarify2]);

  // const [queueDetails, setQueueDetails] = useState(false);
  const [queueCustomer, setQueueCustomer] = useState(false);
  const [queueVendor, setQueueVendor] = useState(false);

  const [shippingAddress, setShippingAddress] = useState(null);

  const [visible, setVisible] = useState(false);
  const [isPopupOpennotrfq, setIsPopupOpennotrfq] = useState(true);

  const [showLoader, setShowLoader] = useState(true); // State to manage loader display

  const [emailDetailsFetched, setEmailDetailsFetched] = useState(false);
  const [rfq_id, setRfq_id] = useState(null);

  const [customerBody, setCustomerBody] = useState(null);
  const [customerSubject, setCustomerSubject] = useState(null);

  const [vendorBody, setVendorBody] = useState(null);

  const [vendordetail, setVendorDetails] = useState([]);
  const [vendoremails, setVendorEmails] = useState([]);

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

  const [selectedRFQ, setSelectedRFQ] = useState(true);

  const toggleSelectedRFQ = () => {
    setSelectedRFQ(!selectedRFQ);
  };

  useEffect(() => {
    let closePopupTimer;
    if (visible) {
      closePopupTimer = setTimeout(() => {
        setVisible(false);
        history.push({
          pathname: "/queue",
        });
      }, 3000); // 2 seconds
    }

    return () => {
      clearTimeout(closePopupTimer);
    };
  }, [history, visible]);

  const togglePopupnotRFQ = () => {
    console.log("toggle not rfq");
    setIsPopupOpennotrfq(!isPopupOpennotrfq);
    console.log(isPopupOpennotrfq);
  };

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

  //   const handleLaunch = () => {

  //     const accessToken = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAcwMknoqsvsOzI53PHE81tR3yjSouoADaGAZj7X4jhDGAFCSBeh8FuSj5uYAJRLE3GNZE2s/dTxQs9ylM4dnsu9wF2rkdu1EGSftSurh0NYtqYjiHKxQR07M1oaTlD6qIi7COlQ9BZ/lg7mKIacMFn9c3yGxuC82z9Qq4/khuGBAYarAqEYJabYkI+R/64QcXjtb/lo/45kra4p0mqakT84ezTvSFG4WI/WVHPjLw0px0UzAaPVANUHSzAGc6uZuq+I4mtNYHEUznOUXhCa3gV//kIjeBElK3fVbR2ldMianYHetmfQyEZgUNCjzw1OrUwyJy27UJ+B/snUrKGmq/G4DZgAACLzS+AZ/Zx/UQAKsaxbO+vQK1wrFyO1Jo20IbsbuPS+GQ1ZfHz7NeLFa7t10xza0quNUggAYFBhU/X3jcmJ+zJbMuMqI4TlzQkqTo8wR158s/v3CUJWxFPEEZkK0vUaLRaufy9CoBtagvT1uK9bWNPc0ESS8IbLF4ie0ZTVxc+aLo7rauh/mPQTwzLvQT/SykSOYtrwTnhcFaiJvMwjNlrd7CEt77dAXeDsR+fxyet+YIBznNBO/DGfz5SWVq0t/wArk0fz2grz+sglWqm4oQwqMtjCDVX7d7OJl0jExfi5ZZJvqmRLMAWJTVpmYlRHfWN1fP5WXHRrLZedbo+ZaSamaWixOWvJS4qwuezy9QOZ3NjGUqOFWcd4fW+wTUSG2GMd76izFc2ohaD+b5twnvn+8RMmNklcyseKFhhjbhEh9adge2h0f6iPByFO6YXahBhrgTa/sIw9HXKYOfgM3H5dhGWG/eYwvLBxhOdiPCqHgFJTi+DhLoDkUhBe/Q7cbpeXoXysZrZBO+E7LaQq7drSMYJe8ZEd3mwlfg109qi5NfdkEU8ba6kqSVSAJ1ETM7DPX8ksQYzoiXOxj/hDpwx5CnV8QjlN51+hU7NanhhlspZyVNXAWMK2nqgN1iJxD3Ma9I0ouC8bZ1Nsvj95/6HuiKILbrwy5dqW3gRjbP5SZBdBq30Sb+1gKX/QsRwVgNUB/vV2v4wJykMnNAUWJAj6u5NCemwWl+ZxZzmFNXIcnpuSbkPB+HsgRacllzMZZZW27WZq1Ikf2zv59Ag==';
  // const sendMailVendor = 'https://graph.microsoft.com/v1.0/me/sendMail';
  //     const emailData1 = {
  //         "message": {
  //           "subject": "Meet for lunch?",
  //           "body": {
  //             "contentType": "Text",
  //             "content": "The new cafeteria is open."
  //           },
  //           "toRecipients": [
  //             {
  //               "emailAddress": {
  //                 "address": "afshankhan252@gmail.com"
  //               }
  //             }
  //           ]
  //         },
  //         "saveToSentItems": "false"
  //       };
  // fetch(sendMailVendor, {
  //         method: 'POST',
  //         headers: {
  //           'Authorization': `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(emailData1)
  //       })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log("Mail sent successfully", data);
  //       })
  //       .catch(error => {
  //         console.error("Error sending mail", error);
  //       });

  //     // }

  //     // const sendMailUrl = 'https://graph.microsoft.com/v1.0/me/messages/AQMkADAwATM0MDAAMS02OGVmLWEyN2EtMDACLTAwCgBGAAADpd4QqRN3K0yHpymIIakdnQcA54fYm3+x4Uy3lcgUc2eXoQAAAgEMAAAA54fYm3+x4Uy3lcgUc2eXoQAAABfpxN8AAAA=/reply';
  //     //     const emailData = {
  //     //       message: {
  //     //         message: {
  //     //             toRecipients: [
  //     //                 {
  //     //                     emailAddress: {
  //     //                         address: "rudranil@onelabventures.com"
  //     //                     }
  //     //                 }
  //     //             ]
  //     //         },
  //     //         comment: "<b>testing reply</b>"
  //     //     }
  //     // };

  //         // fetch(sendMailUrl, {
  //         //   method: 'POST',
  //         //   headers: {
  //         //     'Authorization': `Bearer ${accessToken}`,
  //         //     'Content-Type': 'application/json'
  //         //   },
  //         //   body: JSON.stringify(emailData)
  //         // })
  //         // .then(response => response.json())
  //         // .then(data => {
  //         //   console.log("Mail sent successfully", data);
  //         // })
  //         // .catch(error => {
  //         //   console.error("Error sending mail", error);
  //         // });

  //       }

  // change

  const handleLaunch = () => {
    const uniqueId = uuidv4();
    // const accessToken = token;
    const sendMailVendor = "https://graph.microsoft.com/v1.0/me/sendMail";

    console.log("Vendor Details:", vendordetail);
    // Define a variable to store all vendor emails
    let allVendorEmails = {};
    // Iterate over each vendor detail and store their emails
    Object.values(vendordetail).forEach((vendor) => {
      const { Vendor_Email } = vendor;
      allVendorEmails[Vendor_Email] = vendor;
    });
    // Log all vendor emails
    console.log("All Vendor Emails:", allVendorEmails);

    // Check if there are no vendor emails then only save customer details with "Sent" status
    //  if (Object.keys(allVendorEmails).length === 0) {
    //   setQueueCustomer(true);
    // }

    // Call the function to send emails to vendors

    // Iterate over each vendor email and send an email
    Object.entries(allVendorEmails).forEach(([email, vendor]) => {
      // Define email data
      const emailData = {
        message: {
          subject: vendor.Subject + `#${uniqueId}`,
          body: {
            contentType: "Html",
            content: vendor.Body,
          },
          toRecipients: [
            {
              emailAddress: {
                address: email,
              },
            },
          ],
        },
        saveToSentItems: "true",
      };
      //   Send email to the vendor
      //   console.log(emailData);

      fetch(sendMailVendor, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })
        .then((data) => {
          console.log("Mail sent successfully to Vendor");
          console.log("Queue details have been sent");
          // setQueueDetails(true);
          //   setQueueVendor(true);
        })
        .catch((error) => {
          console.error(`Error sending mail to Vendor`, error);
        });
    });

    console.log("Message Id ", emailDetails.msgId);
    console.log("CustomerResponseBody ", customerResponseBody);
    const sendCustomerReplyUrl = `https://graph.microsoft.com/v1.0/me/messages/${emailDetails.msgId}/reply`;
    const emailData = {
      message: {
        toRecipients: [
          {
            emailAddress: {
              address: emailDetails.from,
            },
          },
        ],
      },
      comment: customerResponseBody,
    };

    fetch(sendCustomerReplyUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((data) => {
        console.log("Mail sent successfully to customer", data.status);
        setVisible(true);
        setQueueCustomer(true);
        // history.push("/queue")
      })
      .catch((error) => {
        console.error("Error sending mail", error);
      });

    //   const vendorMailConversationurl =
    //   fetch(vendorMailConversationurl, {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(emailData),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Mail sent successfully to customer", data);
    //       setVisible(true);
    //     })
    //     .catch((error) => {
    //       console.error("Error sending mail", error);
    //     });
  };

  useEffect(() => {
    if (queueCustomer) {
      const sendQueueDetailsToCustomer = async () => {
        try {
          const result = await axios.post("https://api-dev.wise-sales.com/backend/api/QueueDetails/", {
            customer_name: emailDetails.senderName,
            customer_email: emailDetails.from,
            customer_subject: emailDetails.subject,
            customer_response: customerResponseBody,
            vendor_responses: vendordetail,
            RFQ_ID: rfq_id,
            status: "Sent",
            customer_response_subject: customerSubject,
          });
          console.log("send queue details API response from backend: ", result.data);
        } catch (error) {
          console.error("Error occurred while calling API:", error);
        }
      };
      sendQueueDetailsToCustomer();
    }
  }, [queueCustomer]);

  //   useEffect(() => {
  //     if (queueVendor) {
  //       const sendQueueDetailsToVendor = async () => {
  //         try {
  //           const result = await axios.post("https://api-dev.wise-sales.com/backend/api/QueueDetails/", {
  //             customer_name: classifyEmail.name,
  //             RFQ_ID: rfq_id,
  //             status: "Vendor quote pending",
  //             day: "2 days"
  //           });
  //           console.log("send queue vendor details API response from backend: ", result.data);
  //         } catch (error) {
  //           console.error("Error occurred while calling API:", error);
  //         }
  //       };
  //       sendQueueDetailsToVendor();
  //     }
  //   }, [queueVendor]);

  // useEffect(() => {
  //   if (queueDetails) {
  //     const sendQueuedetails = async () => {
  //       try {
  //         const result = await axios.post("https://api-dev.wise-sales.com/backend/api/QueueDetails/", {
  //           customer_name: classifyEmail.name,
  //           RFQ_ID: rfq_id,
  //           status: "Sent",
  //         });
  //         console.log("send queue details API response from backend: ", result.data);
  //       } catch (error) {
  //         console.error("Error occurred while calling API:", error);
  //       }
  //     };
  //     sendQueuedetails();
  //   }
  // }, [queueDetails]);

  useEffect(() => {
    if (delegatebtn1) {
      const SendEmailDetails = async () => {
        try {
          setShowLoader(true);
          const data = {
            subject: emailDetails.subject,
            email_body: emailDetails.body,
            sender_email: emailDetails.from,
            sender_name: emailDetails.senderName,
            wisecustomer: "INTR100",
            customerofcustomer: "200",
            acctId: "GY248",
          };
          const inputData = JSON.stringify(data);

          const res = await axios.post("https://api-dev.wise-sales.com/ml-backend/classify_email/", inputData);

          console.log("classify API response from backend: ", res.data);
          setClassifyEmail(res.data);
          setRfq_id(res.data.RFQ_ID);
        } catch (error) {
          console.error("Error occurred while calling API:", error);
        } finally {
          setShowLoader(false);
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

  const { customerResponseBody } = useSelector((state) => state.customerResponse);

  // Log the state outside of the useEffect to see the updated value
  console.log("Classify Email: ", classifyEmail);
  useEffect(() => {
    if (classifyEmail.shipping_address || classifyEmail.RFQ_ID) {
      setMaterialDetails({
        shipping_address: classifyEmail.shipping_address || "N/A",
        RFQ_ID: classifyEmail.RFQ_ID || "N/A",
      });
      setShippingAddress(classifyEmail.shipping_address);
    }
  }, [classifyEmail]);

  console.log("Classify Email-SA: ", classifyEmail.shipping_address);
  console.log("Classify Email-RFQ_ID: ", classifyEmail.RFQ_ID);
  console.log("shipping_address_update5: ", shippingAddress);

  const SA = classifyEmail.shipping_address;
  const RFQID = classifyEmail.RFQID;

  const DelegeBtn2 = () => {
    setIsPopupClarify2(!isPopupClarify2);
    console.log("POPUP 1:", isPopupClarify2);
    // setBtn(true);
    // setIsDelegate2Clicked(true);
  };

  useEffect(() => {
    if (isDelegate2Clicked) {
      const generateEmail = async () => {
        const generateEmailInput = {
          isr_name: "Santiago",
          tone: "Professional",
          RFQ_status: 1,
          name: "Abby Rodriguez",
          email: "operations@integralmachining.com",
          company: "Integral Machining & Engineering",
          shipping_address: "12060 31st. Ct. N. St. Petersburg FL 33716",
          cert_need: false,
          product_1: {
            material: "PVC",
            size: {
              diameter: "1.25 inch RD",
              thick: null,
              length: "10 feet",
              width: null,
            },
            shape: "Rod",
            specification: null,
            manufacturer: null,
            color: "Gray",
            quantity: "20",
            unit: "lengths",
          },
          product_2: {
            material: "PVC",
            size: {
              diameter: "1.125 inch RD",
              thick: null,
              length: "10 feet",
              width: null,
            },
            shape: "Rod",
            specification: "23-0004-01",
            manufacturer: null,
            color: "Gray",
            quantity: "28",
            unit: "Lengths",
          },
          RFQ_ID: "intr0012091723902921",
        };

        try {
          const res = await axios.post("https://api-dev.wise-sales.com/ml-backend/generate_email/", generateEmailInput);
          console.log(res.data);
          const customerResponse = res.data.Customer_quote.Body;
          //  const vendorResponse = res.data.vendor_1.Body
          responseAdd(customerResponse);
          // setCustomerBody(customerResponse);
          console.log("Customer's Body:", customerBody);
          //   console.log("Vendor's Body:", vendorBody);
          setCustomerSubject(res.data.Customer_quote.Subject);

          const vendorDetails = Object.values(res.data).filter((obj) => obj.Vendor_Email);
          console.log(vendorDetails);
          // setVendorEmails(vendorEmails)

          setVendorDetails(vendorDetails);

          //     const vendorDEt = Object.values(res.data)
          //     .filter(obj => obj.Vendor_Email)
          //     .map(obj => obj.Vendor_Email);
          //   setVendorEmails(vendorEmails);

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

  //   useEffect(() => {
  //     if (emailDetails && !emailDetailsFetched) {
  //       const getEmailDetails = async () => {
  //         try {
  //           // Make sure the RFQ_status is 1 before making the API call
  //           if (classifyEmail.RFQ_status === 1) {
  //             const res = await axios.post("https://api-dev.wise-sales.com/backend/api/getEmailDetails/", {
  //               getEmailDetails: emailDetails,
  //               RFQ_ID: rfq_id,
  //             });

  //             console.log("getEmailDetails API response from backend: ", res.data);
  //             console.log("RFQ 2", rfq_id);
  //             // Set the state variable to true indicating that the API call has been made
  //             setEmailDetailsFetched(true);
  //           } else {
  //             console.log("RFQ_status is not 1, skipping API call.");
  //           }
  //         } catch (error) {
  //           console.error("Error occurred while calling API:", error);
  //         }
  //       };
  //       getEmailDetails();
  //     }
  //   }, [classifyEmail, emailDetails, emailDetailsFetched]);

  useEffect(() => {
    // console.log("Customer Detail CC:", customerDetail.cc); // Log the value of customerDetail.cc for debugging

    if (classifyEmail && classifyEmail.RFQ_status === 1) {
      const getEmailDetails = async () => {
        try {
          // const ccToSend = customerDetail.cc !== null && customerDetail.cc !== undefined ? customerDetail.cc : []; // Check if cc is null or undefined, if so, set it to an empty array
          let ccToSend = []; // Initialize ccToSend as an empty array
          if (emailDetails.cc && emailDetails.cc.length > 0) {
            ccToSend = emailDetails.cc; // Assign ccToSend to customerDetail.cc if it exists and has length
          }
          const res = await axios.post("https://api-dev.wise-sales.com/backend/api/getEmailDetails/", {
            customer_name: emailDetails.senderName,
            customer_email: emailDetails.from,
            // cc: customerDetail.cc, // Send customerDetail.cc directly
            cc: ccToSend, // Send customerDetail.cc directly
            company: emailDetails.company,
            // shipping_address: shippingAddress,
            shipping_address: "xyz", // to update
            // email_id: emailDetails.messageId,// to update
            email_id: emailDetails.msgId, // to update
            email_subject: emailDetails.subject,
            email_body: emailDetails.body,
            RFQ_ID: rfq_id,
          });

          console.log("getEmailDetails API response from backend: ", res.data);
          setEmailDetailsFetched(true);
        } catch (error) {
          console.error("Error occurred while calling API:", error);
        }
      };

      getEmailDetails();
    } else {
      console.log("RFQ_status is not 1 or classifyEmail is not available, skipping API call.");
    }
  }, [classifyEmail, emailDetails]);

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

      {isDelegateClicked && classifyEmail && classifyEmail.RFQ_status === 1 ? (
        <>
          {/* <Topbar /> */}
          <Topbar selectedOrganization={selectedOrganization} />
          <Navbar />
        </>
      ) : (
        <>
          <div className="topbar-frame">
            {/* Section -1A */}
            <Topbar selectedOrganization={selectedOrganization} />
            {/* Section - 1B*/}
            <div className="topbar2">
              <div className="navbar">
                <div className="DEL-delegate-div">
                  <div className="DEL-delegate">Delegate</div>
                </div>

                <div className="queue-div">
                  <div className="queue" onClick={queueNavigation}>
                    Queue
                  </div>
                </div>
                <div className="contact-div">
                  <div className="contact" onClick={contactNavigation}>
                    Contact Us
                  </div>
                </div>
                <div className="A-div">
                  <div className="A">{userName}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {classifyEmail && classifyEmail.RFQ_status === 0 && (
        <Model isOpen={isPopupOpennotrfq} onRequestClose={togglePopupnotRFQ} className="overlayNoRFQ">
          <Notrfq close={togglePopupnotRFQ} />
        </Model>
      )}

      {isDelegateClicked && showLoader ? (
        <div className="L1">
          <div className="L2"></div>
          <div className="L3"></div>
          <div className="L4"></div>
        </div>
      ) : (
        <>
          {/* SECTION - 2 */}
          <div className="Quote-Sec-2">
            {/* RFQ - SECTION */}
            {/* <div className="Quote-RFQ-Section"> */}
            <div className={`Quote-RFQ-Section ${isDelegateClicked ? "collapsed" : ""}`}>
              <div className="Quote-RFQ-Div">
                <div className="Quote-RFQ-Parent">
                  <div className="Quote-RFQ-Child">
                    <div className="Quote-RFQ-TextParent">
                      {/* <div className="Quote-RFQ-Text"> RFQ {materialDetails.RFQ_ID || "RFQ"}</div> */}
                      <div className="Quote-RFQ-Text">
                        {" "}
                        RFQ {materialDetails.RFQ_ID ? `{${materialDetails.RFQ_ID}}` : ""}
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
              {/* <div className="Quote-RFQ-EmailParent"> */}
              <div className={`Quote-RFQ-EmailParent ${isDelegateClicked ? "collapsed" : ""}`}>
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
                              <div className="Quote-Table-NameValueText">{emailDetails.senderName || ""}</div>
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
                    selectedRFQ={selectedRFQ}
                    handleToggleChange={toggleSelectedRFQ}
                  />
                )}

                {isDelegate2Clicked && (
                  <Buttoncv
                    isPopupOpen1={isPopupOpen1}
                    togglePopup1={togglePopup1}
                    // isPopupOpenRegenerate={isPopupOpenRegenerate}
                    // togglePopupRegenerate={togglePopupRegenerate}
                    isPopupOpen2={isPopupOpen2}
                    togglePopup2={togglePopup2}
                    customerBody={customerBody}
                    setCustomerBody={setCustomerBody}
                    vendorBody={vendorBody}
                    vendordetail={vendordetail}
                    selectedRFQ={selectedRFQ}
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
                            <div className="Quote-Table-NameValueText">{emailDetails.senderName || ""}</div>
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
                            <div className="Quote-Table-NameValueText">{emailDetails.from || ""}</div>
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
                          {emailDetails.cc
                            ? emailDetails.cc.map((item) => {
                                return (
                                  <div className="Quote-Table-CC-ValuesChild1">
                                    <div className="Quote-Table-CC-ValuesChild1-text">{item}</div>
                                  </div>
                                );
                              })
                            : ""}
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
                            <div className="Quote-Table-NameValueText">{emailDetails.company || ""}</div>
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
              <div className="Quote-DelegateBtn">
                Launch
                <Model isOpen={visible} onRequestClose={() => setVisible(false)} className="overlaySuccess">
                  <Success />
                </Model>
              </div>
            </div>
          ) : isDelegateClicked2 ? (
            <div className="DEL-Buttons">
              <div className="Launch-btnParent">
                <div onClick={DelegeBtn2} id="Launch-btn">
                  Delegate
                </div>
              </div>
              <div className="Launch-btnParent">
                <div id="Launch-btn" onClick={togglePopupClarify}>
                  Clarification
                  {isPopupClarify && (
                    <Model isOpen={isPopupClarify} onRequestClose={togglePopupClarify} className="overlayNoRFQ">
                      <Clarification
                        customer_name={emailDetails.senderName}
                        customer_subject={emailDetails.subject}
                        customer_email={emailDetails.from}
                        RFQ_ID={rfq_id}
                        status="Clarification Pending"
                        customer_response={clarifyBody}
                        customer_response_subject={clarifySubject}
                        clarifyStatus={clarifyFlag}
                        close={togglePopupClarify}
                      />
                    </Model>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div onClick={DelegateBtn} className="Quote-DelegateBtnDiv">
              <div className="Quote-DelegateBtn">Delegate</div>
            </div>
          )}
        </>
      )}

      {isPopupClarify2 && hasBody && (
        <Model isOpen={isPopupClarify2} onRequestClose={DelegeBtn2} className="overlayNoRFQ">
          <Clarification
            customer_name={emailDetails.senderName}
            customer_subject={emailDetails.from}
            customer_email={emailDetails.body}
            RFQ_ID={rfq_id}
            status="Clarification Pending"
            customer_response={clarifyBody}
            customer_response_subject={clarifySubject}
            clarifyStatus={clarifyFlag}
            close={DelegeBtn2}
          />
        </Model>
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
