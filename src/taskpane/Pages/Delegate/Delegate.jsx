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
import Model from 'react-modal'
// import Success from "../../Components/Success/Success";
import Success from "../../components/Success/Success";
import Notrfq from "../../components/NotRFQ/Notrfq";
import { useNavigate } from "react-router-dom";


const Delegate = ({
    emailDetails,
    emailAddress,
    userName, 
    val, ...props }) => {
  const navigate = useNavigate();


  const [visible, setVisible] = useState(false);
  const [showLoader, setShowLoader] = useState(true); // State to manage loader display
  const [visible2, setVisible2] = useState(false);

  const [emailDetailsFetched, setEmailDetailsFetched] = useState(false);
  const [rfq_id, setRfq_id] = useState(null)



  const [customerBody, setCustomerBody] = useState(null);
  const [vendorBody, setVendorBody] = useState(null);     

  const [vendordetail, setVendorDetails] = useState([]);
  const [vendoremails, setVendorEmails] = useState([])

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
  const [isPopupOpennotrfq, setIsPopupOpennotrfq] = useState(true);


  useEffect(() => {
    let closePopupTimer;
    if (visible) {
      closePopupTimer = setTimeout(() => {
        setVisible(false);
      }, 2000); // 2 seconds
    }

    return () => {
      clearTimeout(closePopupTimer);
    };
  }, [visible]);

  const togglePopupnotRFQ = () => {
    console.log("toggle not rfq")
    setIsPopupOpennotrfq(!isPopupOpennotrfq);
    console.log(isPopupOpennotrfq)
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

  // const handleLaunch = () => {
  //   const accessToken = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAeJ11VoWDbmrzeerwQgxxgOWiAK8bXIRFEiygmBltQlV2cfr+l6KTEzRycFQt7cKYSDOnKrmm2ubuwxfiHaAWMlCtLRN1n/UduS/NBz07aC8Xq+xQF9jpLvWLwFlYK5mFN3uJnCbCgjVeGGnOA6c2H8Ur5yayvTCC48d4ttgJCzUT/xysXtHN1IrFk0LtwxQEdKWbvDsOyeAbHKpPgHnx9GTdf3P/N7CML3yi0A78ubdcCjZ7VD7ez5llSSZAE9ECvLJHExKonfNlvZwvd2ZZH8l0VG+m+ct08Jy9BSQM5DLvpwu01ZCh/kmOAgFqOJjOnNttA/IxPM+yyQ9S0Ng55YDZgAACDSNR4pm7xW8QAJ6jUyYEqlRZ/R77ACfWhdpydo6H9B+JnF/vJNQHuoTwECbKx+NiJ/dkaHV20OjT/xl2BzHpMX8S4DbXWcN1VLvL78mt1MIeFoTXWMNNe+5PJ5a7NE/fVnXeEp77ScOY7ZxhD/jQ+/Pk9J0Me7sJ9f7oRZZ2RF1cme+jZCCKnD9l7+Sl2ImxZl7cL1kWXgyUD674kRdi3uN2cFzzFKGAEWyZK3hQ4pROdx0IiPLpyVopesQyHf1vSHXL3to/BcRfEGSkKY9/2VU7yxY+byzhMAUtgD0vF1VRdS7PyuGykwZvGm4cOWpr+1Ve1+eaXpN5i61cH7T/wvztzhqnPWufdirL+tvOIKaIyibPeyqwpnIWOBO+r6BYe/RUOer7ujs+hM9s2/2fzpF541kCBTrz+Go6ax8lTZKNHCZUJ4GU4pXh1iUY3JoF6faMXTstCuW/eyGyepGJx7FZWopfwXqe/SvTihsA7+xZjPqvYQEx31HMMai/2VUPN4BinbCFil44ohONLwxwVgXV67viANzIXcgz8+dDSaV8VtQbLU7ReI5vCk+NL3j5IXvU1rwK8KDG0of60xWutauy1m1RmRBgxRc90BYxnY6tSTULmQeibJmlrk+XPWAQvy3cIo0KwRTbu6Hr0jNhALibvA2sH5X2QGtCZ6p0CdHf406B9wzuD/cj2ivmo6BH/bNTkClGOi4BFISm459Mo7u7Ipstpl8zf0CJX5jw2y81dF5xP6HdqtWRDAXjoFzHtgoK+lC8V+3oJh9Ag==';
  //   const sendMailReply = 'https://graph.microsoft.com/v1.0/me/messages/AQMkADAwATM0MDAAMS02OGVmLWEyN2EtMDACLTAwCgBGAAADpd4QqRN3K0yHpymIIakdnQcA54fYm3+x4Uy3lcgUc2eXoQAAAgEMAAAA54fYm3+x4Uy3lcgUc2eXoQAAABfpxN8AAAA=/reply';
  //       const emailData = {
  //           message: {
  //               toRecipients: [
  //                   {
  //                       emailAddress: {
  //                           address: "rudranil@onelabventures.com"
  //                       }
  //                   }
  //               ]
  //           },
  //           comment: customerBody
  //   };

  //   // const sendMailVendor = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAcwMknoqsvsOzI53PHE81tR3yjSouoADaGAZj7X4jhDGAFCSBeh8FuSj5uYAJRLE3GNZE2s/dTxQs9ylM4dnsu9wF2rkdu1EGSftSurh0NYtqYjiHKxQR07M1oaTlD6qIi7COlQ9BZ/lg7mKIacMFn9c3yGxuC82z9Qq4/khuGBAYarAqEYJabYkI+R/64QcXjtb/lo/45kra4p0mqakT84ezTvSFG4WI/WVHPjLw0px0UzAaPVANUHSzAGc6uZuq+I4mtNYHEUznOUXhCa3gV//kIjeBElK3fVbR2ldMianYHetmfQyEZgUNCjzw1OrUwyJy27UJ+B/snUrKGmq/G4DZgAACLzS+AZ/Zx/UQAKsaxbO+vQK1wrFyO1Jo20IbsbuPS+GQ1ZfHz7NeLFa7t10xza0quNUggAYFBhU/X3jcmJ+zJbMuMqI4TlzQkqTo8wR158s/v3CUJWxFPEEZkK0vUaLRaufy9CoBtagvT1uK9bWNPc0ESS8IbLF4ie0ZTVxc+aLo7rauh/mPQTwzLvQT/SykSOYtrwTnhcFaiJvMwjNlrd7CEt77dAXeDsR+fxyet+YIBznNBO/DGfz5SWVq0t/wArk0fz2grz+sglWqm4oQwqMtjCDVX7d7OJl0jExfi5ZZJvqmRLMAWJTVpmYlRHfWN1fP5WXHRrLZedbo+ZaSamaWixOWvJS4qwuezy9QOZ3NjGUqOFWcd4fW+wTUSG2GMd76izFc2ohaD+b5twnvn+8RMmNklcyseKFhhjbhEh9adge2h0f6iPByFO6YXahBhrgTa/sIw9HXKYOfgM3H5dhGWG/eYwvLBxhOdiPCqHgFJTi+DhLoDkUhBe/Q7cbpeXoXysZrZBO+E7LaQq7drSMYJe8ZEd3mwlfg109qi5NfdkEU8ba6kqSVSAJ1ETM7DPX8ksQYzoiXOxj/hDpwx5CnV8QjlN51+hU7NanhhlspZyVNXAWMK2nqgN1iJxD3Ma9I0ouC8bZ1Nsvj95/6HuiKILbrwy5dqW3gRjbP5SZBdBq30Sb+1gKX/QsRwVgNUB/vV2v4wJykMnNAUWJAj6u5NCemwWl+ZxZzmFNXIcnpuSbkPB+HsgRacllzMZZZW27WZq1Ikf2zv59Ag=='
  //   const sendMailVendor = 'https://graph.microsoft.com/v1.0/me/sendMail';  
  //   const emailData1 = {
  //       message: {
  //         subject: "Mail from ISR ",
  //         body: {
  //           contentType: "Text",
  //           content: "Testing mail from ISR."
  //         },
  //         toRecipients: [
  //           {
  //             emailAddress: {
  //               // "address": vendorEmails,
  //               address: "afshankhan252@gmail.com"
  //             },
  //           },
  //           {
  
  //               emailAddress: {
  //               // "address": vendorEmails,
  //               address: "laserlikefocus000@gmail.com"
  //             }
  //           }
  //         ],
  //       },
  //       saveToSentItems: "false"
  //     };


  //       fetch(sendMailReply, {
  //         method: 'POST',
  //         headers: {
  //           'Authorization': `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(emailData)
  //       })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log("Mail sent successfully", data);
  //       })
  //       .catch(error => {
  //         console.error("Error sending mail", error);
  //       });
   

  //     fetch(sendMailVendor, {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(emailData1)
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Mail sent successfully", data);
  //     })
  //     .catch(error => {
  //       console.error("Error sending mail", error);
  //     });
  //   }



  // change

  // let allVendorEmails = vendordetail;
  // console.log("allvendorEmails", allVendorEmails)

  // const handleLaunch = (allVendorEmails) => {
  //   console.log("Vendor Details in outlook: ", allVendorEmails)
  //   const accessToken = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAZKdupM2A49TuPnoshO1g7G8HPmNofTFX0dqkv0g3OglL+RKxaRwVloaFeIcNdazS52H54+bxAjP3eeW+qcafjVt/TJ7E6Es2vUVRMGJ3XeTN/2hXd9dHUOqYgabr1HNtRazAHtEQ0YiHAtIzzemEsQ/AD7qZOvKCurg64iGM4pDDWeRPv8KyKZmnB8ap4gEAv3UPua/Cm9bXo7BUayacA4Xb5K9jiQ9J4wOgKf0aYXXioI8ccemiF+kO8PpNKrYGM8OWTkUCFUP7f0lreJTVm2bNDWkYqoeE+B1WWgI00eNwZQzWMelRJ4Gat/KNgeEEUxvks4wbYAN3ZBlLWkSvnQDZgAACMiXWbqcxuAQQALCA20RVra0n+ox/+fu51U9Hy+PvnVA7rLsDaYigjufm0w7tZzLYHjdqNGLGBlx3xo/sTMp5+VjDO3wQZT5gX9WZNf5kb84SAKvcC4QUfmabqAjmBMyCmEW0TxU+hFxVQrcTG94MaNpDp5/BHqn6UaS+5gNCXg5wt/+/bPf11x0DawUiiavuLCe4Us0NQ9zaHFbA57d79U2Hn8SrNJ5dMCsgjRCMOsi9rjFwpkOswxzZGuBGWF6RomKtKjRe6MEHUfp5b3kvUF/28iIS6Be7TCd7fvW740wAPV2wRPjdfuBU17BdMUrqqQpc28tCRtHr23YvOcYRJrb60JSQZkDeFmeyd0fCgJS4FzaogLtPjKnUg8YxRDs1kpJxwuEtdkuffcVM2r5N2+F6l1j553lLTIGI8VR0IYfGsFCl6PhF2uBPl5stmuL6M2HwSixwZt4VrfgFTNk72WKdAwsNeXZbfPwhR/+m5lCwIH1n288q9Fix+LRnyfoGPF1l+6BYCmAc0eV5Posy2jpF1hpL+nl8rZsDA4ANsYvgbtIMd9Cr5zS6EwVkYjRSk6g8XdlxDkwclzOcx7kiTBRvMguIoq6bq7P/qAxUAuDukB66rHDDmzG5Lba+DiC5JPDh6W+rbqEpIw/27IDLzikHA9pzKofDHrL/m3h0JmvGOsDqf1uJkd2wIFzmxL+Z+hhSlRByBG73kMiBtT9Bct80jIzvnoRYTU9w9yypCqYJTvTwH3SRyX9QQJoFGcJcILTVMJDOZHuz7B9Ag==';
  //   const sendMailVendor = 'https://graph.microsoft.com/v1.0/me/sendMail';
  
  //   // Iterate over each vendor detail
  //   Object.values(allVendorEmails).forEach(vendor => {
  //     const { Vendor_Email, Subject, Body } = vendor;
  
  //     const emailData = {
  //       "message": {
  //         "subject": Subject,
  //         "body": {
  //           "contentType": "Text",
  //           "content": Body
  //         },
  //         "toRecipients": [
  //           {
  //             "emailAddress": {
  //               "address": Vendor_Email
  //             }
  //           }
  //         ]
  //       },
  //       "saveToSentItems": "false"
  //     };
  
  //     // Send email to the vendor
  //     fetch(sendMailVendor, {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(emailData)
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Mail sent successfully to", Vendor_Email, data);
  //     })
  //     .catch(error => {
  //       console.error("Error sending mail to", Vendor_Email, error);
  //     });
  //   });
  // }

  // corrrect
const accessToken = "EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAZKdupM2A49TuPnoshO1g7G8HPmNofTFX0dqkv0g3OglL+RKxaRwVloaFeIcNdazS52H54+bxAjP3eeW+qcafjVt/TJ7E6Es2vUVRMGJ3XeTN/2hXd9dHUOqYgabr1HNtRazAHtEQ0YiHAtIzzemEsQ/AD7qZOvKCurg64iGM4pDDWeRPv8KyKZmnB8ap4gEAv3UPua/Cm9bXo7BUayacA4Xb5K9jiQ9J4wOgKf0aYXXioI8ccemiF+kO8PpNKrYGM8OWTkUCFUP7f0lreJTVm2bNDWkYqoeE+B1WWgI00eNwZQzWMelRJ4Gat/KNgeEEUxvks4wbYAN3ZBlLWkSvnQDZgAACOlulm3m8NK9QAKC9+hZWAYzGh1EE+oZT9iGQ+8er+67CwomYFR3vQqlW95YX9AutsoRbzCOa0Svs6Dx0BfAJz8CqsMwMh5xYwHXibGc5z3Ki7bXJt1pu8r5zhnWfbjUIRtu1Tlfs4w0Qd0c6wBBwWc2I8IP9cEuvL+ODol6dYecJegKY2J4qHRIIGjJaJy9F/i+RnRnZd5U4ajHeMxJxWtvDWznTjCL627nluSy2jcNpBSQoeIB/fzhU3GlABw4f5O4GgSdBiQwMiTu8s1V627sCcxWTlaysL4+ZxstXZ4fuCKqZsFSCdV1lHGX4JaYkWKjn6uZon8iw+m+f9X0pLfCi/ZI3GF65b1C6+cecC31pBOi44O0LJ6Wvtaxmg48g106oJPF7olRzh6N5UkHRiJnIFxb/RGe/UOh48pT6YReu8+iPw7fGTiR6TQzTDgfPr9Wy7lijKvX+zo2DsQkbZ6J1ZatKRNxcSmo0RxVVvLbNWAtzWBMVPJjOqGXapdWGVNSfk6ZEvn8uL7tBu7QKhJiLXoC4sG68gGbaWEzKLNNPs7IB7o3AK0XCZZLdfr2GGaNOAMCxkP6ZEYFx2LjCHA9ZYL8BMocdtCmbM92ETTbZfsVyugtEUYpZFJHf/A3+TkPe9/QuceAAgqBESEpU1DBMwIcOq2KajBeZzlc8V/UHTmlTqjwzhiu6qfSzkXpBzBDncRw+n6iMvRoTtkYMH8VZUNB4BfIZZFQ2yjTo0Y1faq77ZNzvJw0QHR43IHIn/YnfZuGG6mNVPJ9Ag=="
  const handleLaunch = () => {   
   
    // Log all vendor details received from the generate API
    console.log("Vendor Details:", vendordetail);
  
    // Define a variable to store all vendor emails
    let allVendorEmails = {};
  
    // Iterate over each vendor detail and store their emails
    Object.values(vendordetail).forEach(vendor => {
      const { Vendor_Email } = vendor;
      allVendorEmails[Vendor_Email] = vendor;
    });
  
    // Log all vendor emails
    console.log("All Vendor Emails:", allVendorEmails);
  
    // Call the function to send emails to vendors
    sendEmailsToVendors(allVendorEmails);
  };
  
  // Function to send emails to vendors
  const sendEmailsToVendors = (allVendorEmails) => {

    // Counter to keep track of successful emails sent
  let successfulEmailsSent = 0;

    // Iterate over each vendor email and send an email
    Object.entries(allVendorEmails).forEach(([email, vendor]) => {
      // Define email data
      const emailData = {
        "message": {
          "subject": vendor.Subject,
          "body": {
            "contentType": "Text",
            "content": vendor.Body
          },
          "toRecipients": [
            {
              "emailAddress": {
                "address": email
              }
            }
          ]
        },
        "saveToSentItems": "false"
      };
  
      // Send email to the vendor
      axios.post('https://graph.microsoft.com/v1.0/me/sendMail', emailData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("Mail sent successfully to", email, response.data);
        successfulEmailsSent++;

      // Check if all emails have been successfully sent
      if (successfulEmailsSent === Object.keys(allVendorEmails).length) {
        // If all emails have been sent successfully, set setVisible to true
        setVisible(true);
      }
      })
      .catch(error => {
        console.error("Error sending mail to", email, error);
      });
    });
  };
  




  useEffect(() => {
    if (delegatebtn1) {
        const SendEmailDetails = async () => {
          try {
            setShowLoader(true); 
            const res = await axios.post("https://api-dev.wise-sales.com/ml-backend/classify_email/", {
              'subject': emailDetails.subject,
              'email_body': emailDetails.body,
              'sender_email': emailDetails.from,
              'sender_name': emailDetails.senderName,
              "wisecustomer": "INTR100",
                "customerofcustomer": "200",
                "acctId": "GY248"


          });
          console.log("classify API response from backend: ", res.data);
          setClassifyEmail(res.data);
          setRfq_id(res.data.RFQ_ID);
      }
          catch (error) {
            console.error("Error occurred while calling API:", error);
          } finally {
            setShowLoader(false); // Hide loader regardless of success or failure
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
           // Add tone field to classifyEmail
           const emailWithTone = {
            ...classifyEmail,
            tone: "Professional"
        };
          const res = await axios.post(
            "https://api-dev.wise-sales.com/ml-backend/generate_email/",
            
            {
              classifyEmail: emailWithTone,
            }
          );
         console.log(res.data);
         const customerResponse = res.data.Customer_quote.Body;
         const vendorResponse = res.data.vendor_1.Body
          setCustomerBody(customerResponse);
          setVendorBody(vendorResponse);
          console.log("Customer's Body:", customerBody);
          console.log("Vendor's Body:", vendorBody); 

          const vendorEmails = Object.values(res.data)
          .filter(obj => obj.Vendor_Email)
          .map(obj => obj.Vendor_Email);
        setVendorEmails(vendorEmails)

        setVendorDetails(res.data);




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


  useEffect(() => {
    if (emailDetails && !emailDetailsFetched) {
      const getEmailDetails = async () => {
        try {
          // Make sure the RFQ_status is 1 before making the API call
          if (classifyEmail.RFQ_status === 1) {
            const res = await axios.post(
              "http://127.0.0.1:8000/api/getEmailDetails/",
              {
                getEmailDetails: emailDetails,
                RFQ_ID: rfq_id
              }
            );
  
            console.log("getEmailDetails API response from backend: ", res.data);
            console.log("RFQ 2", rfq_id)
            // Set the state variable to true indicating that the API call has been made
            setEmailDetailsFetched(true);
          } else {
            console.log("RFQ_status is not 1, skipping API call.");
          }
        } catch (error) {
          console.error("Error occurred while calling API:", error);
        } 
      };
      getEmailDetails();
    }
  }, [classifyEmail, emailDetails, emailDetailsFetched]);



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

  const contactNavigation = () => {
    navigate("/contact")
 }


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
            <div className="contact-div" onClick={contactNavigation}>
              <div className="contact">Contact Us</div>
            </div>
          </div>
          <div className="A-div">
            <div className="A">{userName}</div>
          </div>
        </div>
      </div>

      {
  classifyEmail && classifyEmail.RFQ_status === 0 && (
    <Model isOpen={isPopupOpennotrfq} onRequestClose={togglePopupnotRFQ} className="overlayNoRFQ">
      <Notrfq close={togglePopupnotRFQ}/>
    </Model>
  )
}


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
                vendordetail={vendordetail}
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
          <div className="Quote-DelegateBtn">Launch
          <Model isOpen={visible} onRequestClose={()=>setVisible(false)} className="overlaySuccess">
                <Success />
           </Model>
          </div>
        </div>
      ) : isDelegateClicked2 && classifyEmail && classifyEmail.RFQ_status === 1 ? (
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

      </>
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
