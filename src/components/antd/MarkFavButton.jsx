import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import axios from 'axios';
import "./antd.sass"
export default function MarkFavButton(props) {
  const isLogIn = useSelector(state => state.login.value);
  const buttonClassName = `mark-button ${isLogIn ? "" : "disabled"}`;

  const sessionId = localStorage.getItem("session_id")
  const markedFav = () => {
    if(isLogIn) {
      axios.post(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/account/hustle0985/favorite?api_key=06b5ea731fca9e39d8b51074aaad5aac&session_id=${sessionId}`, {
        "media_type": "movie",
        "media_id": props.movieId,
        "favorite": true
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  return(
    <div 
      className={buttonClassName}
      onClick={markedFav} 
      style={{"marginTop": "20px", width: "fit-content"}}>
      <Button>
        <HeartOutlined />
      </Button>
    </div>
  )
};
