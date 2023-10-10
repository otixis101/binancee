"use client"

import { Cog8ToothIcon } from "@heroicons/react/24/outline"
import { BanknotesIcon, Cog6ToothIcon, IdentificationIcon, InboxArrowDownIcon, InboxStackIcon, ShieldCheckIcon, ShieldExclamationIcon, UserIcon, WalletIcon } from "@heroicons/react/24/solid"
import { LayoutDashboardIcon } from "lucide-react"
import Link from "next/link"


import { usePathname } from 'next/navigation'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {

    const pathname = usePathname();


    return (
        <nav className="hidden lg:flex flex-col min-w-[15%] w-[15%] shrink-0 border-r border-gray-200 text-gray-500">
            <ul className="text-base">
                <li>
                    <Link href={'/dashboard'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/dashboard') ? "bg-gray-100 border-primary-dark" : "bg-white border-white"
                    )}>
                        <LayoutDashboardIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Dashboard</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/security'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/security') ? "bg-gray-100 border-primary-dark" : "bg-white border-white"
                    )}>
                        <ShieldExclamationIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Security</div>
                    </Link>
                </li>
                {/* <li>
                    <Link href={'/identification'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/identification') ? "bg-gray-100 border-primary-dark" : "bg-white border-white"
                    )}>
                        <IdentificationIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Identification</div>
                    </Link>
                </li> */}
                <li>
                    <Link href={'/wallet'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/wallet') ? "bg-gray-100 border-primary-dark" : "bg-white border-white"
                    )}>
                        <WalletIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Wallet</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/deposit'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/deposit') ? "bg-gray-100 border-primary-dark" : "bg-white border-white"
                    )}>
                        <InboxArrowDownIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Deposit</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/withdrawal'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/withdrawal') ? "bg-gray-100 border-primary-dark" : "bg-white border-white"
                    )}>
                        <InboxStackIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Withdrawal</div>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Sidebar