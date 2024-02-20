import React, { useState, useEffect } from "react";
import BulbImage from "../../../../public/bulb.png";
import "./Decision.css";

const Decision = () => {
  const [selectedProduct, setSelectedProduct] = useState(1); // Default to product 1
  const [selectedProductStatus, setSelectedProductStatus] = useState(null); // Default to no selected product status

  // Dummy Data
  const materials = [
    {
      product_: 1,
      material : "PVC",
      status: "In Stock",
      material_cost: 100,
      margin: 0.2,
      price: 150,
      lead_time: 5,
      freight_cost: 10,
    },
    {
      product_: 2,
      material : "Acetal",
      status: "Partial In Stock",
      material_cost: 80,
      margin: 0.25,
      price: 120,
      lead_time: 7,
      freight_cost: 15,
    },
    {
      product_: 3,
      material : "Nylon",
      status: "Out of Stock",
      material_cost: 120,
      margin: 0.15,
      price: 140,
      lead_time: 3,
      freight_cost: 12,
    },
  ];

  useEffect(() => {
    // Set the status of the default selected product
    const defaultProduct = materials.find(
      (product) => product.product_ === selectedProduct
    );
    setSelectedProductStatus(defaultProduct.status);
  }, [selectedProduct]);

  const handleClick = (productId, status) => {
    setSelectedProduct(productId);
    setSelectedProductStatus(status);
  };


  

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

      {/* Mapping all products */}
      {materials.map(
        (product, index) =>
          // Render product only if it's not the selected product
          selectedProduct !== product.product_ && (
            <div
              className="Decision-VentDiv1"
              key={index}
              style={{
                background: (() => {
                  switch (product.status) {
                    case "In Stock":
                      return "#a3e59e";
                    case "Partial In Stock":
                      return "#fad467";
                    case "Out of Stock":
                      return "#f18c83";
                    default:
                      return "transparent";
                  }
                })(),
              }}
            >
              <div
                className="Decision-VentSec1"
                onClick={() => handleClick(product.product_, product.status)}
              >
                <div className="Decision-VentSec1-Txt">
                  <div>
                    <span className="Decision-VentSec1-Text1">
                      {product.material}
                      {/* {materials[selectedProduct - 1]?.material || ""} */}
                    </span>
                    <span className="Decision-VentSec1-Text2"> </span>
                    <span className="Decision-VentSec1-Text3">
                      ({product.material_cost}/{product.margin})
                    </span>
                  </div>
                </div>
              </div>
              <div className="Decision-VentSec1-side1">
                <div className="Decision-VentSec1-side2"></div>
              </div>
            </div>
          )
      )}

      {/* Displaying details when a product is clicked */}
      {selectedProduct !== null && (
        <div
          className="Decision-VentDiv4"
          style={{
            background: (() => {
              switch (selectedProductStatus) {
                case "In Stock":
                  return "#a3e59e";
                case "Partial In Stock":
                  return "#fad467";
                case "Out of Stock":
                  return "#f18c83";
                default:
                  return "transparent";
              }
            })(),
          }}
        >
          <div className="Decision-VentDiv4-Child">
            <div className="Decision-VentSec1">
              <div className="Decision-VentSec1-Txt">
                <div className="Decision-VentSec1-Text1">
                  {/* {`Product- ${selectedProduct}`} */}
                  {materials.find(product => product.product_ === selectedProduct)?.material || ""}
                  </div>
              </div>
              {materials[selectedProduct - 1]?.status === "In Stock" && (
                <div className="Decision-VentSec1-Text3">(100/20)</div>
              )}
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
                            {materials[selectedProduct - 1]?.status || ""}
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
                      <div className="Decision-ShapeSec-Text">
                        Material Cost
                      </div>
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
                            {materials[selectedProduct - 1]?.material_cost ||
                              ""}
                          </div>
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
                          <div className="Decision-Shape-ValueC2">
                            {materials[selectedProduct - 1]?.margin || ""}
                          </div>
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
                          <div className="Decision-Shape-ValueC2">
                            {materials[selectedProduct - 1]?.price || ""}
                          </div>
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
                          <div className="Decision-Shape-ValueC2">
                            {materials[selectedProduct - 1]?.lead_time || ""}
                          </div>
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
                          <div className="Decision-Shape-ValueC2">
                            {materials[selectedProduct - 1]?.freight_cost || ""}
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
      )}
    </div>
  );
};

export default Decision;
