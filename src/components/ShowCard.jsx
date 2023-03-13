import React, { useState } from 'react'
import { BsChevronDown, BsFillPlayFill, BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/ModalAtom';

const ShowCard = ({data}) => {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    const [addedToFavourites, setAddedToFavourites] = useState(false)
  return (
    <div className='group relative h-[24vw] md:h-[12vw] pr-3'>
        <img 
            onClick={() => {
                setCurrentMovie(data);
                setShowModal(true);
            }}
            className='cursor-pointer object-cover transition duration-200 shadow-xl md:group-hover:opacity-0 delay-300 w-full h-[20vw] md:h-[10vw]'
            src={data.desktop_banner} alt="thumbnail" />

        <div className='opacity-0 absolute top-0 transition duration-200 
        z-10 invisible sm:visible delay-300 w-full scale-0 
        group-hover:scale-110 group-hover:-translate-y-[6vw] 
        group-hover:translate-x-[2vw] group-hover:opacity-100
        

        '>
            <img 
                className='
                cursor-pointer object-cover transition duration shadow-xl
                rounded-t-md w-full h-[24vw] md:h-[12vw]
                '
                src={data.desktop_banner} alt="thumbnail" />
                <div className='z-10 bg-zinc-900 p-2 lg:p-6 absolute w-full transition shadow-md rounded-b-md cursor-pointer'>
                    <div className='flex flex-row items-center gap-3 justify-between'>
                        <div className='flex gap-2 items-center'>
                            <div 
                                onClick={() => {
                                    window.location.href = `/browse/show/${data.id}`
                                }}
                                className='cursor-pointer w-6 h-6 lg:h-10 lg:w-10 rounded-full flex justify-center items-center transition bg-white hover:bg-neutral-300'
                                >
                                    <BsFillPlayFill
                                        className='text-black' 
                                        size={30} 
                                    />
                            </div>

                            <div
                                onClick={() => setAddedToFavourites(prev => !prev)} 
                                className='cursor-pointer w-6 h-6 lg:h-10 lg:w-10 rounded-full flex justify-center items-center transition bg-transparent border'>
                                {addedToFavourites ? <AiOutlineCheck /> : <AiOutlinePlus />}
                            </div>
                        </div>
                        

                        <div className='cursor-pointer w-6 h-6 lg:h-10 lg:w-10 rounded-full flex justify-center items-center transition bg-transparent border'
                            onClick={() => {
                                setCurrentMovie(data);
                                setShowModal(true);
                            }}
                        >
                            <BsChevronDown />
                        </div>
                        
                    </div>

                    <p className="text-green-400 mt-2"> <span className='text-white'>{(new Date(data?.date_uploaded)).getFullYear()}</span></p>

                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[16px] lg:text-sm font-bold">{data?.title}</p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        {data.genres.map((genre, index) => (
                            <p className="text-white text-[10px] lg:text-sm" key={index}>
                                {genre}
                                {data.genres?.length - 1 === index ? "" : " • "}
                            </p>
                        ))}
                    </div>
                </div>
        </div>
    </div>
  )
}





export default ShowCard


