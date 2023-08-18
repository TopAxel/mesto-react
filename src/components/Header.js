import React from 'react';
import logo from '../image/logo/Vector.svg'
// компанент Header (шапка)
function Header() {

  // разметка
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип mesto Russia" />
    </header>
  )
}

export default Header;