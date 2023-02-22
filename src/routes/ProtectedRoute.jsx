import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("user"))

    const navigaite = useNavigate();

    useEffect(() => {
        if (!user) {
            navigaite('/login')
        } else {
            navigaite('/browse')
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute;