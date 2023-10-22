"use client"

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Address from './components/Address'
import UploadDocumemt from './components/UploadDocumemt'

import Image from 'next/image'
import imgFull from '@/assets/images/full-page-icon-poa.svg'
import { useState } from 'react'


export const metadata: Metadata = {
    title: 'Binancee | Verficiation Set Up',
    description: 'Verification page for KYC',
}

const Page = () => {

    const [steps, setSteps] = useState(0)

    const handleStepChange = (step: number) => {
        setSteps(step)
    }

    return (
        <>
            <Navbar />
            <div className='flex w-full'>
                <Sidebar />
                <section className="flex flex-col gap-3 h-full w-full lg:w-[85%] shrink-0 grow-0">
                    <section className="flex flex-col lg:flex-row w-full lg:w-3/4 h-full">
                        <div className='hidden lg:block lg:w-1/5 w-full lg:h-full grow shrink-0 bg-gray-50'>
                            <Image src={imgFull} alt='' className='h-full' />
                        </div>
                        {
                            steps == 0 &&
                            (
                                <Address stepChange={handleStepChange} />
                            )
                        }
                        {
                            steps == 1 &&
                            (
                                <UploadDocumemt stepChange={handleStepChange} />
                            )


                        }
                    </section>
                </section>
            </div>
        </>
    )
}

export default Page