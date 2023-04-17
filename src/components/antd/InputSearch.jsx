import { Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getSearchResult } from '../../store/searchSlice'
import { getTotalSearchPage } from '../../store/totalSearchPageSlice'
import { getSearchPage } from '../../store/searchPageSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import useWindowSize from '../../hook/useWindowSize'

export default function InputSearch () {
  const windowWidth = useWindowSize().width
  const { Search } = Input;
  const dispatch = useDispatch()
  let navigate = useNavigate();
  let page = useSelector(state => state.searchPage.value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null)
  const [inputText, setInputText] = useState(null)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = (value) => {
    //判斷是否更改搜尋文字
    if(inputText !== value) dispatch(getSearchPage(1))
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=06b5ea731fca9e39d8b51074aaad5aac&language=en-US&query=${value}&page=${inputText !== value ? 1 : page}&include_adult=false`)
      .then(response => {
        if (response.data.results.length !== 0) {
          //輸入的文字
          setInputText(value)
          //搜尋結果
          dispatch(getSearchResult(response.data.results))
          //搜尋結果總頁數
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
    
      if(windowWidth <= 992) handleOk()
  };

  useEffect(()=>{
    setCurrentPage(page)
    if(inputText) onSearch(inputText)
  }, [page])
  
  return(
    windowWidth >= 992 ?
   ( <Search
      placeholder="Search Movies"
      allowClear
      enterButton={<SearchOutlined />}
      size="large"
      onSearch={onSearch}
    />) : (
      <>
        <SearchOutlined 
          onClick={showModal}
          style={{color: '#fff', fontSize: '24px'}}
        />
        <Modal
          title="Please enter keyword"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}  
        >
          <Search
            placeholder="Search Movies"
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            onSearch={onSearch}
          />
        </Modal>
      </>
    )
  )
} 