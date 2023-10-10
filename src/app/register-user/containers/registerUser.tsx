"use client"

import Link from "next/link"

import { checkExists } from "@/prismaActions/checkExists";
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form"

import { useToast } from "@/components/ui/use-toast"

import 'animate.css';



const emailSchema = z.object({
    email: z.string().email({
        message: "Invalid email format"
    })
})



interface stageProp {
    onStageChange: (value: number, email?: string) => void;
    onFormUpdate: (key: string, value: any) => void;
}

const RegisterUser = ({ onStageChange, onFormUpdate }: stageProp) => {

    const { toast } = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(emailSchema),
    })


    const onSubmit = async (data: FieldValues) => {
        //move to next stage

        await checkExists(data).then((res) => {
            if (res?.message) {
                toast({
                    variant: "destructive",
                    title: "Error Message:",
                    description: res?.message,
                })
            }
            else {
                onStageChange(2, data.email);
            }
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-16 justify-center px-8 items-center">
            <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                <h1 className="text-3xl font-bold text-left w-full mb-4">Create New Account</h1>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm text-slate-500">Email</label>
                        <input
                            {...register("email")}
                            type="email" id="email" onChange={(e) => onFormUpdate('email', e.target.value)} className="border outline-0 px-2 py-3 rounded-sm focus:border-primary-dark" />
                        {errors.email &&
                            <small className="text-red-500 animate__animated animate__headShake">{`${errors.email.message}`}</small>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="dropdown flex flex-col gap-2">
                            <label htmlFor="referral" className="text-sm text-slate-500 dropdown-toggle">Referral ID (optional)</label>
                            <input type="text" id="referral" className="dropdown-form border outline-0 px-2 py-3 rounded-sm focus:border-primary-dark" />
                        </div>
                    </div>
                    <p>By creating an account, I agree to Binancee&#39;s <Link href={'#'} className="text-amber-700 hover:underline">Terms of Service</Link> and <Link href={'#'} className="text-amber-700 hover:underline">Privacy Policy</Link> .</p>
                    <button type="submit" className="flex items-center justify-center gap-4 bg-primary-light disabled:bg-primary-light/50 p-4 font-semibold rounded-md" disabled={isSubmitting}>Next</button>
                </div>

            </div>

        </form>
    )
}

export default RegisterUser