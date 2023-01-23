import { useCallback, useContext } from "react";
import Context from "../context/UserContext"; 
import { login } from "../services/login_service"
export default function useUser(token){
    
    const {jwt, setJWT}= useContext(Context)

    const login = function(token){
        setJWT(token)
    }

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}