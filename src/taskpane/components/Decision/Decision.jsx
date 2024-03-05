import React, { useState, useEffect } from "react";
import BulbImage from "../../../../public/bulb.png";
import CheckIcon from "@mui/icons-material/Check";
import "./Decision.css";
import Extend from "../../../../public/extender.png";
import Ventmaterial from "../Ventmaterial/Ventmaterial";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { productAdd } from "../../../Store/action/productAction";






// const Decision = ({ isPopupOpenStock, togglePopupStock }) => {
//   const [selectedProduct, setSelectedProduct] = useState(1); // Default to product 1
//   const [selectedProductStatus, setSelectedProductStatus] = useState(null); // Default to no selected product status
//   const [selectedRFQ, setSelectedRFQ] = useState(true);
//   const toggleSelectedRFQ = () => {
//     setSelectedRFQ(!selectedRFQ);
//   };

//   // Dummy Data
//   const materials = [
//     {
//       product_: 1,
//       material : "PVC",
//       status: "In Stock",
//       material_cost: 100,
//       margin: 0.2,
//       price: 150,
//       lead_time: 5,
//       freight_cost: 10,
//     },
//     {
//       product_: 2,
//       material : "PVC",
//       status: "Partial In Stock",
//       material_cost: 80,
//       margin: 0.25,
//       price: 120,
//       lead_time: 7,
//       freight_cost: 15,
//     },
//     // {
//     //   product_: 3,
//     //   material : "Nylon",
//     //   status: "Out of Stock",
//     //   material_cost: 120,
//     //   margin: 0.15,
//     //   price: 140,
//     //   lead_time: 3,
//     //   freight_cost: 12,
//     // },
//   ];


//   useEffect(() => {
//     // Set the status of the default selected product
//     const defaultProduct = materials.find(
//       (product) => product.product_ === selectedProduct
//     );
//     setSelectedProductStatus(defaultProduct.status);
//   }, [selectedProduct]);

//   const handleClick = (productId, status) => {
//     setSelectedProduct(productId);
//     setSelectedProductStatus(status);
//   };

//   return (
//     <div className="Decision-VentDiv">
//       <div className="D1">
//         <div className="D2">
//           <div className="D3">
//             <div className="D4">
//               <div className="D5">Decision</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mapping all products */}
//       {materials.map(
//         (product, index) =>
//           // Render product only if it's not the selected product
//           selectedProduct !== product.product_ && (
//             <div
//               className="Decision-VentDiv1"
//               key={index}
//               style={{
//                 background: (() => {
//                   switch (product.status) {
//                     case "In Stock":
//                       return "#a3e59e";
//                     case "Partial In Stock":
//                       return "#fad467";
//                     case "Out of Stock":
//                       return "#f18c83";
//                     default:
//                       return "transparent";
//                   }
//                 })(),
//               }}
//             >
//               <div
//                 className="Decision-VentSec1"
//                 onClick={() => handleClick(product.product_, product.status)}
//               >
//                 <div className="Decision-VentSec1-Txt">
//                   <div>
//                     <span className="Decision-VentSec1-Text1">
//                       {product.material}
//                       {/* {materials[selectedProduct - 1]?.material || ""} */}
//                     </span>
//                     <span className="Decision-VentSec1-Text2"> </span>
//                     <span className="Decision-VentSec1-Text3">
//                       ({product.material_cost}/{product.margin})
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="Decision-VentSec1-side1">
//                 <div className="Decision-VentSec1-side2"></div>
//               </div>
//             </div>
//           )
//       )}

//       {/* Displaying details when a product is clicked */}
//       {selectedProduct !== null && (
//         <div
//           className="Decision-VentDiv4"
//           style={{
//             background: (() => {
//               switch (selectedProductStatus) {
//                 case "In Stock":
//                   return "#a3e59e";
//                 case "Partial In Stock":
//                   return "#fad467";
//                 case "Out of Stock":
//                   return "#f18c83";
//                 default:
//                   return "transparent";
//               }
//             })(),
//           }}
//         >
//           <div className="Decision-VentDiv4-Child">
//             <div className="Decision-VentSec1">
//               <div className="Decision-VentSec1-Txt">
//                 <div className="Decision-VentSec1-Text1">
//                   {/* {`Product- ${selectedProduct}`} */}
//                   {materials.find(
//                     (product) => product.product_ === selectedProduct
//                   )?.material || ""}
//                 </div>
//               </div>

