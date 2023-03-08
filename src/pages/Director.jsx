import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useFetchDirector } from "../hooks/useFetchDirector";
import { useRecoilState, useRecoilValue } from 'recoil';
import VidoeModal from '../components/Modal';
import { modalState, movieState } from "../atoms/ModalAtom";

const Director = () => {
  const { id } = useParams();

  const { director } = useFetchDirector(id);

  // const showModal = useRecoilValue(modalState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  console.log(director);

  return (
    <div>
      <Header />

      <div className="bg-[url('/img/linear.png')] bg-cover md:bg-center min-h-screen w-full p-6 pt-24 md:p-20 md:pt-28">
        <div className="flex flex-col md:flex-row gap-[33px]">
          <div className="flex items-center justify-center flex-shrink-0 max-w-[270.03px] flex-col">
            <img className="rounded-md" src={director.image} alt={director.name} />
            <div className="flex flex-col items-center">
              <div className="text-[23.2748px] uppercase">{director.name}</div>
              {director.cast_position  && (
                <div className="text-[#76777A]">{director.cast_position}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {director.bio && (
              <div className="flex flex-col">
                <div className="text-[#76777A] text-lg">About</div>
                <div className="text-[#F5F5F5] max-w-[600px]">
                  {director.bio}
                </div>
              </div>
            )}

            {director.born && (
              <div className="flex flex-col">
                <div className="text-[#76777A] text-lg">Born</div>
                <div className="text-[#F5F5F5] max-w-[600px]">
                  {director.born}
                </div>
              </div>
            )}

            {director.education && (
              <div className="flex flex-col">
              <div className="text-[#76777A] text-lg">Education</div>
              <div className="text-[#F5F5F5] max-w-[600px]">
                {director.education}
              </div>
            </div>
            )}
          </div>
        </div>
        <div className="">
          {director._videos && (
            <div className="mt-10 flex flex-col gap-7 justify-center items-center md:items-start md:justify-start">
              <div className="text-2xl">Featured Shows</div>
              <div className="flex flex-wrap gap-5 justify-center items-center md:items-start md:justify-start"
                
              >
                {director._videos.map(video => (
                  <div 
                  key={video.id}
                  onClick={() => {
                    setCurrentMovie(video)
                    setShowModal(true)
                  }}
                  className="w-[257px] h-[167px] bg-[#76777A] rounded-md scale-100 hover:scale-[1.05] cursor-pointer overflow-hidden transition-all duration-150 relative">
                    <img src={video.desktop_banner} className="w-full h-full object-cover" alt={video.title} />
                  </div>
                ))}
              </div>
              
            </div>
          )}
        </div>
      </div>
        
        {/* Modal */}
        {showModal && <VidoeModal />}
      
    </div>
  );
};

export default Director;
