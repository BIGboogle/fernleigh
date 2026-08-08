import Link from "next/link"
export default function OfferList({ heading, paragraph, href }) {
    return (
        <>
            <div>
                <h2 className="text-black font-text text-xl mb-2">{heading}</h2>
                <p className=" text-black font-text text-sm">{paragraph}</p>
            </div>
        </>
    )
}