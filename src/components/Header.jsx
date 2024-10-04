import React from "react";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="/src/assets/parsa-logo.svg" alt="logo" />
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
