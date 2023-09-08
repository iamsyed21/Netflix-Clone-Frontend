import React, { useState, useEffect, useContext  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import notflix from '../../resources/images/notflix.png';
import profile from '../../resources/images/profile.png';
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from '../../authContext/AuthContext.js';
import { logout } from "../../authContext/AuthActions.js";
import './index.scss'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleScroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const handleLogout = () => {
        // Call the logout action to log the user out
        dispatch(logout());
        navigate('/login');
      };

  return (
    <div className={isScrolled?"navBox scrolled":"navBox"}>
        <div className='left'>
        <Link to="/" className="link">
        <img src={notflix} alt = "notflixLogo"/>
          </Link>
        
        <Link to="/" className="link d-none d-sm-inline">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <Link to="/newandpopular" className="link d-sm-inline">
            <span className="navbarmainLinks">New and Popular</span>
          </Link>
          <Link to="/mylist" className="link">
            <span className="navbarmainLinks">My List</span>
          </Link>
        </div>
        <div className='right'>
        
        
        <span className='notificationDropDown d-none d-md-inline'>
        <FontAwesomeIcon className='myNavIcons' icon={faBell}/>
        <div className='notificationTray'>
           You Have No Notifications As Of Now.
        </div>
        </span>
        

        <span className='profileDropDown d-none d-md-inline'>
        <img src={profile} alt = "profileLogo"/>
        <FontAwesomeIcon className='myNavIcons Carrot' icon={faCaretDown}/>
        <div className='options'>
            
            <span onClick={handleLogout}>Logout</span>
        </div>
        </span>
        </div>
    </div>
  )
}

export default Navbar