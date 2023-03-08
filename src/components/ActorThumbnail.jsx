import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";

const ActorThumbnail = ({ video }) => {
    const [showModal, setShowModal] = useRecoilState(modalState)

    return (
        <div
            onClick={() => {
            setCurrentMovie(video);
            setShowModal(true);
            }}
            key={video.id}
            className="w-[257px] h-[167px] bg-[#76777A] rounded-md scale-100 hover:scale-[1.05] cursor-pointer overflow-hidden transition-all duration-150 relative"
        >
            <img
                src={video.desktop_banner}
                className="w-full h-full object-cover"
                alt={video.title}
            />
        </div>

    );
};

export default ActorThumbnail;

