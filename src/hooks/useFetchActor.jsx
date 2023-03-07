import {useState, useEffect} from 'react'
import { BACKEND_BASE_URL } from '../utils/requests'

export const useFetchActor = (id) => {
    const [actor, setActor] = useState({})

    useEffect(() => {
        const getActor = async () => {
            try {
                const fetchedActor = await fetch(`${BACKEND_BASE_URL}api/actors/${id}/`)
                const finalResults = await (await fetchedActor.json())
                setActor(finalResults)
            } catch (error){
                console.log(error)
            }
        }

        getActor()
        
    }, [id])
    
    return {
        actor
    }
}





