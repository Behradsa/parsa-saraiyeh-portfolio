import React from "react";
import Header from "../components/Header";
import scrollToHash from "../functions/scrollToHash";
import "./HomePage.css";
import "../components/MainGrid";
import MainGrid from "../components/MainGrid";

function HomePage() {
  scrollToHash();
  return (
    <div
      style={{
        width: "100%",
        padding: "16px",
        paddingTop: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="home-page-container">
        <Header />
        <MainGrid />
      </div>
    </div>
  );
}

export default HomePage;
