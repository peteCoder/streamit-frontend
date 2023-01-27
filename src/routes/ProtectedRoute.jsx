import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [user, setUser] = useState(true)

    const navigaite = useNavigate();

    useEffect(() => {
        if (!user) navigaite('/login');
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute;