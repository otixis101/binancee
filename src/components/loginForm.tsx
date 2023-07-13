import Link from "next/link"
import Image from "next/image"
import googleImage from "@/assets/icons8-google.svg"
import { UserIcon } from "@heroicons/react/24/solid"

const LoginForm = () => {
    return (
        <div className="flex flex-col grow justify-center px-8 items-center">
            <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                <h1 className="text-3xl font-bold text-left w-full mb-4">Log In</h1>
                <form action="" className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="uid" className="text-sm text-slate-500">Email / Username</label>
                        <input type="text" id="uid" className="border outline-0 px-2 py-3 rounded-sm focus:border-primary-dark" />
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-4 bg-primary-light p-4 font-semibold rounded-md">Next</button>
                </form>
                <div className='flex flex-col gap-4 w-full justify-center'>

                    <div className='flex flex-row items-center gap-4'>
                        <span className='border-slate-900/10 border-t border-b grow'></span>
                        <p className=''>or</p>
                        <span className='border-teal-900/10 border-t border-b grow'></span>
                    </div>
                    <Link href={'/register'} className="flex justify-center items-center gap-4 bg-gray-200 p-4 font-semibold text-sm rounded-md"> <Image src={googleImage} alt="hero_image" className='w-5 h-5' /> Continue with Google</Link>
                    <div className="text-center text-sm mt-2"><p>Just Getting Started? <Link href={'/register'} className="text-amber-700 hover:underline">Create an Account</Link></p></div>
                </div>
            </div>

        </div>
    )
}

export default LoginForm