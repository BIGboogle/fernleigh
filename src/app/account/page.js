"use client"
import { useAuth } from "../context/AuthContext"
import Link from "next/link"
import { supabase } from "../lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function Account() {
    const router = useRouter()
    const { user } = useAuth()

    if (!user) {
        return (
            <div className="min-h-[80vh] px-4 w-screen max-w-md text-center flex flex-col mx-auto justify-center">
                <h1 className="text-2xl font-alt font-semibold mt-2">You are not Signed in</h1>
                <p className="font-text">Login to fernLeigh to Book fittings</p>
                <Link href="/login" className="py-2.5 w-full border border-black/50 rounded-full mt-5 font-text">Login</Link>
            </div>
        )
    }

    async function handleLogout() {
        await supabase.auth.signOut()
        router.push("/")
    }
    return (
        <main className="h-screen w-full flex flex-col max-w-md mx-auto px-4 py-4 pt-18">
            <h1 className="text-2xl font-alt ">My profile</h1>
            <p className="font-text text-sm mb-8">{user.email}</p>
            <button onClick={handleLogout} className="py-3 font-text w-full rounded-full border border-red-700 bg-red-100 text-red-700 mt-auto">Log Out</button>
        </main>
    )
}