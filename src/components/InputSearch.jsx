import { Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getSearchResult } from '../store/searchSlice'
import { getTotalSearchPage } from '../store/totalSearchPageSlice'
import { getSearchPage } from '../store/searchPageSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import useWindowSize from '../hook/useWindowSize'

export default function InputSearch () {
  const windowWidth = useWindowSize().width
  const { Search } = Input;
  const dispatch = useDispatch()
  let navigate = useNavigate();
  let page = useSelector(state => state.searchPage.value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null)
  const [inputText, setInputText] = useState(null)

  //RWD燈箱
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //搜尋結果方法
  const axiosGet = (value) => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=06b5ea731fca9e39d8b51074aaad5aac&language=en-US&query=${value}&page=${inputText !== value ? 1 : page}&include_adult=false`)
      .then(response => {
        //輸入的文字狀態
        setInputText(value)

        //有搜尋結果才進行下一步
        if (response.data.results.length !== 0) {
          //搜尋結果狀態
          dispatch(getSearchResult(response.data.results))
          //搜尋結果總頁數狀態
          dispatch(getTotalSearchPage(response.data.total_pages))
          //導向搜尋頁
          navigate('/search')
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  //清空搜尋方法
  const clearResult = () => {
    setInputText(null)
    dispatch(getSearchResult([]))
    dispatch(getTotalSearchPage(1))
    dispatch(getSearchPage(1))
  }

  //搜尋方法
  const onSearch = (value) => {
    //關閉RWD燈箱
    if (windowWidth <= 992) handleOk();
    switch (true) {
      //是否更改文字且更改的文字不為空值(按下X)
      case value !== inputText && value !== "":
        //判斷是否更改搜尋文字 是的話回到第一頁
        dispatch(getSearchPage(1));
        axiosGet(value);
        break;
      //是否清空搜尋列( 按下X )
      case value === '':
        clearResult();
        break;
      //預設 搜尋"輸入文字value"
      default:
        axiosGet(value);
        break;
    }
  };
  

  useEffect(()=>{
    //設定當前頁面
    setCurrentPage(page)
    //取得當前頁面的結果
    if(inputText) onSearch(inputText)
  }, [page])
  
  return(
    //手機版搜尋列改為燈箱
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
          onOk={closeModal}
          onCancel={closeModal}
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