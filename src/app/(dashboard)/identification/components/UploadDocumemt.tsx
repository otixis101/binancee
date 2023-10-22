import React from 'react'
import Image from 'next/image'
import imgFull from '@/assets/images/full-page-icon-poa.svg'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Download, InfoIcon, Upload } from 'lucide-react'


interface iDetails {
    stepChange: (value: number) => void
}

const UploadDocumemt = ({ stepChange }: iDetails) => {
    return (

        <div className='w-full lg:w-4/5 flex flex-col p-8'>
            <h1 className="text-3xl font-semibold"> Upload your document</h1>
            <p className="text-gray-400 text-sm">The document must meet specific requirements in order to be accepted for verification. Please ensure that you submit a real document.
                Failure to provide us with real and accurate documents may result in a temporary or permanent block on your account.</p>
            <section>
                <ul className='flex flex-col gap-4 py-12 text-sm'>
                    <li className='flex justify-between gap-8'>
                        <p className='text-gray-700'>Document</p>
                        <p className='font-semibold text-right'>Bank Statement</p>
                    </li>
                    <li className='flex justify-between gap-8'>
                        <p className='text-gray-700'>Isssued Date</p>
                        <p className='font-semibold text-right'>Within 3 months</p>
                    </li>
                    <li className='flex justify-between gap-8'>
                        <p className='text-gray-700'>Name of the doc.</p>
                        <p className='font-semibold text-right'>PRECIOUS CHUKWUDI OTI</p>
                    </li>
                    <li className='flex justify-between gap-8'>
                        <p className='text-gray-700'>Address of the doc.</p>
                        <p className='font-semibold text-right'>NO 32, OKE ONIJO STREET OFF OGUNLANA BUSTOP, Surulere, Lagos State, Lagos State, lagos, surulere, 102391</p>
                    </li>
                </ul>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="" className='text-sm'>Document</label>

                    <div className='p-8 py-24 border border-dashed flex flex-col items-center bg-gray-50 gap-4'>
                        <Button className='bg-primary hover:bg-primary text-gray-800 rounded-lg'><Upload className='w-4 h-4 mr-3' /> Upload</Button>
                        <small className='text-gray-400'>Max 7 MB in .jpg/.jpeg/.png/.pdf format</small>
                    </div>
                    <small className='text-gray-500'>Please upload full page document, cropped image or screenshot will be rejected</small>
                </div>

            </section>

            <div className='flex gap-3 py-6 justify-end'>
                <Button variant={'ghost'} className='flex gap-3 hover:text-primary hover:bg-white w-fit px-3' onClick={() => stepChange(0)}><ChevronLeft className='w-3 h-3' /> Back</Button>
                <Button variant={'default'} className='flex gap-3 hover:bg-primary bg-primary text-black w-fit px-8'>Continue</Button>
            </div>
        </div>
    )
}

export default UploadDocumemt