import { 
    useState, 
    useEffect, 
    useContext, 
    createContext, 
    useMemo 
} from "react";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { BACKEND_BASE_URL } from "../utils/requests";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

const UserAuthContext = createContext({
    logIn: async () => {},
    signIn: async () => {},
    logOut: async () => {}
});

export const UserAuthContextProvider = ({children}) => {

    const [userToken, setUserToken] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
            setLoading(true)
            setTimeout(() => {
                localStorage.setItem("user", JSON.stringify(userToken));
                navigate("/browse")
                setLoading(false)
            }, 2000)
            
        }
    }, [userToken, loading])

    // SignIn
    const signIn = async (username, email, password) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password, re_password: password})
        }
        fetch(`${BACKEND_BASE_URL}users/`, options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
            .finally(() => console.log("Request ended"))
    }

    // Login
    const logIn = async (email, password) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password})
        }

        fetch(`${BACKEND_BASE_URL}auth/jwt/create/`, options)
            .then(response => response.json())
            .then(data => {
                setLoading(true)
                if (data.access && data.refresh) {
                    setLoading(false)
                    setError("")
                    setUserToken(data)
                } else {
                    const errorDetails = data.error.details.detail
                    alert(JSON.stringify(errorDetails))
                    if (errorDetails){
                        setLoading(false)
                        setError(data.error.details.detail)
                    }
                }
            })
            .catch(error => console.log(error))
            .finally(() => {
                console.log("Request ended");
                setLoading(false)
            })
    }

    // auth/jwt/create/
    // Logout
    const logOut = async () => {
        localStorage.removeItem("user");
        navigate("/login");

    }

    return (
        <UserAuthContext.Provider value={{signIn, logIn, logOut, error, loading}}>
            {children}
        </UserAuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(UserAuthContext);
}






