import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderCenter from './HeaderCenter';
import HeaderBottom from './HeaderBottom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
