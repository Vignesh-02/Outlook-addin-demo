import React, { useState, useEffect, useRef } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Compress from "../../../../public/Compress-2.png";
import "./Ventmaterial.css";

const Ventmaterial = ({ close }) => {
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  const [selected7, setSelected7] = useState(false);
  const [selected8, setSelected8] = useState(false);

  const toggleSelected = (e) => {
    e.stopPropagation();
    setSelected(!selected);
  };

  const toggleSelected1 = (e) => {
    e.stopPropagation();
    setSelected1(!selected1);
  };
  const toggleSelected3 = (e) => {
    e.stopPropagation();
    setSelected3(!selected3);
  };
  const toggleSelected4 = (e) => {
    e.stopPropagation();
    setSelected4(!selected4);
  };
  const toggleSelected5 = (e) => {
    e.stopPropagation();
    setSelected5(!selected5);
  };
  const toggleSelected6 = (e) => {
    e.stopPropagation();
    setSelected6(!selected6);
  };
  const toggleSelected7 = (e) => {
    e.stopPropagation();
    setSelected7(!selected7);
  };
  const toggleSelected8 = (e) => {
    e.stopPropagation();
    setSelected8(!selected8);
  };

  return (
    <div className="Vent-Material-Res">
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
            style={{ width: "15px", height: "15px" }}
            onClick={close}
          />
        </div>
      </div>

      {/* 2nd half */}
      <div className="Vent-Material-ResDiv2">
        <div className="Vent-Material-ResDiv2-A">
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
                        MCAM
                      </div>
                    </div>
                    <div className="Vent-Material-ResDiv2-Mft-ValE">
                      ROCHLING
                    </div>
                    <div className="Vent-Material-ResDiv2-Mft-ValF">
                      ENSINGER
                    </div>
                    <div className="Vent-Material-ResDiv2-Mft-ValF">
                      CAST NYLONS
                    </div>
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
                          23568
                        </div>
                      </div>
                    </div>
                    {/* <div className="Vent-Material-ResDiv2-APN-ValE">
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
                      </div> */}
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
                          45656
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
                          5689956
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
                <div className="Vent-Material-ResDiv2-AL-ValC">
                  <div className="Vent-Material-ResDiv2-APN-ValD">
                    <div className="Vent-Material-ResDiv2-APN-ValE">
                      <div
                        className={
                          selected5
                            ? "Vent-Material-ResDiv2-APN-ValN selected"
                            : "Vent-Material-ResDiv2-APN-ValN"
                        }
                        onClick={toggleSelected5}
                      >
                        {selected5 && <CheckIcon style={{ width: "16px" }} />}
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValG">
                        <div className="Vent-Material-ResDiv2-APN-ValG-1">
                          SACRAMENTO
                        </div>
                      </div>
                    </div>
                    <div className="Vent-Material-ResDiv2-APN-ValE">
                      <div
                        className={
                          selected6
                            ? "Vent-Material-ResDiv2-APN-ValN selected"
                            : "Vent-Material-ResDiv2-APN-ValN"
                        }
                        onClick={toggleSelected6}
                      >
                        {selected6 && <CheckIcon style={{ width: "16px" }} />}
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValG">
                        <div className="Vent-Material-ResDiv2-APN-ValG-1">
                          SEATTLE
                        </div>
                      </div>
                    </div>
                    <div className="Vent-Material-ResDiv2-APN-ValE">
                      <div
                        className={
                          selected7
                            ? "Vent-Material-ResDiv2-APN-ValN selected"
                            : "Vent-Material-ResDiv2-APN-ValN"
                        }
                        onClick={toggleSelected7}
                      >
                        {selected7 && <CheckIcon style={{ width: "16px" }} />}
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValG">
                        <div className="Vent-Material-ResDiv2-APN-ValG-1">
                          AUSTIN
                        </div>
                      </div>
                    </div>
                    <div className="Vent-Material-ResDiv2-APN-ValE">
                      <div
                        className={
                          selected8
                            ? "Vent-Material-ResDiv2-APN-ValN selected"
                            : "Vent-Material-ResDiv2-APN-ValN"
                        }
                        onClick={toggleSelected8}
                      >
                        {selected8 && <CheckIcon style={{ width: "16px" }} />}
                      </div>
                      <div className="Vent-Material-ResDiv2-APN-ValG">
                        <div className="Vent-Material-ResDiv2-APN-ValG-1">
                          NEWARK
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
            <div className="Stock-Vent-Footer-C3">Request manufacturer RFQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ventmaterial;
