import React from "react";
import BulbImage from "../../../public/bulb.png";
import "./Decision.css";

const Decision = () => {
  return (
    <div className="Decision-VentDiv">
      <div className="D1">
        <div className="D2">
          <div className="D3">
            <div className="D4">
              <div className="D5">Decision</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1 */}
      <div className="Decision-VentDiv1">
        <div className="Decision-VentSec1">
          <div className="Decision-VentSec1-Txt">
            <div>
              <span className="Decision-VentSec1-Text1">Vent Tape</span>
              <span className="Decision-VentSec1-Text2"> </span>
              <span className="Decision-VentSec1-Text3">(100/20)</span>
            </div>
          </div>
        </div>
        <div className="Decision-VentSec1-side1">
          <div className="Decision-VentSec1-side2"></div>
        </div>
      </div>
      {/* 2 */}
      <div className="Decision-VentDiv1">
        <div className="Decision-VentSec1">
          <div className="Decision-VentSec1-Txt">
            <div>
              <span className="Decision-VentSec1-Text1">Vent Tape</span>
              {/* 100/20 */}
              <span className="Decision-VentSec2-Text2"> </span>
              <span className="Decision-VentSec1-Text3">(100/20)</span>
            </div>
          </div>
        </div>
        <div className="Decision-VentSec1-side1">
          <div className="Decision-VentSec1-side2"></div>
        </div>
      </div>
      {/* 3 */}
      <div className="Decision-VentDiv3">
        <div className="Decision-VentSec1">
          <div className="Decision-VentSec1-Txt">
            <div className="Decision-VentSec1-Text1">Vent Tape</div>
          </div>
          <div className="Decision-VentSec3-Text2">(6/20)</div>
        </div>
        <div className="Decision-VentSec1-side1">
          <div className="Decision-VentSec1-side2"></div>
        </div>
      </div>
      {/* 4 */}
      <div className="Decision-VentDiv4">
        <div className="Decision-VentDiv4-Child">
          <div className="Decision-VentSec1">
            <div className="Decision-VentSec1-Txt">
              <div className="Decision-VentSec1-Text1">Vent Tape</div>
            </div>
            <div className="Decision-VentSec4-Text2">(0/20)</div>
          </div>
        </div>

        {/* Decision Section */}
        <div className="Decision-ShapeDiv">
          <div className="Decision-ShapeSec">
            {/* Status */}
            <div className="Decision-ShapeSec-P">
              <div className="Decision-ShapeSec-P1">
                <div className="Decision-ShapeSec-P2">
                  <div className="Decision-ShapeSec-C1">
                    <div className="Decision-ShapeSec-Text">Status</div>
                  </div>

                  <div className="MQ-TH-Content-ImageDiv-2">
                    <div className="MQ-TH-Content-Image-2">
                      <img src={BulbImage} alt="Logo" id="BulbId" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Decision-Shape-Value">
                <div className="Decision-Shape-ValueP">
                  <div className="Decision-Shape-ValueP1">
                    <div className="Decision-Shape-ValueP2">
                      <div className="Decision-Shape-ValueC1">
                        <div className="Decision-Shape-ValueC2">
                          Pending manufacturer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Material */}
            <div className="Decision-ShapeSec-P">
              <div className="Decision-ShapeSec-P1">
                <div className="Decision-ShapeSec-P2">
                  <div className="Decision-ShapeSec-C1">
                    <div className="Decision-ShapeSec-Text">Material Cost</div>
                  </div>

                  <div className="MQ-TH-Content-ImageDiv-2">
                    <div className="MQ-TH-Content-Image-2">
                      <img src={BulbImage} alt="Logo" id="BulbId" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Decision-Shape-Value">
                <div className="Decision-Shape-ValueP">
                  <div className="Decision-Shape-ValueP1">
                    <div className="Decision-Shape-ValueP2">
                      <div className="Decision-Shape-ValueC1">
                        <div className="Decision-Shape-ValueC2">$ 100/Unit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Margin */}
            <div className="Decision-ShapeSec-P">
              <div className="Decision-ShapeSec-P1">
                <div className="Decision-ShapeSec-P2">
                  <div className="Decision-ShapeSec-C1">
                    <div className="Decision-ShapeSec-Text">Margin</div>
                  </div>

                  <div className="MQ-TH-Content-ImageDiv-2">
                    <div className="MQ-TH-Content-Image-2">
                      <img src={BulbImage} alt="Logo" id="BulbId" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Decision-Shape-Value">
                <div className="Decision-Shape-ValueP">
                  <div className="Decision-Shape-ValueP1">
                    <div className="Decision-Shape-ValueP2">
                      <div className="Decision-Shape-ValueC1">
                        <div className="Decision-Shape-ValueC2">20%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Price */}
            <div className="Decision-ShapeSec-P">
              <div className="Decision-ShapeSec-P1">
                <div className="Decision-ShapeSec-P2">
                  <div className="Decision-ShapeSec-C1">
                    <div className="Decision-ShapeSec-Text">Price</div>
                  </div>

                  <div className="MQ-TH-Content-ImageDiv-2">
                    <div className="MQ-TH-Content-Image-2">
                      <img src={BulbImage} alt="Logo" id="BulbId" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Decision-Shape-Value">
                <div className="Decision-Shape-ValueP">
                  <div className="Decision-Shape-ValueP1">
                    <div className="Decision-Shape-ValueP2">
                      <div className="Decision-Shape-ValueC1">
                        <div className="Decision-Shape-ValueC2">$250/Unit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Lead Time */}
            <div className="Decision-ShapeSec-P">
              <div className="Decision-ShapeSec-P1">
                <div className="Decision-ShapeSec-P2">
                  <div className="Decision-ShapeSec-C1">
                    <div className="Decision-ShapeSec-Text">Lead Time</div>
                  </div>

                  <div className="MQ-TH-Content-ImageDiv-2">
                    <div className="MQ-TH-Content-Image-2">
                      <img src={BulbImage} alt="Logo" id="BulbId" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Decision-Shape-Value">
                <div className="Decision-Shape-ValueP">
                  <div className="Decision-Shape-ValueP1">
                    <div className="Decision-Shape-ValueP2">
                      <div className="Decision-Shape-ValueC1">
                        <div className="Decision-Shape-ValueC2">2 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Freight Cost */}
            <div className="Decision-ShapeSec-P">
              <div className="Decision-ShapeSec-P1">
                <div className="Decision-ShapeSec-P2">
                  <div className="Decision-ShapeSec-C1">
                    <div className="Decision-ShapeSec-Text">Freight Cost</div>
                  </div>

                  <div className="MQ-TH-Content-ImageDiv-2">
                    <div className="MQ-TH-Content-Image-2">
                      <img src={BulbImage} alt="Logo" id="BulbId" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Decision-Shape-Value">
                <div className="Decision-Shape-ValueP">
                  <div className="Decision-Shape-ValueP1">
                    <div className="Decision-Shape-ValueP2">
                      <div className="Decision-Shape-ValueC1">
                        <div className="Decision-Shape-ValueC2">$ 50</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decision;
