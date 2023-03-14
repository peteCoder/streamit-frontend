import React, {useRef, useState} from "react";
import ShowCard from "./ShowCard";



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
        <div className="mt-10 flex flex-col gap-7 justify-center items-center xs:items-start md:justify-start">
          <div className="text-xl md:text-2xl">{title}</div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-3">
            {movies.map((video) => (<ShowCard key={video.id} data={video} />))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;