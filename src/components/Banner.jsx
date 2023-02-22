import React, { useEffect, useState } from "react";
import { MOVIE_IMAGE_BASE_URL } from "../utils/requests";
import { FaPlay } from "react-icons/fa";
// import 



const Banner = ({ netflixOriginals }) => {

  const [movie, setMovie] = useState({});
// const movie = netflixOriginals

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals?.length)]
    );
  }, [netflixOriginals]);

console.log(netflixOriginals)

  return (
    
    <div className="flex flex-col space-y-2 md:space-y-4 py-16 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 -z-10 left-0 h-[95vh] w-screen">
        <img
          alt=""
          src={`${MOVIE_IMAGE_BASE_URL}${
            movie?.backdrop_path || movie?.poster_path
          }`}
          className="top-0 left-0 w-full object-cover"
        //   layout="fill"
        //   objectFit="cover"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl text-shadow-md">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-8 md:w-8"
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