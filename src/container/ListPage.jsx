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
import { useShows } from '../hooks/useShows';

const ListPage = () => {

  const {shows} = useShows();

  const categories = shows.showsByCategory
  const videos = shows.showsByVideos
  console.log(videos)

  const {
    movies: { netflixOriginals}
  } = useMovies();

  const showModal = useRecoilValue(modalState)

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header  />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginals={netflixOriginals} videos={videos} />
      {/* setion */}
      <section className="md:space-y-24"> 
        {categories.map(category => (
          <Row title={category.name} movies={category.videos} />
        ))}
      </section>
        {/* Modal */}
        {showModal && <VidoeModal />}
      </main>
      <Footer />
    </div>
  )
}

export default ListPage

