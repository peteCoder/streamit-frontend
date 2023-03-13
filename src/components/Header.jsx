import { useEffect, useState } from "react";
import { images } from "../assets";
import { useAuthContext } from "../context/useAuthContext";
import { useFetchUserProfile } from "../hooks/useFetchUserProfile";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const {logOut} = useAuthContext()

  const {currentUser} = useFetchUserProfile()

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
        <Link to="/">
        <img
          src={images.tslLogo}
          alt="netflix"
          className="cursor-pointer object-contain w-14 sm:w-16 md:w-[120px]"
        />
        </Link>


        <ul className="hidden space-x-4 md:flex">
          <Link to="/" className="headerLink">Home</Link>
          <Link to="/browse" className="headerLink">Browse</Link>
          <Link to="/shows" className="headerLink">Shows</Link>
          <Link to="/list/shows" className="headerLink">My List</Link>
        </ul>
      </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <span onClick={() => logOut()}>
            <img
              src="/img/netPNG.png"
              alt=""
              className="cursor-pointer rounded h-5 w-5 sm:h-7 sm:w-7"
            />
          </span>

        </div>
    </header>
  );
};

export default Header;