import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MovieList } from "../pages/MovieList";
import { MovieDetail } from "../pages/MovieDetail";
import { PageNotFound } from "../pages/PageNotFound";
import { RootLayout } from "../main";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/movies",
        element: <MovieList />,
        children: [
          {
            path: "popular",
            element: <MovieList />,
          },
          {
            path: "top",
            element: <MovieList />,
          },
          {
            path: "upcoming",
            element: <MovieList />,
          },
        ],
      },
      {
        path: "/movie",
        children: [
          {
            path: ":id",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);
