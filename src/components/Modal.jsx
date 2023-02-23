import React, { useEffect, useState } from 'react'
import MUIModal from '@mui/material/Modal';
// import { shouldForwardProp } from '@mui/styled-engine';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/ModalAtom';
import { API_KEY } from '../utils/requests';

const VidoeModal = () => {
    // const [showModal, setShowModal] = useRecoilState(modalState);
    // const [movie, setMovie] = useState(null);
    // const [trailer, setTrailer] = useState('')

    // const [muted, setMuted] = useState(true)
    // const [genres, setGenres] = useState([])
    // const [addedToList, setAddedToList] = useState(false)

    const [movie, setMovie] = useRecoilState(movieState)
    const [trailer, setTrailer] = useState('')
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [muted, setMuted] = useState(true)
    const [genres, setGenres] = useState([])
    const [addedToList, setAddedToList] = useState(false)
    const [movies, setMovies] = useState([])

    const handleClose = () => {
        setShowModal(false)
    }

    useEffect(() => {
    //   if (!movie) return
        
      async function fetchMovie() {
        const data = await fetch(
          `https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
          }/${movie?.id}?api_key=${
            API_KEY
          }&language=en-US&append_to_response=videos`
        ).then((response) => response.json())
        if (data.videos) {
            console.log(data)
          const index = data.videos.results.findIndex(
            (element) => element.type === 'Trailer'
          )
          setTrailer(data.videos?.results[index]?.key)
        }
        if (data?.genres) {
          setGenres(data.genres)
        }
      }
  
      fetchMovie()
    }, [movie])
    

    return (
        <MUIModal open={showModal} onClose={handleClose}>
            <>
            <button className='modal-button absolute right-5 top-5 z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'>
                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div>

            </div>
            </>
        </MUIModal>
    )
}

export default VidoeModal


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
