import React from 'react';
import './styles/InfoPopup.css'; // Make sure the path to your CSS file is correct

const InfoPopup = () => {
  return (
    <div className="frame64">
      <Section title="Name" content="Christine Dong" />
      <Section title="Email" content="Chris.dong@tecan.com" />
      <Section title="CC" content={["Chris.dong@tecan.com", "Chris.dong@tecan.com", "Chris.dong@tecan.com"].join(", ")} />
      <Section title="Company" content="T-DCPMI" />
      <Section title="Shipping_address" content="885 Jarvis Dr., Morgan Hill, CA 95037, United States" />
    </div>
  );
};

const Section = ({ title, content }) => (
  <div className="section ">
    <div className="tableHeader">
      <div className="datagridheader">
        <div className="container">
          <div className="typography">
            <div className="typographyBody1">{title}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="frame16">
      <div className="row">
        <div className="datagridcell">
          <div className="container">
            <div className="typography">
              <div className="typographyBody1">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InfoPopup;
