"use client"

import { authPayloadType } from "@/types/auth.types";
import { authResponseType } from "@/types/response.types";
import { roles } from "@/types/user.types";
import { useRouter } from "next/navigation";
import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";

type AuthStateType = {
    auth: authPayloadType | null;
    setAuth: (auth:authPayloadType | null) => void
    login: (payload: authResponseType) => void
    logout:  () => void
    isAuthenticated: boolean
    isLoading: boolean
};



const AuthContext = createContext<AuthStateType | null>(null);

export const AuthProvider: FC<PropsWithChildren> = ({children}) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const [auth, setAuth] = useState<authPayloadType | null>(null)

    
    // setea el localStorage, auth y redirige al dashboard
    const login = useCallback((authResponse: authResponseType) =>{
        
        const { userName, role } = authResponse.user
        const token = authResponse.data.token
        
        localStorage.setItem("token", token);
        localStorage.setItem("user", userName);
        localStorage.setItem("role", role);
        setAuth({ token, user: { userName, role } })
        router.push("/links");
    },[router, setAuth])


    // borra el localStorage, borra el estado de auth y redirige al login
    const logout = useCallback(()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        setAuth(null)
        router.push("/");
    },[router])

    // si hay user en auth, está autenticado
    const isAuthenticated = !!auth?.user

    // Este useEffect persiste la sesión cuando se recarga la pagina, levantando los datos del localStorage
    useEffect(() => {
        const storedUserName = localStorage.getItem("user");
        const storedRole = localStorage.getItem("role");
        const storedToken = localStorage.getItem("token");
        setIsLoading(false)

        // console.log("Datos desde localStorage:", { storedUserName, storedRole, storedToken });

        if (storedUserName && storedRole && storedToken) {
            setAuth({
                        token: storedToken,
                        user: { 
                            userName: storedUserName, 
                            role: storedRole as roles
                        }});
        }
    }, []);

    
    const value = useMemo(()=>{
        return {
                    auth,
                    setAuth,
                    login, 
                    logout,
                    isAuthenticated,
                    isLoading
                }
    },[auth, setAuth, login, logout, isAuthenticated, isLoading])

    return <AuthContext.Provider value={value}>{children}</ AuthContext.Provider>
}


export const useAuthContext = () =>{
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("El useAuthContext se debe usar en un componente alcanzado por el provider de auth")
    }

    return context
}

