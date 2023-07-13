import Link from "next/link"
import Image from "next/image"
import asset_regSuccessful from "@/assets/register_success_1loop.gif"
import { EyeSlashIcon } from "@heroicons/react/24/solid"

const SetPassword = () => {
    return (
        <div className="flex flex-col grow justify-center px-8 items-center">
            <div className="flex flex-col gap-4 w-full md:w-[420px] ">
                <div className="flex flex-col items-center">
                    <Image src={asset_regSuccessful} alt="reg complete" className="w-[50%]" />
                    <h1 className="text-3xl font-bold text-center w-full mb-8">Account Successfully <br /> Created</h1>
                </div>
                <Link href={'/dashboard'} className="flex items-center text-slate-700 justify-center mb-2 gap-4 bg-primary-light/90 p-3 font-semibold rounded">Done</Link>
                <Link href={'/set-profile'} className="flex items-center text-amber-700 hover:underline text-sm font-medium justify-center gap-4">Complete Profile Registration</Link>

            </div>

        </div>
    )
}

export default SetPassword