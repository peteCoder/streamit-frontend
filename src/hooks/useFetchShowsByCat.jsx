import { useEffect, useState } from "react";
import { BACKEND_BASE_URL, fetchOptions } from "../utils/requests";


export const useFetchShowsByCat = () => {

    const [showsByCat, setShowsByCat] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchShowsByCat = async () => {
            try {
                setIsLoading(true)
                const fetchShow = fetch(`${BACKEND_BASE_URL}api/categories/`, fetchOptions)
                const finalShows = await (await fetchShow).json()
                setShowsByCat(finalShows)
                setIsLoading(false)
            } catch (error) {   
                console.log(error)
            }
        }
        fetchShowsByCat()


    }, [])


    return {
        showsByCat
    }
}
