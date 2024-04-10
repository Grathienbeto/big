import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Root } from "./Routes/Root";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { Home } from "./Routes/Home";
import { Contacto } from "./Routes/Contacto";
import { CrearTorneo } from "./Routes/CrearTorneo";
import { Ayuda } from "./Routes/Ayuda";
import { TorneoVista } from "./Routes/TorneoVista";

// evento prueba: DPHPzBwRtEmuhtXZIdmO

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
      {
        path: "/eventos/:criptic_id",
        element: <TorneoVista />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
