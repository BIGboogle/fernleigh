"use client"
import { styles } from "@/style";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function CategoryPage({ params }) {
    const { category } = use(params);
    const filtered = styles.filter((s) => s.category === category)
    return (
        <main className="mt-16 p-4 min-h-screen">
            <div className="grid max-w-6xl mx-auto gap-3" style={{gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"}}>
                {filtered.map((item) => (
                    <Link href={`/catalog/${item.id}`} key={item.id} className="relative h-[280px] rounded-xl overflow-hidden">
                        <Image alt="product image" fill src={item.image} />
                        <div className="flex items-center pl-2 p-2 py-3 text-sm absolute inset-0 top-auto bg-black/10 backdrop-blur-md">
                            <div className="flex gap-2 flex-col">
                                <p className=" text-white font-text w-2/3  truncate">{item.name}</p>
                                <p className="text-white font-light font-text text-sm">{`\u20A6`}{item.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}