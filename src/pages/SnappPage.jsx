import React from "react";
import { Helmet } from "react-helmet";
import styles from "./SnappPage.module.css";
import Header from "../components/Header";
import intro_img from "../assets/Snapp/intro.png";
import visuals_img from "../assets/Snapp/visuals.png";
import ill_main_img from "../assets/Snapp/ill-main.png";
import social_img_1 from "../assets/Snapp/social-img-1.png";
import social_img_2 from "../assets/Snapp/social-img-2.png";
import social_img_3 from "../assets/Snapp/social-img-3.png";
import social_img_4 from "../assets/Snapp/social-img-4.png";
import social_img_5 from "../assets/Snapp/social-img-5.png";
import social_img_6 from "../assets/Snapp/social-img-6.png";
import hr_img_1 from "../assets/Snapp/hr-1.png";
import hr_img_2 from "../assets/Snapp/hr-2.png";
import hr_img_3 from "../assets/Snapp/hr-3.png";
import ill_img_1 from "../assets/Snapp/ill-1.png";
import ill_img_2 from "../assets/Snapp/ill-2.png";
import ill_img_3 from "../assets/Snapp/ill-3.png";
import layout_img_1 from "../assets/Snapp/layout-1.png";
import layout_img_2 from "../assets/Snapp/layout-2.png";

function SnappPage() {
  return (
    <div className={styles["page"]}>
      <Helmet>
        <title>Parsa Saraiyeh | SnappTrip</title>
        <meta
          name="description"
          content="Snapptrip is a full service online travel booking platform. We work hard to make travel accessible, affordable and a great experience for all."
        />
        <meta property="og:title" content="Parsa Saraiyeh | SnappTrip" />
        <meta
          property="og:description"
          content="Snapptrip is a full service online travel booking platform. We work hard to make travel accessible, affordable and a great experience for all."
        />
        <meta
          property="og:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
        <meta name="twitter:title" content="Parsa Saraiyeh | SnappTrip" />
        <meta
          name="twitter:description"
          content="Snapptrip is a full service online travel booking platform. We work hard to make travel accessible, affordable and a great experience for all."
        />
        <meta
          name="twitter:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
      </Helmet>
      <div className={styles["header-container"]}>
        <Header />
      </div>
      <img
        src={intro_img}
        alt="intro-main-img"
        className={`${styles["main-img"]} ${styles["intro-main-img"]}`}
      />
      <div className={styles["about-snapp"]}>
        <h3>Overview</h3>
        <p>
          Snapptrip is a full service online travel booking platform. We work
          hard to make travel accessible, affordable and a great experience for
          all. <br /> Snapptrip began its activity in domestic hotel booking and
          soon expanded its services to domestic / international flight, train,
          bus and international hotel booking. We are the fastest growing travel
          company and leading OTA in Iran, and a member of the Snapp Group
          family, the biggest tech company in the Middle East. We take pride in
          our technology driven mindset, and products to create seamless travel
          experience for our customers.
        </p>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Campaigns Visuals</h1>
      </div>
      <img
        src={visuals_img}
        alt="visuals-main-img"
        className={`${styles["main-img"]} ${styles["visuals-main-img"]}`}
      />
      <div className={styles["title-text-holder"]}>
        <h1>Social Media</h1>
        <p>Instagram</p>
      </div>
      <div className={styles["social-media-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={social_img_1} alt="img_1" />
            <label>Best Souvenir from Istanbul :) Mixed montage</label>
          </div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={social_img_2} alt="img_2" />
            <label>
              “LuckyTrip” Campaign: A Game which you could earn discount from
              the company Visualized by me :)
            </label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={social_img_3} alt="img_3" />
          </div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={social_img_4} alt="img_4" />
          </div>
        </div>
        <label>
          Two Different Montage styles which we were struggling to choose the
          final style to changing brand-book mood-board. Changed from 3D
          montages to real photo montages
        </label>
        <div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={social_img_5} alt="img_5" />
          </div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={social_img_6} alt="img_6" />
          </div>
        </div>
        <label>More realistic static montage designs</label>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Hr Branding</h1>
      </div>
      <div className={styles["hr-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={hr_img_1} alt="img_1" />
            <label>Task management Apps</label>
          </div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={hr_img_2} alt="img_2" />
            <label>Hiring interview Tips</label>
          </div>
        </div>
        <div className={`${styles["img_with_label"]} `}>
          <img src={hr_img_3} alt="img_3" />
          <label>Hiring Post</label>
        </div>
      </div>

      <div className={styles["title-text-holder"]}>
        <h1>Illustration</h1>
      </div>
      <img
        src={ill_main_img}
        alt="visuals-main-img"
        className={`${styles["main-img"]} ${styles["visuals-main-img"]}`}
      />
      <div className={styles["illustration-grid"]}>
        <div className={styles["text-holder"]}>
          <h3>Illustration styles defined in two categories;</h3>
          <p>
            1. Cities <br />
            2. Main Theme of Illustrations according to Snapp guide-line
          </p>
        </div>
        <img src={ill_img_1} alt="img-1" />
        <div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={ill_img_2} alt="img_2" />
          </div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={ill_img_3} alt="img_3" />
          </div>
        </div>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Website Banners Layout</h1>
      </div>
      <div className={styles["hr-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={layout_img_1} alt="img_1" />
          </div>
          <div className={`${styles["img_with_label"]} `}>
            <img src={layout_img_2} alt="img_2" />
          </div>
        </div>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>SnappTrip Website</h1>
        <p>Different variations of the assets placed in the link below;</p>
        <div>
          <a href="https://www.snapptrip.com/">SnappTrip.com</a>
          <a href="https://carriot.ir/">Carriot.ir</a>
        </div>
      </div>
    </div>
  );
}

export default SnappPage;
