import './style/font.css'
import './style/reset.sass'
import Nav from './components/nav/Nav'
import Api from './container/Api'
import { Route, Routes, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import router from './route/router'
import MovieList from './pages/MovieList/MovieList'
import MostPopularPage from './pages/MostPopularPage'
import TopRatedPage from './pages/TopRatedPage'
import SearchPage from './pages/SearchPage'
import MyMoviesPage from './pages/MyMoviesPage'
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
