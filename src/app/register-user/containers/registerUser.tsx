import Link from "next/link"
import Image from "next/image"
import googleImage from "@/assets/icons8-google.svg"
import { UserIcon } from "@heroicons/react/24/solid"

const RegisterUser = () => {
    return (
        <div className="flex flex-col py-16 justify-center px-8 items-center">
            <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                <h1 className="text-3xl font-bold text-left w-full mb-4">Create New Account</h1>
                <form action={'../email-verification'} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="uid" className="text-sm text-slate-500">Email / Username</label>
                        <input type="text" id="uid" className="border outline-0 px-2 py-3 rounded-sm focus:border-primary-dark" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="dropdown flex flex-col gap-2">
                            <label htmlFor="uid" className="text-sm text-slate-500 dropdown-toggle">Referral ID (optional)</label>
                            <input type="text" id="uid" className="dropdown-form border outline-0 px-2 py-3 rounded-sm focus:border-primary-dark" />
                        </div>
                    </div>
                    <p>By creating an account, I agree to Binancee&#39;s <Link href={''} className="text-amber-700 hover:underline">Terms of Service</Link> and <Link href={''} className="text-amber-700 hover:underline">Privacy Policy</Link> .</p>
                    <button type="submit" className="flex items-center justify-center gap-4 bg-primary-light p-4 font-semibold rounded-md">Next</button>
                </form>

            </div>

        </div>
    )
}

export default RegisterUser