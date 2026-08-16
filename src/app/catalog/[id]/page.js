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
                <p className="font-text mt-18.5 text-xl ">style not found</p>
                <Link href={`/catalog`} className="py-3  border border-slate-200 w-full text-center inline">Catalog</Link>
            </div>
        )
    }
    return (
        <main className="min-h-screen flex flex-col pt-18.5 px-4 py-8 font-text">
            <p className="text-3xl font-text font-semibold text-slate-700 mb-4">{style.name}</p>
            <div className="relative w-50 h-70 rounded-xl overflow-hidden shadow-sm">
                <Image src={style.image} alt={style.name} fill className="object-cover" />
            </div>

            <div className="mt-4">
                <p className="text-2xl tracking-wide font-semibold underline">{`\u20A6`}{style.price.toLocaleString()}</p>
            </div>


            <h1 className="text-2xl mt-8 font-semibold text-gray-700">About</h1>
            <div>
                <p className="font-text">{style.note}</p>
            </div>


            <p className="text-2xl mt-5 2 text-gray-700 font-semibold">Specifications</p>

            <div className="space-y-4 font-text mt-2">
                <p className="font-">material: {style.material}</p>
                <p>Care: {style.care}</p>
                <p className="py-2 px-5 rounded-full border border-green-700 bg-green-50 text-green-700 inline-block mt">Delivery: {style.tag}</p>
            </div>


            <button className="py-3 w-full mx-auto max-w-lg font-text rounded-full border bg-black/10 text-center mt-8 active:scale-90 transition-transform">Book fitting</button>
        </main >
    )
}