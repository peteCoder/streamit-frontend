import React, { useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useFetchActor } from "../hooks/useFetchActor";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/ModalAtom";
import VidoeModal from "../components/Modal";
import { ActorThumbnail } from "../components";
import ShowCard from "../components/ShowCard";


const Actor = () => {
  const { id } = useParams();

  const { actor, isLoading } = useFetchActor(id);
  const [showModal, _] = useRecoilState(modalState)

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
          <div className="flex items-center justify-center flex-shrink-0 max-w-[270.03px] flex-col">
            <img className="rounded-md" src={actor.image} alt={actor.name} />
            <div className="flex flex-col items-center">
              <div className="text-[23.2748px] uppercase">{actor.name}</div>
              {actor.cast_position && (
                <div className="text-[#76777A]">{actor.cast_position}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {actor.bio && (
              <div className="flex flex-col">
                <div className="text-[#76777A] text-lg">About</div>
                <div className="text-[#F5F5F5] max-w-[600px]">{actor.bio}</div>
              </div>
            )}

            {actor.born && (
              <div className="flex flex-col">
                <div className="text-[#76777A] text-lg">Born</div>
                <div className="text-[#F5F5F5] max-w-[600px]">{actor.born}</div>
              </div>
            )}

            {actor.education && (
              <div className="flex flex-col">
                <div className="text-[#76777A] text-lg">Education</div>
                <div className="text-[#F5F5F5] max-w-[600px]">
                  {actor.education}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="">
          {actor._videos && (
            <div className="mt-10 flex flex-col gap-7 justify-center items-center md:items-start md:justify-start">
              <div className="text-2xl">Featured Shows</div>
              <div className="flex flex-wrap gap-5 justify-center items-center md:items-start md:justify-start">
                {actor._videos.map((video) => (<ShowCard key={video.id} data={video} />))}
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


export default Actor;
