import React from 'react';

function Header({...props}) {
  return (
    <div className="header">
      <div className="header__logo">
        <img 
          src="/couple_code_therapy_logo_250.png"
          alt="Couple code therapy logo"
        />
      </div>
      <div className='header__hosts'>
        <div className="header__host">
          <img src="/khaled.jpg" alt="Khaled Garbaya profile picture" className="avatar" />
          <h3>Khaled Garbaya</h3>
          <a target="_blank" 
            href="https://twitter.com/khaled_garbaya" 
            className="person__social person__social--twitter">@khaled_garbaya</a>
          <p>Software engineer and a <a target="_blank" href="https://khaledgarbaya.net/courses">web development instructor</a></p>
        </div>
        <div className="header__host">
          <img src="/amal.jpg" alt="Amal Nasri profile picture" className="avatar" />
          <h3>Amal Nasri</h3>
          <a target="_blank" 
            href="https://twitter.com/amalnasri" 
            className="person__social person__social--twitter">@amalnasri</a>
          <p>Electronic engineer and a <a target="_blank" href="https://chocolate-free.com">foodblogger</a></p>
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
