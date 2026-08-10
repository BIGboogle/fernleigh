"use client"
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";


export default function Footer() {
    const pathname = usePathname()

    if (pathname === "/signup" || pathname === "/login" || pathname === "/account") {
        return (
            <></>
        )
    }

    return (
        <main className="bottom-0 w-full border-t border-slate-200 pt-10 px-4">
            <div className="flex flex-col md:flex-row justify-between gap-4 text-left md:text-center">
                <div>
                    <Logo display="black" />
                    <div className="font-text text-sm mt-2 ml-2">
                        <p>6, Liadi Disu ,</p>
                        <p> Isheri-osun , Lagos</p>
                        <p> Nigeria</p>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-alt text-xl">Quick Links</h1>
                    <Link href="/" className="inline-block font-text text-sm ml-2">Home</Link>
                    <Link href="/catalog" className="block font-text text-sm ml-2">Catalog</Link>
                    <Link href="/about" className="block font-text text-sm ml-2">About</Link>
                </div>
                <div>
                    <h1 className="font-alt text-xl">Contact</h1>
                    <a href="https://wa.me/2348083042445" className="block font-text text-sm ml-2">Whatsapp</a>
                    <a href="mailto:akinoladaniel.self@gmail.com" className="block font-text text-sm ml-2">Email</a>
                </div>

            </div>

            <div className="py-3 w-full text-center font-alt border-t border-slate-100">2026 fernleigh.
                <span className="ml-4">Designed by webmirror</span>
            </div>
        </main>
    )
}