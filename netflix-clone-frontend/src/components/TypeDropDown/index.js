import React, { useState, useEffect } from 'react'
import './index.scss'

const TypeDropDown = ({type}) => {
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
    <div  className={isScrolled?"typeContainer scrolled2":"typeContainer"}>
        <div className='category'>
            <span>{type === "movies"?"Movies":"TV Shows"}</span>
            <select name='genre' id='genre' className='genre'>
                <option>Genre</option>
                <option className='genreOption' value="action">Action</option>
                <option className='genreOption' value="adventure">Adventure</option>
                <option className='genreOption' value="animation">Animation</option>
                <option className='genreOption' value="comedy">Comedy</option>
                <option className='genreOption' value="crime">Crime</option>
                <option className='genreOption' value="documentary">Documentary</option>
                <option className='genreOption' value="drama">Drama</option>
                <option className='genreOption' value="family">Family</option>
                <option className='genreOption' value="fantasy">Fantasy</option>
                <option className='genreOption' value="history">History</option>
                <option className='genreOption' value="horror">Horror</option>
                <option className='genreOption' value="music">Music</option>
                <option className='genreOption' value="mystery">Mystery</option>
                <option className='genreOption' value="romance">Romance</option>
                <option className='genreOption' value="science-fiction">Science Fiction</option>
            </select>
        </div>
        </div>
  )
}

export default TypeDropDown;