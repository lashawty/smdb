import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getSearchResult } from '../../store/searchSlice'
import { getTotalSearchPage } from '../../store/totalSearchPageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

export default function InputSearch () {
  let navigate = useNavigate();
  const { Search } = Input;
  const dispatch = useDispatch()
  let page = useSelector(state => state.searchPage.value);
  const [currentPage, setCurrentPage] = useState(null)
  const [inputText, setInputText] = useState(null)

  const onSearch = (value) => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=06b5ea731fca9e39d8b51074aaad5aac&language=en-US&query=${value}&page=${page}&include_adult=false`)
      .then(response => {
        console.log(response);
        if (response.data.results.length !== 0) {
          setInputText(value)
          dispatch(getSearchResult(response.data.results))
          dispatch(getTotalSearchPage(response.data.total_pages))
          navigate('/search')
        } else {
          dispatch(getSearchResult(response.data.results))
        }
        
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(()=>{
    setCurrentPage(page)
    if(inputText) onSearch(inputText)
  }, [page])
  
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