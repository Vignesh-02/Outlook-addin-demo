import React from 'react'
import "./Notrfq.css";

import alert from "../../../../public/AlertError.png";
import action from "../../../../public/Actions.png";



const Notrfq = ({close}) => {
  return (
    <div className="NOT-RFQDiv">
    <div className="NOT-RFQDiv-1">
        <div className="NOT-RFQDiv-2">
            <div className="NOT-RFQDiv-2b">
                <div className="NOT-RFQDiv-2b-child">
                    <img src={alert} alt="" />
                </div>
            </div>
        </div>
        <div className="NOT-RFQDiv-3">
            <div className="NOT-RFQDiv-3b">
                <div className="NOT-RFQDiv-3c">
                    <div className="NOT-RFQDiv-3d">
                        <div className="NOT-RFQDiv-3e">
                        <img src={action} alt=""  onClick={close}/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="NOT-RFQDiv-footer">
        <div className="NOT-RFQDiv-footer-1">Not an RFQ</div>
        <div className="NOT-RFQDiv-footer-2">Please select an RFQ to Delegate </div>
    </div>
</div>
  )
}

export default Notrfq