"use client"
import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message)
        }
        else {
            setError("")
            router.push("/account")
        }

    }
    return (
        <main className="w-screen max-w-md my-auto mx-auto py-8 px-4">
            <h1 className="text-3xl text-center font-medium font-alt mb-4">Login to Account</h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    placeholder="Email"
                    value={email}
                    type="email"
                    className="py-2.5 px-4 rounded-full border border-black/50 outline-0"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={password}
                    type="password"
                    className="py-2.5 px-4 rounded-full border border-black/50 outline-0"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="py-2 text-center bg-red-100 border border-red-700 text-red-700 rounded-xl">{error}</p>}
                <button type="submit" className="py-3 text-black bg-black/10 border border-black  rounded-full">
                    Log In
                </button>
            </form>
        </main>
    )
}