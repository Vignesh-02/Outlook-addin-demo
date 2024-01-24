import React from "react";
import "./styles/Home.css";
import logo1 from "../../../public/w2.png";
import logo2 from "../../../public/w3.png";
import logo3 from "../../../public/w4.png";
import cross from "../../../public/Vector.png";


import { Button } from '@material-ui/core';


const Home = ({ emailDetails, ...rest  }) => {
  const DelegateBtn = () => {
    alert("Delegate Button is clicked");
  };

  const queueBtn = () => {
    alert("Queue Button is clicked");
  };

  const conatct = () => {
    alert("Contact Us");
  };

  return (
    <div className="homepage">
      {/* Section -1 */}

      <div className="topbar">
        <div className="topframe">
          <img src={logo1} alt="Logo" />
          <div className="topframe-b">
            <img src={logo2} alt="Logo" id="b1" />
            <img src={logo3} alt="Logo" id="b2" />
          </div>
        </div>
        <div className="topframe-c">
          <img src={cross} alt="Logo" />
        </div>
      </div>

      {/* Section - 2 */}
      <div className="topbar2">
        <div className="a2">
          <div className="home">
            <div id="home-div">Home</div>
          </div>
          <div className="contact">
            <div onClick={conatct} id="contact-div">
              Contact Us
            </div>
          </div>
        </div>

        <div className="A">
          <div id="A-child">A</div>
        </div>
      </div>

      {/* Section - 3 */}

      <div className="frame">
        <div className="main-frame">
          <div className="table-header">
            <div className="datagridHeader">
              <div className="container">
                <div className="typography">
                  <div className="typography-text">RFQ</div>
                </div>
              </div>
              <div className="separate-container">
                <div className="separate-container-child"></div>
              </div>
            </div>
          </div>
          <div className="mid-frame">
            <div className="row-frame">
              <div className="dataGridCell">
                <div className="dataGridCell-cont">
                <div className="content">
                  { emailDetails.from }
                  </div>
                  <div className="content">
                  { emailDetails.to }
                  </div>
                  <div className="content">
                  { emailDetails.subject }
                  </div>
                  <div className="content">
                  { emailDetails.body }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section - 4 */}
      <div className="btn-section">
        <div className="btn1">
          <div onClick={DelegateBtn} id="btn1-content">
            Delegate
          </div>
        </div>

        <div className="btn2">
          <div onClick={queueBtn} id="btn2-content">
            Queue
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
