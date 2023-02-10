
import React from 'react'
import { THUMBNAIL_IMAGE_URL } from '../utils/requests';



const Thumbnail = ({movie}) => {
    
  return (
    <div className='relative h-28 min-w-[100px] cursor-pointer transition duration-200 ease-out md:h-36
    md:min-w-[260px] md:hover:scale-105'>
        <img 
            src={`${THUMBNAIL_IMAGE_URL}${movie?.backdrop_path || movie?.poster_path}`}
            alt=""
            className='rounded-sm object-cover md:rounded absolute'
            
        />
    </div>
  )
}

export default Thumbnail