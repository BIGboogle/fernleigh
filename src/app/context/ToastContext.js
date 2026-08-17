"use client"
import { useContext, createContext, useState } from "react"

const ToastContext = createContext()

export default function ToastProvider({ children }) {
    const [toast, setToast] = useState(null)

    function showToast(message, type = "success") {
        setToast({message, type})
        setInterval(() => {
            setToast(null)
        }, 3000);
    }
    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && (
                <div className={`fixed bottom-6 left-1/2 translate-x-1/2 px-6 py-3 rounded-xl ${toast.type === "success" ? `bg-green-50 border-green-700 text-green-700`:`text-red-700`}`}>
                    {toast.message}
                </div>
            )}
        </ToastContext.Provider>
    )
}

export function useToast(){
    return useContext(ToastContext)
}