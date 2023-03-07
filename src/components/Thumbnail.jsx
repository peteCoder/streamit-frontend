
import React, { useState } from 'react'
import { THUMBNAIL_IMAGE_URL } from '../utils/requests';
import { modalState, movieState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil';


const Thumbnail = ({movie}) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  
  // const [movie, setMovie] = useState({})
    
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
        {/* <img 
            src={`${THUMBNAIL_IMAGE_URL}${movie?.backdrop_path || movie?.poster_path}`}
            alt=""
            className='rounded-sm object-cover md:rounded absolute'  
        /> */}
        <img 
            src={`${movie.desktop_banner}`}
            alt=""
            className='rounded-sm object-cover md:rounded absolute'  
        />
    </div>
  )
}

export default Thumbnail