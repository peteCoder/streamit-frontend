import React, { useEffect, useState } from 'react'
import { BACKEND_BASE_URL } from '../utils/requests'


export const useFetchDirector = (id) => {

    const [director, setDirector] = useState({})

    useEffect(() => {
        const getDirector = async () => {
            try {
                const fetchedDirector = await fetch(`${BACKEND_BASE_URL}api/directors/${id}/`)
                const finalResults = await (await fetchedDirector.json())
                setDirector(finalResults)
            } catch (error){
                console.log(error)
            }
        }

        getDirector()
        
    }, [id])

    return {
        director
    }
}

