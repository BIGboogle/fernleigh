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

    const [measurements, setMeasurrements] = useState({
        chest: "",
        shoulder: "",
        sleeve: "",
        neck: "",
        waist: "",
        hip: "",
        trouserLength: "",
        height: ""
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setMeasurrements((prev) => ({ ...prev, [name]: value }))
    }
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
                {Object.keys(measurements).map((field) => (
                    <div key={field}>
                        <label className="capitalize mb-2 font-alt">{field}</label>
                        <input
                            value={measurements[field]}
                            type="number"
                            name={field}
                            className="w-full border py-2 px-4 rounded-xl mt-1 border-gray-300 outline-black/50"
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <ol className="font-text col-span-2 text-sm">
                    <li className="list-disc">measurements inputed in inch</li>
                    <li className="list-disc">include a safe space 0f 2inch for all measurement</li>
                    <li className="list-disc">take measurements with inextensible tape</li>
                </ol>
                <button type="submit" className="w-full col-span-2 rounded-2xl text-black border border-black/80 py-3 font-text active:scale-95 transition-transform">
                    Update measurement
                </button>
            </form>
        </main>
    )
}