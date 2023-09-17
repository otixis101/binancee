"use client"

import Link from "next/link"
import Image from "next/image"
import googleImage from "@/assets/icons8-google.svg"


import spinner from '@/assets/icons8-spinner.gif'

import { signIn, useSession } from 'next-auth/react'
import { useRouter, redirect } from "next/navigation"

import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


import { useToast } from "@/components/ui/use-toast"

const logInSchema = z.object({
    email: z.string().email({
        message: "Invalid email format"
    }),
    password: z.string()
})


import { FieldValues, useForm } from "react-hook-form"
import { checkPasswordMacth } from "@/prismaActions/checkPasswordMatch"
import { checkExists } from "@/prismaActions/checkExists"
import { useState } from "react"

const LoginForm = () => {

    const { toast } = useToast()

    const [getError, setError] = useState({
        is: false,
        content: '',
    })

    const { data: session } = useSession();

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(logInSchema),
    })

    const onSubmit = async (data: FieldValues) => {
        const result = await signIn('credentials', { ...data, redirect: false });

        console.log(result);
        if (result && result?.error) {
            setError({
                is: true,
                content: result?.error
            }
            );
        }
        // TODO: submit to server
        // ...
        // await new Promise((resolve) => setTimeout(resolve, 1000));

        // //check if email exist
        // await checkExists(data).then(async (res) => {
        //     if (res?.message) {
        //         await checkPasswordMacth(data).then((res) => {
        //             if (res?.message) {
        //                 toast({
        //                     variant: "destructive",
        //                     title: "Error Message:",
        //                     description: res?.message,
        //                 })
        //             }
        //             else {
        //                 toast({
        //                     title: "Message:",
        //                     description: "Logged In Successfully",
        //                 })
        //                 signIn('credentials', { ...data, redirect: false });
        //                 // router.push('/dashboard')
        //             }
        //         })
        //     }
        //     else {
        //         toast({
        //             variant: "destructive",
        //             title: "Error Message:",
        //             description: "User does not exist",
        //         })

        //     }

        // })
    }

    if (session && session.user) {

        redirect('/dashboard')
        // return (
        //     <div className="flex flex-col grow justify-center px-8 items-center">
        //         <h1>Logged in Successfully</h1>

        //     </div>
        // )
    }
    else {
        return (
            <div className="flex flex-col grow justify-center px-8 items-center">
                <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                    <h1 className="text-3xl font-bold text-left w-full mb-4">Log In</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm text-slate-500">Email</label>
                            <input
                                {...register("email")}
                                type="email" id="email" className="border outline-0 px-2 py-3 rounded-sm focus:border-primary-dark" />

                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm text-slate-500">Password</label>
                            <input
                                {...register("password")}
                                type="password" id="password" className="border outline-0 px-2 py-3 rounded-sm focus:border-primary-dark" />

                        </div>
                        {getError.is &&
                            <small className="text-red-500">{`${getError.content}`}</small>
                        }
                        <button type="submit" className="flex items-center justify-center gap-4 bg-primary-light disabled:bg-primary-light/50 p-4 font-semibold rounded-md" disabled={isSubmitting}>

                            {isSubmitting ?
                                'Submitting'
                                :
                                'Submit'
                            }
                        </button>

                    </form>
                    <div className='flex flex-col gap-4 w-full justify-center'>

                        <div className='flex flex-row items-center gap-4'>
                            <span className='border-slate-900/10 border-t border-b grow'></span>
                            <p className=''>or</p>
                            <span className='border-teal-900/10 border-t border-b grow'></span>
                        </div>
                        <button onClick={() => signIn('google')} className="flex justify-center items-center gap-4 bg-gray-200 p-4 font-semibold text-sm rounded-md"> <Image src={googleImage} alt="hero_image" className='w-5 h-5' /> Continue with Google</button>
                        <div className="text-center text-sm mt-2"><p>Just Getting Started? <Link href={'/register'} className="text-amber-700 hover:underline">Create an Account</Link></p></div>
                    </div>
                </div>

            </div>
        )

    }
}

export default LoginForm