/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

const SubscribeModal = ({ screens, currentScreen, children,setLoggedIn }) => (
  <div className="modal fade" id="modal" tabIndex="-1" role="dialog">
    <div
      className={`modal-dialog ${isMobile ? '' : 'modal-dialog-centered'}`}
      style={{ minHeight: '100vh' }}
      role="document">
      <div className="modal-content" style={{ minHeight: isMobile ? '100vh' : '' }}>
        <span
          type="button"
          className="close d-block w-100 text-end pe-3"
          data-dismiss="modal"
          aria-label="Close"
          >
          <button type='button' onClick={(e)=>{e.preventDefault();setLoggedIn(true)}} style={{border:"none",background:"#191919"}}>
                <img  alt="Close" src="/assets/images/close.svg" className="p-2" />
          </button>
        </span>
        <div className="modal-body">{children[screens.indexOf(currentScreen)]} </div>
      </div>
    </div>
  </div>
);

SubscribeModal.propTypes = {
  children: PropTypes.array.isRequired,
  currentScreen: PropTypes.string.isRequired,
  screens: PropTypes.array.isRequired,
  setLoggedIn:PropTypes.func.isRequired
};

export default SubscribeModal;
