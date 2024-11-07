import React from "react";
import { Helmet } from "react-helmet";
import styles from "./CarriotPage.module.css";
import Header from "../components/Header";
import carriot_intro from "../assets/Carriot/carriot-intro.png";
import brandbook_main from "../assets/Carriot/brandbook-main.png";
import brandbook_img_1 from "../assets/Carriot/brandbook-1.png";
import brandbook_img_2 from "../assets/Carriot/brandbook-2.png";
import brandbook_img_3 from "../assets/Carriot/brandbook-3.png";
import brandbook_img_4 from "../assets/Carriot/brandbook-4.png";
import brandbook_img_5 from "../assets/Carriot/brandbook-5.png";
import app_img_main from "../assets/Carriot/app-design-main.png";
import app_img_1 from "../assets/Carriot/app-design-1.png";
import app_img_2 from "../assets/Carriot/app-design-2.png";
import app_img_3 from "../assets/Carriot/app-design-3.png";
import app_img_4 from "../assets/Carriot/app-design-4.png";
import app_img_5 from "../assets/Carriot/app-design-5.png";
import truck from "../assets/Carriot/truck.png";

function CarriotPage() {
  return (
    <div className={styles["page"]}>
      <Helmet>
        <title>Parsa Saraiyeh | Carriot</title>
        <meta
          name="description"
          content="Carriot is a cloud-based platform designed to enhance last mile delivery, dispatching operation, and surge revenue. Owning to our powerful AI algorithms and reliable telematics, you can automate your daily delivery schedule and save a fortune."
        />
        <meta property="og:title" content="Parsa Saraiyeh | Carriot" />
        <meta
          property="og:description"
          content="Carriot is a cloud-based platform designed to enhance last mile delivery, dispatching operation, and surge revenue. Owning to our powerful AI algorithms and reliable telematics, you can automate your daily delivery schedule and save a fortune."
        />
        <meta
          property="og:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
        <meta name="twitter:title" content="Parsa Saraiyeh | Carriot" />
        <meta
          name="twitter:description"
          content="Carriot is a cloud-based platform designed to enhance last mile delivery, dispatching operation, and surge revenue. Owning to our powerful AI algorithms and reliable telematics, you can automate your daily delivery schedule and save a fortune."
        />
        <meta
          name="twitter:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
      </Helmet>
      <div className={styles["header-container"]}>
        <Header />
      </div>
      <img src={carriot_intro} alt="Carriot" className={styles["main-img"]} />
      <div className={styles["about-carriot"]}>
        <h3>About Carriot</h3>
        <p>
          Carriot is a cloud-based platform designed to enhance last mile
          delivery, dispatching operation, and surge revenue. Owning to our
          powerful AI algorithms and reliable telematics, you can automate your
          daily delivery schedule and save a fortune.
        </p>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Designing BrandBook</h1>
      </div>
      <img
        src={brandbook_main}
        alt="brandbook-main-img"
        className={`${styles["main-img"]} ${styles["brandbook-main-img"]}`}
      />
      <div className={styles["brand-book-grid"]}>
        <div>
          <div className={styles["text-holder"]}>
            <h3>Designing Brandbook</h3>
            <p>
              Brand-book requirements contains; Typography, Color palette and
              shades, Mood-board, icons and Visual guidelines.
            </p>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["img_1_s"]}`}>
            <img src={brandbook_img_3} alt="img_3" />
            <label>
              Our first task was to give a makeover to Carriot's logotype and
              corporate identity.
            </label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["img_2"]}`}>
            <img src={brandbook_img_1} alt="img_1" />
            <label>We spruced up and cleaned up the lettering.</label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["img_3"]}`}>
            <img src={brandbook_img_2} alt="img_2" />
            <label>App Icon</label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["img_1"]}`}>
            <img src={brandbook_img_3} alt="img_3" />
            <label>
              Our first task was to give a makeover to Carriot's logotype and
              corporate identity.
            </label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["img_4"]}`}>
            <img src={brandbook_img_4} alt="img_4" />
            <label>
              The illustration style went through several phases and mustiple
              Iterations
            </label>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["img_5"]}`}>
            <img src={brandbook_img_5} alt="img_5" />
            <label>3D style of illustrations for website visuals</label>
          </div>
        </div>
      </div>
      <div className={styles["title-text-holder"]}>
        <h1>Designing BrandBook</h1>
        <p>
          Plenty of illustrations and icons, bright hues, and micro animated
          functional elements all come together to really set a creative mood
          and submerge the user in the app's special atmosphere
        </p>
      </div>
      <img
        src={app_img_main}
        alt="app-design-img-main"
        className={styles["main-img"]}
      />
      <div className={styles["brand-book-grid"]}>
        <div>
          <div className={styles["text-holder"]}>
            <h3>Redesigning Carriot Admin Panel</h3>
            <p>
              The old versions applied as a MVP, better user interface and
              experience provided in the new version. some of the samples
              represented below.
            </p>
          </div>
          <div className={`${styles["img_with_label"]} ${styles["img_1_s"]}`}>
            <img src={app_img_4} alt="img_4" />
            <label>
              Dashboard; representing weekly transport insights, active drivers
              and the current deliveries detail.
            </label>
          </div>
          <div className={`${styles["img_with_label"]}`}>
            <img src={app_img_1} alt="img_1" />
            <label>Admin’s profile page</label>
          </div>
          <div className={styles["img_with_label"]}>
            <img src={app_img_2} alt="img_2" />
            <label>Realtime Report</label>
          </div>
          <div className={styles["img_with_label"]}>
            <img src={app_img_3} alt="img_3" />
            <label>Login Page</label>
          </div>
        </div>
        <div>
          <div className={`${styles["img_with_label"]} ${styles["img_1"]}`}>
            <img src={app_img_4} alt="img_4" />
            <label>
              Dashboard; representing weekly transport insights, active drivers
              and the current deliveries detail.
            </label>
          </div>
          <div className={styles["img_with_label"]}>
            <img src={app_img_5} alt="img_5" />
            <label>
              Daily Report of any driver by inserting the date and name of the
              driver or car information in filters.
            </label>
          </div>
        </div>
      </div>
      <img src={truck} alt="Truck" className={styles["main-img"]} />
      <div className={styles["title-text-holder"]}>
        <h1>Carriot Website</h1>
        <p>Different variations of the assets placed in the link below;</p>
        <a href="https://carriot.ir/">Carriot.ir</a>
      </div>
    </div>
  );
}

export default CarriotPage;
