//Hold the header, logo, container for links
import React from 'react';

import NavBar from './navBar';
import logo from '../pics/general/logo-grey.png';
import './Header.css';

const Header = () => {
  return (
    <div className="the-top-head">
      <a id="logo" href="/">
        <img id="logo-pic" src={logo} alt="logo" />
      </a>
      <NavBar />
    </div>
  );
};

export default Header;
