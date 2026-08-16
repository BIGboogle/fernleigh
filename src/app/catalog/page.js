"use client"
import { styles } from "@/style"
import { useState } from "react"
import Filter from "@/component/Filter"

export default function catalog() {
    return (
        <main className="px-4 py-8">
            <div className="flex flex-col mt-8 gap-8 scrollbar-none">
                <Filter styles={styles} category="bespoke" />
                <Filter styles={styles} category="agbada" />
                <Filter styles={styles} category="kaftan" />
            </div>
        </main>
    )
}
