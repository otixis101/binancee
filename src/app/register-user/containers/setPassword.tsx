import Link from "next/link"
import { CheckIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import { Cog, RefreshCwOffIcon } from "lucide-react";



import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form"


const emailSchema = z.object({
    password: z.string().regex(
        /^(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Password must contain at least 8 characters, including a capital letter and a number'
    ),
})


interface stageProp {
    onFormSubmit: () => void;
    onFormUpdate: (key: string, value: any) => void;

}


const SetPassword = ({ onFormUpdate, onFormSubmit }: stageProp) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(emailSchema),
    })


    const onSubmit = async (data: FieldValues) => {

        onFormSubmit()
        // await new Promise((resolve) => setTimeout(resolve, 1000));
    }


    return (
        <div className="flex flex-col py-16 justify-center px-8 items-center">
            <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                <div className="">
                    <h1 className="text-3xl font-bold text-left w-full mb-4">Set Password</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm text-slate-500">Password</label>
                        <div className="relative w-full flex items-center">
                            <input
                                {...register("password")}
                                type="password" id="password" onChange={(e) => onFormUpdate('password', e.target.value)} className="border w-full outline-0 px-3 py-3 text-lg rounded-sm focus:border-primary-dark" />
                            <button type="button" className="absolute right-4 flex text-slate-400 items-center gap-1"><EyeSlashIcon className="w-5 h-5" /></button>
                        </div>
                        {errors.password &&
                            <small className="text-red-500">{`${errors.password.message}`}</small>
                        }
                    </div>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-2 items-center text-slate-400 text-sm"> <CheckIcon className="w-4 h-4" /> Minimum 8 characters</li>
                        <li className="flex gap-2 items-center text-slate-400 text-sm"> <CheckIcon className="w-4 h-4" /> Atleast 1 number</li>
                        <li className="flex gap-2 items-center text-slate-400 text-sm"> <CheckIcon className="w-4 h-4" /> Atleast 1 uppercase</li>
                    </ul>
                    <button className="flex items-center justify-center gap-4 bg-primary-light disabled:bg-primary-light/50 p-4 font-semibold rounded-md" disabled={isSubmitting} >{isSubmitting ? <RefreshCwOffIcon className="animate-spin text-gray-500" /> : 'Next'} </button>
                </form>


            </div>

        </div>
    )
}

export default SetPassword