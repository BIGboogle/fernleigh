"use client"
import { ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Feather } from "lucide-react"
import Logo from "./Logo"
export default function Navbar() {
    const pathname = usePathname()
    let currentPath = ""
    if (pathname.startsWith("/catalog")) {
        currentPath = "Catalog"
    }
    return (
        <>
            {pathname === "/" &&
                <>
                    <div className="z-40 fixed justify-between items-center w-screen flex top-0 bg-white/5 backdrop-blur-sm px-4 h-[72px]">
                        <Logo display="white" />
                    </div>
                </>
            }
            {pathname !== "/" &&
                <>
                    <div className="fixed z-40 h-[72px] flex items-center top-0 inset-x-0 justify-between bg-white/5 backdrop-blur-sm px-4 py-2">
                        <h1 className="text-3xl font-alt flex items-center gap-2 font-semibold">
                            {pathname.length > 8 &&
                                <button onClick={()=>history.back()}>
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