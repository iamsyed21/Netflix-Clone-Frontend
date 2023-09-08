import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faAdd, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../authContext/AuthContext.js";
import './index.scss';
const ListItem = ({ index, item }) => {
  const [isHover, setISHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  const { user } = useAuth();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const token = user ? `Bearer ${user.token}` : ""; // Check if user is logged in
        const res = await axios.get("https://notflix-clone-backend-api.onrender.com/api/movies/find/" + item, {
          headers: {
            token: token, // Use "Authorization" instead of "token"
          },
        });
        setMovie(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item, user]);



function generateRandomTime() {
  const minMinutes = 80;
  const maxMinutes = 210;

  // Generate a random number of minutes within the range
  const randomMinutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;

  // Calculate hours and remaining minutes
  const hours = Math.floor(randomMinutes / 60);
  const remainingMinutes = randomMinutes % 60;

  // Pad single-digit minutes with a leading zero
  const formattedMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;

  return `${hours} hour: ${formattedMinutes} mins`;
}

function generateRandomPercentage() {
  const minPercentage = 70;
  const maxPercentage = 100;

  // Generate a random percentage within the range
  const randomPercentage = Math.floor(Math.random() * (maxPercentage - minPercentage + 1)) + minPercentage;

  return `${randomPercentage}% Match`;
}


  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
    <div
      className='listItem' 
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setISHovered(true)} 
      onMouseLeave={() => setISHovered(false)}
    >
      {!isHover && isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <img src={movie?.imgSm} alt="listThumbnail" />
          {isHover && (
            <>
              <video src={movie.trailer} autoPlay={true} loop muted />
              <div className='itemInfo'>
                <div className='detailIcons'>
                  <div>
                    <FontAwesomeIcon className='spacer1' icon={faCirclePlay} />
                    <FontAwesomeIcon className='spacer1' icon={faAdd} />
                  </div>
                  <div className='smaller'>
                    <FontAwesomeIcon className='spacer1' icon={faThumbsUp} />
                    <FontAwesomeIcon className='spacer1' icon={faThumbsDown} />
                  </div>
                </div>
                <div className='listCardTitle'>{movie.title}</div>
                <div className='itemInfoTop'>
                  <span className='match'>{generateRandomPercentage()}</span> |
                  <span className='limit time'>{generateRandomTime()}</span> |
                  <span className='limit ageLimit'>{movie.limit}+</span> |
                  <span>{movie.year}</span>
                </div>
                <div className='desc'>{movie.desc}</div>
                <div className='genre'>{movie.genre}</div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  </Link>
);
}

export default ListItem;