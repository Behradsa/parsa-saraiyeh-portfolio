import React from "react";
import styles from "./HamburgerMenu.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

function HamburgerMenu({ isOpen, closeMenu }) {
  return (
    <div className={`${styles["hamburger-menu"]} ${isOpen ? styles.show : ""}`}>
      <div>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/#projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/#contact_me_home_page" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default HamburgerMenu;
