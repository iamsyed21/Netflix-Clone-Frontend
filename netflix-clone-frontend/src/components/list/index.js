import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../listItem';

import './index.scss'
const List = () => {
    const [slideNumber, setSliderNumber] = useState(0);

    const listContainerRef = useRef();
    const handleNavigation = (direction) =>{

        let distance= listContainerRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber>0){
            setSliderNumber(slideNumber-1)
            listContainerRef.current.style.transform = `translateX(${256+distance}px)`;
        }else if(direction === "right" && slideNumber<5){
            setSliderNumber(slideNumber+1)
            listContainerRef.current.style.transform = `translateX(${distance-255}px)`;
        }
    }
  return (
    <div className='list'>
        <span className='listTile'> Continue Watching</span>
        <div className='wrapper'>
           {(slideNumber !==0) && <FontAwesomeIcon onClick={()=>handleNavigation("left")} className='navigationArrow left' icon={faAngleLeft}/>}
            <div className='ListContainer' ref={listContainerRef}>
               <ListItem index={0}/>
               <ListItem index={1}/>
               <ListItem index={2}/>
               <ListItem index={3}/>
               <ListItem index={4}/>
               <ListItem index={5}/>
               <ListItem index={6}/>
               <ListItem index={7}/>
               <ListItem index={8}/>
               <ListItem index={9}/>
            </div>
           {(slideNumber !==5) &&  <FontAwesomeIcon onClick={()=>handleNavigation("right")} className='navigationArrow right' icon={faAngleRight}/>}
        </div>
    </div>
  )
}

export default List