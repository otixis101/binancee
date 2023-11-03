"use client"

import { Button } from '@/components/ui/button'
import { ChevronLeft, InfoIcon } from 'lucide-react'

import { FieldValues, useForm } from "react-hook-form"

import { useRouter } from 'next/navigation'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface iDetails {
    stepChange: (value: number) => void
    onFormUpdate: (key: string, value: any) => void;
}

const formSchema = z.object({
    address: z.string(),
    postal_code: z.number()
})

const Address = ({ stepChange, onFormUpdate }: iDetails) => {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: FieldValues) => {
        //move to next stage

    }
    return (

        <div className='w-full lg:w-4/5 flex flex-col p-8'>
            <h1 className="text-3xl font-semibold">What is your current residential <br /> address?</h1>
            <p className="text-gray-400">Fill in your current residential address.</p>
            <div className='bg-primary/20 text-sm p-6 rounded-lg flex items-center gap-3 my-4 w-fit'>
                <InfoIcon className="w-6 h-6 text-primary/80 shrink-0" /> Please enter the address exactly as it appears on your <br /> document that you are about to upload as your proof of address document
            </div>
            <section className='grid gap-6'>
                <div className='flex flex-col gap-2 lg:col-span-12'>
                    <label htmlFor="add" className='text-sm'>
                        Residential Address
                    </label>
                    <input type="text" id='add' onChange={(e) => onFormUpdate('address', e.target.value)} className='focus:outline-primary border p-2' />
                </div>
                <div className='flex flex-col gap-2 lg:col-span-6'>
                    <label htmlFor="postal_code" className='text-sm'>
                        Postal Code
                    </label>
                    <input type="text" id="postal_code" onChange={(e) => onFormUpdate('postal_code', e.target.value)} className='focus:outline-primary border p-2' />
                </div>
                <div className='flex flex-col gap-2 lg:col-span-6'>
                    <label htmlFor="city" className='text-sm'>
                        City
                    </label>
                    <input type="text" id="city" onChange={(e) => onFormUpdate('city', e.target.value)} className='focus:outline-primary border p-2' />
                </div>
                <div className='flex flex-col gap-2 lg:col-span-12'>
                    <label htmlFor="state" className='text-sm'>
                        State
                    </label>
                    <input type="text" id='state' onChange={(e) => onFormUpdate('state', e.target.value)} className='focus:outline-primary border p-2' />
                </div>
                <div className='flex flex-col gap-2 lg:col-span-12'>
                    <label htmlFor="country" className='text-sm'>
                        Country/Region
                    </label>
                    <input type="text" id="country" onChange={(e) => onFormUpdate('country', e.target.value)} className='focus:outline-primary border p-2' />
                </div>

            </section>

            <div className='flex gap-3 py-6 justify-end'>
                <Button variant={'ghost'} className='flex gap-3 hover:text-primary hover:bg-white w-fit px-3' onClick={() => router.push('/dashboard')}><ChevronLeft className='w-3 h-3' /> Back</Button>
                <Button variant={'default'} className='flex gap-3 hover:bg-primary bg-primary text-black w-fit px-8' onClick={() => stepChange(1)}>Continue</Button>
            </div>
        </div>
    )
}

export default Address