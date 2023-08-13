import React from 'react';
import logo from '../image/logo/Vector.svg'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип mesto Russia" />
    </header>
  )
}

export default Header;