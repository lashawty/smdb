import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import axios from 'axios';

export function Counter() {
  const counts = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const handleClick = () => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=06b5ea731fca9e39d8b51074aaad5aac&query=Harry')
      .then(response => {
        console.log(response);
        dispatch(increment(response.data.results.map(movie => movie.title)))
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={handleClick}>
          Increment
        </button>
        {counts.map((count, index)=>(
          <p key={index}>{count}</p>
        ))}
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}
