import { useEffect, useState } from "react";
import { images } from "../assets";
import { useAuthContext } from "../context/useAuthContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const {logOut} = useAuthContext()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0){
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
    
  }, [])
  

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src={images.tslLogo}
          alt="netflix"
          className="cursor-pointer object-contain w-14 sm:w-16 md:w-[120px]"
        />

        <ul className="hidden space-x-4 md:flex">
          <a href="/" className="headerLink">Home</a>
          <a href="/shows" className="headerLink">Shows</a>
          <a href="/list/shows" className="headerLink">My List</a>
        </ul>
      </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <span onClick={() => logOut()}>
            <img
              src="/img/netPNG.png"
              alt=""
              className="cursor-pointer rounded h-5 w-5 sm:h-8 sm:w-8 md:w-10 md:h-10"
            />
          </span>

        </div>
    </header>
  );
};

export default Header;