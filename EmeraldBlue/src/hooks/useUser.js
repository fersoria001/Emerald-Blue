import { useCallback, useContext } from "react";
import Context from "../context/UserContext"; 

export default function useUser(){
    
    const {jwt, setJWT}= useContext(Context)

    const login = useCallback(() =>{
        setJWT('test')
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}