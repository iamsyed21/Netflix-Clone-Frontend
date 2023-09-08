import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../listItem';

import './index.scss'
const List = ({list}) => {
    const [slideNumber, setSliderNumber] = useState(0);

    const listContainerRef = useRef();
    const handleNavigation = (direction) =>{

        let distance= listContainerRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber>0){
            setSliderNumber(slideNumber-1)
            listContainerRef.current.style.transform = `translateX(${230 + distance}px)`;
        }else if(direction === "right" && slideNumber<5){
            setSliderNumber(slideNumber+1)
            listContainerRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
  return (
    <div className='list'>
        <span className='listTile'>{list.title}</span>
        <div className='wrapper'>
           {(slideNumber !==0) && <FontAwesomeIcon onClick={()=>handleNavigation("left")} className='navigationArrow left' icon={faAngleLeft}/>}
            <div className='ListContainer' ref={listContainerRef}>
            {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
            </div>
           {(slideNumber !==5) &&  <FontAwesomeIcon onClick={()=>handleNavigation("right")} className='navigationArrow right' icon={faAngleRight}/>}
        </div>
    </div>
  )
}

export default List