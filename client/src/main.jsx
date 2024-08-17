import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import AllFormulaire from "./pages/AllFormulaire.jsx";
import CreateFormulaire from "./pages/CreateFormulaire.jsx";
import CreateUsers from "./pages/CreateUsers.jsx";
import ReadFormulaire from "./pages/ReadFormulaire.jsx";
import UpdateFormulaire from "./pages/UpdateFormulaire.jsx";

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
        path: "/inscription",
        element: <CreateUsers />,
      },

      {
        path: "/formulaire/all",
        element: <AllFormulaire />,
      },
      {
        path: "/formulaire/:id/read",
        element: <ReadFormulaire />,
      },
      {
        path: "/formulaire/:id/update",
        element: <UpdateFormulaire />,
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
