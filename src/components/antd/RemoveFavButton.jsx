import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function RemoveFavButton(props) {
  const isLogIn = useSelector(state => state.login.value);
  const buttonClassName = `mark-button ${isLogIn ? "" : "disabled"}`;

  const sessionId = localStorage.getItem("session_id")
  const removedFav = () => {
    if(isLogIn) {
      axios.post(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/account/hustle0985/favorite?api_key=06b5ea731fca9e39d8b51074aaad5aac&session_id=${sessionId}`, {
        "media_type": "movie",
        "media_id": props.movieId,
        "favorite": false
      })
        .then(response => {
          // console.log(response)
        })
        .catch(error => {
          // console.log(error);
        });
    }
  }
  return(
    <div 
      className={buttonClassName}
      onClick={removedFav} 
      style={{margin: "20px auto 0", width: "fit-content"}}>
      <Button>
        <CloseOutlined />
      </Button>
    </div>
  )
};
