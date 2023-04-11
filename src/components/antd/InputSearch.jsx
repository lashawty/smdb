import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getSearchResult } from '../../store/searchSlice'
import { useDispatch } from 'react-redux'

export default function InputSearch () {
  let navigate = useNavigate();
  const { Search } = Input;
  const dispatch = useDispatch()
  const onSearch = (value) => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=06b5ea731fca9e39d8b51074aaad5aac&query=${value}`)
      .then(response => {
        console.log(response);
        if (response.data.results.length !== 0) {
          dispatch(getSearchResult(response.data.results))
          navigate('/search')
        } else {
          dispatch(getSearchResult(response.data.results))
        }
        
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  return(
    <Search
      placeholder="Search Movies"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  )
} 