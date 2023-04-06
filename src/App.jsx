import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './reset.sass'
import Nav from './components/nav/Nav'
import MovieList from './components/MovieList/MovieList'
function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <MovieList></MovieList>
    </div>
  )
}

export default App
