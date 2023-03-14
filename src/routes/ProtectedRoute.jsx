import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("user"))

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        } else {
            navigate('/browse')
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute;