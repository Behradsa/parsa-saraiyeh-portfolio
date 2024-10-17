import "./MainGrid.css";
import React from "react";
import dribble_logo_img from "../assets/dirrble-frame.svg";
import dribble_logo_hover_img from "../assets/dribble-frame:hover.svg";
import linkedin_logo_img from "../assets/linkedin-frame.svg";
import linkedin_logo_hover_img from "../assets/linkedin-frame:hover.svg";
import behance_logo_img from "../assets/behance-frame.svg";
import behance_logo_hover_img from "../assets/behance-frame:hover.svg";
import parsa_portfolio_img from "../assets/parsa-portfolio-picture.png";
import link_icon_img from "../assets/link-frame.svg";

function MainGrid() {
  return (
    <div className="main-grid">
      <div className="introduction-container">
        <div className="introduction-square">
          <h1>Hello, I’m Parsa, a Visual & Product Designer </h1>
          <p>
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
          <div className="introduction-buttons-container">
            {/* <button className="button-contact-me">Contact Me</button> */}
            <a href="#" class="button type--A">
              <div class="button__line"></div>
              <div class="button__line"></div>
              <span class="button__text">Contact Me</span>
              <div class="button__drow1"></div>
              <div class="button__drow2"></div>
            </a>
            <a href="" className="logo-button">
              <img src={dribble_logo_img} alt="dribble" />
              <img src={dribble_logo_hover_img} alt="dribble" />
            </a>
            <a
              href="https://www.linkedin.com/in/parsa-saraiyeh/"
              className="logo-button"
            >
              <img src={linkedin_logo_img} alt="linkedin" />
              <img src={linkedin_logo_hover_img} alt="linkedin" />
            </a>
            <a href="" className="logo-button">
              <img src={behance_logo_img} alt="behance" />
              <img src={behance_logo_hover_img} alt="behance" />
            </a>
          </div>
        </div>
        <div className="introduction-image-container ">
          <img src={parsa_portfolio_img} alt="parsa-picture" />
        </div>
      </div>
      <div id="first_project" className="grid-cell nickandish-frame">
        <h3>NikAndish Design system</h3>
        <p>
          Visual Designer <br />
          Brand identity owner
        </p>
        <button>
          <img src={link_icon_img} alt="link" />
        </button>
      </div>
      <div className="grid-cell nabulox-frame">
        <h3>Nebulox</h3>
        <p>Visual Designer</p>
        <button>
          <img src={link_icon_img} alt="link" />
        </button>
      </div>
      <div className="grid-cell snapp-trip-frame">
        <h3>Snapp Tripp</h3>
        <p>Graphic Designer</p>
        <button>
          <img src={link_icon_img} alt="link" />
        </button>
      </div>
      <div className="grid-cell carriot-frame">
        <h3>Carriot</h3>
        <p>
          Graphic Designer <br /> UI Designer
        </p>
        <button>
          <img src={link_icon_img} alt="link" />
        </button>
      </div>
      <div className="grid-cell omid-frame">
        <h3>Omid Analyzer</h3>
        <p>Graphic Designer</p>
        <button>
          <img src={link_icon_img} alt="link" />
        </button>
      </div>
      <div className="grid-cell mano-frame">
        <h3>Homano / Mano</h3>
        <p>
          Graphic Designer <br /> UI Designer
        </p>
        <button>
          <img src={link_icon_img} alt="link" />
        </button>
      </div>
      <div className="grid-cell-other ">
        <h3>Other Projects</h3>
        <p>
          Graphic Designer <br /> UI Designer
        </p>
        <button>
          <img src={link_icon_img} alt="link" />
        </button>
      </div>
      <div id="contact_me_home_page" className="grid-cell-contactme">
        <h1>Want to work together? </h1>
        <p>
          Feel free to reach out for collaborations or just a friendly hello :)
        </p>
        <div>
          <b> Mail:</b> Parsa.sa1999@gmail.com <br /> <b>Phone:</b> + 98 912 043
          6793
        </div>
        <div className="introduction-buttons-container">
          {/* <button className="button-contact-me">Contact Me</button> */}
          <a href="#" class="button type--A">
            <div class="button__line"></div>
            <div class="button__line"></div>
            <span class="button__text">Contact Me</span>
            <div class="button__drow1"></div>
            <div class="button__drow2"></div>
          </a>
          <button className="logo-button">
            <img src={dribble_logo_img} alt="dribble" />
            <img src={dribble_logo_hover_img} alt="dribble" />
          </button>
          <button className="logo-button">
            <img src={linkedin_logo_img} alt="linkedin" />
            <img src={linkedin_logo_hover_img} alt="linkedin" />
          </button>
          <button className="logo-button">
            <img src={behance_logo_img} alt="linkedin" />
            <img src={behance_logo_hover_img} alt="linkedin" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainGrid;
