"use client"
import { ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import { useState, useEffect } from "react"
import { useAuth } from "@/app/context/AuthContext"
export default function Navbar() {
    const { user } = useAuth()
    console.log(user)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    let currentPath = ""
    if (pathname.startsWith("/catalog")) {
        currentPath = "Catalog"
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <>
            {pathname === "/" &&
                <>
                    <div className={`z-40 fixed justify-between items-center w-screen flex top-0 ${scrolled ? `bg-black/50 backdrop-blur-sm` : `bg-transparent`} px-4 h-16 `}>
                        <Logo display="white" />
                    </div>
                </>
            }
            {pathname === ("/catalog") &&
                <>
                    <div className={`fixed z-40 h-16 flex items-center top-0 inset-x-0 justify-between ${scrolled ? `bg-black/50 backdrop-blur-sm text-white` : `bg-transparent text-black`} px-4`}>
                        <h1 className="text-3xl font-alt flex items-center gap-2 font-medium">
                            {pathname.length > 8 &&
                                <button onClick={() => history.back()}>
                                    <ArrowLeft size={20} />
                                </button>
                            }
                            {currentPath}</h1>
                        <div>
                            {user ? (
                                <Link href="/account" className="inline p-2"><User size={18}/></Link>
                            ) : (
                                <Link href="/login" className="py-2 px-5 rounded-full border border-black/50">Login</Link>
                            ) }
                        </div>
                    </div>
                </>

            }
        </>
    )
}