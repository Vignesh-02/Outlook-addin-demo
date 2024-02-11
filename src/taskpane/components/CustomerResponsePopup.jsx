import React, {useRef, useEffect} from 'react';
import './styles/CustomerResponsePopup.css'; // Import the CSS file
import cross from "../../../public/Cross.png"


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
            document.addEventListener('mousedown', handleOutsideClick);
        }

        // Cleanup the event listener when the component unmounts or the popup closes
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, close]); // Dependencies array ensures effect runs only if isOpen or close changes


    if (!isOpen) 
        return null;

  return (
    <div ref={popupRef} className={`frame20 popup-overlay ${isOpen ? 'popup-enter' : ''}`}>
    <div className="tableHeader">
      <div className="datagridheader">
        <div className="container">
          <div className="typography">
            <div className="typographyBody1">Customer Response</div>
          </div>
        </div>
        <div className="xnixLineCross">
          <img className="vector47" src={cross} alt="icon" />
        </div>
      </div>
    </div>
    <div className="frame16">
      <div className="row">
        <div className="datagridcell">
          <div className="container">
            <div className="hiJohnDeoLoremIpsumDolorSitAmet">Hi John Deo,  Lorem ipsum dolor sit amet consectetur. Tortor mus rutrum sed dui malesuada risus tempor. Elit auctor eget libero et lacinia elit purus elit. Tellus egestas quam massa ac aliquam lorem. <br/>Material Cost: 120 $<br/>Lead time: 2 Days<br/>Freight Cost: 100 $  Total cost: 220$<br/><br/>Scelerisque dignissim porta libero eu auctor aliquam donec duis rhoncus. Nunc duis mattis sed dui rhoncus. Sed interdum dolor lacus a enim vel interdum odio. Lobortis eu enim viverra gravida nec in sagittis justo.<br/><br/>Thanks & Regards, ABC</div>
          </div>
        </div>
      </div>
      <div className="frame17">
        <div className="button regenerate">Regenerate</div>
        <div className="button save">Save</div>
      </div>
    </div>
  </div>
    );
};

export default CustomerResponsePopup;