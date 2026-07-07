import React, { useState } from "react";

import Logo from "../header/Logo";
import Menu from "../header/Menu";
import Sns from "../header/Sns";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header id="header" role="banner" className={isMenuActive ? "active" : ""}>
      <button
        className="header__hamburger"
        onClick={toggleMenu}
        aria-label="메뉴 열기"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Logo />
      <Menu />
      <Sns />
    </header>
  );
};

export default Header;
