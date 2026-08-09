import Image from "next/image"
import { ArrowRight, Handbag, ShoppingCart } from "lucide-react"
import Link from "next/link"
export default function Filter({ styles, type }) {
    const link = "/" + type;

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-xl font-alt">{type.toUpperCase()}</h1>
                <Link href='/catalog/agbada' className="flex items-center font-text gap-1">See all
                    <ArrowRight size={15} />
                </Link>
            </div>
            <div className="flex gap-3 overflow-auto scrollbar-none">
                {
                    styles.filter((style) => style.type === type)
                        .map((item) => (
                            <Link key={item.id} href={`/catalog/${item.id}`} className="relative min-w-[200px] h-[280px] rounded-xl overflow-hidden">
                                <Image alt={item.name} src={item.image} fill />
                                <div className="flex items-center pl-2 p-2 py-3 text-sm justify-between absolute inset-0 top-auto bg-black/10 backdrop-blur-md">
                                    <div className="flex gap-2 flex-col">
                                        <p className=" text-white font-text w-2/3  truncate">{item.name}</p>
                                        <p className="text-white font-light font-text text-sm">{`\u20A6`}{item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}
