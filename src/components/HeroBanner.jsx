import React from 'react'
import useMovies from '../hooks/useMovies'
import { MOVIE_IMAGE_BASE_URL, THUMBNAIL_IMAGE_URL } from '../utils/requests'

const HeroBanner = () => {
  const {
    movies: {
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries 
    }
  } = useMovies();

  console.log(trendingNow)
  return (
    <div>
      {comedyMovies?.map(movie => (
        <img key={movie?.id} src={`${THUMBNAIL_IMAGE_URL}${movie?.poster_path || movie?.backdrop_path}`} alt="" />
      ))}
    </div>
  )
}

export default HeroBanner

