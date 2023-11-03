"use client"

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Address from './components/Address'
import UploadDocumemt from './components/UploadDocumemt'

import Image from 'next/image'
import imgFull from '@/assets/images/full-page-icon-poa.svg'
import imgSent from '@/assets/mailbox.png'
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'



// export const metadata: Metadata = {
//     title: 'Binancee | Verficiation Set Up',
//     description: 'Verification page for KYC',
// }


type tFormData = {
    address: string,
    city: string,
    country: string,
    postal_code: string,
    state: string,
}

const Page = () => {

    const router = useRouter();
    const { toast } = useToast()

    const { data: session } = useSession();

    const [getSubmitting, setSubmitting] = useState(false)

    const [steps, setSteps] = useState(0)
    const [getUserForm, setUserForm]: tFormData | any = useState();

    const [getKycStatus, setKycStatus] = useState<any | null>(null)

    const handleStepChange = (step: number) => {
        setSteps(step)
    }


    const handleFormUpdate = (key: string, newValue: any) => {
        let newUserForm = { ...getUserForm } as any;
        newUserForm[key] = newValue;

        setUserForm(newUserForm);

    }



    const handleSubmit = async () => {

        setSubmitting(true)

        const user = await axios.post('/api/get-user', {
            email: session?.user?.email
        })

        alert('submitting')

        await axios.post('/api/make-verification', {
            "userId": user.data.id,
            "address": getUserForm.address,
            "city": getUserForm.city,
            "country": getUserForm.country,
            "state": getUserForm.state,
            "postal_code": getUserForm.postal_code,

        }).then((res) => {
            if (res.data.isError == false) {
                toast({
                    title: "Success Message:",
                    description: res.data.message,
                })
                router.push('/dashboard')
                // setKycStatus(false)
            }
            if (res.data.isError == true) {

                toast({
                    variant: "destructive",
                    title: "Error Message:",
                    description: res.data.message
                })
            }
            // revalidatePath(pathname)
        }).catch((error) => {

            toast({
                variant: "destructive",
                title: "Error Message:",
                description: "Something went Error!",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        })

        // console.log(getUserForm)

        setSubmitting(false)

    }

    const fetchKycStatus = async () => {
        const stats = await axios.get('/api/get-verification').then((res) => {
            setKycStatus(() => res.data.checkKyc)
            console.log(res.data.checkKyc)
        })
    }

    useEffect(() => {
        fetchKycStatus();
    }, [])


    return (
        <>
            <Navbar />
            <div className='flex w-full'>
                <Sidebar />
                <section className="flex flex-col gap-3 h-full w-full lg:w-[85%] shrink-0 grow-0">
                    {
                        !getKycStatus ?
                            (

                                <section className="flex flex-col lg:flex-row w-full lg:w-3/4 h-full">
                                    <div className='hidden lg:block lg:w-1/5 w-full lg:min-h-full grow shrink-0 bg-gray-50'>
                                        <Image src={imgFull} alt='' className='h-full' />
                                    </div>
                                    {
                                        steps == 0 &&
                                        (
                                            <Address stepChange={handleStepChange}
                                                onFormUpdate={handleFormUpdate} />
                                        )
                                    }
                                    {
                                        steps == 1 &&
                                        (
                                            <UploadDocumemt formData={getUserForm} stepChange={handleStepChange}
                                                onFormSubmit={handleSubmit} />
                                        )


                                    }
                                </section>
                            ) :
                            (
                                <section className="flex flex-col items-center w-full h-full">

                                    <div className="flex flex-col py-32 p-16 justify-center gap-4 items-center">
                                        <Image src={imgSent} alt='' className='w-full lg:w-1/2' />
                                        <h1 className="text-xl font-semibold text-center">
                                            Your Identification Request has been Submitted and is under Review.
                                        </h1>
                                        <Button variant={'default'} className='bg-primary-light/70 hover:bg-primary-light text-gray-900' onClick={() => router.push('/dashboard')}>Go Back</Button>
                                    </div>

                                </section>
                            )
                    }
                </section>
            </div>
        </>
    )
}

export default Page