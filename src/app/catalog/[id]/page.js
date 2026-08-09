"use client"
import { styles } from "@/style";
import { Bookmark, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function StylePage({ params }) {
    const { id } = use(params);
    const style = styles.find((s) => s.id === Number(id))

    if (!style) {
        return (
            <div className="h-screen flex-col flex justify-center items-center">
                <p className="font-text mt-[74px] text-xl ">style not found</p>
                <Link href={`/catalog`} className="py-3  border border-slate-200 w-full text-center inline">Catalog</Link>
            </div>
            )
    }
    return (
        <main className="min-h-screen flex flex-col pt-[74px] px-4 py-8">
            <p className="text-3xl font-text font-semibold text-slate-700 mb-4">{style.name}</p>
            <div className=" relative w-[200px] h-[280px] rounded-xl overflow-hidden mx-4">
                <Image src={style.image} alt={style.name} fill className="object-cover" />
            </div>
            <p className="text-2xl font-alt my-4 font-semibold text-gray-800">Specifications</p>

            <div className="flex flex-col md:flex-row md:justify-between space-y-6 px-4">
                <div className=" font-text">
                    <span className="text-sm">Type : </span>
                    <span>{style.type}</span>
                </div>
                <div className=" font-text">
                    <span className="text-sm">Material : </span>
                    <span>Cotton</span>
                </div>
                <div className=" font-text">
                    <span className="text-sm">Available in : </span>
                    <span>48Hours</span>
                </div>
            </div>

            
            <button className="py-3 w-full mx-auto max-w-lg font-text rounded-full border bg-black/10 text-center mt-8 active:scale-90 transition-transform">Book fitting</button>
        </main >
    )
}