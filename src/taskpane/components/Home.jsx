
import React, { useState } from 'react';
import "./styles/Home.css";
import logo1 from "../../../public/w2.png";
import logo2 from "../../../public/w3.png";
import logo3 from "../../../public/w4.png";
import cross from "../../../public/Vector.png";

// import { Button } from '@material-ui/core';



const Home = ({ emailDetails, ...rest  }) => {

    const [fontSize, setFontSize] = useState(14); // Default font size

    const increaseFontSize = () => {
        if (fontSize < 20) setFontSize(fontSize + 1);
    };

    const decreaseFontSize = () => {
        if (fontSize > 14) setFontSize(fontSize - 1);
    };

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
      </div>2

      {/* Section - 3 */}

      <div className="frame">
        <div className="main-frame">
          <div className="table-header">
            <div className="datagridHeader">
              <div className="container">
                <div className="typography">
                  <div className="typography-text">RFQ</div>
                </div>
                <div className="FontSize">
                  <div className="sizeDecrement">
                    <div onClick={decreaseFontSize} className="Decrement">
                      -
                    </div>
                  </div>
                  <div className="sizePercentage">
                    <div className="Percentage">
                    {Math.round((fontSize / 10) * 100)}%
                    </div>
                  </div>
                  <div className="sizeIncrement">
                    <div onClick={increaseFontSize} className="Increment">
                      +
                    </div>
                  </div>

              </div>
              </div>
            </div>
          </div>
          <div className="mid-frame">

            <div className="column-frame">
              <div className="dataGridCell">
                <div className="dataGridCell-cont">

                

                 <div className='from' style={{ fontSize: `${fontSize}px` }}>
                    { emailDetails.from }
                    </div>   

                    <div className='from' style={{ fontSize: `${fontSize}px` }}>
                    { emailDetails.subject }
                    </div>   
                    
                    <div className="EmailContentDiv">
                        <div
                            className="EmailContent"
                            style={{ fontSize: `${fontSize}px` }}
                        >
                        { emailDetails.body }
                        </div>
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
