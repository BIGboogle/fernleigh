"use client"
import { useState } from "react"
import Link from "next/link"
import { supabase } from "../lib/supabaseClient"
import { useRouter } from "next/navigation"
import { Eye, EyeClosed } from "lucide-react"

export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [shown, setShown] = useState(false)
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message)
        }
        else {
            setError("")
            router.push("/catalog")
            alert("Account Login successful")
        }

    }
    return (
        <main className="w-screen max-w-md my-auto mx-auto py-8 px-4">
            <h1 className="text-3xl text-center font-medium font-alt mb-4">Login to your account</h1>

            <form className="flex flex-col gap-4 font-text" onSubmit={handleSubmit}>
                <input
                    placeholder="Email"
                    value={email}
                    type="email"
                    className="py-2.5 px-4 rounded-full border border-black/50 outline-0"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex border border-black/50 rounded-full items-center pr-4 overflow-hidden">
                    <input
                        placeholder="Password"
                        value={password}
                        type={shown ? `text` : `password`}
                        className="py-2.5 flex-1 px-4 border-black/50 outline-0"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {shown ? (
                    <div className="p-2 hover:bg-black/10 rounded-full" onClick={()=> setShown(false)}>
                        <EyeClosed size={18}/>
                    </div>
                    ):
                    (
                    <div className="p-2 hover:bg-black/10 rounded-full" onClick={()=> setShown(true)}>
                        <Eye size={20}/>
                    </div>
                    )
                }
                    
                </div>
                {error && <p className="py-2 text-center bg-red-100 border border-red-700 text-red-700 rounded-xl">{error}</p>}
                <button type="submit" className="py-3 text-black bg-black/10 border border-black  rounded-full active:scale-95 transition-transform">
                    Log In
                </button>
                <p className="text-center">Don't have an account? <Link href="/signup" className="underline">create account</Link></p>
            </form>
        </main>
    )
}