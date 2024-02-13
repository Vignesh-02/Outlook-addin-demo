import React, {useRef, useEffect} from 'react';
import './CustomerResponsePopup.css'; // Import the CSS file
// import cross from "../../../../public/Cross.png"
const CustomerResponsePopup = ({ isOpen, close }) => {
  const popupRef = useRef(null); // Define the ref
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        close();
      }
    };
    // Attach event listener if the popup is open
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    // Cleanup the event listener when the component unmounts or the popup closes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, close]); // Dependencies array ensures effect runs only if isOpen or close changes
  if (!isOpen) return null;
  return (
    <div  className='overlay8'>
        <div ref={popupRef} className={`Frame20  ${isOpen ? 'popup-enter' : ''}`}>
        <div className="TableHeader" >
          <div className="Datagridheader" >
            <div className="Container" >
              <div className="Typography">
                <div className="TypographyBody1">Customer Response</div>
              </div>
            </div>
            <div className="XnixLineCross">
              <img className="Vector47" />
            </div>
          </div>
        </div>
        <div className="Frame16" >
          <div className="Row" >
            <div className="Datagridcell">
              <div className="Container2">
                <div className="LongText" >Hi John Deo, Lorem ipsum dolor sit amet consectetur. Tortor mus rutrum sed dui malesuada risus tempor. Elit auctor eget libero et lacinia elit purus elit. Tellus egestas quam massa ac aliquam lorem. <br/>Material Cost: 120 $<br/>Lead time: 2 Days<br/>Freight Cost: 100$     Total cost: 220$<br/><br/>Scelerisque dignissim porta libero eu auctor aliquam donec duis rhoncus. Nunc duis mattis sed dui rhoncus. Sed interdum dolor lacus a enim vel interdum odio. Lobortis eu enim viverra gravida nec in sagittis justo.<br/><br/>Thanks & Regards,  ABC</div>
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
    </div>
    );
};
export default CustomerResponsePopup
