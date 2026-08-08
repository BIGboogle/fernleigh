"use client"
import { styles } from "@/style"
import { useState } from "react"
import Filter from "@/component/Filter"

export default function catalog() {
    return (
        <main className="px-4 py-8">
            <div className="flex flex-col mt-8 gap-8 scrollbar-none">
                <Filter styles={styles} type="bespoke" />
                <Filter styles={styles} type="agbada" />
                <Filter styles={styles} type="kaftan" />
            </div>
        </main>
    )
}
