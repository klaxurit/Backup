import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
