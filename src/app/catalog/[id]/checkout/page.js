"use client"
import { useAuth } from "@/app/context/AuthContext";
import { supabase } from "@/app/lib/supabaseClient";
import Logo from "@/component/Logo";
import { styles } from "@/style";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Checkout({ params }) {
    const { user } = useAuth() || null
    const router = useRouter()

    useEffect(() => {
        if (user === null) {
            router.push("/login")
        }
    }, [user, router])

    const { id } = use(params);
    const product = styles.find((s) => s.id === Number(id)) || ""
    const [size, setSize] = useState("M")
    const [quantity, setQuantity] = useState(1)
    const price = product.price * quantity
    const deliveryFee = 5000
    const total = price + deliveryFee;
    const [measurements, setMeasurements] = useState({
        chest: "",
        shoulder: "",
        sleeve: "",
        neck: "",
        waist: "",
        hip: "",
        trouserlength: "",
        height: ""
    })
    const [delivery, setDelivery] = useState({
        "full name": "",
        "Address": "",
        "Apartment...": "",
        "city": "",
        "state": "",
        "postal code": "",
        "phone": ""
    })
    function handleMeasurementChange(e) {
        const { name, value } = e.target;
        setMeasurements((prev) => ({ ...prev, [name]: value }))

    }
    function handleOrder(e) {
        e.preventDefault();

    }
    function handleDeliveryChange(e) {
        const { name, value } = e.target;
        setDelivery((prev) => ({ ...prev, [name]: value }))
    }
    async function handleMeasurement() {
        if (!measurements) {
            return;
        }
        const { error } = await supabase.from("measurements").insert({
            user_id: user.id,
            ...measurements,
        })
        if (error) {
            alert(error.message)
        }
        else{
            alert("measurements saved")
        }
    }
    if (!user) {
        return null
    }
    return (
        <form className="flex flex-col md:flex-row w-screen h-screen overflow-hidden" onSubmit={handleOrder}>
            <div className="max-w-md md:overflow-y-auto">
                <header className="inline-flex items-baseline gap-1 p-4">
                    <Logo display="black" />
                    <span className="font-alt text-xl font-semibold text-gray-500 text-nowrap w-1/2 truncate">| checkout &mdash; [{product.name}]</span>
                </header>

                <div className="p-4">
                    <p className="font-alt text-2xl font-semibold mb-4 ">Delivery</p>
                    <div className="font-text flex flex-col gap-4 max-w-md">
                        {Object.keys(delivery).map((field) => (
                            <div key={field} className="flex gap-2 justify-between items-center">
                                <p className="text-nowrap font-alt">{field}</p>
                                <input
                                    required
                                    name={field}
                                    value={delivery[field]}
                                    className="py-2 px-4 w-full rounded-xl border border-slate-300 text-[16px]"
                                    onChange={handleDeliveryChange}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`px-4 pt-8 pb-16 ${size === "custom" ? `block` : `hidden`}`}>
                    <p className="font-alt text-xl font-semibold mb-4">Measurement</p>
                    <div className="grid grid-cols-2 gap-3">
                        {Object.keys(measurements).map((field) => (
                            <div key={field}>
                                <label className="capitalize mb-2 font-alt">{field}</label>
                                <input
                                    value={measurements[field]}
                                    type="number"
                                    name={field}
                                    className="w-full border py-2 px-4 rounded-xl mt-1 border-gray-300 outline-black/50"
                                    onChange={handleMeasurementChange}
                                    required
                                />
                            </div>
                        ))}
                        <ol className="font-text col-span-2 text-sm px-4">
                            <li className="list-disc">measurements inputed in inch</li>
                            <li className="list-disc">include a safe space 0f 2inch for all measurement</li>
                            <li className="list-disc">take measurements with inextensible tape</li>
                        </ol>
                        <button onClick={handleMeasurement} type="button" className="w-full col-span-2 rounded-full text-black border border-black/80 py-3 font-text active:scale-95 transition-transform mt-4">
                            Save Measurement
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:flex-1 md:border-l border-slate-300 px-4 pt-4 pb-16 overflow-auto">
                <header className="font-alt text-2xl font-semibold">Summary</header>

                <div className="mt-4 font-text">
                    <div className="relative w-50 h-70 rounded-xl overflow-hidden">
                        <Image alt={product.name} src={product.image} fill />
                    </div>
                    <div className="mt-4">
                        <p className="text-xl font-text">{product.name}</p>

                        <p className="font-alt mt-4 text-xl font-semibold text-slate-600">Size</p>
                        <div className="flex gap-3 mt-2 text-sm">
                            <button type="button" className={`py-1 px-3 border rounded-full min-w-15 border-slate-300 ${size === "M" && `bg-blue-500 border-white text-white`}`} onClick={() => setSize("M")}>M</button>
                            <button type="button" className={`py-1 px-3 border rounded-full min-w-15 border-slate-300 ${size === "XL" && `bg-blue-500 border-white text-white`}`} onClick={() => setSize("XL")}>XL</button>
                            <button type="button" className={`py-1 px-3 border rounded-full min-w-15 border-slate-300 ${size === "XXL" && `bg-blue-500 border-white text-white`}`} onClick={() => setSize("XXL")}>XXL</button>
                            <button type="button" className={`py-1 px-3 border rounded-full min-w-15 border-slate-300 ${size === "custom" && `bg-blue-500 border-white text-white`}`} onClick={() => setSize("custom")}>Custom</button>
                        </div>
                    </div>

                    <p className="font-alt mt-4 text-xl font-semibold text-slate-600">Quantity</p>
                    <div className="mt-2 flex justify-between items-center">
                        <div className="flex w-50 border justify-between rounded-xl items-center overflow-hidden font-semibold">
                            <button type="button" className="py-2 px-4 bg-red-50 text-red-670 text-lg" onClick={() => setQuantity((prev) => (prev > 1 ? quantity - 1 : 1))}>-</button>
                            <p className="flex-1 text-center">{quantity}</p>
                            <button type="button" className="px-4 py-2 bg-green-50 text-green-700 text-lg" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>

                        <p className="">{`\u20A6`}{price.toLocaleString()}</p>
                    </div>

                    <div className="flex justify-between mt-4 font-alt">
                        <p className="text-lg">Subtotal:</p>
                        <p className="font-text">{`\u20A6`}{price.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between font-alt">
                        <p>Delivery:</p>
                        <p className="font-text">{`\u20A6`}{deliveryFee.toLocaleString()}</p>
                    </div>
                    <div className="py-2 border-t mt-2 flex justify-between">
                        <p className="font-alt text-xl">Total:</p>
                        <p className="font-text text-xl font-semibold text-gray-700 underline">{`\u20A6`}{total.toLocaleString()}</p>
                    </div>
                    <button type="submit" className="mt-8 mx-auto w-full max-w-md py-3 flex items-center justify-center border rounded-full border-black/70 hover:bg-black hover:text-white transition-colors duration-300 active:bg-black active:text-white">Place Order via Whatsapp</button>
                </div>
            </div>
        </form>
    )
}