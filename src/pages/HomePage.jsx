import React from "react";
import Header from "../components/Header";
import "./HomePage.css";
import "../components/MainGrid";
import MainGrid from "../components/MainGrid";
function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <MainGrid />
    </div>
  );
}

export default HomePage;
