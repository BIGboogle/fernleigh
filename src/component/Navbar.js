"use client"
import { ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import { useState, useEffect } from "react"
export default function Navbar() {
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
                    <div className={`z-40 fixed justify-between items-center w-screen flex top-0 ${scrolled ? `bg-black/50 backdrop-blur-sm`: `bg-transparent`} px-4 h-[72px] `}>
                        <Logo display="white" />
                    </div>
                </>
            }
            {pathname !== "/" &&
                <>
                    <div className={`fixed z-40 h-[72px] flex items-center top-0 inset-x-0 justify-between ${scrolled ? `bg-black/50 backdrop-blur-sm text-white`: `bg-transparent text-black`} px-4 py-2`}>
                        <h1 className="text-3xl font-alt flex items-center gap-2 font-medium">
                            {pathname.length > 8 &&
                                <button onClick={() => history.back()}>
                                    <ArrowLeft size={20} />
                                </button>
                            }
                            {currentPath}</h1>
                        <div>
                            <Link href="/account" className="p-2 inline-block hover:bg-black/10 rounded-full">
                                <User size={22} />
                            </Link>
                        </div>
                    </div>
                </>

            }
        </>
    )
}