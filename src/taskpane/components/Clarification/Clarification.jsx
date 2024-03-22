import React from "react";
import "./Clarification.css";
import cross from "../../../../public/Cross5.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Clarification = ({
  customer_name,
  customer_subject,
  customer_email,
  RFQ_ID,
  status,
  customer_response,
  customer_response_subject,
  clarifyStatus,
  close,
}) => {
  const history = useHistory();

  // function
  const clarifySend = () => {
    if (clarifyStatus === true) {
      const sendClarificationDetails = async () => {
        try {
          const result = await axios.post("http://127.0.0.1:8000/api/QueueDetails/", {
            customer_name: customer_name,
            customer_subject: customer_subject,
            customer_email: customer_email,
            RFQ_ID: RFQ_ID,
            status: status,
            customer_response: customer_response,
            customer_response_subject: customer_response_subject,
            day: "0 Day"
          });
          if (result.data.message === "Queue Details received and stored successfully") {
            history.push("/queue");
          }
          console.log("send queue details API response from backend: ", result.data);
        } catch (error) {
          console.error("Error occurred while calling API:", error);
        }
      };
      sendClarificationDetails();
    } else {
      console.log("everthing is fine no need to send clarification details");
    }
  };

  return (
    <div className="ClarificationPage">
      <div className="ClarificationPage-cont1">
        <div className="ClarificationPage-cont1-b">
          <div className="ClarificationPage-cont1-c">
            <div className="ClarificationPage-cont1-d">
              <div className="ClarificationPage-cont1-text">Customer Clarification Response</div>
            </div>
          </div>
          <div className="ClarificationPage-Image">
            <img className="ClarificationPage-Image-1" src={cross} onClick={close} />
          </div>
        </div>
      </div>
      {/* sec - 2 */}
      <div className="ClarificationPage-cont2">
        <div className="ClarificationPage-cont2-a">
          <div className="ClarificationPage-cont2-b">
            <div className="ClarificationPage-cont2-c">
              <div className="ClarificationPage-cont2-Text">
                {/* Hi John Deo, Hello, in order for us to quote you on this we will
                need further clarification on the type of material and color.
                <br />
                <br />
                Thanks & Regards, ABC */}
                {customer_response}
              </div>
            </div>
          </div>
        </div>
        <div className="ClarificationPage-btn">
          <div className="ClarificationPage-btn-1">
            <div className="ClarificationPage-btn-1-text">Cancel</div>
          </div>
          <div className="ClarificationPage-btn-2">
            <div className="ClarificationPage-btn-2-text" onClick={clarifySend}>
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clarification;
