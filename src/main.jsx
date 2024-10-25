import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarriotPage from "./pages/CarriotPage";
import SnappPage from "./pages/SnappPage";
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
