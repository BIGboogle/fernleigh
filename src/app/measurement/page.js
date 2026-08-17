"use client"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"
import { Info } from "lucide-react"

export default function Measurement() {

    const { user } = useAuth()
    const router = useRouter()

    useEffect(()=> {
        if (user === null) {
            router.push("/login")
        }
    }, [user, router])

    
    const [submitted, setSubmitted] = useState(false)

    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(measurements)
        setSubmitted(true)
    }

    if (submitted) {
        return <p className="text-center text-2xl font-alt py-16">Thank you. Your measurements has been received</p>
    }
    if (!user) {
        return null
    }
    return (
        <main className=" max-w-md mx-auto font-text py-16">
            <form className="grid grid-cols-2 gap-4 font-text" onSubmit={handleSubmit}>
                
            </form>
        </main>
    )
}