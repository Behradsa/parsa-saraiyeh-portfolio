import { Helmet } from "react-helmet";
import Header from "../components/Header";
import scrollToHash from "../functions/scrollToHash";
import "./HomePage.css";
import MainGrid from "../components/MainGrid";

function HomePage() {
  scrollToHash();

  return (
    <div
      style={{
        width: "100%",
        padding: "16px",
        paddingTop: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Helmet>
        <title>Parsa Saraiyeh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Hello, I’m Parsa, a Visual & Product Designer."
        />
        <meta property="og:title" content="Parsa Saraiyeh | Protfolio" />
        <meta
          property="og:description"
          content="Hello, I’m Parsa, a Visual & Product Designer."
        />
        <meta
          property="og:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
        <meta name="twitter:title" content="Parsa Saraiyeh | Protfolio" />
        <meta
          name="twitter:description"
          content="Hello, I’m Parsa, a Visual & Product Designer."
        />
        <meta
          name="twitter:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
      </Helmet>
      <div className="home-page-container">
        <Header />
        <MainGrid />
      </div>
    </div>
  );
}

export default HomePage;
