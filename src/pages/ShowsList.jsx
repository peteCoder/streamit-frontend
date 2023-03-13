import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/ModalAtom'
import Header from '../components/Header'
import VidoeModal from '../components/Modal'
import ShowCard from '../components/ShowCard'
import { useFetchShowsByCat } from '../hooks/useFetchShowsByCat'
import { useShows } from '../hooks/useShows'

const ShowsList = () => {

  // const {} = 
  const [showModal, _] = useRecoilState(modalState)
  const {isLoading, showsByCat: listedShows} = useFetchShowsByCat()

  if (isLoading) {
    return (
      <div className="w-full h-screen min-h-screen flex items-center justify-center">
        <img src={'/img/tsl-logo.gif'} alt="" />
      </div>
    )
  }

  return (
    <div>
      <Header />

      <div className="bg-[url('/img/linear.png')] bg-cover md:bg-center min-h-[120vh] w-full p-6 pt-24 md:p-20 md:pt-28">
        <div className="flex flex-col md:flex-row gap-[33px]">
          
        </div>
        {listedShows && (
        <div className="">
          
            {listedShows.map(show => (
              <div className="mt-10 flex flex-col gap-7 justify-center items-center md:items-start md:justify-start">
              <div className="text-2xl">{show?.name}</div>
              <div className="flex flex-wrap gap-5 justify-center items-center md:items-start md:justify-start">
                {show.videos.map((video) => (<ShowCard key={video.id} data={video} />))}
              </div>
            </div>
            ))}
        </div>
        )} 
      </div>

      {/* Modal */}
      {showModal && <VidoeModal />}
    </div>
  )
}

export default ShowsList