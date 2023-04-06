import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function InputSearch () {
  const { Search } = Input;
  const [results, setResults] = useState([]);

  useEffect(() => {
    // setResults()
  }, [results]);
  const onSearch = (value) => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=06b5ea731fca9e39d8b51074aaad5aac&query=${value}`)
        .then(response => {
          console.log(response);
          setResults(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
  };
  
  
  return(
    <>
      <Search
        placeholder="Search Movies"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>
            {result.title}
            {result.backdrop_path !== null ? (
              <img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} />
            ) : (
              <div></div>
            )}
          </li>
        ))}
      </ul>
    </>
  )
} 