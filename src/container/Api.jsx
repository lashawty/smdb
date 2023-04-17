import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { getMovieList } from '../store/movieListSlice';
import { getMostPopular } from '../store/mostPopularSlice';
import { getTopRated } from '../store/topRatedSlice';

//取得固定資料
export default function Api() {
  //redux
  const dispatch = useDispatch()
  const axiosGet = (target, callback) => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${target}?api_key=06b5ea731fca9e39d8b51074aaad5aac&language=en-US&page=1`)
      .then(response => {
        console.log(response.data.results);
        dispatch(callback(response.data.results))
      })
      .catch(error => {
        console.log(error);
      });
  }
  useEffect(() => {
    axiosGet('upcoming', getMovieList) //首頁輪播
    axiosGet('popular', getMostPopular) //最熱門
    axiosGet('top_rated', getTopRated) //最高評分
  }, []);
}