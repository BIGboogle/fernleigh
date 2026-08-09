"use client"
import Image from "next/image"
import OfferList from "@/component/List"
import BrandList from "@/component/BrandList"
import Link from "next/link"
import { useEffect, useState } from "react"
export default function Home() {
	const [hero, setHero] = useState(0)
	const heroImages = [
		'/images/hero2.jpg',
		'/images/hero3.jpg',
		'/images/alt2.jpg',
		'/images/alt1.jpg',
	]
	useEffect(() => {
		const interval = setInterval(() => {
			setHero((prev) => (prev + 1) % heroImages.length)
		}, 4000)
		return () => clearInterval(interval)

	}, [])

	return (
		<>
			<main className="relative flex md:flex-row h-screen scrollbar-none">
				{
					heroImages.map((img, index) => (
						<Image key={index} src={img} fill alt="hero Image" className={`object-cover transition-all duration-500 ${index === hero ? `opacity-100` : `opacity-0`}`} />
					))
				}
				<div className="absolute inset-0 bg-black/40" />

				<div className="absolute inset-0 flex flex-col items-center justify-center px-8 mb-5 text-white">
					<h1 className="text-5xl md:text-7xl font-semibold font-alt">
						Tailored for Greatness
					</h1>
					<p className="text-xl  max-w-md text-center font-text mb-8">
						Bespoke tailoring and native fashion, made for men who lead.
					</p>
					<Link href='/catalog' className="flex items-center font-text font-semibold justify-center py-3 w-full max-w-lg border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors">
						Book a fitting
					</Link>
				</div>
			</main>

			<section id="partners" className="py-8">
				<p className="font-alt font-semibold text-xl px-4">In Partnership with</p>

				<div className="mt-8 mb-8 overflow-x-hidden">
					<div className="animate-marquee w-max flex gap-12 py-2">
						<BrandList src="/images/logo1.jpg" />
						<BrandList src="/images/logo2.jpg" />
						<BrandList src="/images/logo3.jpg" />
						<BrandList src="/images/logo4.jpg" />
						<BrandList src="/images/logo5.jpg" />
						<BrandList src="/images/logo6.jpg" />
						<BrandList src="/images/logo7.jpg" />
						<BrandList src="/images/logo8.jpg" />
						<BrandList src="/images/logo9.jpg" />
						<BrandList src="/images/logo10.jpg" />
						<BrandList src="/images/logo11.jpg" />
						<BrandList src="/images/logo12.jpg" />
						<BrandList src="/images/logo1.jpg" />
						<BrandList src="/images/logo2.jpg" />
						<BrandList src="/images/logo3.jpg" />
						<BrandList src="/images/logo4.jpg" />
						<BrandList src="/images/logo5.jpg" />
						<BrandList src="/images/logo6.jpg" />
						<BrandList src="/images/logo7.jpg" />
						<BrandList src="/images/logo8.jpg" />
						<BrandList src="/images/logo9.jpg" />
						<BrandList src="/images/logo10.jpg" />
						<BrandList src="/images/logo11.jpg" />
						<BrandList src="/images/logo12.jpg" />
					</div>
				</div>
			</section>

			<section id="offerings" className="px-4 mt-8 mb-16">
				<h1 className="text-center text-3xl md:text-4xl font-semibold mb-12 font-alt">What We Offer</h1>

				<div className=" max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mx-auto">
					<OfferList heading="Bespoke Tailoring" paragraph="Custom made pieces, fitted to you." href="beespoke" />
					<OfferList heading="Ready-to-Wear" paragraph="Native fashion, Ready when you are." href="" rtw />
					<OfferList heading="Wardrobe Subcription" paragraph="Build your wardrobe, stress free, all year." href="subscription" />
					<OfferList heading="Fashion Academy" paragraph="Learn the craft, through hands-on training" href="academy" />
				</div>
			</section>
		</>
	)
}