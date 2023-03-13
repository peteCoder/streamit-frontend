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
import { useFetchShowsByCat } from '../hooks/useFetchShowsByCat';

const ListPage = () => {

  const {shows} = useShows();
  const videos = shows.showsByVideos

  const {showsByCat, isLoading} = useFetchShowsByCat()
  const categories = showsByCat
  


  const showModal = useRecoilValue(modalState)

  if (isLoading) {
    return (
      <div className="w-full h-screen min-h-screen flex items-center justify-center">
        <img src={'/img/tsl-logo.gif'} alt="" />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b ">
      <Header  />
      <main className="relative pl-4 pb-40 lg:space-y-24 lg:pl-16">
      <Banner videos={videos} />
      {/* setion */}
      <section className="md:space-y-24"> 
      
        {categories.map(category => (<Row title={category.name} movies={category.videos} />))}
      </section>
        {/* Modal */}
        {showModal && <VidoeModal />}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default ListPage

