"use client"

import Link from "next/link"
import Image from "next/image"
import googleImage from "@/assets/icons8-google.svg"
import { UserIcon } from "@heroicons/react/24/solid"


import { signIn, signOut, useSession } from 'next-auth/react'

const RegisterForm = () => {

    const { data: session } = useSession();

    if (session && session.user) {

        return (

            <div className="flex flex-col grow justify-center px-8 items-center">
                <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Logged In to Binancee!</h1>
                    <div className='flex flex-col gap-1 w-full items-center justify-center'>
                        <Image src={session.user.image || ''} alt="user image" className="mb-4 w-16 h-16 rounded-full" width={40} height={40} />
                        <h1>Hello, {session.user.name}</h1>
                        <small className="text-sm text-gray-500 font-light">{session.user.email}</small>

                        <button onClick={() => signOut()} className="mt-6 flex justify-center items-center bg-gray-200 cursor-pointer gap-4 px-8 py-2 font-semibold text-sm rounded-md"> Sign Out</button>
                    </div>
                </div>

            </div>
        )
    }
    else {
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
                        <button onClick={() => signIn('google')} className="flex justify-center items-center cursor-pointer gap-4 bg-gray-200 p-4 font-semibold text-sm rounded-md"> <Image src={googleImage} alt="hero_image" className='w-5 h-5' /> Continue with Google</button>
                        <div className="text-center text-sm mt-2"><p>Already Have an Account? <Link href={'/login'} className="text-amber-700 hover:underline">Log In</Link></p></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default RegisterForm