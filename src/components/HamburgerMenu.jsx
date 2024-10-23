import React from "react";
import styles from "./HamburgerMenu.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function HamburgerMenu({ isOpen, closeMenu }) {
  return (
    <div className={`${styles["hamburger-menu"]} ${isOpen ? styles.show : ""}`}>
      <div>
        <AnchorLink href="#top" onClick={closeMenu}>
          Home
        </AnchorLink>
        <AnchorLink href="#projects" onClick={closeMenu}>
          Projects
        </AnchorLink>
        <AnchorLink href="#contact_me_home_page" onClick={closeMenu}>
          Contact
        </AnchorLink>
      </div>
    </div>
  );
}

export default HamburgerMenu;
