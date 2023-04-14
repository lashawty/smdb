import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getSearchResult } from '../../store/searchSlice'
import { getTotalSearchPage } from '../../store/totalSearchPageSlice'
import { getSearchPage } from '../../store/searchPageSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

export default function InputSearch () {
  const { Search } = Input;
  let navigate = useNavigate();
  const dispatch = useDispatch()
  let page = useSelector(state => state.searchPage.value);
  const [currentPage, setCurrentPage] = useState(null)
  const [inputText, setInputText] = useState(null)
  // const [isInputChange, setIsInputChange] = useState(true)

  const onSearch = (value) => {
    //判斷是否更改搜尋文字
    if(inputText !== value) dispatch(getSearchPage(1))
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=06b5ea731fca9e39d8b51074aaad5aac&language=en-US&query=${value}&page=${inputText !== value ? 1 : page}&include_adult=false`)
      .then(response => {
        if (response.data.results.length !== 0) {
          //輸入的文字
          setInputText(value)
          dispatch(getSearchResult(response.data.results))
          dispatch(getTotalSearchPage(response.data.total_pages))
          
          navigate('/search')
        } else {
          dispatch(getSearchResult(response.data.results))
          dispatch(getTotalSearchPage(1))
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