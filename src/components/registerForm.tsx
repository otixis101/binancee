import Link from "next/link"
import Image from "next/image"
import googleImage from "@/assets/icons8-google.svg"
import { UserIcon } from "@heroicons/react/24/solid"

const RegisterForm = () => {
    return (
        <div className="flex flex-col grow justify-center px-8 items-center">
            <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Welcome to Binancee!</h1>
                <div className='flex flex-col gap-4 w-full justify-center'>
                    <Link href={'/register-user'} className="flex items-center justify-center gap-4 bg-primary-light p-4 font-semibold text-sm rounded-md"><UserIcon className="w-5 h-5" /> Sign up with Email or Phone</Link>
                    <div className='flex flex-row items-center gap-4'>
                        <span className='border-slate-900/10 border-t border-b grow'></span>
                        <p className=''>or</p>
                        <span className='border-teal-900/10 border-t border-b grow'></span>
                    </div>
                    <Link href={'/register'} className="flex justify-center items-center gap-4 bg-gray-200 p-4 font-semibold text-sm rounded-md"> <Image src={googleImage} alt="hero_image" className='w-5 h-5' /> Continue with Google</Link>
                    <div className="text-center text-sm mt-2"><p>Already Have an Account? <Link href={'/login'} className="text-amber-700 hover:underline">Log In</Link></p></div>
                </div>
            </div>

        </div>
    )
}

export default RegisterForm