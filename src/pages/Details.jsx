import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { useFetchSingleShow } from '../hooks/useFetchSingleShow';
import { FaArrowLeft } from 'react-icons/fa';
import { images } from '../assets';

const Details = () => {
    const { id } = useParams();
    const {movie, isLoading: loading} = useFetchSingleShow(id)

    console.log(movie)

    if (loading) {
        return (
            <div className='w-full h-screen top-0 left-0 bottom-0 right-0 flex justify-center items-center fixed z-100'>
                <img 
                    className='sm:w-[13rem]'
                    src={images.tslLogo} 
                    alt="tsl-logo" 
                />
            </div>
        )
    }

    
    return (
        <div className='w-full h-screen relative bg-transparent'>
            <div className="w-full absolute top-0 left-0 right-0 z-20 h-20 bg-black px-5">
                <FaArrowLeft 
                    className='text-white text-lg sm:text-2xl md:text-3xl cursor-pointer' 
                    onClick={() => window.history.back()}
                />
            </div>
            
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movie.video_link}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                playing
                controls
                muted={true}
            />
            
            
        </div>
    )
}

export default Details