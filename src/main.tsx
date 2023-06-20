import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Networks from "./pages/Networks";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Landing from "./pages/Landing";
import Legal from "./pages/Legal";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "networks",
        element: <Networks />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "legal",
        element: <Legal />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
