"use client"
import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Link from "next/link"

export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    async function handleSubmit(e) {
        if (!email || !password) {
            return
        }
        e.preventDefault()
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            setError(error.message)
        }
        else{
            setError("")
            setSuccess("Account created. Check your Email for verification")
        }

    }
    return (
        <main className="w-screen max-w-md my-auto mx-auto py-8 px-4">
            <h1 className="text-3xl text-center font-medium font-alt mb-4">Create Account</h1>

            <form className="flex flex-col gap-4 font-text" onSubmit={handleSubmit}>
                <input
                    placeholder="Email"
                    value={email}
                    type="email"
                    className="py-2.5 px-4 rounded-full border border-black/50 outline-0"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    placeholder="Password"
                    value={password}
                    type="password"
                    className="py-2.5 px-4 rounded-full border border-black/50 outline-0"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="py-2 text-center bg-red-100 border border-red-700 text-red-700 rounded-xl">{error}</p>}
                {success && <p className="py-2 text-center bg-green-100 border border-green-700 text-green-700 rounded-xl">{success}</p>}
                <button type="submit" className="py-3 text-black bg-black/10 border border-black  rounded-full active:scale-95 transition-transform">
                    Sign Up
                </button>
                <p className="text-center">Already have an account? <Link href="/login" className="underline">Login</Link></p>
            </form>
        </main>
    )
}