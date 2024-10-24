import React from "react";
import styles from "./CarriotPage.module.css";
import Header from "../components/Header";
import carriot_intro from "../assets/Carriot/carriot-intro.png";
function CarriotPage() {
  return (
    <div className={styles["page"]}>
      <div className={styles["header-container"]}>
        <Header />
      </div>
      <img
        src={carriot_intro}
        alt="Carriot"
        className={styles["carriot-intro"]}
      />
    </div>
  );
}

export default CarriotPage;
