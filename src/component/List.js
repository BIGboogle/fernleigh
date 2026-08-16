import Link from "next/link"
export default function OfferList({ heading, paragraph}) {
    return (
        <>
            <div>
                <h2 className="text-black font-text font-medium text-xl mb-2">{heading}</h2>
                <p className=" text-black font-text">{paragraph}</p>
            </div>
        </>
    )
}