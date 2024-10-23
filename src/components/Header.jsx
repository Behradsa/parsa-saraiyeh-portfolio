import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.css";
import HamburgerMenu from "./HamburgerMenu";
import parsa_logo_img from "../assets/logos/parsa-logo.svg";
function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hamburgerOpen]);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const closeMenu = () => {
    setHamburgerOpen(false);
  };
  return (
    <header id="top">
      <div className="logo-container">
        <img src={parsa_logo_img} alt="logo" />
        <div>PARSA</div>
      </div>
      <div className="header-buttons-container">
        <AnchorLink href="#top" className="hover-underline-animation">
          Home
        </AnchorLink>

        <AnchorLink className="hover-underline-animation">CV</AnchorLink>
        <AnchorLink href="#projects" className="hover-underline-animation">
          Projects
        </AnchorLink>
        <AnchorLink
          href="#contact_me_home_page"
          className="hover-underline-animation"
        >
          Contact
        </AnchorLink>
      </div>
      <AnchorLink
        href="#top"
        className={`ham-button ${hamburgerOpen ? "ham-change" : ""}`}
        onClick={toggleHamburger}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </AnchorLink>
      <HamburgerMenu isOpen={hamburgerOpen} closeMenu={closeMenu} />
    </header>
  );
}

export default Header;
