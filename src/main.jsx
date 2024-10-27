import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarriotPage from "./pages/CarriotPage";
import SnappPage from "./pages/SnappPage";
import ManoPage from "./pages/ManoPage";
import ScrollToTop from "./functions/scrollToTop";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
