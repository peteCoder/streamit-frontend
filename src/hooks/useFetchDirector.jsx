import React, { useEffect, useState } from 'react'
import { BACKEND_BASE_URL, fetchOptions } from '../utils/requests'


export const useFetchDirector = (id) => {

    const [director, setDirector] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getDirector = async () => {
            try {
                setIsLoading(true)
                const fetchedDirector = await fetch(`${BACKEND_BASE_URL}api/directors/${id}/`, fetchOptions)
                const finalResults = await (await fetchedDirector.json())
                setDirector(finalResults)
                setIsLoading(false)
            } catch (error){
                console.log(error)
            }
        }

        getDirector()
        
    }, [id])

    return {
        director,
        isLoading
    }
}

