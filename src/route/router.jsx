import { createBrowserRouter } from "react-router-dom";
import MovieList from '../pages/MovieList/MovieList'
import SearchPage from '../pages/SearchPage'
import TopRatedPage from '../pages/TopRatedPage'
import MostPopularPage from '../pages/MostPopularPage'
import ErrorPage from "../pages/error-page";
import MyMoviesPage from '../pages/MyMoviesPage'

export default function router () {
  createBrowserRouter([
    {
      path: "/",
      element: <MovieList />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/top-rated",
      element: <TopRatedPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/most-popular",
      element: <MostPopularPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/my-movies",
      element: <MyMoviesPage />,
      errorElement: <ErrorPage />,
    },
  ])
}