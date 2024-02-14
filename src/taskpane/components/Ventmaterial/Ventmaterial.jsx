import React, { useState, useEffect, useRef } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Compress from "../../../../public/Compress-2.png";
import "./VentMaterial.css";

const VentMaterial = ({ isOpen, close }) => {
  const [selected, setSelected] = useState(true);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);

  const popupRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        close();
      }
    };
    // Attach event listener if the popup is open
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    // Cleanup the event listener when the component unmounts or the popup closes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, close]); // Dependencies array ensures effect runs only if isOpen or close changes
  if (!isOpen) return null;

  const toggleSelected = () => {
    setSelected(!selected);
  };
  const toggleSelected1 = () => {
    setSelected1(!selected1);
  };
  const toggleSelected2 = () => {
    setSelected2(!selected2);
  };
  const toggleSelected3 = () => {
    setSelected3(!selected3);
  };
  const toggleSelected4 = () => {
    setSelected4(!selected4);
  };

  if (!isOpen) return null;

  return (
    <div className="overlay3">
      <div
        ref={popupRef}
        className={`Vent-Material-Res ${isOpen ? "popup-enter" : ""}`}
      >
        {/* upper part */}
        <div className="Vent-Material-ResDiv1">
          <div className="Vent-Material-ResDiv1-A">
            <div className="Vent-Material-ResDiv1-B">
              <div className="Vent-Material-ResDiv1-text">Vent Tape</div>
            </div>
            <div className="Vent-Material-ResDiv1-text2">(0/20)</div>
          </div>
          <div className="Vent-Material-ResDiv1-Image">
            <img
              src={Compress}
              alt="Logo"
              style={{ width: "10.50px", height: "10.50px" }}
            />
          </div>
        </div>

        {/* 2nd half */}
        <div className="Vent-Material-ResDiv2">
          <div className="Vent-Material-ResDiv2-A">
            {/* <!--shape--> */}
            <div className="Vent-Material-ResDiv2-Shape">
              <div className="Vent-Material-ResDiv2-ShapeB">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        Shape
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Shape-Val">
                <div className="Vent-Material-ResDiv2-Shape-ValB">
                  <div className="Vent-Material-ResDiv2-Shape-ValC">
                    <div className="Vent-Material-ResDiv2-Shape-ValD">
                      <div className="Vent-Material-ResDiv2-Shape-ValE">
                        <div className="Vent-Material-ResDiv2-Shape-Val-Text">
                          Null
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dim */}
            <div className="Vent-Material-ResDiv2-Shape">
              <div className="Vent-Material-ResDiv2-ShapeB">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        Dimesnsions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Shape-Val">
                <div className="Vent-Material-ResDiv2-Shape-ValB">
                  <div className="Vent-Material-ResDiv2-Shape-ValC">
                    <div className="Vent-Material-ResDiv2-Shape-ValD">
                      <div className="Vent-Material-ResDiv2-Shape-ValE">
                        <div className="Vent-Material-ResDiv2-Shape-Val-Text">
                          20mm*20cm*20cm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color */}
            <div className="Vent-Material-ResDiv2-Shape">
              <div className="Vent-Material-ResDiv2-ShapeB">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        Color
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Shape-Val">
                <div className="Vent-Material-ResDiv2-Shape-ValB">
                  <div className="Vent-Material-ResDiv2-Shape-ValC">
                    <div className="Vent-Material-ResDiv2-Shape-ValD">
                      <div className="Vent-Material-ResDiv2-Shape-ValE">
                        <div className="Vent-Material-ResDiv2-Shape-Val-Text">
                          Red
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturer */}
            <div className="Vent-Material-ResDiv2-Mft">
              <div className="Vent-Material-ResDiv2-Mft-1">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        Manufacturer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Mft-Val">
                <div className="Vent-Material-ResDiv2-Mft-ValB">
                  <div className="Vent-Material-ResDiv2-Mft-ValC">
                    <div className="Vent-Material-ResDiv2-Mft-ValD">
                      <div className="Vent-Material-ResDiv2-Mft-ValD-1">
                        <div className="Vent-Material-ResDiv2-Mft-ValD-2">
                          ABCD
                        </div>
                      </div>
                      <div className="Vent-Material-ResDiv2-Mft-ValE">ABCD</div>
                      <div className="Vent-Material-ResDiv2-Mft-ValF">ABCD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specification */}
            <div className="Vent-Material-ResDiv2-Shape">
              <div className="Vent-Material-ResDiv2-ShapeB">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        Specification
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Shape-Val">
                <div className="Vent-Material-ResDiv2-Shape-ValB">
                  <div className="Vent-Material-ResDiv2-Shape-ValC">
                    <div className="Vent-Material-ResDiv2-Shape-ValD">
                      <div className="Vent-Material-ResDiv2-Shape-ValE">
                        <div className="Vent-Material-ResDiv2-Shape-Val-Text">
                          Null
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part No */}
            <div className="Vent-Material-ResDiv2-Shape">
              <div className="Vent-Material-ResDiv2-ShapeB">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        Part No
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Shape-Val">
                <div className="Vent-Material-ResDiv2-Shape-ValB">
                  <div className="Vent-Material-ResDiv2-Shape-ValC">
                    <div className="Vent-Material-ResDiv2-Shape-ValD">
                      <div className="Vent-Material-ResDiv2-Shape-ValE">
                        <div className="Vent-Material-ResDiv2-Shape-Val-Text">
                          123456
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ERP Part Number */}
            <div className="Vent-Material-ResDiv2-Shape">
              <div className="Vent-Material-ResDiv2-ShapeB">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        ERP Part Number
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Shape-Val">
                <div className="Vent-Material-ResDiv2-Shape-ValB">
                  <div className="Vent-Material-ResDiv2-Shape-ValC">
                    <div className="Vent-Material-ResDiv2-Shape-ValD">
                      <div className="Vent-Material-ResDiv2-Shape-ValE">
                        <div className="Vent-Material-ResDiv2-Shape-Val-Text">
                          123456
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* APN */}
            <div className="Vent-Material-ResDiv2-APN-Val1">
              <div className="Vent-Material-ResDiv2-APN-Val2">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        Alternative Part no
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Shape-Val">
                <div className="Vent-Material-ResDiv2-APN-ValB">
                  <div className="Vent-Material-ResDiv2-APN-ValC">
                    <div className="Vent-Material-ResDiv2-APN-ValD">
                      <div className="Vent-Material-ResDiv2-APN-ValE">
                        <div
                          className={
                            selected1
                              ? "Vent-Material-ResDiv2-APN-ValF selected"
                              : "Vent-Material-ResDiv2-APN-ValF"
                          }
                          onClick={toggleSelected1}
                        >
                          {selected1 && <CheckIcon style={{ width: "15px" }} />}
                        </div>
                        <div className="Vent-Material-ResDiv2-APN-ValG">
                          <div className="Vent-Material-ResDiv2-APN-ValG-1">
                            Lorem ipsum{" "}
                          </div>
                        </div>
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValE">
                        <div
                          className={
                            selected2
                              ? "Vent-Material-ResDiv2-APN-ValF selected"
                              : "Vent-Material-ResDiv2-APN-ValF"
                          }
                          onClick={toggleSelected2}
                        >
                          {selected2 && <CheckIcon style={{ width: "15px" }} />}
                        </div>
                        <div className="Vent-Material-ResDiv2-APN-ValG">
                          <div className="Vent-Material-ResDiv2-APN-ValG-1">
                            Lorem ipsum{" "}
                          </div>
                        </div>
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValE">
                        <div
                          className={
                            selected3
                              ? "Vent-Material-ResDiv2-APN-ValF selected"
                              : "Vent-Material-ResDiv2-APN-ValF"
                          }
                          onClick={toggleSelected3}
                        >
                          {selected3 && <CheckIcon style={{ width: "15px" }} />}
                        </div>
                        <div className="Vent-Material-ResDiv2-APN-ValG">
                          <div className="Vent-Material-ResDiv2-APN-ValG-1">
                            Lorem ipsum{" "}
                          </div>
                        </div>
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValE">
                        <div
                          className={
                            selected4
                              ? "Vent-Material-ResDiv2-APN-ValF selected"
                              : "Vent-Material-ResDiv2-APN-ValF"
                          }
                          onClick={toggleSelected4}
                        >
                          {selected4 && <CheckIcon style={{ width: "15px" }} />}
                        </div>
                        <div className="Vent-Material-ResDiv2-APN-ValG">
                          <div className="Vent-Material-ResDiv2-APN-ValG-1">
                            Lorem ipsum{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AL */}
            <div className="Vent-Material-ResDiv2-APN-Val1">
              <div className="Vent-Material-ResDiv2-APN-Val2">
                <div className="Vent-Material-ResDiv2-ShapeC">
                  <div className="Vent-Material-ResDiv2-ShapeD">
                    <div className="Vent-Material-ResDiv2-ShapeE">
                      <div className="Vent-Material-ResDiv2-Shape-Text">
                        Alternative locations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Vent-Material-ResDiv2-Shape-Val">
                <div className="Vent-Material-ResDiv2-APN-ValB">
                  <div className="Vent-Material-ResDiv2-APN-ValC">
                    <div className="Vent-Material-ResDiv2-APN-ValD">
                      <div className="Vent-Material-ResDiv2-APN-ValE">
                        <div className="Vent-Material-ResDiv2-APN-ValG">
                          <div className="Vent-Material-ResDiv2-APN-ValG-1">
                            Lorem ipsum{" "}
                          </div>
                        </div>
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValE">
                        <div className="Vent-Material-ResDiv2-APN-ValG">
                          <div className="Vent-Material-ResDiv2-APN-ValG-1">
                            Lorem ipsum{" "}
                          </div>
                        </div>
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValE">
                        <div className="Vent-Material-ResDiv2-APN-ValG">
                          <div className="Vent-Material-ResDiv2-APN-ValG-1">
                            Lorem ipsum{" "}
                          </div>
                        </div>
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValE">
                        <div className="Vent-Material-ResDiv2-APN-ValG">
                          <div className="Vent-Material-ResDiv2-APN-ValG-1">
                            Lorem ipsum{" "}
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
                selected
                  ? "Stock-Vent-FooterSec selected"
                  : "Stock-Vent-FooterSec"
              }
              onClick={toggleSelected}
            >
              <div className="Stock-Vent-Footer-P">
                {selected && <CheckIcon />}
              </div>
            </div>
            <div className="Stock-Vent-Footer-C2">
              <div className="Stock-Vent-Footer-C3">
                Request manufacturer RFQ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentMaterial;
