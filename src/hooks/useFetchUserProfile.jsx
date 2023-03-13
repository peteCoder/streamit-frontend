import React, { useEffect, useState } from 'react'
import { BACKEND_BASE_URL, fetchOptions } from '../utils/requests'


export const useFetchUserProfile = () => {

    const [favouritesVideos, setFavouritesVideos] = useState({})
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const fetchedActor = await fetch(`${BACKEND_BASE_URL}auth/users/me/`, fetchOptions)
                const finalResults = await (await fetchedActor.json())
                setCurrentUser(finalResults)
                localStorage.setItem('user_profile', JSON.stringify(finalResults))
            } catch (error){
                console.log(error)
            }
        }

        

        
        getCurrentUser()
        
        
    }, [currentUser])

    return {
        currentUser
    }
}