//               {materials[selectedProduct - 1]?.status === "In Stock" && (
//                 <div className="Decision-VentSec1-Text3">(100/20)</div>
//               )}
//             </div>
//             <img
//               style={{ width: "15px", height: "15px" }}
//               src={Extend}
//               alt="Extend"
//               onClick={togglePopupStock}
//             />
//             <Modal
//               isOpen={isPopupOpenStock}
//               onRequestClose={togglePopupStock}
//               className="Modal"
//               // overlayClassName="Overlay"
//               style={{
//                 overlay: {
//                   position: "fixed",
//                 //   top: "38px",
//                   width: "325px",
//                   height: "586px",
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                 },
//               }}
//             >
//               <Ventmaterial
//                 // isOpen={isPopupOpenStock}
//                 close={togglePopupStock}
//               />
//             </Modal>
//           </div>
//           {/* Decision Section */}
//           <div className="Decision-ShapeDiv">
//             <div className="Decision-ShapeSec">
//               {/* Status */}
//               <div className="Decision-ShapeSec-P">
//                 <div className="Decision-ShapeSec-P1">
//                   <div className="Decision-ShapeSec-P2">
//                     <div className="Decision-ShapeSec-C1">
//                       <div className="Decision-ShapeSec-Text">Status</div>
//                     </div>
//                     <div className="MQ-TH-Content-ImageDiv-2">
//                       <div className="MQ-TH-Content-Image-2">
//                         <img src={BulbImage} alt="Logo" id="BulbId" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Decision-Shape-Value">
//                   <div className="Decision-Shape-ValueP">
//                     <div className="Decision-Shape-ValueP1">
//                       <div className="Decision-Shape-ValueP2">
//                         <div className="Decision-Shape-ValueC1">
//                           <div className="Decision-Shape-ValueC2">
//                             {materials[selectedProduct - 1]?.status || ""}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Material */}
//               <div className="Decision-ShapeSec-P">
//                 <div className="Decision-ShapeSec-P1">
//                   <div className="Decision-ShapeSec-P2">
//                     <div className="Decision-ShapeSec-C1">
//                       <div className="Decision-ShapeSec-Text">
//                         Material Cost
//                       </div>
//                     </div>
//                     <div className="MQ-TH-Content-ImageDiv-2">
//                       <div className="MQ-TH-Content-Image-2">
//                         <img src={BulbImage} alt="Logo" id="BulbId" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Decision-Shape-Value">
//                   <div className="Decision-Shape-ValueP">
//                     <div className="Decision-Shape-ValueP1">
//                       <div className="Decision-Shape-ValueP2">
//                         <div className="Decision-Shape-ValueC1">
//                           <div className="Decision-Shape-ValueC2">
//                             {materials[selectedProduct - 1]?.material_cost ||
//                               ""}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Margin */}
//               <div className="Decision-ShapeSec-P">
//                 <div className="Decision-ShapeSec-P1">
//                   <div className="Decision-ShapeSec-P2">
//                     <div className="Decision-ShapeSec-C1">
//                       <div className="Decision-ShapeSec-Text">Margin</div>
//                     </div>
//                     <div className="MQ-TH-Content-ImageDiv-2">
//                       <div className="MQ-TH-Content-Image-2">
//                         <img src={BulbImage} alt="Logo" id="BulbId" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Decision-Shape-Value">
//                   <div className="Decision-Shape-ValueP">
//                     <div className="Decision-Shape-ValueP1">
//                       <div className="Decision-Shape-ValueP2">
//                         <div className="Decision-Shape-ValueC1">
//                           <div className="Decision-Shape-ValueC2">
//                             {materials[selectedProduct - 1]?.margin || ""}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Price */}
//               <div className="Decision-ShapeSec-P">
//                 <div className="Decision-ShapeSec-P1">
//                   <div className="Decision-ShapeSec-P2">
//                     <div className="Decision-ShapeSec-C1">
//                       <div className="Decision-ShapeSec-Text">Price</div>
//                     </div>
//                     <div className="MQ-TH-Content-ImageDiv-2">
//                       <div className="MQ-TH-Content-Image-2">
//                         <img src={BulbImage} alt="Logo" id="BulbId" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Decision-Shape-Value">
//                   <div className="Decision-Shape-ValueP">
//                     <div className="Decision-Shape-ValueP1">
//                       <div className="Decision-Shape-ValueP2">
//                         <div className="Decision-Shape-ValueC1">
//                           <div className="Decision-Shape-ValueC2">
//                             {materials[selectedProduct - 1]?.price || ""}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Lead Time */}
//               <div className="Decision-ShapeSec-P">
//                 <div className="Decision-ShapeSec-P1">
//                   <div className="Decision-ShapeSec-P2">
//                     <div className="Decision-ShapeSec-C1">
//                       <div className="Decision-ShapeSec-Text">Lead Time</div>
//                     </div>
//                     <div className="MQ-TH-Content-ImageDiv-2">
//                       <div className="MQ-TH-Content-Image-2">
//                         <img src={BulbImage} alt="Logo" id="BulbId" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Decision-Shape-Value">
//                   <div className="Decision-Shape-ValueP">
//                     <div className="Decision-Shape-ValueP1">
//                       <div className="Decision-Shape-ValueP2">
//                         <div className="Decision-Shape-ValueC1">
//                           <div className="Decision-Shape-ValueC2">
//                             {materials[selectedProduct - 1]?.lead_time || ""}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Freight Cost */}
//               <div className="Decision-ShapeSec-P">
//                 <div className="Decision-ShapeSec-P1">
//                   <div className="Decision-ShapeSec-P2">
//                     <div className="Decision-ShapeSec-C1">
//                       <div className="Decision-ShapeSec-Text">Freight Cost</div>
//                     </div>
//                     <div className="MQ-TH-Content-ImageDiv-2">
//                       <div className="MQ-TH-Content-Image-2">
//                         <img src={BulbImage} alt="Logo" id="BulbId" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="Decision-Shape-Value">
//                   <div className="Decision-Shape-ValueP">
//                     <div className="Decision-Shape-ValueP1">
//                       <div className="Decision-Shape-ValueP2">
//                         <div className="Decision-Shape-ValueC1">
//                           <div className="Decision-Shape-ValueC2">
//                             {materials[selectedProduct - 1]?.freight_cost || ""}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="Stock-Vent-FooterDiv">
//             <div
//               className={`Stock-Vent-FooterSec ${
//                 selectedRFQ ? "selected" : ""
//               }`}
//               onClick={toggleSelectedRFQ}
//               style={{ background: selectedRFQ ? "#356f9f" : "white" }}
//             >
//               <div className="Stock-Vent-Footer-P">
//                 {selectedRFQ && (
//                   <CheckIcon style={{ width: "20px", color: "white" }} />
//                 )}
//               </div>
//             </div>
//             <div className="Stock-Vent-Footer-C2">
//               <div className="Stock-Vent-Footer-C3">
//                 Request manufacturer RFQ
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


