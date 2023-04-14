import { useState, useEffect } from 'react';
import { Card, Image, Space, Empty, Modal, Pagination } from 'antd';
import MarkFavButton from '../components/antd/MarkFavButton';
import { useDispatch, useSelector } from 'react-redux'
import { getSearchPage } from '../store/searchPageSlice';
import './page.sass'
const { Meta } = Card;
export default function SearchPage(props) {
  const results = useSelector(state => state.search.value);
  const dispatch = useDispatch()
  const [showResult, setShowResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1)

  let getTotalPage = useSelector(state => state.totalSearchPage.value);
  const onChangePage = (page) => {
    setCurrentPage(page);
    dispatch(getSearchPage(page))
  }

  useEffect(() => {
    setShowResults(results);
    setTotalPage(getTotalPage)
  }, [results]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='search-result'>
      <h2>Search Results</h2>
      <Space size="large" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', margin: '50px auto 0 auto', justifyContent: 'center' }}>
      {showResult.length > 0 ? (
        showResult.map((result, index) => (
          result.backdrop_path !== null ?
            <>
              <Card
                key={result.id}
                hoverable
                style={{'max-width': '384px', border:'none', width: '100%' }}
                cover={
                    <Image 
                      width={'100%'}
                      src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                      preview={false}
                    />
                }
                onClick={() => {
                  setSelectedResult(result);
                  showModal();
                }}
              >
                <Meta title={result.title} description={result.release_date} />
                <MarkFavButton movieId={result.id}></MarkFavButton>
              </Card>
            </>
            : <></>
        ))
      ) : (
        <Empty style={{width: '100%'}}/>
      )}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{"font-family": 'Stadiona', "fontSize": '20px'}}
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
      <Pagination 
        defaultCurrent={1}
        total={totalPage}
        current={currentPage}
        onChange={onChangePage}
        style={{margin: '30px auto 0 auto', width: 'fit-content'}}
      />
    </div>
  );
}
