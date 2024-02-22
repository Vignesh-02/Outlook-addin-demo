import React, { useState } from "react";
import "./Stocks.css";
import "@fontsource/orbitron";
import "@fontsource/orbitron/400.css";
import Extend from "../../../../public/extender.png";

const Stocks = ({classifyEmail }) => {
  // const classifyEmail = {
  //   "RFQ_status": 1,
  //   "name": "Abby Rodriguez",
  //   "email": "afshan@100gmail.com",
  //   "company": "Integral Machining & Engineering",
  //   "shipping_address": "12060 31st. Ct. N. St. Petersburg FL 33716",
  //   "cert_need": false,
  //   "product_1": {
  //     "material": "Acetal",
  //     "size": {
  //         "diameter": "1.25 inch RD",
  //         "thick": null,
  //         "length": "10 feet",
  //         "width": null
  //     },
  //     "shape": "Rod",
  //     "specification": "23-0002-XX",
  //     "manufacturer": null,
  //     "color": "Gray",
  //     "quantity": "20 lengths"
  //   },
  //   "product_2": {
  //     "material": "Nylon",
  //     "size": {
  //         "diameter": "1.125 inch RD",
  //         "thick": null,
  //         "length": "10 feet",
  //         "width": null
  //     },
  //     "shape": "Rod",
  //     "specification": "23-0004-01",
  //     "manufacturer": null,
  //     "color": "Gray",
  //     "quantity": "28 Lengths"
  //   },
  //   "product_3": {
  //     "material": "UHMW",
  //     "size": {
  //         "diameter": "1.125 inch RD",
  //         "thick": null,
  //         "length": "10 feet",
  //         "width": 12
  //     },
  //     "shape": "Rod",
  //     "specification": "23-0004-01",
  //     "manufacturer": null,
  //     "color": "orange",
  //     "quantity": null
  //   },
  //   "RFQ_ID": "INTR100200GY24821"
  // };

  const [selectedProduct, setSelectedProduct] = useState(1);

  const products = Object.keys(classifyEmail)
    .filter((key) => key.startsWith("product_"))
    .map((key) => classifyEmail[key]);

  const handleClick = (productId) => {
    setSelectedProduct(productId);
  };

  const calculateDimension = (size) => {
    if (!size) return null;
    const { diameter, thick, length, width } = size;
    if (thick) {
      return `${thick} * ${width} * ${length}`;
    } else {
      return `${diameter} * ${length}`;
    }
  };

  return (
    <div className="Stock-VentDiv">
      {products.map((product, index) => (
        // Render product only if it's not the selected product
        index + 1 !== selectedProduct && (
          <div className="Stock-VentDiv1" key={index}>
            <div className="Stock-VentSec1" onClick={() => handleClick(index + 1)}>
              <div className="Stock-VentSec1-Txt">
                <div>
                  <span className="Stock-VentSec1-Text1">{`${product.material}`}</span>
                  <span className="Stock-VentSec1-Text3">
                    {/* ({product.quantity && product.quantity.match(/\d+/)[0]}) */}
                    ({product.quantity ? product.quantity.match(/\d+/)[0] : "()"})
                  </span>
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
                <div className="Stock-VentSec1-Text1">{products[selectedProduct - 1]?.material}</div>
              </div>
              <div className="Stock-VentSec4-Text2">
                ({products[selectedProduct - 1]?.quantity &&
                  products[selectedProduct - 1].quantity.match(/\d+/)[0]})
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
                          {products[selectedProduct - 1]?.shape || ""}
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
                            {products[selectedProduct - 1]?.size
                              ? calculateDimension(products[selectedProduct - 1].size)
                              : ""}
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
                          <span className="Stock-Vent-Value1Sec-Shape-Value">{products[selectedProduct - 1]?.color || ""}</span>
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
                          {products[selectedProduct - 1]?.unit || ""}
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
                          <span className="Stock-Vent-Value1Sec-Shape-Value">{products[selectedProduct - 1]?.specification || ""}</span>
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

export default Stocks;
