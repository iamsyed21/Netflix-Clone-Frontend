import React, { useState } from 'react'
import thumbnail from '../../resources/images/thumbnail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faAdd, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import trailerVideo from "../../resources/videos/trailerVideo.mp4";

import './index.scss';
const ListItem = ({index}) => {
  const [isHover, setISHovered] = useState(false);


  return (
    <div className='listItem' 
    style={{left:isHover && index * 250-50 + index*2.5}}
    onMouseEnter={()=>setISHovered(true)} 
    onMouseLeave={()=>setISHovered(false)}>
      {!isHover && <img src={thumbnail} alt="listThumbnail"/>}


        {isHover && 
         <>
         <video src={trailerVideo} autoPlay={true} loop muted/>
         <div className='itemInfo'>
           <div className='detailIcons'>
            <div>
             <FontAwesomeIcon className='spacer1' icon={faCirclePlay}/>
             <FontAwesomeIcon className='spacer1' icon={faAdd}/>
             </div>
             <div className='smaller'>
             <FontAwesomeIcon className='spacer1' icon={faThumbsUp}/>
             <FontAwesomeIcon className='spacer1'icon={faThumbsDown}/>
             </div>
           </div>
           <div className='itemInfoTop'>
             <span className='match'>90% Match</span> |
             <span className='limit'>1 hour 14 mins</span> |
             <span className='limit ageLimit'>16+</span> |
             <span>1999 </span>
           </div>
           <div className='desc'>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
           </div>
           <div className='genre'>Action . Comedy . Thriller</div>
 
         </div>
         </>
        }
       
        </div>
  )
}

export default ListItem;