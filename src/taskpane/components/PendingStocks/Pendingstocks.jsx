
import React, { useState } from "react";
import "./Pendingstocks.css";
import "@fontsource/orbitron";
import "@fontsource/orbitron/400.css";


// const Pendingstocks = ({materialDetails}) => {
    const Pendingstocks = () => {

  const materialDetails = [
    {
      id: 1,
      user: "100820566960910014800",
      shape: "Rod",
      dimensions: "104cm*89mm",
      color: "gray",
      unit: "lengths",
      specification: "23-0009-XX",
      manufacturer: "ABC",
      material: "Nylon",
      RFQ_ID: "INTR100200GY24821"
    },
    {
      id: 2,
      user: "100820566960910014800",
      shape: "Rod",
      dimensions: "104cm*89mm",
      color: "red",
      unit: "lengths",
      specification: "23-0009-XX",
      manufacturer: "ABC",
      material: "Silver",
      RFQ_ID: "INTR100200GY24821"
    },
    {
      id: 3,
      user: "100820566960910014800",
      shape: "Rod",
      dimensions: "104cm*89mm",
      color: "orange",
      unit: "lengths",
      specification: "23-0009-XX",
      manufacturer: "ABC",
      material: "Acetal",
      RFQ_ID: "INTR100200GY24821"
    },
  ];

console.log("pending page", materialDetails)
  
  const [selectedProduct, setSelectedProduct] = useState(1);

  // const products = Object.keys(materialDetails)
  //   .filter((key) => key.startsWith("id"))
  //   .map((key) => materialDetails[key]);

  const handleClick = (productId) => {
    setSelectedProduct(productId);
  };


 

  return (
   
    <div className="Stock-VentDiv">
      {materialDetails.map((product, index) => (
        // Render product only if it's not the selected product
        index + 1 !== selectedProduct && (
          <div className="Stock-VentDiv1" key={index}>
            <div className="Stock-VentSec1" onClick={() => handleClick(index + 1)}>
              <div className="Stock-VentSec1-Txt">
                <div>
                  <span className="Stock-VentSec1-Text1">{`${product.material}`}</span>
                </div>
              </div>
            </div>
            <div className="Stock-VentSec1-side1">
              <div className="Stock-VentSec1-side2"></div>
            </div>
          </div>
        )
      ))}
 
      {selectedProduct !== null && (
        <div className="Stock-VentDiv4">
          <div className="Stock-VentDiv4-Child">
            <div className="Stock-VentSec1">
              <div className="Stock-VentSec1-Txt">
                <div className="Stock-VentSec1-Text1">{materialDetails[selectedProduct - 1]?.material}</div>
              </div>
              <div className="Stock-VentSec4-Text2">
                ({materialDetails[selectedProduct - 1]?.quantity &&
                  materialDetails[selectedProduct - 1].quantity.match(/\d+/)[0]})
              </div>
            </div>
            <div className="Stock-VentSec4-side1">
            </div>
          </div>

          <div className="Stock-Vent-Value1">
            <div className="Stock-Vent-Value1Div">
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
                          {materialDetails[selectedProduct - 1]?.shape || ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                  <div className="Stock-Vent-Value1Sec-Shape-VC">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                        <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                        <span
                              style={{
                                color: "#080808",
                                fontSize: "10px",
                                fontFamily: "Helvetica Neue",
                                fontWeight: 100,
                                lineHeight: "20px",
                                letterSpacing: "0.50px",
                                wordWrap: "break-word",
                              }}
                            >
                           {materialDetails[selectedProduct - 1]?.dimensions || ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                  <div className="Stock-Vent-Value1Sec-Shape-VC">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                        <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                          <span className="Stock-Vent-Value1Sec-Shape-Value">{materialDetails[selectedProduct - 1]?.color || ""}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Stock-Vent-Value1Sec">
                <div className="Stock-Vent-Value1Sec-P">
                  <div className="Stock-Vent-Value1Sec-C">
                    <div className="Stock-Vent-Value1Sec-ShapeDiv">
                      <div className="Stock-Vent-Value1Sec-ShapeSec">
                        <div className="Stock-Vent-Value1Sec-Shape">Unit of Measure</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Stock-Vent-Value1Sec-Shape-VP">
                  <div className="Stock-Vent-Value1Sec-Shape-VC">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                        <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                          <span className="Stock-Vent-Value1Sec-Shape-Value">
                          {/* Unit */}
                          {materialDetails[selectedProduct - 1]?.unit || ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Stock-Vent-Value1Sec">
                <div className="Stock-Vent-Value1Sec-P">
                  <div className="Stock-Vent-Value1Sec-C">
                    <div className="Stock-Vent-Value1Sec-ShapeDiv">
                      <div className="Stock-Vent-Value1Sec-ShapeSec">
                        <div className="Stock-Vent-Value1Sec-Shape">Specification</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Stock-Vent-Value1Sec-Shape-VP">
                  <div className="Stock-Vent-Value1Sec-Shape-VC">
                    <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                      <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                        <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                          <span className="Stock-Vent-Value1Sec-Shape-Value">{materialDetails[selectedProduct - 1]?.specification || ""}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default Pendingstocks;

