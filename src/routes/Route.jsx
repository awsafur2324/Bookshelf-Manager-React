import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../pages/BookDetails";
import Read from "../component/ListedBooks/Read";
import Wish from "../component/ListedBooks/Wish";
import ErrorPage from "../pages/ErrorPage";
import BookReview from "../pages/BookReview";
import TopComment from "../pages/TopComment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch(`/books.json`),
        element: <Home />,
      },
      {
        path: "/bookId",
        element: <BookDetails />,
      },
      {
        path: "/ListedBooks",
        loader: () => fetch("/books.json"),
        element: <ListedBooks />,
        children: [
          {
            path: "wish",
            element: <Wish />,
          },
          {
            index: true,
            element: <Read />,
          },
        ],
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead />,
      },
      {
        path: "/BookReview",
        element: <BookReview />,
      },
      {
        path: "/topComment",
        element: <TopComment />,
      },
    ],
  },
]);
