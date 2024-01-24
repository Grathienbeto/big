import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./Routes/Root";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { Home } from "./Routes/Home";
import { Contacto } from "./Routes/Contacto";
import { CrearTorneo } from "./Routes/CrearTorneo";
import { Ayuda } from "./Routes/Ayuda";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      {
        path: "/ayuda",
        element: <Ayuda />,
      },
      {
        path: "/crear_torneo",
        element: <CrearTorneo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
