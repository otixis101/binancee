"use client"

import Link from "next/link"
import { Bars3BottomRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react";

import { useSession } from 'next-auth/react'
import { redirect, useRouter } from "next/navigation"

const Header = () => {

    const { data: session } = useSession();

    const router = useRouter()

    if (session && session.user) {
        redirect('/dashboard')
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="flex justify-between items-center md:px-4 bg-white">
            <ul className="px-4 py-4">
                <li className="font-bold text-primary-dark text-xl"><Link href={"/"}>BINANCE<span className="text-xs font=bold text-slate-900">VIP</span></Link></li>
            </ul>
            <ul className="px-4 py-4 flex gap-4 justify-end text-sm w-full md:w-[50%] items-center">
                {/* <li className="hidden md:flex hover:text-primary-dark"><Link href={"/pricing"}>Pricing</Link></li> */}
                {/* <li className="hidden md:flex hover:text-primary-dark"><Link href={"/about"}>About</Link></li> */}
                {/* <li className="hidden md:flex hover:text-primary-dark"><Link href={"#"}>FAQs</Link></li> */}
                <li className="hidden md:flex items-center gap-6">
                    <Link className=" hover:text-primary-dark" href={"/login"}>Log In</Link>
                    <Link className="py-2 px-3 bg-primary-light hover:bg-primary/50 rounded" href={"/register"}>Register</Link>
                </li>
                {/* Drodown on Mobile Device */}
                <li className="flex flex-col relative md:hidden">
                    <button onClick={toggleDropdown}>
                        <Bars3BottomRightIcon className="w-8 h-8" />
                    </button>
                    {isOpen && (
                        <ul className="flex flex-col gap-3 fixed inset-0 p-4 bg-white text-center">
                            <li className="flex justify-end mb-20">
                                <button onClick={toggleDropdown}><XMarkIcon className="w-8 h-8" /></button>
                            </li>
                            <li className="w-full p-3"><Link href={"/login"}>Log In</Link></li>
                            <li className="p-3 bg-primary-light hover:bg-primary/50 rounded"><Link href={"/register"}>Register</Link></li>
                            {/* <li className="p-3 hover:text-primary-dark"><Link href={"/pricing"}>Pricing</Link></li> */}
                            {/* <li className="p-3 hover:text-primary-dark"><Link href={"/about"}>About</Link></li> */}
                            {/* <li className="p-3 hover:text-primary-dark"><Link href={"/faq"}>FAQs</Link></li> */}
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Header