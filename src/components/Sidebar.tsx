"use client"

import { Cog8ToothIcon } from "@heroicons/react/24/outline"
import { BanknotesIcon, Cog6ToothIcon, IdentificationIcon, ShieldCheckIcon, ShieldExclamationIcon, UserIcon } from "@heroicons/react/24/solid"
import { LayoutDashboardIcon } from "lucide-react"
import Link from "next/link"


import { usePathname } from 'next/navigation'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {

    const pathname = usePathname();


    return (
        <nav className="hidden lg:flex flex-col min-w-[18%] w-[18%] shrink-0 border-r border-gray-200 text-gray-500">
            <ul className="text-base">
                <li>
                    <Link href={'/dashboard'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/dashboard') && "bg-gray-100 border-primary-dark"
                    )}>
                        <LayoutDashboardIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Dashboard</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/security'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/security') && "bg-gray-100 border-primary-dark"
                    )}>
                        <ShieldExclamationIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Security</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/identification'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/identification') && "bg-gray-100 border-primary-dark"
                    )}>
                        <IdentificationIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Identification</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/payment'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/payment') && "bg-gray-100 border-primary-dark"
                    )}>
                        <BanknotesIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Payment</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/referral'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/referral') && "bg-gray-100 border-primary-dark"
                    )}>
                        <UserIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Referral</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/settings'} className={classNames("flex items-center gap-2 px-4 py-4 border-l-4 hover:bg-gray-100  group",
                        pathname.includes('/settings') && "bg-gray-100 border-primary-dark"
                    )}>
                        <Cog6ToothIcon className="w-5 h-5 group-hover:text-gray-800 group-hover:fill-gray-800 fill-gray-500" />
                        <div className="group-hover:text-gray-800 group-hover:font-medium">Settings</div>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Sidebar