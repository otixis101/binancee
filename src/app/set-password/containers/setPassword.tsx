import Link from "next/link"
import { EyeIcon, InformationCircleIcon } from "@heroicons/react/24/outline"

const SetPassword = () => {
    return (
        <div className="flex flex-col py-16 justify-center px-8 items-center">
            <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                <div className="">
                    <h1 className="text-3xl font-bold text-left w-full mb-4">Set Password</h1>
                </div>
                <form action="" className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="uid" className="text-sm text-slate-500">Password</label>
                        <div className="relative w-full flex items-center">
                            <input type="password" id="uid" className="border w-full outline-0 px-3 py-3 text-lg rounded-sm focus:border-primary-dark" />
                            <small className="absolute right-4 text-green-500 flex items-center gap-1"><EyeIcon className="w-5 h-5" /></small>
                        </div>
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-4 bg-primary-light p-4 font-semibold rounded-md">Next</button>
                </form>


            </div>

        </div>
    )
}

export default SetPassword