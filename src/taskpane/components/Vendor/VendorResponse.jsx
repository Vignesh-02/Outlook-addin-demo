/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import './VendorResponsePopup.css'
const VendorResponsePopup = () => {
    const [selectedValue, setSelectedValue] = useState('');
    // Handler for when the selection changes
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
       
  return (
    <div className="Frame21">
        <div className="TableHeader">
            <div className="DatagridHeader">
                <div className="Container">
                    <div className="Typography">
                        <div className="TypographyBody1">Vendor Response</div>
                    </div>
                </div>
                <div className="XnixLineCross">
                    <img className="Vector47" alt="Close" />
                </div>
            </div>
        </div>
        <div className="Frame16">
            <div className="Row">
                <div className="Frame4">
                    <div className="SelectVendor">
                    <select className="Dropdown-container" value={selectedValue} onChange={handleChange}>
        <option value="">Select an Option</option>
        <option value="option1">Vendor 1</option>
        <option value="option2">Vendor 2</option>
        <option value="option3">Vendor 3</option>
      </select>
                    </div>
                </div>
                <div className="Frame39">
                    <div className="Frame38">
                        <div className="Frame37">
                            <div className="Frame42">Vendor 1</div>
                        </div>
                    </div>
                    <div className="Frame94">
                        <div className="Frame37">
                            <div className="Frame42">Vendor 2</div>
                        </div>
                    </div>
                    <div className="Frame40">
                        <div className="Frame41">
                            <div className="Frame42">Vendor 3</div>
                        </div>
                    </div>
                </div>
                <div className="Datagridcell">
                    <div className="Container2">
                        <div className="LongText">
                        Hi John Deo,Lorem ipsum dolor sit amet consectetur. Tortor mus rutrum sed dui malesuada risus tempor. Elit auctor eget libero et lacinia elit purus elit. Tellus egestas quam massa ac aliquam lorem. Material Cost: Acriylic Quantity: 20 Scelerisque dignissim porta libero eu auctor aliquam donec duis rhoncus. Nunc duis mattis sed dui rhoncus. Sed interdum dolor lacus a enim vel interdum odio. Lobortis eu enim viverra gravida nec in sagittis justo. Thanks & Regards,ABC
                        </div>
                    </div>
                </div>
            </div>
            <div className="Frame17">
                <div className="Button">
                    <div className="Text">Regenerate</div>
                </div>
                <div className="Button">
                    <div className="Text">Save</div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default VendorResponsePopup;
