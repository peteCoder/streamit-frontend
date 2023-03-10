import {useState, useEffect} from 'react'
import { BACKEND_BASE_URL, fetchOptions } from '../utils/requests'

export const useFavouritesVideos = () => {
    const [favouritesVideos, setFavouritesVideos] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                setIsLoading(true)
                const fetchedActor = await fetch(`${BACKEND_BASE_URL}auth/users/me/`, fetchOptions)
                const finalResults = await (await fetchedActor.json())
                setCurrentUser(finalResults)
                setIsLoading(false)
            } catch (error){
                console.log(error)
            }
        }

        getCurrentUser()
        
        
    }, [])
    
    return {
        isLoading,
        favouritesVideos,
        currentUser
    }
}
