import React from "react";
import styles from "./NebuloxPage.module.css";
import Header from "../components/Header";
import scrollToHash from "../functions/scrollToHash";

function HomePage() {
  scrollToHash();

  return (
    <div className={styles["page"]}>
      <div className={styles["header-container"]}>
        <Header />
      </div>
    </div>
  );
}

export default HomePage;