const Decision = ({ isPopupOpenStock, togglePopupStock }) => {


    const  {product_1, product_2, product_3}  = useSelector(
        (state) => state.product
      );
    //   console.log('Store product_1 data', product_1)
    //   console.log('Store product_2 data', product_2)
    //   console.log('Store products_3 data', product_3)

  const [selectedProduct, setSelectedProduct] = useState(1); // Default to product 1
  const [selectedProductData, setSelectedProductData] = useState(null); // Data for the selected product
  const [selectedProductStatus, setSelectedProductStatus] = useState(null); // Default to no selected product status
  const [selectedRFQ, setSelectedRFQ] = useState(true);
  const toggleSelectedRFQ = () => {
    setSelectedRFQ(!selectedRFQ);
  };
  const [editableFields, setEditableFields] = useState({
    status: false,
    material: false,
    margin: false,
    price: false,
    leadTime: false,
    freightCost: false,
  });

    // Load saved data from localStorage on component mount
    
    // useEffect(() => {
    //   const savedData = window.localStorage.getItem("selectedProductData");
    //   console.log('saved Data in local Storage', savedData);
    //   if (savedData) {
    //     setSelectedProductData(JSON.parse(savedData));
    //   }
    // }, []);

    const handleFieldChange = (event, field) => {
      if (event.key === 'Enter') {
        const newData = {
          ...selectedProductData,
          [field]: event.target.value
        };
        // Save data to local storage
        // window.localStorage.setItem(`selectedProductData_${selectedProduct}`, JSON.stringify(newData));
        // console.log(newData);
        productAdd(newData, selectedProduct);

        setSelectedProductData(newData);
        setEditableFields(prevState => ({
          ...prevState,
          [field]: false, // Exit edit mode
        }));
      }
    };
  
  const toggleEditMode = (field) => {
    setEditableFields(prevState => ({
      ...prevState,
      [field]: true,
    }));
  };

  // Dummy Data
  const materials = [
    {
      product_: 1,
      material: "PVC",
      status: "In Stock",
      material_cost: 100,
      margin: 0.2,
      price: 150,
      lead_time: 5,
      freight_cost: 10,
    },
    {
      product_: 2,
      material: "Acetal",
      status: "Partial In Stock",
      material_cost: 80,
      margin: 0.25,
      price: 120,
      lead_time: 7,
      freight_cost: 15,
    },
    {
      product_: 3,
      material: "Nylon",
      status: "Out of Stock",
      material_cost: 120,
      margin: 0.15,
      price: 140,
      lead_time: 3,
      freight_cost: 12,
    },
  ];

  // Load saved data from localStorage on component mount
useEffect(() => {
//   const savedData = window.localStorage.getItem(`selectedProductData_${selectedProduct}`);
let getProductData = null;

if(selectedProduct == 1){
    getProductData = product_1
}
if(selectedProduct == 2){
    getProductData = product_2
}
if(selectedProduct == 3){
    getProductData = product_3
}


if (getProductData) {
    setSelectedProductData(getProductData);
  } else {
    // If no saved data found, set the default data for the selected product
    const defaultProduct = materials.find(
      (product) => product.product_ === selectedProduct
    );
    setSelectedProductData(defaultProduct);
  }
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
      {selectedProductData && (
       <div
       className="Decision-VentDiv4"
       style={{
         background: (() => {
           switch (selectedProductData.status) {
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
                  {/* {selectedProductData.material} */}
                  {materials.find(
                    (product) => product.product_ === selectedProduct
                  )?.material || ""}
                </div>
              </div>
              {materials[selectedProduct - 1]?.status === "In Stock" && (
                <div className="Decision-VentSec1-Text3">(100/20)</div>
              )}
            </div>
            <img
              style={{ width: "15px", height: "15px" }}
              src={Extend}
              alt="Extend"
              onClick={togglePopupStock}
            />
            <Modal
              isOpen={isPopupOpenStock}
              onRequestClose={togglePopupStock}
              className="Modal"
              // overlayClassName="Overlay"
              style={{
                overlay: {
                  position: "fixed",
                  top: "38px",
                  width: "325px",
                  height: "586px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <Ventmaterial
                // isOpen={isPopupOpenStock}
                close={togglePopupStock}
              />
            </Modal>
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
                  {editableFields.status ? (
                    <input
                      type="text"
                      value={selectedProductData.status}
                      onChange={(e) => setSelectedProductData(prevData => ({ ...prevData, status: e.target.value }))}
                      onBlur={() => setEditableFields(prevState => ({ ...prevState, status: false }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleFieldChange(e, "status");
                        }
                      }}
                      style={{width: '100%', border: "transparent"}}
                    />
                  ) : (
                    <div
                      className="Decision-Shape-ValueC2"
                      onDoubleClick={() => toggleEditMode("status")}
                    >
                      {selectedProductData.status}
                      {/* {materials[selectedProduct - 1]?.status || ""} */}
                    </div>
                  )}
                </div>
                </div> </div> </div> </div>
              </div>
              {/* material */}
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
                  {editableFields.material ? (
                    <input
                      type="text"
                      value={selectedProductData.material}
                      onChange={(e) => setSelectedProductData(prevData => ({ ...prevData, material: e.target.value }))}
                      onBlur={() => setEditableFields(prevState => ({ ...prevState, material: false }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleFieldChange(e, "material");
                        }
                      }}
                      style={{width: '100%', border: "transparent"}}
                      
                    />
                  ) : (
                    <div
                      className="Decision-Shape-ValueC2"
                      onDoubleClick={() => toggleEditMode("material")}
                    >
                      {/* {selectedProductData.status} */}
                      {selectedProductData.material}
                      {/* {materials[selectedProduct - 1]?.material || ""} */}
                    </div>
                  )}
                </div>
                </div></div></div></div>
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
                  {editableFields.margin ? (
                    <input
                      type="text"
                      value={selectedProductData.margin}
                      onChange={(e) => setSelectedProductData(prevData => ({ ...prevData, margin: e.target.value }))}
                      onBlur={() => setEditableFields(prevState => ({ ...prevState, margin: false }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleFieldChange(e, "margin");
                        }
                      }}
                      style={{width: '100%', border: "transparent"}}
                      
                      
                    />
                  ) : (
                    <div
                      className="Decision-Shape-ValueC2"
                      onDoubleClick={() => toggleEditMode("margin")}
                    >
                      {selectedProductData.margin}
                      {/* {materials[selectedProduct - 1]?.margin || ""} */}
                    </div>
                  )}
                </div>
                </div></div></div></div>
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
                  {editableFields.price ? (
                    <input
                      type="text"
                      value={selectedProductData.price}
                      onChange={(e) => setSelectedProductData(prevData => ({ ...prevData, price: e.target.value }))}
                      onBlur={() => setEditableFields(prevState => ({ ...prevState, price: false }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleFieldChange(e, "price");
                        }
                      }}
                      style={{width: '100%', border: "transparent"}}

                    />
                  ) : (
                    <div
                      className="Decision-Shape-ValueC2"
                      onDoubleClick={() => toggleEditMode("price")}
                    >
                      {selectedProductData.price}
                      {/* {materials[selectedProduct - 1]?.price || ""} */}
                    </div>
                  )}
                </div>
                </div> </div> </div> </div>
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
                  {editableFields.leadTime ? (
                    <input
                      type="text"
                      value={selectedProductData.lead_time}
                      onChange={(e) => setSelectedProductData(prevData => ({ ...prevData, lead_time: e.target.value }))}
                      onBlur={() => setEditableFields(prevState => ({ ...prevState, lead_time: false }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleFieldChange(e, "leadTime");
                        }
                      }}
                      style={{width: '100%', border: "transparent"}}

                    />
                  ) : (
                    <div
                      className="Decision-Shape-ValueC2"
                      onDoubleClick={() => toggleEditMode("leadTime")}
                    >
                      {selectedProductData.lead_time}
                      {/* {materials[selectedProduct - 1]?.lead_time|| ""} */}
                    </div>
                  )}
                </div>
                </div> </div> </div> </div>
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
                  {editableFields.freightCost? (
                    <input
                      type="text"
                      value={selectedProductData.freight_cost}
                      onChange={(e) => setSelectedProductData(prevData => ({ ...prevData, freight_cost: e.target.value }))}
                      onBlur={() => setEditableFields(prevState => ({ ...prevState, freight_cost: false }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleFieldChange(e, "freightCost");
                        }
                      }}
                      style={{width: '100%', border: "transparent"}}

                    />
                  ) : (
                    <div
                      className="Decision-Shape-ValueC2"
                      onDoubleClick={() => toggleEditMode("freightCost")}
                    >
                      {selectedProductData.freight_cost}
                      {/* {materials[selectedProduct - 1]?.freight_cost || ""} */}
                    </div>
                  )}
                </div>
                </div> </div> </div> </div>
              </div>



            </div>
          </div>

{/* Footer */}
<div className="Stock-Vent-FooterDiv">
            <div
              className={`Stock-Vent-FooterSec ${
                selectedRFQ ? "selected" : ""
              }`}
              onClick={toggleSelectedRFQ}
              style={{ background: selectedRFQ ? "#356f9f" : "white" }}
            >
              <div className="Stock-Vent-Footer-P">
                {selectedRFQ && (
                  <CheckIcon style={{ width: "20px", color: "white" }} />
                )}
              </div>
            </div>
            <div className="Stock-Vent-Footer-C2">
              <div className="Stock-Vent-Footer-C3">
                Request manufacturer RFQ
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Decision;
