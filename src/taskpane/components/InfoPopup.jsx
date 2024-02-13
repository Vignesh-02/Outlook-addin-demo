import React from 'react';
import './styles/InfoPopup.css'; // Make sure the path to your CSS file is correct

const InfoPopup = ({ isOpen, close }) => {
  return (
    <div className="Frame64" style={{width: 289, height: 202, background: 'white', borderRadius: 6, overflow: 'hidden', border: '1px rgba(58, 53, 65, 0.12) solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div className="Frame24" style={{alignSelf: 'stretch', height: 30, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="TableHeader" style={{flex: '1 1 0', height: 30, paddingLeft: 2, paddingRight: 2, background: '#F9F9F9', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Datagridheader" style={{flex: '1 1 0', height: 22, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 2, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
          <div className="Container" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
            <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="TypographyBody1" style={{color: 'rgba(58, 53, 65, 0.87)', fontSize: 13, fontFamily: 'Orbitron', fontWeight: '500', letterSpacing: 0.13, wordWrap: 'break-word'}}>Name</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame16" style={{flex: '1 1 0', alignSelf: 'stretch', border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div className="Row" style={{alignSelf: 'stretch', flex: '1 1 0', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div className="Datagridcell" style={{flex: '1 1 0', height: 28, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
            <div className="Container" style={{flex: '1 1 0', paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="TypographyBody1" style={{color: '#080808', fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '100', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Christine Dong</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Frame25" style={{alignSelf: 'stretch', height: 30, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="TableHeader" style={{flex: '1 1 0', height: 30, paddingLeft: 2, paddingRight: 2, background: '#F9F9F9', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Datagridheader" style={{flex: '1 1 0', height: 22, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 2, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
          <div className="Container" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
            <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="TypographyBody1" style={{color: 'rgba(58, 53, 65, 0.87)', fontSize: 13, fontFamily: 'Orbitron', fontWeight: '600', letterSpacing: 0.13, wordWrap: 'break-word'}}>Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame16" style={{flex: '1 1 0', alignSelf: 'stretch', border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div className="Row" style={{alignSelf: 'stretch', flex: '1 1 0', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div className="Datagridcell" style={{flex: '1 1 0', height: 28, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
            <div className="Container" style={{flex: '1 1 0', paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="TypographyBody1" style={{color: '#080808', fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '100', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Chris.dong@tecan.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Frame28" style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="TableHeader" style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 2, paddingRight: 2, background: '#F9F9F9', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Datagridheader" style={{flex: '1 1 0', height: 22, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 2, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
          <div className="Container" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
            <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="TypographyBody1" style={{color: 'rgba(58, 53, 65, 0.87)', fontSize: 13, fontFamily: 'Orbitron', fontWeight: '600', letterSpacing: 0.13, wordWrap: 'break-word'}}>CC</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame16" style={{flex: '1 1 0', alignSelf: 'stretch', border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div className="Row" style={{alignSelf: 'stretch', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div className="Datagridcell" style={{flex: '1 1 0', height: 68, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
            <div className="Container" style={{flex: '1 1 0', paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="TypographyBody1" style={{color: '#080808', fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '100', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Chris.dong@tecan.com</div>
              </div>
              <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="TypographyBody1" style={{color: '#080808', fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '100', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Chris.dong@tecan.com</div>
              </div>
              <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="TypographyBody1" style={{color: '#080808', fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '100', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Chris.dong@tecan.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Frame27" style={{alignSelf: 'stretch', height: 30, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="TableHeader" style={{flex: '1 1 0', height: 30, paddingLeft: 2, paddingRight: 2, background: '#F9F9F9', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Datagridheader" style={{flex: '1 1 0', height: 22, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 2, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
          <div className="Container" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
            <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="TypographyBody1" style={{color: 'rgba(58, 53, 65, 0.87)', fontSize: 13, fontFamily: 'Orbitron', fontWeight: '600', letterSpacing: 0.13, wordWrap: 'break-word'}}>Company</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame16" style={{flex: '1 1 0', alignSelf: 'stretch', border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div className="Row" style={{alignSelf: 'stretch', flex: '1 1 0', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div className="Datagridcell" style={{flex: '1 1 0', height: 28, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
            <div className="Container" style={{flex: '1 1 0', paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="TypographyBody1" style={{color: '#080808', fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '100', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>T-DCPMI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Frame26" style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="TableHeader" style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 2, paddingRight: 2, background: '#F9F9F9', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div className="Datagridheader" style={{flex: '1 1 0', height: 22, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 2, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
          <div className="Container" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
            <div className="Typography" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="TypographyBody1" style={{color: 'rgba(58, 53, 65, 0.87)', fontSize: 13, fontFamily: 'Orbitron', fontWeight: '600', letterSpacing: 0.13, wordWrap: 'break-word'}}>Shipping_address</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame16" style={{flex: '1 1 0', border: '1px solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div className="Row" style={{alignSelf: 'stretch', border: '1px rgba(58, 53, 65, 0.12) solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div className="Datagridcell" style={{flex: '1 1 0', height: 48, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
            <div className="Container" style={{flex: '1 1 0', paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div className="Typography" style={{alignSelf: 'stretch', height: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div className="TypographyBody1" style={{alignSelf: 'stretch', color: '#080808', fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '100', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>885 Jarvis Dr., Morgan Hill, CA 95037, United States</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


export default InfoPopup;
