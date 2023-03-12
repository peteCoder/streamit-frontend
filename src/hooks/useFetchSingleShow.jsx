import React, { useEffect, useState } from 'react'
import { BACKEND_BASE_URL, fetchOptions } from '../utils/requests'


export const useFetchSingleShow = (id) => {

    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getShow = async () => {
            try {
                setIsLoading(true)
                const fetchedMovie = await fetch(`${BACKEND_BASE_URL}api/videos/${id}/`, fetchOptions)
                const finalResults = await (await fetchedMovie.json())
                setMovie(finalResults)
                setIsLoading(false)
            } catch (error){
                console.log(error)
            }
        }

        getShow()
        
    }, [id])

    return {
        movie,
        isLoading
    }
}

