import React, { useState } from "react";
import "./Stocks.css";
import "@fontsource/orbitron";
import "@fontsource/orbitron/400.css";
import CheckIcon from "@mui/icons-material/Check";
import Extend from "../../../../public/extender.png";
import Manufacturer from "../Manufacturer/Manufacturer";
import VentMaterial from "../VentMaterial/VentMaterial";
const Stocks = ({
  isPopupOpenStock,
  togglePopupStock,
  isPopupOpenManufacturer,
  togglePopupManufacturer,
}) => {
  const [selectedRFQ, setSelectedRFQ] = useState(false);
  const toggleSelectedRFQ = () => {
    setSelectedRFQ(!selectedRFQ);
  };
  return (
    <div className="Stock-VentDiv">
      {/* <!--1--> */}
      <div className="Stock-VentDiv1">
        <div className="Stock-VentSec1">
          <div className="Stock-VentSec1-Txt">
            <div>
              <span className="Stock-VentSec1-Text1">Vent Tape</span>
              <span className="Stock-VentSec1-Text2"> </span>
              <span className="Stock-VentSec1-Text3">(100/20)</span>
            </div>
          </div>
        </div>
        <div className="Stock-VentSec1-side1">
          <div className="Stock-VentSec1-side2"></div>
        </div>
      </div>
      {/* <!--2--> */}
      <div className="Stock-VentDiv1">
        <div className="Stock-VentSec1">
          <div className="Stock-VentSec1-Txt">
            <div>
              <span className="Stock-VentSec1-Text1">Vent Tape</span>
              {/* different */}
              <span className="Stock-VentSec2-Text2"> </span>
              <span className="Stock-VentSec1-Text3">(100/20)</span>
            </div>
          </div>
        </div>
        <div className="Stock-VentSec1-side1">
          <div className="Stock-VentSec1-side2"></div>
        </div>
      </div>
      {/* <!--3CCC--> */}
      <div className="Stock-VentDiv3">
        <div className="Stock-VentSec1">
          <div className="Stock-VentSec1-Txt">
            <div className="Stock-VentSec1-Text1">Vent Tape</div>
          </div>
          <div className="Stock-VentSec3-Text2">(6/20)</div>
        </div>
        <div className="Stock-VentSec1-side1">
          <div className="Stock-VentSec1-side2"></div>
        </div>
      </div>
      {/* <!--4--> */}
      <div className="Stock-VentDiv4">
        <div className="Stock-VentDiv4-Child">
          <div className="Stock-VentSec1">
            <div className="Stock-VentSec1-Txt">
              <div className="Stock-VentSec1-Text1">Vent Tape</div>
            </div>
            <div className="Stock-VentSec4-Text2">(0/20)</div>
          </div>
          <div className="Stock-VentSec4-side1">
            <img
              style={{
                width: "10.50px",
                height: "10.50px",
              }}
              src={Extend}
              onClick={togglePopupStock}
            />
            <VentMaterial isOpen={isPopupOpenStock} close={togglePopupStock} />
            {console.log("IspopStock: ", isPopupOpenStock)}
          </div>
        </div>

        {/* <!--values 1--> */}
        <div className="Stock-Vent-Value1">
          <div className="Stock-Vent-Value1Div">
            {/* shape */}
            <div className="Stock-Vent-Value1Sec">
              <div className="Stock-Vent-Value1Sec-P">
                <div className="Stock-Vent-Value1Sec-C">
                  <div className="Stock-Vent-Value1Sec-ShapeDiv">
                    <div className="Stock-Vent-Value1Sec-ShapeSec">
                      <div className="Stock-Vent-Value1Sec-Shape">Shape</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Stock-Vent-Value1Sec-Shape-VP">
                <div className="Stock-Vent-Value1Sec-Shape-VC">
                  <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                        <div className="Stock-Vent-Value1Sec-Shape-Value">
                          Null
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--values - 2--> */}
            <div className="Stock-Vent-Value1Sec">
              <div className="Stock-Vent-Value1Sec-P">
                <div className="Stock-Vent-Value1Sec-C">
                  <div className="Stock-Vent-Value1Sec-ShapeDiv">
                    <div className="Stock-Vent-Value1Sec-ShapeSec">
                      <div className="Stock-Vent-Value1Sec-Shape">
                        Dimensions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Stock-Vent-Value1Sec-Shape-VP">
                {/* one change VC : border: 1px rgba(53, 111, 159, 0.94) solid; */}
                <div className="Stock-Vent-Value1Sec-Shape-VC">
                  <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                        <div>
                          <span className="Stock-Vent-Value1Sec-Dim-Value2">
                            |
                          </span>
                          {/* 1 change : letter-spacing: 0.50px*/}
                          <span className="Stock-Vent-Value1Sec-Shape-Value">
                            {" "}
                            20mm*20cm*20cm
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* values - 3 color */}
            <div className="Stock-Vent-Value1Sec">
              <div className="Stock-Vent-Value1Sec-P">
                <div className="Stock-Vent-Value1Sec-C">
                  <div className="Stock-Vent-Value1Sec-ShapeDiv">
                    <div className="Stock-Vent-Value1Sec-ShapeSec">
                      <div className="Stock-Vent-Value1Sec-Shape">Color</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Stock-Vent-Value1Sec-Shape-VP">
                {/* one change VC : border: 1px rgba(53, 111, 159, 0.94) solid; */}
                <div className="Stock-Vent-Value1Sec-Shape-VC">
                  <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                        <div>
                          {/* 1 change : letter-spacing: 0.50px*/}
                          <span className="Stock-Vent-Value1Sec-Shape-Value">
                            {" "}
                            Red
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* values - 4 Unit of measure */}
            <div className="Stock-Vent-Value1Sec">
              <div className="Stock-Vent-Value1Sec-P">
                <div className="Stock-Vent-Value1Sec-C">
                  <div className="Stock-Vent-Value1Sec-ShapeDiv">
                    <div className="Stock-Vent-Value1Sec-ShapeSec">
                      <div className="Stock-Vent-Value1Sec-Shape">
                        Unit of Measure
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Stock-Vent-Value1Sec-Shape-VP">
                {/* one change VC : border: 1px rgba(53, 111, 159, 0.94) solid; */}
                <div className="Stock-Vent-Value1Sec-Shape-VC">
                  <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                        <div>
                          {/* 1 change : letter-spacing: 0.50px*/}
                          <span className="Stock-Vent-Value1Sec-Shape-Value">
                            {" "}
                            Unit
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Manufacturer */}
            <div className="Stock-Vent-Value1Sec">
              <div className="Stock-Vent-Value1Sec-P">
                <div className="Stock-Vent-Value1Sec-C">
                  <div className="Stock-Vent-Value1Sec-ShapeDiv">
                    <div className="Stock-Vent-Value1Sec-ShapeSec">
                      <div className="Stock-Vent-Value1Sec-Shape">
                        Manufacturer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Stock-Vent-Value1Sec-Shape-VP">
                <div className="Stock-Vent-Value1Sec-Shape-VC">
                  <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                    <div className="Stock-Vent-Value1Sec-Manu-Val-C">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                        <div className="Stock-Vent-Value1Sec-Shape-Value">
                          ABCD
                        </div>
                      </div>
                      <div className="Stock-Vent-Value1Sec-Manu-2">
                        <img
                          style={{ width: "10.50px", height: "10.50px" }}
                          src={Extend}
                          onClick={togglePopupManufacturer}
                        />
                        {isPopupOpenManufacturer && (
                          <Manufacturer
                            isOpen={isPopupOpenManufacturer}
                            close={togglePopupManufacturer}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* value - 6 Specification */}
            <div className="Stock-Vent-Value1Sec">
              <div className="Stock-Vent-Value1Sec-P">
                <div className="Stock-Vent-Value1Sec-C">
                  <div className="Stock-Vent-Value1Sec-ShapeDiv">
                    <div className="Stock-Vent-Value1Sec-ShapeSec">
                      <div className="Stock-Vent-Value1Sec-Shape">
                        Specification
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Stock-Vent-Value1Sec-Shape-VP">
                {/* one change VC : border: 1px rgba(53, 111, 159, 0.94) solid; */}
                <div className="Stock-Vent-Value1Sec-Shape-VC">
                  <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                        <div>
                          {/* 1 change : letter-spacing: 0.50px*/}
                          <span className="Stock-Vent-Value1Sec-Shape-Value">
                            {" "}
                            Null
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Value - 7 Part No */}
            <div className="Stock-Vent-Value1Sec">
              <div className="Stock-Vent-Value1Sec-P">
                <div className="Stock-Vent-Value1Sec-C">
                  <div className="Stock-Vent-Value1Sec-ShapeDiv">
                    <div className="Stock-Vent-Value1Sec-ShapeSec">
                      <div className="Stock-Vent-Value1Sec-Shape">Part No</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Stock-Vent-Value1Sec-Shape-VP">
                {/* one change VC : border: 1px rgba(53, 111, 159, 0.94) solid; */}
                <div className="Stock-Vent-Value1Sec-Shape-VC">
                  <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                        <div>
                          {/* 1 change : letter-spacing: 0.50px*/}
                          <span className="Stock-Vent-Value1Sec-Shape-Value">
                            {" "}
                            123456
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="Stock-Vent-FooterDiv">
          <div
            className={
              selectedRFQ
                ? "Stock-Vent-FooterSec selected"
                : "Stock-Vent-FooterSec"
            }
            onClick={toggleSelectedRFQ}
          >
            <div className="Stock-Vent-Footer-P">
              {selectedRFQ && <CheckIcon />}
            </div>
          </div>
          <div className="Stock-Vent-Footer-C2">
            <div className="Stock-Vent-Footer-C3">Request manufacturer RFQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
