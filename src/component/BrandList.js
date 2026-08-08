import Image from "next/image"
export default function BrandList({src}) {
    return (
        <>
            <div className="shrink-0 relative w-24 h-24 rounded-full overflow-hidden shadow-md">
                <Image alt="logo" src={src} fill className="object-cover" />
            </div>
        </>
    )
}