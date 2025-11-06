import { Helmet } from "react-helmet";
import styles from "./OmidPage.module.css";
import Header from "../components/Header";
import hero_main_img from "../assets/Omid/hero-main.png";
import galaxy_main_img from "../assets/Omid/galaxy-main.png";
import website_main_img from "../assets/Omid/website-main.png";
import a_1_img from "../assets/Omid/a_1.png";
import a_2_img from "../assets/Omid/a_2.png";
import a_3_img from "../assets/Omid/a_3.png";
import a_4_img from "../assets/Omid/a_4.png";
import b_1_img from "../assets/Omid/b_1.png";
import b_2_img from "../assets/Omid/b_2.png";
import b_3_img from "../assets/Omid/b_3.png";
import b_4_img from "../assets/Omid/b_4.png";
import b_5_img from "../assets/Omid/b_5.png";
import b_6_img from "../assets/Omid/b_6.png";

function ManoPage() {
  return (
    <div className={styles["page"]}>
      <Helmet>
        <title>Parsa Saraiyeh | Omid Analyzer</title>
        <meta
          name="description"
          content="Omid Financial Group has introduced itself as a leading company in algorithmic trading and modern market-making services since 2015 in Iran Capital Market. Our focus has always been to provide smarter, faster, and safer financial solutions to manage clients'​ wealth efficiently. We have tried to engage talented and enthusiastic experts in our community as financial analysts, data scientists, developers, and marketing. Although we have been facing serious challenges, we could overcome them and make progress day by day. At this point, we announce proudly that our customers are growing increasingly."
        />
        <meta property="og:title" content="Parsa Saraiyeh | Omid Analyzer" />
        <meta
          property="og:description"
          content="Omid Financial Group has introduced itself as a leading company in algorithmic trading and modern market-making services since 2015 in Iran Capital Market. Our focus has always been to provide smarter, faster, and safer financial solutions to manage clients'​ wealth efficiently. We have tried to engage talented and enthusiastic experts in our community as financial analysts, data scientists, developers, and marketing. Although we have been facing serious challenges, we could overcome them and make progress day by day. At this point, we announce proudly that our customers are growing increasingly."
        />
        <meta
          property="og:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
        <meta name="twitter:title" content="Parsa Saraiyeh | Omid Analyzer" />
        <meta
          name="twitter:description"
          content="Omid Financial Group has introduced itself as a leading company in algorithmic trading and modern market-making services since 2015 in Iran Capital Market. Our focus has always been to provide smarter, faster, and safer financial solutions to manage clients'​ wealth efficiently. We have tried to engage talented and enthusiastic experts in our community as financial analysts, data scientists, developers, and marketing. Although we have been facing serious challenges, we could overcome them and make progress day by day. At this point, we announce proudly that our customers are growing increasingly."
        />
        <meta
          name="twitter:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
      </Helmet>
      <Header />
      <img
        src={hero_main_img}
        alt="Hero"
        className={`${styles["main-img"]} ${styles["intro-img"]}`}
      />
      <div className={styles["about"]}>
        <h3>Overview</h3>
        <p>
          Omid Financial Group has introduced itself as a leading company in
          algorithmic trading and modern market-making services since 2015 in
          Iran Capital Market. Our focus has always been to provide smarter,
          faster, and safer financial solutions to manage clients wealth
          efficiently. We have tried to engage talented and enthusiastic experts
          in our community as financial analysts, data scientists, developers,
          and marketing. Although we have been facing serious challenges, we
          could overcome them and make progress day by day. At this point, we
          announce proudly that our customers are growing increasingly.
        </p>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Omid.ir Website</h1>
      </div>
      <img
        src={galaxy_main_img}
        alt="GALAXY"
        className={`${styles["main-img"]}`}
      />
      <div className={styles["main-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["b_1"]}`}>
            <img src={a_1_img} alt="img_1" />
            <label>Omid Logo</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["b_2"]}`}>
            <img src={a_2_img} alt="img_2" />
            <label>OMID Analyzer Typo</label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["b_3"]}`}>
            <img src={a_3_img} alt="img_3" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["b_4"]}`}>
            <img src={a_4_img} alt="img_4" />
          </div>
        </div>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Omid Analyzer’s Website</h1>
      </div>
      <img
        src={website_main_img}
        alt="website_img"
        className={`${styles["main-img"]}`}
      />
      <div className={styles["title-text-holder"]}>
        <h1>Social Media Content Designs</h1>
      </div>

      <div className={styles["main-grid"]}>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["c_1"]}`}>
            <img src={b_1_img} alt="img_1" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["c_1"]}`}>
            <img src={b_2_img} alt="img_1" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["c_1"]}`}>
            <img src={b_3_img} alt="img_1" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["c_2"]}`}>
            <img src={b_4_img} alt="img_2" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["c_3"]}`}>
            <img src={b_5_img} alt="img_3" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["c_3"]}`}>
            <img src={b_6_img} alt="img_3" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
        </div>
      </div>

      <div className={styles["title-text-holder"]}>
        <h1>Omid Website</h1>
        <p>Different variations of the assets placed in the link below;</p>
        <a href="https://omid.ir/">Omid.ir</a>
      </div>
    </div>
  );
}

export default ManoPage;
