import { Cog8ToothIcon } from "@heroicons/react/24/outline"
import { BanknotesIcon, Cog6ToothIcon, IdentificationIcon, ShieldCheckIcon, ShieldExclamationIcon, UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Sidebar = () => {
    return (
        <nav className="flex flex-col w-[20%] border-r border-gray-200 text-gray-500">
            <ul className="text-sm">
                <li>
                    <Link href={'/'} className="flex gap-2 px-4 py-4 border-l-4 hover:bg-gray-100 border-primary-dark group">
                        <UserIcon className="w-5 h-5" />
                        <div className="group-hover:text-gray-800">Dashboard</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="flex gap-2 px-4 py-4 border-l-4 hover:bg-gray-100 border-primary-dark group">
                        <ShieldExclamationIcon className="w-5 h-5" />
                        <div className="group-hover:text-gray-800">Security</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="flex gap-2 px-4 py-4 border-l-4 hover:bg-gray-100 border-primary-dark group">
                        <IdentificationIcon className="w-5 h-5" />
                        <div className="group-hover:text-gray-800">Identification</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="flex gap-2 px-4 py-4 border-l-4 hover:bg-gray-100 border-primary-dark group">
                        <BanknotesIcon className="w-5 h-5" />
                        <div className="group-hover:text-gray-800">Payment</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="flex gap-2 px-4 py-4 border-l-4 hover:bg-gray-100 border-primary-dark group">
                        <UserIcon className="w-5 h-5" />
                        <div className="group-hover:text-gray-800">Referral</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="flex gap-2 px-4 py-4 border-l-4 hover:bg-gray-100 border-primary-dark group">
                        <Cog6ToothIcon className="w-5 h-5" />
                        <div className="group-hover:text-gray-800">Settings</div>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Sidebar