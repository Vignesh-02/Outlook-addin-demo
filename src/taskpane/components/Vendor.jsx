import React, {useState} from 'react'
import './styles/Vendor.css'; // Import the CSS file for styles
import pencil from "../../../../public/Pencil.png"
import VendorResponsePopup from './VendorResponsePopup';


const Vendor = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
             setIsPopupOpen(!isPopupOpen);
    };

  return (
    <div className="Frame19" style={{width: 289, height: 123, borderRadius: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div className="TableHeader" style={{alignSelf: 'stretch', background: '#F9F9F9', borderTopLeftRadius: 6, borderTopRightRadius: 6, border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div className="Datagridheader" style={{flex: '1 1 0', height: 24, paddingLeft: 11, paddingRight: 11, paddingTop: 3, paddingBottom: 3, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
        <div className="Container" style={{flex: '1 1 0', height: 13, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
          <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div className="TypographyBody1" style={{color: 'rgba(58, 53, 65, 0.87)', fontSize: 10, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 0.10, wordWrap: 'break-word'}}>Vendor</div>
          </div>
        </div>
        <div className="XnixLinePencil" style={{width: 18, height: 18, paddingTop: 3.75, paddingBottom: 3.77, paddingLeft: 4.50, paddingRight: 4.50, opacity: 0.70, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img className="Vector10" style={{width: 9, height: 10.48, border: '1px #080808 solid'}} onClick={togglePopup} src={pencil} />
          <VendorResponsePopup isOpen={isPopupOpen} close={togglePopup} />
        </div>
      </div>
    </div>
    <div className="Frame16" style={{alignSelf: 'stretch', height: 100, borderTopLeftRadius: 6, borderTopRightRadius: 6, overflow: 'hidden', border: '1px rgba(58, 53, 65, 0.12) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
      <div className="Row" style={{alignSelf: 'stretch', paddingTop: 6, paddingBottom: 6, borderLeft: '1px rgba(58, 53, 65, 0.12) solid', borderRight: '1px rgba(58, 53, 65, 0.12) solid', borderBottom: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div className="Datagridcell" style={{flex: '1 1 0', height: 88, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
          <div className="Container" style={{flex: '1 1 0', height: 88, paddingLeft: 8, paddingRight: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
            <div className="HiJohnDeoLoremIpsumDolorSitAmetConsecteturTortorMusRutrumSedDuiMalesuadaRisusTemporElitAuctorEgetLiberoEtLaciniaElitPurusElitTellusEgestasQuamMassaAcAliquamLoremMaterialCostAcriylicQuantity20ScelerisqueDignissimPortaLiberoEuAuctorAliquamDonecDuisRhoncusNuncDuisMattisSedDuiRhoncusSedInterdumDolorLacusAEnimVelInterdumOdioLobortisEuEnimViverraGravidaNecInSagittisJustoThanksRegardsAbc" style={{flex: '1 1 0', height: 88, color: '#080808', fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '100', lineHeight: 14, letterSpacing: 0.10, wordWrap: 'break-word'}}>Hi John Deo,            Lorem ipsum dolor sit amet consectetur. Tortor mus rutrum sed dui malesuada risus tempor. Elit auctor eget libero et lacinia elit purus elit. Tellus egestas quam massa ac aliquam lorem. <br/>Material Cost: Acriylic<br/>Quantity: 20<br/><br/>Scelerisque dignissim porta libero eu auctor aliquam donec duis rhoncus. Nunc duis mattis sed dui rhoncus. Sed interdum dolor lacus a enim vel interdum odio. Lobortis eu enim viverra gravida nec in sagittis justo.<br/><br/>Thanks & Regards,           ABC</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Vendor