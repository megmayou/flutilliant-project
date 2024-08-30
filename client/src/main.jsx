import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import AllFormulaire from "./pages/AllFormulaire.jsx";
import CreateFormulaire from "./pages/CreateFormulaire.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import UpdateFormulaire from "./pages/UpdateFormulaire.jsx";
import ReadFormulaire from "./pages/ReadFormulaire.jsx";
import RegisterUsers from "./pages/RegisterUsers.jsx";

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
        element: <RegisterUsers />,
      },
      {
        path: "/login",
        element: <LoginPage />,
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
