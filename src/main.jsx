import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { ValidationForm } from "./components/ValidationForm/ValidationForm";

import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detalle/:name/:id",
    element: <PokemonDetail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/formulario",
    element: <ValidationForm />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
