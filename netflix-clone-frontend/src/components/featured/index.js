import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { useAuth } from "../../authContext/AuthContext.js";
import { Link } from "react-router-dom";
const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [genre, setGenreValue] = useState("");
  const { user } = useAuth();

  const handleScroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      const getRandomContent = async () => {
        try {
          let url = `https://notflix-clone-backend-api.onrender.com/api/movies/randoms?genre=Comedy&type=series`;
    
          if (genre) {
            console.log("comming here")
            url = `https://notflix-clone-backend-api.onrender.com/api/movies/randoms?genre=${genre}&type=${type}`;
            const token = user ? `Bearer ${user.token}` : ""; // Check if user is logged in
            const res = await axios.get(url, {
              headers: {
                token: token
              },
            });
      
            setContent(res.data);
            
          } else {
            url = `https://notflix-clone-backend-api.onrender.com/api/movies/random?type=${type}`;
            const token = user ? `Bearer ${user.token}` : ""; // Check if user is logged in
            const res = await axios.get(url, {
              headers: {
                token: token
              },
            });
            
            setContent(res.data[0]);
          }
        } catch (err) {
          console.log(err);
        }
      };
    
      getRandomContent();
    }, [type, genre, user]);

  
  return (
    <div className='featuredContainer'>
      
      {type&&<div  className={isScrolled?"typeContainer scrolled2":"typeContainer"}>
        <div className='category'>
            <span>{type === "movie"?"Movies":"TV Shows"}</span>
            <select
            name="genre"
            className='genre'
            id="genre"
            onChange={(e) => {
              setGenreValue(e.target.value);
              setGenre(e.target.value);
            }}
            value={genre}
          >
                <option value="">Genre</option>
                <option className='genreOption' value="Action">Action</option>
                <option className='genreOption' value="Adventure">Adventure</option>
                <option className='genreOption' value="Animation">Animation</option>
                <option className='genreOption' value="Comedy">Comedy</option>
                <option className='genreOption' value="Crime">Crime</option>
                <option className='genreOption' value="Drama">Drama</option>
                <option className='genreOption' value="Family">Family</option>
                <option className='genreOption' value="Fantasy">Fantasy</option>
                <option className='genreOption' value="History">History</option>
                <option className='genreOption' value="Horror">Horror</option>
                <option className='genreOption' value="Music">Music</option>
                <option className='genreOption' value="Mystery">Mystery</option>
                <option className='genreOption' value="Romance">Romance</option>
                <option className='genreOption' value="Science-fiction">Science-Fiction</option>
            </select>
        </div>
        </div>}





        {content && content.img ? ( // Check if content is defined and content.img is defined before rendering
      <>
        <img src={content.img} alt="featuredMovie" />
        <div className="info">
          <img src={content.imgTitle} alt="featuredMovietitle" />
          <div className="infoBox">{content.desc}</div>
          <div className="infoButtons">
            <button className="playButton">
              <FontAwesomeIcon icon={faPlay} />
              <Link to="/watch" className="link">
              <span>Play</span>
          </Link>
             
            </button>
            <button className="infoButton">
              <FontAwesomeIcon className="infoicon" icon={faInfoCircle} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </>
    ) : (
      <p>Loading...</p>
    )}
    </div>
  )
}

export default Featured;