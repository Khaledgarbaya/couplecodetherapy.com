import React from 'react'
import { Link } from 'gatsby'
import EmbeddedPlayer from '../components/embedded-player'

function Nav({show}) {
  return (
    <nav className="main-nav">
      <EmbeddedPlayer show={{...show}} />
      <ul className="main-nav__list">
        <li className="main-nav__item"><Link to={'/'}>Home</Link></li>
        <li className="main-nav__item"><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
