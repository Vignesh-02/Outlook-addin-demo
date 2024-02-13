import React, {useState} from 'react';
import "./styles/Customer.css"; // Import the CSS file
import pencil from "../../../public/Pencil.png"
import CustomerResponsePopup from './CustomerResponsePopup';

const Customer = () => {
    const [isPopupOpen1, setIsPopupOpen1] = useState(false);
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const [isPopupOpen3, setIsPopupOpen3] = useState(false);
    const [isPopupOpen4, setIsPopupOpen4] = useState(false);
    const [isRegenerateVendorPopup, setIsRegenerateVendorPopup] = useState(false);

    const togglePopup1 = () => {
             setIsPopupOpen1(!isPopupOpen1);
    };

    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2);
};

const togglePopup3 = () => {
    setIsPopupOpen3(!isPopupOpen3);
};

const togglePopup4 = () => {
    setIsPopupOpen4(!isPopupOpen4);
};

const toggleRegnerateVendorPopup = () => {
    setIsPopupOpen4(!isPopupOpen4);
};

const regenrateVendorPopup = () => {

}

    const isAnyPopupOpen = () => { 
       return isPopupOpen1 || isPopupOpen2 || isPopupOpen3 || isPopupOpen4;
    }

    const 

  return (
    <div className={`${isAnyPopupOpen() ? 'backdrop' : ''}`}>
    <div className="frame20">
      <div className="tableHeader">
        <div className="datagridheader">
          <div className="container">
            <div className="typography">
              <div className="typographyBody1">Customer</div>
            </div>
          </div>
          <div className="xnixLinePencil">
            <img className="vector10" onClick={togglePopup1} src={pencil} alt="pencil" />
            <CustomerResponsePopup isOpen={isPopupOpen1} close={togglePopup1} />
          </div>
        </div>
      </div>
      <div className="frame16">
        <div className="row">
          <div className="datagridcell">
            <div className="container">
              <div className="hiJohnDeoLoremIpsum">Hello John Deo,  Lorem ipsum dolor sit amet consectetur. Tortor mus rutrum sed dui malesuada risus tempor. Elit auctor eget libero et lacinia elit purus elit. Tellus egestas quam massa ac aliquam lorem. <br/>Material Cost: 120 $<br/>Lead time: 2 Days<br/>Freight Cost: 100 $  Total cost: 220$<br/><br/>Scelerisque dignissim porta libero eu auctor aliquam donec duis rhoncus. Nunc duis mattis sed dui rhoncus. Sed interdum dolor lacus a enim vel interdum odio. Lobortis eu enim viverra gravida nec in sagittis justo.<br/><br/>Thanks & Regards, ABC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Customer;
