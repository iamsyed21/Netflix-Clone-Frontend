import React from 'react'
import movie1 from '../../resources/images/movie1.jpg'

import movietitle from '../../resources/images/movietitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Featured = () => {
  return (
    <div className='featuredContainer'>
        <img src={movie1} alt='featuredMovie'/>

        <div className='info'>
            <img src={movietitle} alt='featuredMovietitle'/>
            <div className='infoBox'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
            
            <div className='infoButtons'>
             
                <button className='playButton'>
                    <FontAwesomeIcon icon={faPlay}/> 
                     <span>Play</span>
                    </button>

                    <button className='infoButton'>
                <FontAwesomeIcon className='infoicon' icon={faInfoCircle}/>
                <span>More Info</span>
                    </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Featured;