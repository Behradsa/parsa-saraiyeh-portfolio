import React from "react";
import "./MainGrid.css";
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
            <button className="button-contact-me">Contact Me</button>
            <button className="logo-button">
              <img src="/src/assets/dirrble-frame.svg" alt="dribble" />
            </button>
            <button className="logo-button">
              <img src="/src/assets/linkedin-frame.svg" alt="linkedin" />
            </button>
            <button className="logo-button">
              <img src="/src/assets/behance-frame.svg" alt="behance" />
            </button>
          </div>
        </div>
        <div className="introduction-image-container ">
          <img
            src="/src/assets/parsa-portfolio-picture.jpeg"
            alt="parsa-picture"
          />
        </div>
      </div>
      <div className="grid-cell nickandish-frame">
        <h3>NikAndish Design system</h3>
        <p>
          Visual Designer <br />
          Brand identity owner
        </p>
        <button>
          <img src="/src/assets/link-frame.svg" alt="link" />
        </button>
      </div>
      <div className="grid-cell nabulox-frame">
        <h3>Nebulox</h3>
        <p>Visual Designer</p>
        <button>
          <img src="/src/assets/link-frame.svg" alt="link" />
        </button>
      </div>
      <div className="grid-cell snapp-trip-frame">
        <h3>Snapp Tripp</h3>
        <p>Graphic Designer</p>
        <button>
          <img src="/src/assets/link-frame.svg" alt="link" />
        </button>
      </div>
      <div className="grid-cell carriot-frame">
        <h3>Carriot</h3>
        <p>
          Graphic Designer <br /> UI Designer
        </p>
        <button>
          <img src="/src/assets/link-frame.svg" alt="link" />
        </button>
      </div>
      <div className="grid-cell omid-frame">
        <h3>Omid Analyzer</h3>
        <p>Graphic Designer</p>
        <button>
          <img src="/src/assets/link-frame.svg" alt="link" />
        </button>
      </div>
      <div className="grid-cell mano-frame">
        <h3>Homano / Mano</h3>
        <p>
          Graphic Designer <br /> UI Designer
        </p>
        <button>
          <img src="/src/assets/link-frame.svg" alt="link" />
        </button>
      </div>
      <div className="grid-cell-other">
        <h3>Other Projects</h3>
        <p>
          Graphic Designer <br /> UI Designer
        </p>
        <button>
          <img src="/src/assets/link-frame.svg" alt="link" />
        </button>
      </div>
      <div className="grid-cell-contactme">
        <h1>Want to work together? </h1>
        <p>
          <b>
            Feel free to reach out for collaborations or just a friendly hello
          </b>
          <br />
          <br />
          <b>Mail:</b> Parsa.sa1999@gmail.com <br /> <b>Phone:</b> + 98 912 043
          6793
        </p>
        <div className="introduction-buttons-container">
          <button className="button-contact-me">Contact Me</button>
          <button className="logo-button">
            <img src="/src/assets/dirrble-frame.svg" alt="dribble" />
          </button>
          <button className="logo-button">
            <img src="/src/assets/linkedin-frame.svg" alt="linkedin" />
          </button>
          <button className="logo-button">
            <img src="/src/assets/behance-frame.svg" alt="behance" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainGrid;
