import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const blankHeader = () => {
  return (
    <nav className="flex justify-between items-center md:px-4 bg-white">
      <ul className="px-4 py-4">
        <li className="font-bold text-primary-dark text-xl"><Link href={"/"}>BINANCE<span className="text-xs font=bold text-slate-900">VIP</span></Link></li>
      </ul>

    </nav>
  )
}

export default blankHeader