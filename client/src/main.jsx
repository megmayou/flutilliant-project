import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import AllFormulaire from "./pages/AllFormulaire.jsx";
import CreateFormulaire from "./pages/CreateFormulaire.jsx";
import ReadFormulaire from "./pages/ReadFormulaire.jsx";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "",
        element: <CreateFormulaire />,
      },

      {
        path: "/all-formulaires",
        element: <AllFormulaire />,
      },
      {
        path: "/read-formulaire/:id",
        element: <ReadFormulaire />,
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
