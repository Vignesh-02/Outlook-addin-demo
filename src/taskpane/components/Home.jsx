import React, { useState } from 'react';
import "./styles/Home.css";


const Home = ({ emailDetails, userName, emailAddress, val, ...rest  }) => {

  
  const [fontSize, setFontSize] = useState(17); // Default font size
  const [fontPercentage, setFontPercentage] = useState(50);
  
  
    // max font size = 20
    // min font size = 14
    const maxFontSize = 20;
    const minFontSize = 14;

    const stepSize = Math.round((maxFontSize - minFontSize) / 5);

  const increaseFontSize = () => {
    
    if (fontPercentage < 100) {
        setFontPercentage(fontPercentage + 10); // Increase percentage by 10
        const newFontSize = calculateFontSize(fontPercentage);
        setFontSize(newFontSize)
    }

};
  const decreaseFontSize = () => {
    
    if (fontPercentage > 0) {
        setFontPercentage(fontPercentage - 10); // Increase percentage by 10
        const newFontSize = calculateFontSize(fontPercentage);
        setFontSize(newFontSize);
    }

};

  const DelegateBtn = () => {
    console.log('del');
    // navigate("/del");
  };

  const queueBtn = () => {
    console.log('del');
    // navigate("/queue");
  };

  const calculateFontSize = (percentage) => {

    const stepsFrom50 = (percentage - 50) / 10;
    return 17 + (stepsFrom50 * stepSize);
  }

//     let newFontSize = fontSize * factor;

//     // Ensuring the font size is within the limits (14px min, 20px max)
//     if (newFontSize < 14) newFontSize = 14;
//     if (newFontSize > 20) newFontSize = 20;
//     setFontSize(newFontSize);

//     let percentage = ((fontSize - 14) / (20 - 14)) * 100;
//     setFontPercentage(Math.round(percentage));
//   }



  return (
    <div className="homepage">
      <div className="topbar-frame">
        {/* Section -1 */}

        {/* Commented Topbar */}
        
        {/* <div className="topbar">
          <div className="topframe">
            <img src={W_Image} alt="Logo" />
            <div className="topframe-b">
              <img src={WiseImage} alt="Logo" id="b1" />
              <img src={InsideImage} alt="Logo" id="b2" />
            </div>
          </div>
          <div onClick={handleCrossClick} className="topframe-c">
            <img src={cross} alt="Logo" />
          </div>
        </div> */}

        {/* Section - 2 */}

        <div className="topbar2">
          <div className="navbar">
            <div className="delegate-div">
              <div className="delegate">Delegate</div>
            </div>
            <div className="Homequeue-div">
              <div className="queue">Queue</div>
            </div>
            <div className="contact-div">
              <div className="contact">Contact Us</div>
            </div>
          </div>
          <div className="A-div">
            <div className="A">A</div>
          </div>
        </div>
      </div>

      {/* Section - 3 */}

      <div className="home-middleFrame">
        <div className="homeMainframe">
          <div className="homeTable-header">
            <div className="datagridHeader">
              <div className="homeContainer">
                <div className="homeTypography">
                  <div className="home-RFQ">RFQ</div>
                </div>
                <div className="FontSize">
                  <div className="sizeDecrement">
                    <div onClick={decreaseFontSize} className="Decrement">
                      -
                    </div>
                  </div>
                  <div className="sizePercentage">
                    <div className="Percentage">
                      {fontPercentage}%
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
          <div className="homeRowFrame">
            <div className="homeDataGridCell">
              <div className="homeDataGridCell-child">
                <div className="EmailContentDiv">
                  <div
                    className="EmailContent"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {userName}
                    <br />

                    {emailAddress}
                    <br />

                    {val}
                    <br />

                    {emailDetails.body  || "No body"}
                    <br />

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
