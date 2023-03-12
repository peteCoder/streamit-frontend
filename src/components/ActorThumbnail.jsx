import React from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/ModalAtom";

const ActorThumbnail = ({ video }) => {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

    return (
        <div className="relative group cursor-pointer w-[250px]">
            <div
            onClick={() => {
            setCurrentMovie(video);
            setShowModal(true);
            }}
            key={video.id}
            className="w-full h-[150px] bg-[#181818]
            rounded-md md:group-hover:opacity-0 
            cursor-pointer overflow-hidden transition-all
            duration-200 relative ease-in delay-500 z-10"
            >
                <img
                    src={video.desktop_banner}
                    className="w-full h-full object-cover"
                    alt={video.title}
                />
            </div>

            <div className="hidden md:block opacity-0 group-hover:opacity-100 
                absolute top-5 right-0 left-0 w-full 
                scale-100 group-hover:scale-125 min-h-[167px] rounded-md 
                overflow-hidden border-none outline-none 
                ease-in transition-all duration-200 delay-500
                z-20
            ">
                <img
                    src={video.desktop_banner}
                    className="w-full object-cover"
                    alt={video.title}
                />
                <div className="bg-[#181818]">
                    HI
                </div>
            </div>
        </div>
        

    );
};

export default ActorThumbnail;

