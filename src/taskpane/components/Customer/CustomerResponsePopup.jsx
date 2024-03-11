import React, { useRef, useState, useEffect } from "react";
import "./CustomerResponsePopup.css"; // Import the CSS file
// import cross from "../../../public/Cross.png"
import Tiptap1 from "./Tiptap1";
import Tiptap2 from "./Tiptap2";
import { useSelector } from "react-redux";

import { responseAdd } from "../../../Store/action/customerBodyAction";

const CustomerResponsePopup = ({ close, customerBody, setCustomerBody }) => {

    const  {customerResponseBody}  = useSelector(
        (state) => state.customerResponse
      );

//    console.log('Customer Body ', customerBody);

  const [beforeTable, tableWithContent, afterTable] = customerResponseBody.split(/(<table.*<\/table>)/);
  console.log(afterTable);

    const [before, setBefore] = useState(beforeTable);
    const [tableContent, setTableContent] = useState(tableWithContent);
    const [after, setAfter] = useState(afterTable);

//   const tableContent = (
//     <div>
//       <table border="1">
//         <tr>
//           <th>Material</th>
//           <th>Dimensions</th>
//           <th>Quantity</th>
//           <th>Color</th>
//           <th>Availability</th>
//           <th>Individual Cost</th>
//           <th>Total Cost</th>
//           <th>Lead Time</th>
//           <th>Freight Cost</th>
//         </tr>
//         <tr>
//           <td>PVC</td>
//           <td>Diameter: 1.25 inch RD, Length: 10 feet</td>
//           <td>20 lengths</td>
//           <td>Gray</td>
//           <td>NOT IN-STOCK</td>
//           <td>10.0</td>
//           <td>100.0</td>
//           <td>3 days</td>
//           <td>$50</td>
//         </tr>
//         <tr>
//           <td>PVC</td>
//           <td>Diameter: 1.125 inch RD, Length: 10 feet</td>
//           <td>28 Lengths</td>
//           <td>Gray</td>
//           <td>NOT IN-STOCK</td>
//           <td>12.0</td>
//           <td>120.0</td>
//           <td>5 days</td>
//           <td>$52</td>
//         </tr>
//       </table>
//     </div>
//   );

  const handleBeforeChange = (newValue) => {
    setBefore(newValue);
  };
  
//   const handleBeforeChange = (newValue) => {
//     setBefore(newValue);
//   };
  
  const handleAfterChange = (newValue) => {
    setAfter(newValue);
  };
  
  console.log('before ', before);
  console.log('after ', after);

  const clickButton = () => {
    responseAdd(before+tableContent+after);
    close();
  }

  console.log(customerResponseBody);

  const [isEditing, setIsEditing] = useState(false);
  // const [text, setText] = useState('Click to edit');

  

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  //   function sendMail() {
  //     const accessToken = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAV2uZKYu3zNZfhndiZxQGtMRVizpw35Q9SKnIK0IZTCRrUKsGPwMXCb/Jum9UlObZ1Lt5zQMIAByD0FMiqm0j7AMrvc98d3t1tNN4VncmGox4sTRSH48vDdLvIiTX3gss2bfy/la5J5Sh95o75rsVyZMRGZL1Iheu8zs/6Y/OFIhJbUUY2uWhZi7D38oFfwtC/t1YvGzQ+WeHtzZcSQzscVpbZfUJkuLleif7QQ54bC+7iR4qGcWS1szcP9fjp2bsXVvhJ+V2j4018BEJqBrkUhgoF+IOjnLCLoIm8wi8gVNk1wsJFSNVyWxw+IBR3b/5Llp0NR7KLJscidJ/9KvLLMDZgAACLYIuMJU1577QAJUSt2vu0F3vUhAce0WiPeihXDyQBRLBp5dww6gv7+xuSgDyN1Sg471NXYAo5kRVZnvMbihS6Njtr2aNo6gLzOu0domVrkKvUr2tFTPvQ6ANoug76UKRXKTIMnzudqEfrvSZSw0b29s5IGuEFQVN7CVlQ2yg7MCezMV7OnTeJkiyeNvYBL9se3+AqZ94rxFjYmC/MkHkRl3b+CO4UgsPvLF/gUe/Ply74xV9YcNTGbLvhX+/LpdnuSNbMHqXOEShdbojW1kGowYOXxIDXLTxcACzjrSe5LBRR1FUej69ZF2smQTJ912KkQyRUEiKS6/wEpE+fa981XDntiOnNi6oRE8EWFYJP6M4TgCxUpljVfAE9LtR4cS7LfDfywq3/fscHVI7CD48/cfIGPmZkF1WfGNILHRnDxmfl6q/Igpp79AQeQZGGyOkI2K7k6DXJVqB68hMlUNRa15x975RgCbD0AVQ/+7JvEaYPloWBauZnCk8HGE9uyl2RtSgnhFoqr/dH/DyO22kaR5z2m8kSwWUCNcpcQKQpohdQ+2MIKcXqm1SBQbOvdRH4lSW07K1qzx9x8UcBC1xFnvMiMSY42/MfCzvJf7pqnd/u1VllHGNcvqABwz4+u1hYtEIag5usQDASQPHsv2QvB8L/HrSt077F3u6u/elbikquefjmEs5snwLKGMOz7H1JcKllUgIyZjan57K419I/OvdUDAU/jV8xksD/cekmB5xB4/153rd793Ngr+T/St4PIMl8mRKj007DR9Ag==';
  //     const sendMailUrl = 'https://graph.microsoft.com/v1.0/me/messages/AQMkADAwATM0MDAAMS02OGVmLWEyN2EtMDACLTAwCgBGAAADpd4QqRN3K0yHpymIIakdnQcA54fYm3+x4Uy3lcgUc2eXoQAAAgEMAAAA54fYm3+x4Uy3lcgUc2eXoQAAABfpxN8AAAA=/reply';
  //         const emailData = {
  //             message: {
  //                 toRecipients: [
  //                     {
  //                         emailAddress: {
  //                             address: "rudranil@onelabventures.com"
  //                         }
  //                     }
  //                 ]
  //             },
  //             comment: customerBody
  //     };

  //         fetch(sendMailUrl, {
  //           method: 'POST',
  //           headers: {
  //             'Authorization': `Bearer ${accessToken}`,
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify(emailData)
  //         })
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log("Mail sent successfully", data);
  //         })
  //         .catch(error => {
  //           console.error("Error sending mail", error);
  //         });
  //     };

  return (
    <div className="Frame20">
      <div className="TableHeader">
        <div className="Datagridheader">
          <div className="Container">
            <div className="Typography">
              <div className="TypographyBody1">Customer Response</div>
            </div>
          </div>
          <div className="XnixLineCross">
            <img className="Vector47" onClick={close} />
          </div>
        </div>
      </div>
      <div className="Frame16">
        {/* <div className="Row"> */}
        {/* <div className="Datagridcell"> */}
        <div className="Container2">
          {/* {isEditing ? (
                        <input
                        type="text"
                        value={customerBody}
                        onChange={handleTextChange}
                        onBlur={toggleEdit}
                        autoFocus
                        // className="Container2"
                        style={{ width: '200%', height: '200%', boxSizing: 'border-box' }} // Make input fill its parent
                        />
                    ) : (
                        <div  className="LongText" onClick={toggleEdit}>
                        <Tiptap />
                        </div>
                )} */}

          <Tiptap1 beforeTable={beforeTable} onValueChange={handleBeforeChange} />
          <div className="tableContent"
          dangerouslySetInnerHTML={{ __html: tableContent }}
          ></div>
          <Tiptap2 afterTable={afterTable} onValueChange={handleAfterChange} />
        </div>
        {/* </div> */}
        {/* </div> */}
        <div className="Frame17">
          <div className="Button">
            <div className="Text">Regenerate</div>
          </div>
          <div className="Button" onClick={clickButton}>
            <div className="Text">Save</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerResponsePopup;
