import React from 'react'
import { Link } from 'gatsby'
import Player from '../components/player.js'

function Nav({...props}) {
  return (
    <nav className="main-nav">
      <Player show={{number: 1}} />
      <ul className="main-nav__list">
        <li className="main-nav__item"><Link to={'/'}>Home</Link></li>
        <li className="main-nav__item"><Link to={'/contact'}>Contact</Link></li>
        <li className="main-nav__item"><Link to={'/about'}>About us</Link></li>
      </ul>
    </nav>
  );
}

Nav.defaultProps = {};

Nav.propTypes = {};

export default Nav;
