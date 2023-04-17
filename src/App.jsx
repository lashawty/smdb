import './font.css'
import './reset.sass'
import Nav from './components/nav/Nav'
import Api from './container/Api'
import MovieList from './pages/MovieList/MovieList'
import SearchPage from './pages/SearchPage'
import TopRatedPage from './pages/TopRatedPage'
import MostPopularPage from './pages/MostPopularPage'
import ErrorPage from "./pages/error-page";
import MyMoviesPage from './pages/MyMoviesPage'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { Route, Routes } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

const router = createBrowserRouter([
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
]);
function App() {
  const isLogin = useSelector(state => state.login.value);
  return (
    <div className="App">
      <Nav></Nav>
      <Api></Api>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/most-popular" element={<MostPopularPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/my-movies" element={isLogin ? <MyMoviesPage /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
