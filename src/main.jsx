import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarriotPage from "./pages/CarriotPage";
import SnappPage from "./pages/SnappPage";
import ManoPage from "./pages/ManoPage";
import OmidPage from "./pages/OmidPage";
import NebuloxPage from "./pages/NebuloxPage";

import ScrollToTop from "./functions/scrollToTop";
import NikandishPage from "./pages/NikandishPage";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop /> <HomePage />
      </>
    ),
  },
  {
    path: "carriot/",
    element: (
      <>
        <ScrollToTop /> <CarriotPage />
      </>
    ),
  },
  {
    path: "snapp/",
    element: (
      <>
        <ScrollToTop /> <SnappPage />
      </>
    ),
  },
  {
    path: "homano/",
    element: (
      <>
        <ScrollToTop /> <ManoPage />
      </>
    ),
  },
  {
    path: "omid/",
    element: (
      <>
        <ScrollToTop /> <OmidPage />
      </>
    ),
  },
  {
    path: "nebulox/",
    element: (
      <>
        <ScrollToTop /> <NebuloxPage />
      </>
    ),
  },
  {
    path: "nikandish/",
    element: (
      <>
        <ScrollToTop /> <NikandishPage />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
