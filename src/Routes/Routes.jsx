import { createBrowserRouter } from "react-router";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
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

      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
      },
    ],
  },
]);
