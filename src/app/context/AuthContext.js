"use client"
import { useState, createContext, useEffect, useContext } from "react"
import { supabase } from "../lib/supabaseClient"

const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function checkUser() {
            const { data } = await supabase.auth.getUser()
            setUser(data.user)
        }
        checkUser()

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null)
        })
        
        return () => listener.subscription.unsubscribe()
    }, [])
    return (
        <AuthContext.Provider value={{user}} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}