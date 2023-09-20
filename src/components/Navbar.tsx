"use client"

import Link from "next/link"
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, UserCircleIcon, BellIcon, ShieldCheckIcon, IdentificationIcon, CheckBadgeIcon, UserIcon, ArrowLeftOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/solid"
import { useState } from "react";

import iconDeposit from '@/assets/deposit.png'
import iconReceive from '@/assets/receive.png'
import iconUser from '@/assets/user.svg'

import { useSession, signOut } from 'next-auth/react'
import { redirect, useRouter } from "next/navigation"


import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronRightIcon } from "lucide-react";



const Navbar = () => {


    //check if user
    const { data: session } = useSession();

    const router = useRouter()

    if (!session || !session.user) {
        redirect('/login')
    }

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
            <ul className="flex justify-end pr-2 md:pr-0 gap-4 md:gap-8 md:justify-end text-sm w-full items-center">
                <li className="hidden md:flex hover:text-primary-dark"><Link href={"/buy"}>Buy Crypto</Link></li>
                <li>
                    <Sheet>
                        <SheetTrigger className="py-2 px-3 bg-primary-light hover:bg-primary/80 rounded flex gap-2">
                            <ArrowDownTrayIcon className="w-4 h-4" />  Deposit
                            </SheetTrigger>
                        <SheetContent className=" data-[state=open]:w-full max-w-full">
                            <SheetHeader className="text-left">
                                <SheetTitle>
                                    <p className="text-lg font-semibold">
                                        Fund Your Wallet
                                    </p>
                                </SheetTitle>
                                <SheetDescription className="flex flex-col gap-12 py-8">
                                    <div className="flex flex-col gap-3">
                                        <small className="text-sm">
                                            I have crypto assets
                                        </small>
                                        <Link href={'/deposit'} className="flex gap-4 items-center p-2 rounded-lg hover:bg-gray-50">
                                            <Image src={iconDeposit} alt="icon" className="w-12 h-12" />
                                            <div className="flex flex-col gap-0">
                                                <h1 className="text-base text-black font-semibold">Deposit Crypto</h1>
                                                <small className="text-sm">Get the deposit address for BTC, ETH, or any other crypto and deposit via the blockchain.</small>
                                            </div>
                                            <ChevronRightIcon className="shrink-0 w-5 h-5" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <small className="text-sm">
                                            I don&apos;t have crypto assets
                                        </small>
                                        <Link href={'/deposit'} className="flex gap-4 items-center p-2 rounded-lg hover:bg-gray-50">
                                            <Image src={iconReceive} alt="icon" className="w-12 h-12" />
                                            <div className="flex flex-col gap-0">
                                                <h1 className="text-base text-black font-semibold">Buy Crypto</h1>
                                                <small className="text-sm">Buy crypto directly with cash, hassle-free and suggested for new users.</small>
                                            </div>
                                            <ChevronRightIcon className="shrink-0 w-5 h-5" />
                                        </Link>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </li>
                <li className="hidden md:flex hover:text-primary-dark">
                    <Link href={"/wallet"}>Wallet</Link></li>
                <li className="relative md:flex flex-col items-end">
                    <Popover>
                        <PopoverTrigger>
                            {
                                session?.user?.image ?
                                    (
                                        <Image src={session?.user?.image} alt="user image" className="w-8 h-8 rounded-full" width={50} height={50} />
                                    )
                                    :
                                    (

                                        <UserCircleIcon className="w-8 h-8 rounded-full" />
                                    )
                            }
                        </PopoverTrigger>
                        <PopoverContent align="end" className="flex flex-col shadow-lg rounded-md border border-gray-100 text-gray-500 bg-white p-0 min-w-fit">
                            <li className="flex flex-col gap-3 py-4 px-8 w-full">
                                <h2 className="text-lg font-bold">{session?.user?.email}</h2>
                                <ul className="flex gap-4">
                                    <li className="flex whitespace-nowrap bg-green-200 text-xs py-1 px-2 rounded-full"><CheckBadgeIcon className="w-4 h-4 text-green-500" />Verified</li>
                                    <li className="flex whitespace-nowrap bg-gray-200 text-xs py-1 px-2 rounded-full"><UserIcon className="w-4 h-4 text-primary-light" />Regular User</li>
                                </ul>
                            </li>
                            <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><ShieldCheckIcon className="w-5 h-5  group-hover:text-primary-light" /> Security</li>
                            <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><IdentificationIcon className="w-5 h-5 group-hover:text-primary-light" /> Identification</li>
                            <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group"><UserPlusIcon className="w-5 h-5 group-hover:text-primary-light" /> Referral</li>
                            <li className="flex gap-3 whitespace-nowrap p-4 hover:bg-gray-100 cursor-pointer group border-t border-gray-200" onClick={() => signOut()}><ArrowLeftOnRectangleIcon className="w-5 h-5 group-hover:text-primary-light" /> Log Out</li>
                        </PopoverContent>
                    </Popover>



                </li>
                {/* Drodown on Mobile Device */}
                {/* Profile Dropdown */}
                <li className="hidden flex-col relative md:hidden">
                    <button onClick={toggleProfile}>
                        <UserCircleIcon className="w-8 h-8 hover:text-primary-light" />
                    </button>
                    {profileIsOpen && (
                        <ul className="flex flex-col gap-3 fixed inset-0 p-4 bg-white z-10 text-grey-500 text-center">
                            <li className="flex justify-end mb-20">
                                <button onClick={toggleProfile}><XMarkIcon className="w-8 h-8" /></button>
                            </li>
                            <li className="flex flex-col gap-3 py-4 px-8 bg-white">
                                <h2 className="text-lg font-bold">{session?.user?.email}</h2>
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
                        <Bars3BottomRightIcon className="w-8 h-8" />
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