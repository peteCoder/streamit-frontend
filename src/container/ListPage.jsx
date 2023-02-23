import React from 'react'
import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/ModalAtom';
import { Navbar, Row } from '../components'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner'
import VidoeModal from '../components/Modal';
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

  const showModal = useRecoilValue(modalState)

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
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
        {showModal && <VidoeModal />}
        
      </main>
      {/* <div className='bg-black/40 fixed top-0 w-screen overflow-y-scroll h-screen z-[11000] left-0 right-0 flex items-center justify-center'>
        <div className='w-2/4 bg-gray-900 h-screen'>
          <div className="h-[10vh] w-full">
            <img src="" alt="" />
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default ListPage

