import { createBrowserRouter } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { MovieDetail } from "../pages/MovieDetail";
import { PageNotFound } from "../pages/PageNotFound";
import { RootLayout } from "../main";
import { SearchPage } from "../pages/SearchPage";
import { movieDetailRoute } from "../pages/MovieDetail";

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
        element: <MovieList apiPath="movie/now_playing" />,
      },
      {
        path: "movies/popular",
        element: <MovieList apiPath="movie/popular" />,
      },
      {
        path: "movies/top",
        element: <MovieList apiPath="movie/top_rated" />,
      },
      {
        path: "movies/upcoming",
        element: <MovieList apiPath="movie/upcoming" />,
      },
      {
        path: "/movie",
        children: [
          {
            path: ":id",
            element: <MovieDetail />,
            ...movieDetailRoute,
          },
        ],
      },
      {
        path: "/search",
        element: <SearchPage apiPath="search/movie" />,
      },
    ],
  },
]);
