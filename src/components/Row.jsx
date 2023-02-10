import React from "react";
import Thumbnail from "./Thumbnail";



const Row = ({ title, movies }) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>

      <div className="group relative md:-ml-2">
        {/* ChevronLeft */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>

        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2 md:p-2">
          {/* Thumbnail */}
          {movies?.map(movie => <Thumbnail key={movie.id} movie={movie}  />)}
          
        </div>

        {/* ChevronRight */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 absolute top-0 bottom-0 right-2 z-40 m-auto cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Row;