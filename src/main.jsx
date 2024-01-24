import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Home/Home";
import { Contacto } from "./Contacto/Contacto";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { CrearTorneo } from "./CrearTorneo/CrearTorneo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/crear_torneo",
    element: <CrearTorneo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
