import React from "react";
import styles from "./ManoPage.module.css";
import Header from "../components/Header";
import intro_main_img from "../assets/Homano/intro_main.png";
import website_panel_main from "../assets/Homano/website_panel_main.png";
import panel_main_img from "../assets/Homano/panel_main.png";
import a_1_img from "../assets/Homano/a_1.png";
import a_2_img from "../assets/Homano/a_2.png";
import a_3_img from "../assets/Homano/a_3.png";
import a_4_img from "../assets/Homano/a_4.png";
import a_5_img from "../assets/Homano/a_5.png";
import b_1_img from "../assets/Homano/b_1.png";
import b_2_img from "../assets/Homano/b_2.png";
import b_3_img from "../assets/Homano/b_3.png";
import b_4_img from "../assets/Homano/b_4.png";
import c_1_img from "../assets/Homano/c_1.png";
import c_2_img from "../assets/Homano/c_2.png";
import c_3_img from "../assets/Homano/c_3.png";
import d_1_img from "../assets/Homano/d_1.png";
import d_2_img from "../assets/Homano/d_2.png";
import d_3_img from "../assets/Homano/d_3.png";
import d_4_img from "../assets/Homano/d_4.png";

function ManoPage() {
  return (
    <div className={styles["page"]}>
      <div className={styles["header-container"]}>
        <Header />
      </div>
      <img src={intro_main_img} alt="Homano" className={styles["main-img"]} />
      <div className={styles["about"]}>
        <h3>Overview</h3>
        <p>
          Homano is a transparent and safe platform to facilitate investment in
          real estate and provide capital for construction projects across the
          country.
        </p>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Designing BrandBook</h1>
      </div>
      <img
        src={website_panel_main}
        alt="website-panel"
        className={`${styles["main-img"]}`}
      />
      <div className={styles["main-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["a_1"]}`}>
            <img src={a_1_img} alt="img_1" />
            <label>Homano’s Logo</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["a_3"]}`}>
            <img src={a_3_img} alt="img_3" />
            <label>
              The illustration style went through several phases and mustiple
              Iterations
            </label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["a_5"]}`}>
            <img src={a_5_img} alt="img_5" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["a_2"]}`}>
            <img src={a_2_img} alt="img_2" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["a_4"]}`}>
            <img src={a_4_img} alt="img_4" />
            <label>Let’s have a go for more...</label>
          </div>
        </div>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Homano’s Desktop view</h1>
      </div>
      <div className={styles["main-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["b_1"]}`}>
            <img src={b_1_img} alt="img_1" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["b_2"]}`}>
            <img src={b_2_img} alt="img_2" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["b_3"]}`}>
            <img src={b_3_img} alt="img_3" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["b_4"]}`}>
            <img src={b_4_img} alt="img_4" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Panel view</h1>
      </div>
      <div className={styles["main-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["c_1"]}`}>
            <img src={c_1_img} alt="img_1" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["c_2"]}`}>
            <img src={c_2_img} alt="img_2" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["c_3"]}`}>
            <img src={c_3_img} alt="img_3" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
      </div>
      <img src={panel_main_img} alt="Homano" className={styles["main-img"]} />
      <div className={styles["title-text-holder"]}>
        <h1>Some UI Elements</h1>
      </div>
      <div className={styles["main-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["d_1"]}`}>
            <img src={d_1_img} alt="img_1" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["d_1"]}`}>
            <img src={d_2_img} alt="img_2" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["d_2"]}`}>
            <img src={d_3_img} alt="img_3" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["d_3"]}`}>
            <img src={d_4_img} alt="img_4" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManoPage;
