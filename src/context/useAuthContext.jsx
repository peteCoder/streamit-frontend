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
    signUp: async () => {},
    logOut: async () => {}
});

export const UserAuthContextProvider = ({children}) => {

    const [userToken, setUserToken] = useState(null);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [token, setToken] = useState(null)

    useEffect(() => {
        if (userToken) {
            setLoading(true)
            // Set userToken before navigation
            localStorage.setItem("user", JSON.stringify(userToken));
            setToken(JSON.parse(localStorage.getItem("user")))
            setTimeout(() => {
                window.location.reload()
                navigate("/browse")
                setLoading(false)
            }, 2000)
            
        }
    }, [userToken, loading])

    // signUp
    const signUp = async (username, email, password) => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password, password2: password})
        }
        await fetch(`${BACKEND_BASE_URL}api/user/`, options)
            .then(response => response.json())
            .then(data => {
                
                setLoading(true)
                if (data.status_code === 201){
                    setSuccessMessage(data.detail)
                    setLoading(true)
                    setError("")
                    setTimeout(() => {
                        setLoading(false)
                        setSuccessMessage("")
                        navigate('/login')
                    }, 2000)
                } else {
                    setSuccessMessage("")
                }

                if (data.error) {
                    setError(data.error.details.email[0])
                    setLoading(false)
                    setSuccessMessage("")
                } else {
                    setError("")
                    setLoading(false)
                }
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }

    // Login
    const logIn = (email, password) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password})
        }

        fetch(`${BACKEND_BASE_URL}auth/token/login/`, options)
            .then(response => response.json())
            .then(data => {
                setLoading(true)
                if (data.auth_token){
                    setLoading(false)
                    setError("")
                    setUserToken(data)
                } else {
                    setLoading(false)
                    if (data.error.details.non_field_errors[0]){
                        setError("Wrong user name and password.")
                    }
                    
                }
            })
            .catch(error => console.log(error))
            .finally(() => {
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
        <UserAuthContext.Provider value={{
            signUp, 
            logIn, 
            logOut, 
            error, 
            loading, 
            successMessage,
            token
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(UserAuthContext);
}






