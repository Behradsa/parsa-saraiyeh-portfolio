import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.css";
import parsa_logo_img from "../assets/logos/parsa-logo.svg";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={parsa_logo_img} alt="logo" />
        <div>PARSA</div>
      </div>
      <div className="header-buttons-container">
        <AnchorLink href="/" className="hover-underline-animation">
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
    </header>
  );
}

export default Header;
