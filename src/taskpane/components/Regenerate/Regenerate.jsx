import React from 'react'
import "./Regenerate.css"
import cross from "../../../../public/Cross5.png";

const Regenerate = ({close}) => {
  return (
    <div className="RegeneratePage">
    <div className="RegeneratePage-Div1">
        <div className="RegeneratePage-Div1-A">
            <div className="RegeneratePage-Div1-B">
                <div className="RegeneratePage-Div1-B-I">
                    <div className="RegeneratePage-Div1-B-IA">Regenerate Response</div>
                </div>
            </div>
            <div className="RegeneratePage-Div1-C">
                <img className="RegeneratePage-Div1-C-Img" src={cross} onClick={close}/>
            </div>
        </div>
    </div>
    <div className="RegeneratePage-Div2">
        <div className="RegeneratePage-Div2-A">
            <div className="RegeneratePage-Div2-B">
                <div className="RegeneratePage-Div2-C">
                    <div className="RegeneratePage-Div2-D">
                        <div className="RegeneratePage-Div2-E">
                            <div className="RegeneratePage-Div2-F">
                                <div className="RegeneratePage-Div2-G">
                                    <div className="RegeneratePage-Div2-Text">Formal Response</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="RegeneratePage-Div2-C">
                    <div className="RegeneratePage-Div2-D">
                        <div className="RegeneratePage-Div2-E">
                            <div className="RegeneratePage-Div2-F">
                                <div className="RegeneratePage-Div2-G">
                                    <div className="RegeneratePage-Div2-Text">Casual Response</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="RegeneratePage-Div2-C">
                    <div className="RegeneratePage-Div2-D">
                        <div className="RegeneratePage-Div2-E">
                            <div className="RegeneratePage-Div2-F">
                                <div className="RegeneratePage-Div2-G">
                                    <div className="RegeneratePage-Div2-Text">Friendly Response</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* sec - 3 */}
        <div className="RegeneratePage-Div3">
            <div className="RegeneratePage-Div3-A">
                <div className="RegeneratePage-Div3-A-btn">Cancel</div>
            </div>
            <div className="RegeneratePage-Div3-B">
                <div className="RegeneratePage-Div3-B-btn">Regenerate</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Regenerate