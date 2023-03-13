import React, { useEffect, useState } from "react";
import MUIModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/ModalAtom";
import { API_KEY } from "../utils/requests";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

const VidoeModal = () => {
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [muted, setMuted] = useState(true);
  const [genres, setGenres] = useState([]);
  const [addedToList, setAddedToList] = useState(false);
  const [movies, setMovies] = useState([]);
  const [showYTVideo, setShowYTVideo] = useState(false);
  const [playYTVideo, setPlayYTVideo] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setMovie(null);
  };

  const handleList = () => {
    setAddedToList((prev) => !prev);
  };

  useEffect(() => {
    //   if (!movie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${
          movie?.id
        }?api_key=${API_KEY}&language=en-US&append_to_response=videos`
      ).then((response) => response.json());
      if (data.videos) {
        console.log(data);
        const index = data.videos.results.findIndex(
          (element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  // Check if the movie is already in the user's list
  useEffect(
    () =>
      setAddedToList(
        movies.findIndex((result) => result.data().id === movie?.id) !== -1
      ),
    [movies]
  );

  useEffect(() => {
    const timer = () => {
      setShowYTVideo(true);
    };
    setTimeout(timer, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MUIModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-[850px] overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="modal-button absolute right-5 top-5 z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="relative pt-[56.25%]">
          {/* Thumbnail Loadinging here...  */}
          <img
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            src={movie?.desktop_banner}
          />
          {showYTVideo && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${movie.video_link}`}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              playing
              muted={muted}
              controls
            />
          )}

          {showYTVideo && (
            <div className="absolute bottom-28 flex w-full items-center justify-between px-5">
              <div className="flex space-x-2">
                <button className="modalButton" onClick={handleList}>
                  {addedToList ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </button>
                <button className="modalButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </button>
              </div>
              <button className="modalButton" onClick={() => setMuted(!muted)}>
                {muted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col rounded-b-md bg-[#181818] px-10 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2rem] md:gap-[5rem]">
            <div className="">
              <div className="flex items-center gap-2">
                {movie?.manual_views ? (
                  <span className="text-[#46d369] ">{movie?.manual_views} Views</span>
                ) : (
                  <></>
                )}
                
                <span className="">{(new Date(movie?.date_uploaded)).getFullYear()}</span>
                <span className="border border-[hsla(0,0%,100%,.4)] text-ellipsis uppercase overflow-hidden px-[0.4rem] py-0">
                  {movie?.rating}
                </span>
              </div>
              <div className="leading-[24px] text-[14px] mt-2 font-light">
                {movie?.description}
              </div>
            </div>

            <div className="flex flex-col gap-[0.4rem]">
              {/* Cast */}
              <div className="">
                <span className="text-[#777] text-[14px]">Cast:</span>{" "}
                {movie?.actors?.map((actor, index) => (
                  <div
                    className="inline"
                    onClick={() => {
                      handleClose();
                      window.location.href = `/actor/${actor.id}`;
                    }}
                  >
                    <span
                      key={actor.id}
                      className="text-[#fff] text-[14px] font-light cursor-pointer bg-transparent hover:underline"
                    >
                      {actor.name}
                    </span>
                    <span>
                      {movie?.actors?.length - 1 === index ? "." : ", "}
                    </span>
                  </div>
                ))}
              </div>
              {/* Genre */}
              <div className="">
                <span className="text-[#777] text-[14px]">Genre:</span>{" "}
                {movie?.genres?.map((genre, index) => (
                  <span
                    key={index}
                    className="text-[#fff] text-[14px] font-light cursor-pointer bg-transparent"
                  >
                    {genre}
                    {movie?.genres?.length - 1 === index ? "." : ", "}
                  </span>
                ))}
              </div>
              {/* Mood */}
              <div className="">
                <span className="text-[#777] text-[14px]">This show is:</span>{" "}
                {movie?.mood?.map((mood, index) => (
                  <span
                    key={index}
                    className="text-[#fff] text-[14px] font-light cursor-pointer bg-transparent"
                  >
                    {mood}
                    {movie?.mood?.length - 1 === index ? "." : ", "}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {movie.more_like_this && (
            <div>
            {/* More Like This */}
            <h3 className="mb-[20px] mt-[48px] text-[24px]">More Like This</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-3">
              {/* Delete one of these... */}
              {movie?.more_like_this?.map((video, index) => (
                <div className="bg-[#2f2f2f] h-full min-h-[22em] m-[0.1em] rounded-t-lg rounded-b-lg overflow-hidden">
                  <div className="relative image-opacity h-[220px] md:h-[200px] group cursor-pointer" onClick={() => {
                    window.location.href = `/browse/show/${video?.id}`
                  }}>
                    <img
                      className="w-full h-full object-cover"
                      src={video?.desktop_banner}
                      alt={video?.title}
                    />
                    <div className="play-button md:invisible md:group-hover:visible cursor-pointer h-12 w-12 rounded-full border-[2px] flex justify-center items-center">
                      <FaPlay className="h-4 w-4 md:h-5 md:w-5 text-white" /> 
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="p-[16px] flex items-center justify-between">
                      {/* First part */}
                      <div className="flex flex-col">

                        {video?.manual_views ? (
                          <span className="text-[#46d369] ">{video?.manual_views} Views</span>
                        ) : (
                          <></>
                        )}
                        <div className="">
                          <span className="border border-[hsla(0,0%,100%,.4)] text-white text-ellipsis uppercase overflow-hidden px-[0.4rem] pt-1">
                            <span>{movie?.rating}</span>
                          </span>
                          <span className="ml-2">{(new Date(video?.date_uploaded)).getFullYear()}</span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center border max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="px-[16px]">
                      <p className="font-light pb-[20px]">
                        {video?.description}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
          



          <h3 className="mb-[20px] mt-[48px] text-[30px]">
            <span className="font-light">About</span>{" "}
            <span className="font-bolder">{movie?.title}</span>
          </h3>
          {/* Actors/Casts */}
          <div>
            <div className="">
              <span className="text-[#777] text-[14px]">Cast:</span>{" "}
              {movie?.actors?.map((actor, index) => (
                <div
                  className="inline"
                  onClick={() => {
                    handleClose();
                    window.location.href = `/actor/${actor.id}`;
                  }}
                >
                  <span
                    key={actor.id}
                    className="text-[#fff] text-[14px] font-light cursor-pointer bg-transparent hover:underline"
                  >
                    {actor.name}
                  </span>
                  <span>
                    {movie?.actors?.length - 1 === index ? "." : ", "}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Director */}
          <div>
            <div className="">
              <span className="text-[#777] text-[14px]">Director:</span>{" "}
              <div
                className="inline"
                onClick={() => {
                  handleClose();
                  window.location.href = `/director/${movie.director.id}`;
                }}
              >
                <span
                  key={movie.director.id}
                  className="text-[#fff] text-[14px] font-light cursor-pointer bg-transparent hover:underline"
                >
                  {movie?.director?.name}
                </span>
                <span>.</span>
              </div>
            </div>
          </div>

          {/* Genre */}
          <div className="">
            <span className="text-[#777] text-[14px]">Genre:</span>{" "}
            {movie?.genres?.map((genre, index) => (
              <span
                key={index}
                className="text-[#fff] text-[14px] font-light bg-transparent"
              >
                {genre}
                {movie?.genres?.length - 1 === index ? "." : ", "}
              </span>
            ))}
          </div>
          {/* Mood */}
          <div className="">
            <span className="text-[#777] text-[14px]">This show is:</span>{" "}
            {movie?.mood?.map((mood, index) => (
              <span
                key={index}
                className="text-[#fff] text-[14px] font-light bg-transparent"
              >
                {mood}
                {movie?.mood?.length - 1 === index ? "." : ", "}
              </span>
            ))}
          </div>
        </div>
      </>
    </MUIModal>
  );
};

export default VidoeModal;
