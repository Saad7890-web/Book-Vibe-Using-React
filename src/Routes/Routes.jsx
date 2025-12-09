import { createBrowserRouter } from "react-router";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
    ],
  },
]);
