import React, { useEffect, useState } from "react";
import { getUserProfile } from "../utils/getUserProfile";
import { BACKEND_BASE_URL, fetchOptions } from "../utils/requests";
import VidoeModal from "../components/Modal";


import ShowCard from '../components/ShowCard'
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";
import Header from "../components/Header";

function MyList() {
  const [profileUser, setProfileUser] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [showModal, _] = useRecoilState(modalState)

  // get user profile from localStorage
  const userProfile = getUserProfile();

  useEffect(() => {
    const getFavourites = async () => {
      try {
        setIsLoading(true);
        const fetchedProfile = await fetch(
          `${BACKEND_BASE_URL}api/profiles/${userProfile.id}/`,
          fetchOptions
        );
        const finalResults = await await fetchedProfile.json();
        setProfileUser(finalResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFavourites();
  }, [userProfile.id]);

  console.log(profileUser)

  if (isLoading) {
    return (
      <div className="w-full h-screen min-h-screen flex items-center justify-center">
        <img src={"/img/tsl-logo.gif"} alt="" />
      </div>
    );
  }
  return (
    <div>
      <Header />

      <div className="bg-[url('/img/linear.png')] bg-cover md:bg-center min-h-[120vh] w-full p-6 pt-24 md:p-20 md:pt-28">
        <div className="flex flex-col md:flex-row gap-[33px]"></div>
        {profileUser?.favourite_videos?.length !== 0 ? (
          <div className="">
             <div className="mt-10 flex flex-col gap-7 justify-center items-center md:items-start md:justify-start">
              <div className="text-2xl">Featured Shows</div>
              <div className="flex flex-wrap gap-5 justify-center items-center md:items-start md:justify-start">
                {profileUser?.favourite_videos?.map((show) => (
                  <ShowCard key={show.id} data={show} />
                ))}
              </div>
            </div>
          </div>
        ) : <div>No Favourites shows</div>}
      </div>

      {/* Modal */}
      {showModal && <VidoeModal />}
    </div>
  );
}

export default MyList;
