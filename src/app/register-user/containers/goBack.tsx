"use client"

import Link from "next/link"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

interface stageProp {
    onStageChange: (value: number) => void;
}

const GoBack = ({ onStageChange }: stageProp) => {
    const router = useRouter();

    return (
        <div className="flex w-full px-4 py-6 md:px-6">
            <Link href={'#'} onClick={() => onStageChange(1)} className="text-lg flex gap-1 items-center font-semibold text-slate-600"><ChevronLeftIcon className="w-5 h-5" /> Go Back</Link>
        </div>
    )
}

export default GoBack