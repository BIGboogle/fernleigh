"use client"
import { ArrowLeft, User, User2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import { useState, useEffect } from "react"
import { useAuth } from "@/app/context/AuthContext"

export default function Navbar() {
    const { user } = useAuth();
    console.log(user);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const hideNav = pathname === "/login" || pathname === "/signup" || pathname === "/measurement"
    let altPath = ""
    if (pathname.endsWith("bespoke") || pathname.endsWith("agbada") || pathname.endsWith("kaftan")) {
        altPath = "bespoke"
    }

    let currentPath = ""
    if (pathname.startsWith("/catalog")) {
        currentPath = "All Catalog"
    }
    else if (pathname.startsWith("/account")) {
        currentPath = "Account"
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);


    if (hideNav) {
        return null
    };
    return (
        <>
            {pathname === "/" &&
                <>
                    <div className={`z-40 fixed justify-between items-center w-screen flex top-0 ${scrolled ? `bg-black/50 backdrop-blur-sm` : `bg-transparent`} px-4 h-16 `}>
                        <Logo display="white" />
                    </div>
                </>
            }
            {currentPath &&
                <>
                    <div className={`fixed z-40 h-16 flex items-center top-0 inset-x-0 justify-between ${scrolled ? `bg-black/50 backdrop-blur-sm text-white` : `bg-transparent text-black`} px-4`}>
                        <h1 className="text-[22px] font-text flex items-center gap-2 font-medium">
                            <button onClick={() => history.back()}>
                                <ArrowLeft size={20} />
                            </button>
                            {!altPath ? `${currentPath}` : null}
                            {altPath &&
                                <p className="capitalize">{altPath}</p>
                            }
                        </h1>
                        <div>
                            {!user && pathname !== "/account" &&
                                <Link href="/login" className="py-2 px-5 font-text text-sm rounded-full border border-dashed">Login</Link>
                            }
                            {user && pathname !== "/account" &&
                                <Link href="/account">
                                    <User size={20} />
                                </Link>
                            }

                        </div>
                    </div>
                </>

            }
        </>
    )
}