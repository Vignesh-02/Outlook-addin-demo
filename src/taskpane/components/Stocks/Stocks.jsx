import React, { useState, useEffect } from "react";
import "./Stocks.css";
import "@fontsource/orbitron";
import "@fontsource/orbitron/400.css";
import Extend from "../../../../public/extender.png";
import { useSelector } from "react-redux";
import { addMaterialData, updateMaterialAtIndex } from "../../../Store/action/materialAction";


const Stocks = ({classifyEmail }) => {


  const [selectedProduct, setSelectedProduct] = useState(1);

  const  {materialData}  = useSelector(
    (state) => state.material
  );
    // const [selectedProduct, setSelectedProduct2] = useState(1);
  const [selectedProductData, setSelectedProductData] = useState(null); // Data for the selected product
  const [editableFields, setEditableFields] = useState({
    shape: false,
    dimensions: false,
    color: false,
    unit: false,
    specification: false,
  });

  const products = Object.keys(classifyEmail)
    .filter((key) => key.startsWith("product_"))
    .map((key) => classifyEmail[key]);

    console.log('Products ', products);

  useEffect(() => {
    addMaterialData(products);
  }, [])


  useEffect(() => {
    if (selectedProduct && materialData.length > 0) {
      const getMaterialData = materialData[selectedProduct - 1];
      setSelectedProductData(getMaterialData);
    }
  }, [selectedProduct, materialData]); // Depend on both selectedProduct and materialData

  
//   useEffect(() => {
//     console.log('entered useEffect')
//     let getMaterialData = null;
//     // addMaterialData(products);

//     if(selectedProduct){
//         getMaterialData = materialData[selectedProduct-1];
//     }
//     setSelectedProductData(getMaterialData);
    
// }, [selectedProduct]);

  
  const handleClick = (productId) => {
    setSelectedProduct(productId);
  };


  const handleFieldChange = (event, field) => {
        if (event.key === "Enter") {
          const newData = {
            ...selectedProductData,
            [field]: event.target.value,
          };
          updateMaterialAtIndex(selectedProduct-1, newData)
          // Save data to local storage
        //   window.localStorage.setItem(
        //     `selectedProductData_${selectedProduct}`,
        //     JSON.stringify(newData)
        //   );
          setSelectedProductData(newData);
          setEditableFields((prevState) => ({
            ...prevState,
            [field]: false, // Exit edit mode
          }));
        }
      };

        const toggleEditMode = (field) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  console.log('MATERIAL  DATA', materialData)
//   const defaultProduct = classifyEmail[`product_${selectedProduct}`];
//     console.log('defaultProduct' , defaultProduct);
     // Corrected variable name here
  //    const defaultProduct = products[`product_${selectedProduct}`];

    // setSelectedProductData(defaultProduct);

    // console.log('selected Product Data', selectedProductData)
  // Load saved data from localStorage on component mount
  


    // const savedData = window.localStorage.getItem(
    //   `selectedProductData_${selectedProduct}`
    // );

    // if (savedData) {
    //     console.log('saving data', savedData)
    //   setSelectedProductData(JSON.parse(savedData));
    // } else {
      // If no saved data found, set the default data for the selected product
    //   const defaultProduct = classifyEmail[`product_${selectedProduct}`];
    //   console.log('defaultProduct' , defaultProduct);
       // Corrected variable name here
    //    const defaultProduct = products[`product_${selectedProduct}`];

    //   setSelectedProductData(defaultProduct);
    


  console.log('selected product data', selectedProductData);

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
 
      {selectedProductData !== null && (
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
                <div className="Stock-Vent-Value1Sec-Shape-VP"
                onDoubleClick={() => toggleEditMode("shape")}>
                   <div className="Stock-Vent-Value1Sec-Shape-VC">
                     <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                       <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                         <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                {editableFields.shape ? (
                            <input
                              type="text"
                              value={selectedProductData.shape}
                              onChange={(e) =>
                                setSelectedProductData((prevData) => ({
                                  ...prevData,
                                  shape: e.target.value,
                                }))
                              }
                              onBlur={() =>
                                setEditableFields((prevState) => ({
                                  ...prevState,
                                  shape: false,
                                }))
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleFieldChange(e, "shape");
                                }
                              }}
                              style={{ width: "100%", border: "transparent" }}
                            />
                          ) : (
                            <div
                              className="Stock-Vent-Value1Sec-Shape-Value">
                              {selectedProductData.shape}
                              {/* {products[selectedProduct - 1]?.shape || ""} */}
                            </div>
                          )}
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
                <div className="Stock-Vent-Value1Sec-Shape-VP"
                onDoubleClick={() => toggleEditMode("size")}>
                   <div className="Stock-Vent-Value1Sec-Shape-VC">
                     <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                       <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                         <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                           {editableFields.dimensions ? (
                            <input
                              type="text"
                              value={
                                selectedProductData.size
                                  ? calculateDimension(
                                      selectedProductData.size
                                    )
                                  : ""
                              }
                              onChange={(e) =>
                                setSelectedProductData((prevData) => ({
                                  ...prevData,
                                  size: e.target.value,
                                }))
                              }
                              onBlur={() =>
                                setEditableFields((prevState) => ({
                                  ...prevState,
                                  dimensions: false,
                                }))
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleFieldChange(e, "size");
                                }
                              }}
                              style={{ width: "100%", border: "transparent" }}
                            />
                          ) : (
                            <span
                              style={{
                                color: "#080808",
                                fontSize: "10px",
                                fontFamily: "Helvetica Neue",
                                fontWeight: 400,
                                lineHeight: "20px",
                                letterSpacing: "0.50px",
                                wordWrap: "break-word",
                              }}>
                              {selectedProductData.size
                                ? calculateDimension(selectedProductData.size)
                                : ""}
                            </span>
                          )}
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
                <div className="Stock-Vent-Value1Sec-Shape-VP"
                onDoubleClick={() => toggleEditMode("color")}>
                   <div className="Stock-Vent-Value1Sec-Shape-VC">
                     <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                       <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                         <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                         {editableFields.color ? (
                            <input
                              type="text"
                              value={selectedProductData.color}
                              onChange={(e) =>
                                setSelectedProductData((prevData) => ({
                                  ...prevData,
                                  color: e.target.value,
                                }))
                              }
                              onBlur={() =>
                                setEditableFields((prevState) => ({
                                  ...prevState,
                                  color: false,
                                }))
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleFieldChange(e, "color");
                                }
                              }}
                              style={{ width: "100%", border: "transparent" }}
                            />
                          ) : (
                            <div
                              className="Stock-Vent-Value1Sec-Shape-Value">
                              {selectedProductData.color}
                              </div>
                                                      )}
                          {/* <span className="Stock-Vent-Value1Sec-Shape-Value">{products[selectedProduct - 1]?.color || ""}</span> */}
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
                <div className="Stock-Vent-Value1Sec-Shape-VP"
                onDoubleClick={() => toggleEditMode("unit")}>
                   <div className="Stock-Vent-Value1Sec-Shape-VC">
                     <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                       <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                         <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                         {editableFields.unit ? (
                            <input
                              type="text"
                              value={selectedProductData.unit}
                              onChange={(e) =>
                                setSelectedProductData((prevData) => ({
                                  ...prevData,
                                  unit: e.target.value,
                                }))
                              }
                              onBlur={() =>
                                setEditableFields((prevState) => ({
                                  ...prevState,
                                  unit: false,
                                }))
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleFieldChange(e, "unit");
                                }
                              }}
                              style={{ width: "100%", border: "transparent" }}
                            />
                          ) : (
                            <div
                              className="Stock-Vent-Value1Sec-Shape-Value">
                              {selectedProductData.unit}
                              {/* {products[selectedProduct - 1]?.unit || ""} */}
                            </div>
                          )}
                          {/* <span className="Stock-Vent-Value1Sec-Shape-Value">{products[selectedProduct - 1]?.color || ""}</span> */}
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
                <div className="Stock-Vent-Value1Sec-Shape-VP"
                onDoubleClick={() => toggleEditMode("specification")}>
                   <div className="Stock-Vent-Value1Sec-Shape-VC">
                     <div className="Stock-Vent-Value1Sec-Shape-Val-P">
                       <div className="Stock-Vent-Value1Sec-Shape-Val-C">
                         <div className="Stock-Vent-Value1Sec-Shape-Val-C1">
                           {editableFields.specification ? (
                            <input
                              type="text"
                              value={selectedProductData.specification}
                              onChange={(e) =>
                                setSelectedProductData((prevData) => ({
                                  ...prevData,
                                  specification: e.target.value,
                                }))
                              }
                              onBlur={() =>
                                setEditableFields((prevState) => ({
                                  ...prevState,
                                  specification: false,
                                }))
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleFieldChange(e, "specification");
                                }
                              }}
                              style={{ width: "100%", border: "transparent" }}
                            />
                          ) : (
                            <div
                              className="Stock-Vent-Value1Sec-Shape-Value">
                              {selectedProductData.specification}
                              {/* {products[selectedProduct - 1]?.specification || ""} */}
                            </div>
                          )}
                          {/* <span className="Stock-Vent-Value1Sec-Shape-Value">{products[selectedProduct - 1]?.color || ""}</span> */}
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
