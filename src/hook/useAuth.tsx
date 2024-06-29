import { createContext, useState, useContext, useEffect } from 'react'
import { supabase } from '../services/lib/supabase'

const AuthContext = createContext()

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState()

    useEffect(() => {
        const user = supabase.auth.getUser()
        if (user) {
            setUser(user)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}