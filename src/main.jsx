import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router/Router.jsx";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
