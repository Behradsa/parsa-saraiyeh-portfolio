import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import scrollToHash from "../functions/scrollToHash";
import styles from "./Nikandish.module.css";
export default function NickandishPage() {
  scrollToHash();

  return (
    <div className={styles["page"]}>
      <div className={styles["header-container"]}>
        <Header />
      </div>
    </div>
  );
}
