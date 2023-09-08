import React from 'react'
import Navbar from '../../components/navbar';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../../components/footer'
import { useAuth } from "../../authContext/AuthContext.js";


import './index.scss'
const MyList = () => {
    const [lists, setLists] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        const getRandomLists = async () => {
          try {
            const token = user ? `Bearer ${user.token}` : ""; // Check if user is logged in
            const res = await axios.get("https://notflix-clone-backend-api.onrender.com/api/movies/getmylist",
              {
                headers: {
                  token: token
                },
              }
            );
            console.log(res.data);
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
        <div className=' container myListTitle'>
            My List
        </div>

        <div className='myListContainer'>
        {lists.map((item) => (
               <Link to="/watch">
            <div className='dummyDiv'>
                
                
            <span className='cotentdiV'>
            {item.title}
            <br/>
            <span className='descDiv'>
                {item.desc}
            </span>
                </span>        
                
                <img src={item.img} alt='listImage' className='listImage'/>
            </div>
            </Link>
          ))}
        </div>
        <Footer />
    </div>
  )
}

export default MyList