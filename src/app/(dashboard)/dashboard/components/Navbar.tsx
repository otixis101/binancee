
"use client"

import Link from "next/link"
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, UserCircleIcon, BellIcon, ShieldCheckIcon, IdentificationIcon, CheckBadgeIcon, UserIcon, ArrowLeftOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/solid"
import { useState } from "react";
import { profile } from "console";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [profileIsOpen, setProfileIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleProfile = () => {
        setProfileIsOpen(!profileIsOpen);
    };
    return (
        <nav className="flex justify-between items-center md:px-4 bg-white">
            <ul className="px-4 py-5">
                <li className="font-bold text-primary-dark text-xl"><Link href={"/"}>BINANCE<span className="text-xs font=bold text-slate-900">VIP</span></Link></li>
            </ul>
            <ul className="flex justify-end pr-2 md:pr-0 gap-4 md:justify-end text-sm w-full items-center">
                <li className="hidden md:flex hover:text-primary-dark"><Link href={"/buy"}>Buy Crypto</Link></li>
                <li><Link className="py-2 px-3 bg-primary-light hover:bg-primary/50 rounded flex gap-2" href={"/"}><ArrowDownTrayIcon className="w-4 h-4" />  Deposit</Link></li>
                <li className="hidden md:flex hover:text-primary-dark"><Link href={"/wallet"}>Wallet</Link></li>
                <li className="relative hidden md:flex flex-col items-end">
                    <UserCircleIcon className="w-8 h-8 hover:text-primary-light peer" />
                    <ul className="hidden flex-col mt-12 absolute shadow-lg rounded-md peer-hover:flex border border-gray-100 text-gray-500 bg-white">
                        <li className="flex flex-col gap-3 py-4 px-8">
                            <h2 className="text-xl font-bold">Pr***@gmail.com</h2>
                            <ul className="flex gap-4">
                                <li className="flex whitespace-nowrap bg-green-200 text-xs py-1 px-2 rounded-full"><CheckBadgeIcon className="w-4 h-4 text-green-500" />Verified</li>
                                <li className="flex whitespace-nowrap bg-gray-200 text-xs py-1 px-2 rounded-full"><UserIcon className="w-4 h-4 text-primary-light" />Regular User</li>
                            </ul>
                        </li>
                        <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><ShieldCheckIcon className="w-5 h-5  group-hover:text-primary-light" /> Security</li>
                        <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><IdentificationIcon className="w-5 h-5 group-hover:text-primary-light" /> Identification</li>
                        <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><UserPlusIcon className="w-5 h-5 group-hover:text-primary-light" /> Referral</li>
                        <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group border-t border-gray-200"><ArrowLeftOnRectangleIcon className="w-5 h-5 group-hover:text-primary-light" /> Log Out</li>
                    </ul>
                </li>
                {/* Drodown on Mobile Device */}
                {/* Profile Dropdown */}
                <li className="flex flex-col relative md:hidden">
                    <button onClick={toggleProfile}>
                        <UserCircleIcon className="w-8 h-8 hover:text-primary-light" />
                    </button>
                    {profileIsOpen && (
                        <ul className="flex flex-col gap-3 fixed inset-0 p-4 bg-white z-10 text-grey-500 text-center">
                            <li className="flex justify-end mb-20">
                                <button onClick={toggleProfile}><XMarkIcon className="w-8 h-8" /></button>
                            </li>
                            <li className="flex flex-col gap-3 py-4 px-8 bg-white">
                                <h2 className="text-xl font-bold">Pr***@gmail.com</h2>
                                <ul className="flex gap-4 justify-center">
                                    <li className="flex whitespace-nowrap bg-green-200 text-xs py-1 px-2 rounded-full"><CheckBadgeIcon className="w-4 h-4 text-green-500" />Verified</li>
                                    <li className="flex whitespace-nowrap bg-gray-200 text-xs py-1 px-2 rounded-full"><UserIcon className="w-4 h-4 text-primary-light" />Regular User</li>
                                </ul>
                            </li>
                            <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><ShieldCheckIcon className="w-5 h-5  group-hover:text-primary-light" /> Security</li>
                            <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><IdentificationIcon className="w-5 h-5 group-hover:text-primary-light" /> Identification</li>
                            <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><UserPlusIcon className="w-5 h-5 group-hover:text-primary-light" /> Referral</li>
                            <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group border-t border-gray-200"><ArrowLeftOnRectangleIcon className="w-5 h-5 group-hover:text-primary-light" /> Log Out</li>
                        </ul>
                    )}
                </li>
                <li className="hidden md:flex"><Link href={"/notifications"} className="relative overflow-visible">
                    <BellIcon className="w-6 h-6 hover:text-primary-light" />
                    <div className=" bg-red-400 text-white text-xs absolute outline outline-2 outline-white right-[-5px] top-[-5px] rounded-full w-4 h-4 flex items-center justify-center">7</div>
                </Link></li>
                {/* Drodown on Mobile Device */}
                <li className="flex flex-col relative h-full md:hidden">
                    <button onClick={toggleDropdown}>
                        <Bars3Icon className="w-8 h-8" />
                    </button>
                    {isOpen && (
                        <ul className="flex flex-col gap-3 fixed z-20 inset-0 p-4 grow bg-white text-center">
                            <li className="flex justify-end mb-20">
                                <button onClick={toggleDropdown}><XMarkIcon className="w-8 h-8" /></button>
                            </li>
                            <li className="hover:text-primary-dark"><Link href={"/buy"}> Buy Crypto</Link></li>
                            <li className="hover:text-primary-dark"><Link href={"/wallet"}> Wallet</Link></li>
                            <li className="hover:text-primary-dark"><Link href={"/notification"}>Notification</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar