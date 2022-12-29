import React from 'react';
import PropTypes from 'prop-types';
import { links } from '../../../../utils/constants';
import { SectionContainer } from '../Layout';
import DropDown from '../../../../components/DropDown/DropDown';

const Header = ({loggedIn,currentScreen,setLoggedIn}) => (
  <>
    <SectionContainer className="bg-dark">
      <div className="wl-header py-4">
        <a href={links.sntnl} target="_blank" rel="noreferrer">
          <img
            src="/assets/images/logo.png"
            className="img-fluid"
            alt="VETCOIN"
            style={{ maxWidth: 220 }}
          />
        </a>
        <div>
        {
          (currentScreen==="succcess" && loggedIn) ? <DropDown  setLoggedIn={setLoggedIn}/>:
          <button
            className="btn btn-responsive"
            type="button"
            data-toggle="modal"
            data-target="#modal">
            Join waitlist
          </button>
        }
          
        </div>
      </div>
    </SectionContainer>
    <div className="wl-header-hr" />
  </>
);


Header.propTypes = {
  loggedIn:PropTypes.bool.isRequired,
  currentScreen:PropTypes.string.isRequired,
  setLoggedIn:PropTypes.func.isRequired
};

export default Header;
