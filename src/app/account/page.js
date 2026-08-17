"use client"
import { useAuth } from "../context/AuthContext"
import Link from "next/link"
import { supabase } from "../lib/supabaseClient"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Account() {
    const router = useRouter()
    const { user } = useAuth()
    const [measurements, setMeasurements] = useState()

    useEffect(() => {
        if (!user) {
            return
        }

        async function fetchMeasurements() {
            const { data } = await supabase.from("measurements")
                .select("*")
                .eq("user_id", user.id)
                .order("created_at", { ascending: false })
                .limit(1)
                .single()
            setMeasurements(data)
            console.log(data)
        }
        fetchMeasurements()
    }, [user])

    if (!user) {
        return <p className="text-2xl font-alt py-16 center mx-auto">Login to view your account</p>
    }

    async function handleLogout() {
        await supabase.auth.signOut()
        router.push("/")
    }
    return (
        <main className="h-screen w-full max-w-md mx-auto px-4 py-4">
            <h1 className="text-2xl font-alt font-bold">My profile</h1>
            <p className="font-text">{user.email}</p>

            <h1 className="font-text text-lg font-semibold text-gray-500 mt-4">Saved Measurement</h1>
            <div className="">
                <div className="grid grid-cols-2 gap-3 text-left">
                    {["chest", "shoulder", "sleeve", "neck", "waist", "hip", "trouserlength", "height"].map((key) => (
                        <div key={key}>
                            <p className="capitalize font-alt text-sm text-gray-500">{key.replace("_", " ")}</p>
                            <p className="font-body text-gray-900 border border-gray-200 rounded-full px-5 py-2 mt-1">
                                {measurements[key]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleLogout} className="py-3 font-text w-full rounded-full border border-red-700 bg-red-100 text-red-700 mt-8">Log Out</button>
        </main>
    )
}