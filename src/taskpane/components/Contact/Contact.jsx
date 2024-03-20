import React, {useEffect} from "react";
import "./Contact.css";
import W_Image from "../../../../public/w1.png";
import WiseImage from "../../../../public/wise.png";
import WiseImage2 from "../../../../public/wise3.png";
import InsideImage from "../../../../public/Insidesale.png";
import cross from "../../../../public/Vector.png";
import interState from "../../../../public/interstate.png";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import "@fontsource/orbitron";
import "@fontsource/orbitron/400.css";

const Contact = () => {


    useEffect(() => {

        Office.onReady((info) => {
            if (info.host === Office.HostType.Outlook) {
                document.getElementById('sendMail').addEventListener('click', () => {
                    // Define the message form, prefilling the 'To' field
                    const message = {
                      toRecipients: ['it.support@wise-sales.com'], // Replace with the desired email address
                    };
                
                    // Display a new message form
                    Office.context.mailbox.displayNewMessageForm(message);
                  });
            }
        });
      

    }, []);

    // https://outlook.live.com/mail/0/deeplink/compose?to=your@email.com


  return (
    <div className="contactPage">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      {/* <Navbar /> */}
      <Navbar activePage="Contact" />

      {/* Contact - content */}

      <div className="contant-content">
        {/* Company Name */}
        <div className="contactPage-Mid-CompanyName1">
          <div className="contactPage-Mid-Address">Company Name</div>
          <div className="contactPage-Mid-Address-b">Wise Sales</div>
        </div>

        {/* Address */}
        <div className="contactPage-Middle">
          <div className="contactPage-Mid-Address">Address</div>
          <div className="contactPage-Mid-Address-b">
            15619 Blackburn Ave, Norwalk, CA 90650
          </div>
        </div>

        {/* Conatct details */}
        <div className="contactPage-Mid-CompanyName">
          <div className="contactPage-Mid-Address">Contact</div>
          <div className="contactPage-Mid-Address-b">+1 1454542589</div>
        </div>

        {/* Email Details */}
        <div className="contactPage-Mid-CompanyName">
          <div className="contactPage-Mid-Address">Email Id</div>
          <div className="contactPage-Mid-Address-b">
            it.support@wise-sales.com
          </div>
        </div>

        {/* Button */}
        <div className="contactPage-btn">
          <div className="contactPage-btn-A">
            <div id="sendMail" className="contactPage-btn-A-Child">
                Send Us a mail
                </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

// 
export default Contact;
