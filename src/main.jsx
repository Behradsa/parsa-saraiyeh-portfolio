import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { basename: "/parsa-saraiyeh-portfolio" },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
