"use client"
import { useAuth } from "../context/AuthContext"
import Link from "next/link"

export default function Account() {
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
    return (
        <main className="min-h-screen px-4 py-4">
        </main>
    )
}