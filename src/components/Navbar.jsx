import React, {useEffect, useState, useRef} from 'react'
import { images } from '../assets';

const Navbar = () => {
  const [navbarBG, setNavbarBG] = useState('nav-scroll-up');
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null)

  // w-[300px]
  const [searchWidth, setSearchWidth] = useState(false);

  useEffect(() => {
    let navScroll = window.addEventListener('scroll', () => {
      if (window.scrollY > 0){
        setNavbarBG('nav-scroll-down')
      } else {
        setNavbarBG('nav-scroll-up')
      }
    })

    return () => window.removeEventListener('scroll', navScroll)
    
  }, [])

  const onClick = (e) => {
    
    setSearchWidth(true)
    inputRef.current.focus()
  }

  const onBlur = (e) => {
    setSearchWidth(false)
  }

  return (
    <div className="h-[70px] z-50 fixed left-0 right-0 top-0 w-full">
      <div className={`${navbarBG} top-navbar px-[4%] py-0 z-[2] flex items-center`}>
        
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <img className='h-[25px]' src={images.logo} alt="" />
          <ul className='flex items-center gap-3'>
            <li className='md:hidden flex justify-center items-center'> <a className='text-[0.65rem] lg:text-[.9rem] text-center text-[#e5e5e5] h-full duration-200 transition-all cursor-pointer' href="#">Browse</a></li>
            <li className='hidden md:flex justify-center items-center'> <a className='text-[0.65rem] lg:text-[.9rem] text-center text-[#e5e5e5] h-full duration-200 transition-all cursor-pointer' href="#">Home</a></li>
            <li className='hidden md:flex justify-center items-center'> <a className='text-[0.65rem] lg:text-[.9rem] text-center text-[#e5e5e5] h-full duration-200 transition-all cursor-pointer' href="#">TV Series</a> </li>
            <li className='hidden md:flex justify-center items-center'> <a className='text-[0.65rem] lg:text-[.9rem] text-center text-[#e5e5e5] h-full duration-200 transition-all cursor-pointer' href="#">Movies</a></li>
            <li className='hidden md:flex justify-center items-center'> <a className='text-[0.65rem] lg:text-[.9rem] text-center text-[#e5e5e5] h-full duration-200 transition-all cursor-pointer' href="#">News & Popular</a></li>
            <li className='hidden md:flex justify-center items-center'> <a className='text-[0.65rem] lg:text-[.9rem] text-center text-[#e5e5e5] h-full duration-200 transition-all cursor-pointer' href="#">My List</a></li>
            <li className='hidden md:flex justify-center items-center'> <a className='text-[0.65rem] lg:text-[.9rem] text-center text-[#e5e5e5] h-full duration-200 transition-all cursor-pointer' href="#">Browse by Languages</a></li>
          </ul>
        </div>

        <div className="flex items-center w-[50%] justify-end absolute top-1/2 right-[4%] -translate-y-[50%] flex-1 gap-5">
          <div  className={`absolute right-[100px] sm:static transition-[width] duration-500 rounded-sm ease-in-out flex items-center  h-9 ${searchWidth ? "w-[250px] border bg-black" : "w-[33px] border-0 bg-transparent"} `}>
            <div className='p-1 flex items-center justify-center'>
              <images.Search extraStyle="w-6" onClick={onClick} />
            </div>
            <input onBlur={onBlur} ref={inputRef} type="text" placeholder='Title, people, genres' className='text-[0.7rem] bg-transparent w-full outline-none h-full placeholder:font-light placeholder:text-[#9a9a9a]' />
          </div>
          
          <images.Bells extraStyle='w-6 shrink-0' />
          <div className="flex items-center justify-center">
            <img src={images.avatar} className="w-6" alt="" />
            <span className='caret'></span>
          </div>

        </div>

      </div>
    </div>
    
  )
}

export default Navbar