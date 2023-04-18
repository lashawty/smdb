import { useState, useEffect } from 'react';
import { Card, Image, Space, Empty, Modal, Pagination } from 'antd';
import MarkFavButton from '../components/MarkFavButton';
import { useDispatch, useSelector } from 'react-redux'
import { getSearchPage } from '../store/searchPageSlice';
import './page.sass'
const { Meta } = Card;
export default function SearchPage(props) {
  //redux
  const results = useSelector(state => state.search.value);
  let getCurrentPage = useSelector(state => state.searchPage.value)
  let getTotalPage = useSelector(state => state.totalSearchPage.value);
  const dispatch = useDispatch();

  //use state
  const [showResult, setShowResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  //space樣式
  const spaceStyle = {
    display: 'flex', 
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: '50px auto 0 auto',
    justifyContent: 'center' 
  }

  //無圖樣式
  const noImageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    color: '#fff',
    zIndex: 1
  };
  
  const noImageOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: '.8'
  };
  
  //方法
  const onChangePage = (page) => {
    setCurrentPage(page);
    dispatch(getSearchPage(page));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //useEffect
  useEffect(() => {
    setShowResults(results);
    setTotalPage(getTotalPage);
  }, [results]);

  useEffect(()=>{
    setCurrentPage(getCurrentPage);
  },[getCurrentPage]);

  return (
    <div className='search-result'>
      <h2>Search Results</h2>
      <Space
        size="large"
        style={{ ...spaceStyle }}>
      {showResult.length > 0 ? (
        showResult.map((result) => (
          <div key={result.id}>
            <Card
              hoverable
              style={{ maxWidth: '280px', border: 'none', width: '100%' }}
              cover={
                result.backdrop_path !== null ?
                <Image 
                  width={'100%'}
                  src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                  preview={false}
                  key={result.id}
                /> :
                <div style={{ position: 'relative' }}>
                  <Image 
                    width={'100%'}
                    src={` https://picsum.photos/1000/1500`}
                    preview={false}
                    key={result.id}
                  />
                  <p style={{ ...noImageStyle }}>NO IMAGE</p>
                  <div style={{ ...noImageOverlayStyle }}></div>
                </div>
              }
              onClick={() => {
                setSelectedResult(result);
                showModal();
              }}
            >
              <Meta title={result.title} description={result.release_date} />
              <MarkFavButton movieId={result.id} />
            </Card>
          </div>
        ))
      ) : (
        <Empty style={{width: '100%'}}/>
      )}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{"fontFamily": 'Stadiona', "fontSize": '20px'}}
      >
        {selectedResult && (
          <div>
            <Image 
              width={'100%'}
              style={{"marginTop": '30px'}}
              src={`https://image.tmdb.org/t/p/original${selectedResult.backdrop_path}`}
              preview={false}
            />
            <h3
              style={{"fontSize": '30px'}}
            >{selectedResult ? selectedResult.title : ''}</h3>
            <h4
              style={{"marginTop": '20px'}}
            >{selectedResult ? selectedResult.overview : ''}</h4>
          </div>
        )}
      </Modal>
      </Space>
      {
        showResult.length > 0 ? 
          <Pagination 
          defaultCurrent={1}
          total={totalPage}
          current={currentPage}
          onChange={onChangePage}
          style={{margin: '30px auto 0 auto', width: 'fit-content'}}
          /> : <></>
      }
    </div>
  );
}
