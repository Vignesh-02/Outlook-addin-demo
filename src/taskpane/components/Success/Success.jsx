import React from 'react'
import './Success.css';
// import SuccessPopUP from "../../../public/success.gif";
import SuccessPopUP from "../../../../public/success.gif";


const Success = () => {
 
  return (
    <>
   
    <div className="successDivPopUP">
    <img className="successDivPopUP-img" src={SuccessPopUP} alt="successLogo"  />
    <div className="successDivPopUP-cont">
    <div className="successDivPopUP-cont-Text">Successful</div>
    <div className="successDivPopUP-cont-Text2">Mail Sent successfully </div>
    </div>
    </div>
    </>
  )
}

export default Success



