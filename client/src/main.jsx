import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Formulaire from "./pages/Formulaire.jsx";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "",
        element: <Formulaire />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
