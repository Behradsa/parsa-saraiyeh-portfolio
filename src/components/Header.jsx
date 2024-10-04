import React from "react";
import "./Header.css";
import parsa_logo_img from "../assets/parsa-logo.svg";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={parsa_logo_img} alt="logo" />
        <div>PARSA</div>
      </div>
      <div className="header-buttons-container">
        <button className="hover-underline-animation">Home</button>
        <button className="hover-underline-animation">CV</button>
        <button className="hover-underline-animation">Projects</button>
        <button className="hover-underline-animation">Contact</button>
      </div>
    </header>
  );
}

export default Header;
