import React, {useRef, useState} from "react";
import ShowCard from "./ShowCard";
import Thumbnail from "./Thumbnail";



const Row = ({ title, movies }) => {
  const rowRef = useRef(null)
  const [isMoved, setIsMoved] = useState(false)
  
  const handleClick = (direction) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }



  return (

    <div className="pr-1">
      {movies && (
        <div className="mt-10 flex flex-col gap-7 justify-center items-center md:items-start md:justify-start">
          <div className="text-2xl">{title}</div>
          <div className="flex flex-wrap gap-5 justify-start items-center md:items-start md:justify-start">
            {movies.map((video) => (<ShowCard key={video.id} data={video} />))}
          </div>
        </div>
      )}
    </div>
    // <div className="">
    //   <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl mt-[14rem]">{title}</h2>

    //   <div className="relative md:-ml-2">
    //     {/* ChevronLeft */}
        

    //     <div  className="flex items-center md:p-2 flex-wrap mb-40 gap-5">
    //       {/* Thumbnail */}
    //       {/* {movies.map(movie => <Thumbnail key={movie.id} movie={movie}  />)} */}
          
    //       {movies.map(movie => (
          
    //           <ShowCard key={movie.id} data={movie}  />
          
              
    //       ))}

          
    //     </div>

    //     {/* ChevronRight */}
        
    //   </div>
    // </div>
  );
};

export default Row;