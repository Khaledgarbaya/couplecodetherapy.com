import React from 'react';

function Header({...props}) {
  return (
    <div className="header">
      <h1 className="header__logo">Couple <br /> code <br/> therapy</h1>
      <div className="header__host">
        <h2 className="">Khaled Garbaya</h2>
      </div> 
      <div className="header__host">
        <h2 className="">Amal Nasri</h2>
      </div> 
    </div>
  );
}

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
