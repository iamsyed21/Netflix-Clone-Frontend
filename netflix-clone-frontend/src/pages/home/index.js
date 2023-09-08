import React from 'react'
import Featured from '../../components/featured'
import Navbar from '../../components/navbar';
import List from '../../components/list';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Footer from "../../components/footer"
import axios from "axios";
import { useAuth } from "../../authContext/AuthContext.js";

import './index.scss';
const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldRedirect, setShouldRedirect] = useState(window.innerWidth < 550);
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      // Check if the user should be redirected
      if (newWindowWidth < 600) {
        setShouldRedirect(true);
      } else {
        setShouldRedirect(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navigate]);

  useEffect(() => {
    // Check the screen size when the component mounts
    if (windowWidth < 600) {
      setShouldRedirect(true);
      navigate("/default");
    } else {
      setShouldRedirect(false);
    }
  }, [windowWidth, navigate]);


   useEffect(() => {
    const getRandomLists = async () => {
      try {
        const token = user ? `Bearer ${user.token}` : ""; 
        const res = await axios.get(
          `https://notflix-clone-backend-api.onrender.com/api/lists${type ? "?type=" + type : ""}`,
          {
            headers: {
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
  }, [type, genre, user]);


  return (
    <div>
      <Navbar />
      
      <Featured type={type} setGenre={setGenre} />
      
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}

<Footer/>
    </div>
  )
}

export default Home;