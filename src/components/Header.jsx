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
        <button>Home</button>
        <button>CV</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </header>
  );
}

export default Header;
