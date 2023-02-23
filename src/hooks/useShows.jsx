import {useState, useEffect} from 'react';
import {fetchOptions, MyShowsRequest} from '../utils/requests';



export const useShows = () => {

    const initailState = {
        showsByPlayList: [],
        showsByCategory: [],
        showsByVideos: []
    }

    


    const [shows, setShows] = useState(
        initailState
    );

    useEffect(() => {
        const fetchShows = async () => {
            const [
                showsByPlayList,
                showsByCategory,
                showsByVideos
            ] = await Promise.all([
                fetch(MyShowsRequest.showsByPlayList, fetchOptions).then(res => res.json()),
                fetch(MyShowsRequest.showsByCategory, fetchOptions).then(res => res.json()),
                fetch(MyShowsRequest.showsByVideos, fetchOptions).then(res => res.json()),
            ])

            console.log(typeof showsByPlayList)
        
            setShows({
                showsByPlayList,
                showsByCategory,
                showsByVideos,
            })
        }

        fetchShows()

    }, [])


    return {shows}

}










