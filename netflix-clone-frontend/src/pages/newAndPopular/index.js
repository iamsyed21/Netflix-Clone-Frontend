import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import List from '../../components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer'
import { useAuth } from "../../authContext/AuthContext.js";

import './index.scss'
const NewAndPopular = () => {
    const [content, setContent] = useState({});
    const [lists, setLists] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);
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
              let url = `/movies/random`;
              const token = user ? `Bearer ${user.token}` : ""; 
              const res = await axios.get(url, {
                headers: {
                  token: token
                },
              });
              setContent(res.data[0]);
          } catch (err) {
            console.log(err);
          }
        };
        getRandomContent();
      }, [user]);


      useEffect(() => {
        const getRandomLists = async () => {
          const token = user ? `Bearer ${user.token}` : ""; 
          try {
            const res = await axios.get("https://notflix-clone-backend-api.onrender.com/api/lists/new-releases",
              {
                headers: {
                  // token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                  token: token
                },
              }
            );
            setLists(res.data);
    
          } catch (err) {
            console.log(err);
          }
        };
        getRandomLists();
      }, [user]);


  return (
    <div>
        <Navbar />
        <div  className={isScrolled?"typeContainer scrolled2":"typeContainer"}>
        <div className='category'>
            <span>New Releases</span>  
        </div>
        </div>

        {content && content.img ? ( // Check if content is defined and content.img is defined before rendering
      <div className='featuredContainer1'>
        <img src={content.img} alt="featuredMovie" />
        <div className="info1">
          <img src={content.imgTitle} alt="featuredMovietitle" />
          <div className="infoBox1">{content.desc}</div>
          <div className="infoButtons1">
            <button className="playButton1">
              <FontAwesomeIcon icon={faPlay} />
              <span>Play</span>
            </button>
            <button className="infoButton1">
              <FontAwesomeIcon className="infoicon1" icon={faInfoCircle} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}

{/* {lists.map((list) => (
   
        <List key={list._id} list={list} />
        
      ))} */}

{lists.map((list) => {
  return <List key={list._id} list={list} />;
})}

<Footer />


    </div>
  )
}

export default NewAndPopular