"use client"

import Link from "next/link"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

const GoBack = () => {
    const router = useRouter();

    return (
        <div className="flex w-full px-4 py-6 md:px-6">
            <Link href={''} onClick={() => router.back()} className="text-lg flex gap-1 items-center font-semibold text-slate-600"><ChevronLeftIcon className="w-5 h-5" /> Go Back</Link>
        </div>
    )
}

export default GoBack