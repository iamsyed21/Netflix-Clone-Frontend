import React, { useState, useEffect } from 'react';
import panda from '../../resources/images/panda.png';
import './index.scss';

const Default = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      // Check if the user should be redirected
      if (newWindowWidth > 600) {
        setShouldRedirect(true);
      } else {
        setShouldRedirect(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Check the screen size when the component mounts
    if (windowWidth > 600) {
      setShouldRedirect(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    // Redirect the user when shouldRedirect is true
    if (shouldRedirect) {
      window.location.href = 'https://notflix.syedmoinahmed.dev/';
    }
  }, [shouldRedirect]);


  return (
    <div className='defaultpage'>
      <img src={panda} alt='panda' />
      <h1>
        Please access this website from a larger screen or a computer for the best experience.
      </h1>
      <span>Apologies for the inconvenience</span>
    </div>
  );
};

export default Default;
