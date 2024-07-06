import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Details from "./pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "movie/:title/:year",
    element: <Details />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
