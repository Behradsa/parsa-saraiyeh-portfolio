import styles from "./MainGrid.module.css";
import React from "react";
import { Link } from "react-router-dom";
import dribble_logo_img from "../assets/logos/dribbble-logo.svg";
import dribble_logo_hover_img from "../assets/logos/dribbble-logo:hover.svg";
import linkedin_logo_img from "../assets/logos/linkedin-logo.svg";
import linkedin_logo_hover_img from "../assets/logos/linkedin-logo:hover.svg";
import behance_logo_img from "../assets/logos/behance-logo.svg";
import behance_logo_hover_img from "../assets/logos/behance-logo:hover.svg";
import parsa_portfolio_img from "../assets/HomePage/parsa-portfolio-picture.png";
import link_icon_img from "../assets/logos/arrow-link-icon.svg";

function MainGrid() {
  return (
    <div className={styles["main-page"]}>
      <div className={styles["introduction-container"]}>
        <div className={styles["introduction-square"]}>
          <div className={styles["text-holder"]}>
            <h1>
              Hello, I’m Parsa,
              <br /> a Visual & Product Designer.
            </h1>
            <p>
              I care a lot about using design for positive impact. and enjoy
              creating user-centric, delightful, and human experiences.
            </p>
          </div>

          <div className={styles["introduction-buttons-container"]}>
            <a className={`${styles["button"]} ${styles["type--A"]}`}>
              <div className={styles["button__line"]} />
              <div className={styles["button__line"]} />
              <span className={styles["button__text"]}>Contact Me</span>
              <div className={styles["button__drow1"]} />
              <div className={styles["button__drow2"]} />
            </a>
            <a className={styles["contact-me-button"]}>Contact Me</a>
            <div className={styles["logo-button-container"]}>
              <a href="" className={styles["logo-button"]}>
                <img src={dribble_logo_img} alt="dribble" />
                <img src={dribble_logo_hover_img} alt="dribble" />
              </a>
              <a
                href="https://www.linkedin.com/in/parsa-saraiyeh/"
                className={styles["logo-button"]}
              >
                <img src={linkedin_logo_img} alt="linkedin" />
                <img src={linkedin_logo_hover_img} alt="linkedin" />
              </a>
              <a href="" className={styles["logo-button"]}>
                <img src={behance_logo_img} alt="behance" />
                <img src={behance_logo_hover_img} alt="behance" />
              </a>
            </div>
          </div>
        </div>
        <img src={parsa_portfolio_img} alt="parsa-picture" />
      </div>
      <section id="projects" className={styles["projects-grid"]}>
        <div className={`${styles["project"]} ${styles["hich"]}`}>
          <img src={link_icon_img} alt="link" />
          <h3>Hich</h3>
          <h4>Product Designer</h4>
        </div>
        <div className={`${styles["project"]} ${styles["nikandish"]}`}>
          <img src={link_icon_img} alt="link" />
          <h3>NikAndish</h3>
          <h4>
            Visual Designer <br /> Brand identity owner
          </h4>
          <div>Design System Case Study</div>
        </div>
        <Link
          to="/nebulox"
          className={`${styles["project"]} ${styles["nebulox"]}`}
        >
          <img src={link_icon_img} alt="link" />
          <h3>Nebulox</h3>
          <h4>Visual Designer</h4>
          <div>Case Study</div>
        </Link>
        <Link to="/snapp" className={`${styles["project"]} ${styles["snapp"]}`}>
          <img src={link_icon_img} alt="link" />
          <h3>Snapp Tripp</h3>
          <h4>Graphic Designer</h4>
        </Link>

        <Link
          to="/carriot"
          className={`${styles["project"]} ${styles["carriot"]}`}
        >
          <img src={link_icon_img} alt="link" />
          <h3>Carriot</h3>
          <h4>
            Graphic Designer <br />
            Ui Designer
          </h4>
        </Link>

        <Link to="/omid" className={`${styles["project"]} ${styles["omid"]}`}>
          <img src={link_icon_img} alt="link" />
          <h3>Omid Analyzer</h3>
          <h4>Graphic Designer</h4>
        </Link>
        <Link
          to="/homano"
          className={`${styles["project"]} ${styles["homano"]}`}
        >
          <img src={link_icon_img} alt="link" />
          <h3>Homano / Mano</h3>
          <h4>
            Graphic Designer <br />
            Ui Designer
          </h4>
        </Link>
      </section>

      <div
        id="contact_me_home_page"
        className={`${styles["introduction-square"]} ${styles["contact-me"]}`}
      >
        <div className={styles["text-holder"]}>
          <h1>Want to work together?</h1>
          <p>
            Feel free to reach out for collaborations or just a friendly hello
            :)
          </p>
          <div>
            <b>Mail:</b> Parsa.sa1999@gmail.com <br />
            <b>Phone:</b> + 98 912 043 6793
          </div>
        </div>

        <div className={styles["introduction-buttons-container"]}>
          <a href="" className={`${styles["button"]} ${styles["type--A"]}`}>
            <div className={styles["button__line"]} />
            <div className={styles["button__line"]} />
            <span className={styles["button__text"]}>Contact Me</span>
            <div className={styles["button__drow1"]} />
            <div className={styles["button__drow2"]} />
          </a>
          <a className={styles["contact-me-button"]}>Contact Me</a>
          <div className={styles["logo-button-container"]}>
            <a href="" className={styles["logo-button"]}>
              <img src={dribble_logo_img} alt="dribble" />
              <img src={dribble_logo_hover_img} alt="dribble" />
            </a>
            <a
              href="https://www.linkedin.com/in/parsa-saraiyeh/"
              className={styles["logo-button"]}
            >
              <img src={linkedin_logo_img} alt="linkedin" />
              <img src={linkedin_logo_hover_img} alt="linkedin" />
            </a>
            <a href="" className={styles["logo-button"]}>
              <img src={behance_logo_img} alt="behance" />
              <img src={behance_logo_hover_img} alt="behance" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainGrid;
