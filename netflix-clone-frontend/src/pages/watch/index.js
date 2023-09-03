import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import rickRoll from '../../resources/videos/rickroll.mp4'


import "./index.scss";

const Watch = () => {
 
  return (
    <div className="watch">
      <div className="back">
        <FontAwesomeIcon icon={faArrowLeft}/>
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={rickRoll}
      />
    </div>
  );
}


export default Watch;