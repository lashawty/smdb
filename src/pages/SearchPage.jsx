import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Card, Image, Row, Col, Empty } from 'antd';
import MarkFavButton from '../components/antd/MarkFavButton';
import './page.sass'
const { Meta } = Card;

export default function SearchPage(props) {
  const results = useSelector(state => state.search.value);
  const [showResult, setShowResults] = useState([]);

  useEffect(() => {
    setShowResults(results);
  }, [results]);

  return (
    <div className='search-result'>
      <h2>Search Results</h2>
      <Row gutter={[16, 24]}>
      {showResult.length > 0 ? (
        showResult.map((result, index) => (
          <Col className="gutter-row" span={8}>
            <Card
              key={result.id}
              hoverable
              style={{ width: '300px' }}
              cover={
                result.backdrop_path !== null ? (
                  <Image width={'100%'} src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                ) : (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )
              }
            >
              <Meta title={result.title} description={result.id} />
              <MarkFavButton movieId={result.id}></MarkFavButton>
            </Card>
          </Col>
        ))
      ) : (
        <Empty style={{margin: 'auto', width: '200px'}}/>
      )}

      </Row>
    </div>
  );
}
