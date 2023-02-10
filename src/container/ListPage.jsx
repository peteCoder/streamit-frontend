import React from 'react'
import { Navbar, Row } from '../components'
import Banner from '../components/Banner';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner'
import useMovies from '../hooks/useMovies';

const ListPage = () => {

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
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
     
     <Header  />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginals={netflixOriginals} />
      {/* setion */}
      <section className="md:space-y-24"> 
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
        {/* Modal */}
      </main>
    </div>
  )
}

export default ListPage

