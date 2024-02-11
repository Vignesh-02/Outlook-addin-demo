import React from 'react';
import '.styles/Customer.css'; // Import the CSS file
import pencil from "../../../public/Pencil.png"
import CustomerResponsePopup from './CustomerResponsePopup';

const Customer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };

  return (
    <div className="frame20">
      <div className="tableHeader">
        <div className="datagridheader">
          <div className="container">
            <div className="typography">
              <div className="typographyBody1">Customer</div>
            </div>
          </div>
          <div className="xnixLinePencil">
            <img className="vector10" onClick={togglePopup} src={pencil} alt="pencil" />
            <CustomerResponsePopup isOpen={isPopupOpen} close={togglePopup} />
          </div>
        </div>
      </div>
      <div className="frame16">
        <div className="row">
          <div className="datagridcell">
            <div className="container">
              <div className="hiJohnDeoLoremIpsum">Hi John Deo,  Lorem ipsum dolor sit amet consectetur. Tortor mus rutrum sed dui malesuada risus tempor. Elit auctor eget libero et lacinia elit purus elit. Tellus egestas quam massa ac aliquam lorem. <br/>Material Cost: 120 $<br/>Lead time: 2 Days<br/>Freight Cost: 100 $  Total cost: 220$<br/><br/>Scelerisque dignissim porta libero eu auctor aliquam donec duis rhoncus. Nunc duis mattis sed dui rhoncus. Sed interdum dolor lacus a enim vel interdum odio. Lobortis eu enim viverra gravida nec in sagittis justo.<br/><br/>Thanks & Regards, ABC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
