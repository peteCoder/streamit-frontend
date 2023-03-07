import { useEffect, useState } from "react";
import { BACKEND_BASE_URL, fetchOptions } from "../utils/requests";


export const usefetchShows = () => {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const fetchShow = fetch(`${BACKEND_BASE_URL}api/videos`, fetchOptions)
                const finalShows = await (await fetchShow).json()
                setShows(finalShows)

            } catch (error) {   
                console.log(error)
            }
        }
        fetchShows()


    }, [])


    return {
        shows
    }
}



