import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import notflix from '../../resources/images/notflix.png';
import profile from '../../resources/images/profile.png';
import './index.scss'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    

  return (
    <div className={isScrolled?"navBox scrolled":"navBox"}>
        <div className='left'>
        <img src={notflix} alt = "notflixLogo"/>
        <span> Homepage </span>
        <span> Serires </span>
        <span> Movies </span>
        <span> New & popular  </span>
        <span> Homepage </span>
        <span> My List </span>
        </div>
        <div className='right'>
        <FontAwesomeIcon className='myNavIcons' icon={faSearch}/>
        <FontAwesomeIcon className='myNavIcons' icon={faBell}/>
        <span className='profileDropDown'>
        <img src={profile} alt = "profileLogo"/>
        <FontAwesomeIcon className='myNavIcons Carrot' icon={faCaretDown}/>
        <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
        </div>
        </span>
        </div>
    </div>
  )
}

export default Navbar