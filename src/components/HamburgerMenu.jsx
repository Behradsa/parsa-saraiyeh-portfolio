import React from "react";
import styles from "./HamburgerMenu.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";

function HamburgerMenu({ isOpen, closeMenu }) {
  const location = useLocation();
  const isNebulox = location.pathname === "/nebulox";
  const isNikandish = location.pathname === "/nikandish";
  return (
    <div
      className={`${styles["hamburger-menu"]} ${isOpen ? styles.show : ""} ${
        isNebulox
          ? `${styles["nebulox-set-bg-color"]} ${styles["nebulox-set-text-color"]}`
          : ""
      } ${isNikandish ? `${styles["nikandish-set-bg-color"]}` : ""}`}
    >
      {location.pathname === "/" ? (
        <div>
          <AnchorLink onClick={closeMenu} href="#top">
            Home
          </AnchorLink>

          <AnchorLink onClick={closeMenu} href="#projects">
            Projects
          </AnchorLink>

          <AnchorLink onClick={closeMenu} href="#contact_me_home_page">
            Contact
          </AnchorLink>

          <AnchorLink
            href="src/assets/Parsa_Saraiyeh_CV.pdf"
            target="_blank"
            onClick={closeMenu}
          >
            CV
          </AnchorLink>
        </div>
      ) : (
        <div>
          <Link onClick={closeMenu} to="/">
            Home
          </Link>

          <Link onClick={closeMenu} to="/#projects">
            Projects
          </Link>

          <Link onClick={closeMenu} to="/#contact_me_home_page">
            Contact
          </Link>

          <Link
            href="src/assets/Parsa_Saraiyeh_CV.pdf"
            target="_blank"
            onClick={closeMenu}
          >
            CV
          </Link>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
