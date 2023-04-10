import './font.css'
import './reset.sass'
import Nav from './components/nav/Nav'
import MovieList from './pages/MovieList/MovieList'
import SearchPage from './pages/SearchPage'
import TopRatedPage from './pages/TopRatedPage'
import MostPopularPage from './pages/MostPopularPage'
import ErrorPage from "./pages/error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Route, Routes } from "react-router-dom"
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
]);
function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/most-popular" element={<MostPopularPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App
