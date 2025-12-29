import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.css";
import HamburgerMenu from "./HamburgerMenu";
import parsa_logo_img from "../assets/logos/parsa-logo.svg";
function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation();
  const isNebulox = location.pathname === "/nebulox";
  const isNikandish = location.pathname === "/nikandish";

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
      className={` ${isNebulox ? "nebulox-set-text-color" : ""} ${
        isNebulox ? "nebulox-set-bg-color" : ""
      } ${isNikandish ? "nikandish-set-text-color" : ""} ${
        isNikandish ? "nikandish-set-bg-color" : ""
      } `}
    >
      <div>
        <div className="logo-container">
          <img src={parsa_logo_img} alt="logo" />
          <div>PARSA</div>
        </div>
        {location.pathname === "/" ? (
          <div className="header-buttons-container">
            <AnchorLink href="#top" className="hover-underline-animation">
              Home
            </AnchorLink>

            <AnchorLink href="#projects" className="hover-underline-animation">
              Projects
            </AnchorLink>

            <AnchorLink
              href="#contact_me_home_page"
              className="hover-underline-animation"
            >
              Contact
            </AnchorLink>

            <a
              id="cv-button"
              href={`${import.meta.env.BASE_URL}Parsa_Saraiyeh_cv_Dec2025.pdf`}
              target="_blank"
            >
              My CV
            </a>
          </div>
        ) : (
          <div className="header-buttons-container">
            <Link
              to="/"
              className={`hover-underline-animation ${
                isNebulox ? "nebulox-set-bar-color" : ""
              } ${isNikandish ? "nikandish-set-bar-color" : ""}`}
            >
              Home
            </Link>

            <Link
              to="/#projects"
              className={`hover-underline-animation ${
                isNebulox ? "nebulox-set-bar-color" : ""
              } ${isNikandish ? "nikandish-set-bar-color" : ""}`}
            >
              Projects
            </Link>

            <Link
              to="/#contact_me_home_page"
              className={`hover-underline-animation ${
                isNebulox ? "nebulox-set-bar-color" : ""
              } ${isNikandish ? "nikandish-set-bar-color" : ""}`}
            >
              Contact
            </Link>

            <a
              id="cv-button"
              href="/Parsa_Saraiyeh_cv_Dec2025.pdf"
              target="_blank"
              className={` ${
                isNebulox ? "nebulox-set-text-secondary-color" : ""
              } ${isNebulox ? "nebulox-set-bg-secondary-color" : ""} ${
                isNikandish ? "nikandish-set-bg-secondary-color" : ""
              } ${isNikandish ? "nikandish-set-text-secondary-color" : ""}`}
            >
              My CV
            </a>
          </div>
        )}

        <AnchorLink
          href="#top"
          className={`ham-button ${hamburgerOpen ? "ham-change" : ""}`}
          onClick={toggleHamburger}
        >
          <div
            className={`bar1 ${isNebulox ? "nebulox-set-bar-color" : ""} ${
              isNikandish ? "nikandish-set-bar-color" : ""
            }`}
          ></div>
          <div
            className={`bar2 ${isNebulox ? "nebulox-set-bar-color" : ""} ${
              isNikandish ? "nikandish-set-bar-color" : ""
            } `}
          ></div>
          <div
            className={`bar3 ${isNebulox ? "nebulox-set-bar-color" : ""} ${
              isNikandish ? "nikandish-set-bar-color" : ""
            } `}
          ></div>
        </AnchorLink>

        <HamburgerMenu isOpen={hamburgerOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
}

export default Header;
