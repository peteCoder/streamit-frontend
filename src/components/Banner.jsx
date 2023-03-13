import React, { useEffect, useState } from "react";
import { MOVIE_IMAGE_BASE_URL } from "../utils/requests";
import { FaPlay } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/ModalAtom";
// import 



const Banner = ({ videos }) => {

  const [movie, setMovie] = useState({});


  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)


  useEffect(() => {
    setMovie(
      videos[Math.floor(Math.random() * videos?.length)]
    );
  }, [videos]);


  return (
    
    <div className="flex flex-col space-y-2 md:space-y-4 py-16 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 -z-10 left-0 h-[95vh] w-screen overflow-hidden">
        <img
          alt=""
          src={`${movie?.desktop_banner}`}
          className="top-0 left-0 w-full object-contain"
        />
      </div>
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
        {movie?.title}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg lg:max-w-2xl lg:text-lg text-shadow-md">
        {movie?.description}
      </p>

      <div className="flex space-x-3 ">
        <button className="bannerButton bg-white text-black text-sm"
        onClick={() => {
            window.location.href = `/browse/show/${movie?.id}`
        }}
        >
          <FaPlay className="h-2 w-2 text-black md:h-4 md:w-4" /> Play
        </button>
        <button className="bannerButton bg-[gray]/70 text-sm"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          More Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 md:h-5 md:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;