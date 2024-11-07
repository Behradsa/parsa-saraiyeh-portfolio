import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.css";
import HamburgerMenu from "./HamburgerMenu";
import parsa_logo_img from "../assets/logos/parsa-logo.svg";

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation();
  const isNebulox = location.pathname === "/nebulox";

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
    <header
      id="top"
      className={` ${isNebulox ? "nebulox-set-text-color" : ""}`}
    >
      <div className="logo-container">
        <img src={parsa_logo_img} alt="logo" />
        <div>PARSA</div>
      </div>
      {location.pathname === "/" ? (
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
      ) : (
        <div className="header-buttons-container">
          <Link
            to="/"
            className={`hover-underline-animation ${
              isNebulox ? "nebulox-set-bar-color" : ""
            }`}
          >
            Home
          </Link>

          <Link
            className={`hover-underline-animation ${
              isNebulox ? "nebulox-set-bar-color" : ""
            }`}
          >
            CV
          </Link>

          <Link
            to="/#projects"
            className={`hover-underline-animation ${
              isNebulox ? "nebulox-set-bar-color" : ""
            }`}
          >
            Projects
          </Link>

          <Link
            to="/#contact_me_home_page"
            className={`hover-underline-animation ${
              isNebulox ? "nebulox-set-bar-color" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      )}

      <AnchorLink
        href="#top"
        className={`ham-button ${hamburgerOpen ? "ham-change" : ""}`}
        onClick={toggleHamburger}
      >
        <div className={`bar1 ${true ? "nebulox-set-bar-color" : ""}`}></div>
        <div className={`bar2 ${true ? "nebulox-set-bar-color" : ""} `}></div>
        <div className={`bar3 ${true ? "nebulox-set-bar-color" : ""} `}></div>
      </AnchorLink>

      <HamburgerMenu isOpen={hamburgerOpen} closeMenu={closeMenu} />
    </header>
  );
}

export default Header;
