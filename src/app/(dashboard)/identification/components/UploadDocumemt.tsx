"use client"

import React, { ChangeEvent, useRef, useState } from 'react'
import Image from 'next/image'
import imgFull from '@/assets/images/full-page-icon-poa.svg'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Download, InfoIcon, Loader2, Upload } from 'lucide-react'
import axios from 'axios'

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"


interface iDetails {
    stepChange: (value: number) => void
    onFormSubmit: () => void;
    formData: tFormData
}

type tFormData = {
    address: string,
    city: string,
    country: string,
    postal_code: string,
    state: string,
}

const UploadDocumemt = ({ stepChange, onFormSubmit, formData }: iDetails) => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const { toast } = useToast()

    const [error, setError] = useState<string | null>(null);
    const [isUploadingFile, setIsUploadingFile] = useState(false);
    const [fileLink, setFileLink] = useState<string | null>(null);

    const f = formData


    const handleUpload = () => {

        // Trigger the input file click event
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>, uploadToServer = true) => {
        const file = evt.target.files?.[0];
        const fileName = file?.name;

        if (!file) {
            return;
        }

        // if (uploadToServer) {
        //     handleFileUploadToServer(file)
        // }

        setFile(file);
        setFilePreviewUrl(URL.createObjectURL(file));
    };

    const uploadFileToServer = () => {
        handleFileUploadToServer(file);
    }

    const handleFileUploadToServer = async (file: any) => {
        try {
            setIsUploadingFile(true);
            const formData = new FormData();
            // @ts-ignore
            formData.append("file", file);

            const response = await axios.post('/api/file/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            // toast({
            //     variant: "destructive",
            //     title: "Success Message:",
            //     description: "KYC has been uploaded successfully",
            // })
            setIsUploadingFile(false);
            onFormSubmit()
            // setFileLink(response?.data?.data?.file_link)
        } catch (error) {
            setFileLink(null);
            setIsUploadingFile(false);
            setError('Error uploading file. Please try again!')
        } finally {
            setIsUploadingFile(false);
        }
    }


    let imagePreviewPoint = filePreviewUrl ? (<Image
        //@ts-ignore
        src={filePreviewUrl ? filePreviewUrl : ''} alt='image of meal' className='object-contain w-32 h-32' width={30} height={20} quality={70} />) : <p className='text-center text-gray-400 place-self-center'>Preview Image Here</p>


    return (

        <div className='w-full lg:w-4/5 flex flex-col p-8'>
            <h1 className="text-3xl font-semibold"> Upload your document</h1>
            <p className="text-gray-400 text-sm">The document must meet specific requirements in order to be accepted for verification. Please ensure that you submit a real document.
                Failure to provide us with real and accurate documents may result in a temporary or permanent block on your account.</p>
            <section>
                <ul className='flex flex-col gap-4 py-12 text-sm'>
                    <li className='flex justify-between gap-8'>
                        <p className='text-gray-700'>Document</p>
                        <p className='font-semibold text-right'>Bank Statement / Driver&apos;s License / ID Card</p>
                    </li>
                    {/* <li className='flex justify-between gap-8'>
                        <p className='text-gray-700'>Isssued Date</p>
                        <p className='font-semibold text-right'>Within 3 months</p>
                    </li>
                    <li className='flex justify-between gap-8'>
                        <p className='text-gray-700'>Name of the doc.</p>
                        <p className='font-semibold text-right'>PRECIOUS CHUKWUDI OTI</p>
                    </li> */}
                    <li className='flex justify-between gap-8'>
                        <p className='text-gray-700'>Address of the doc.</p>
                        {/* <p className='font-semibold text-right'>{}</p> */}
                        <p className='font-semibold text-right'>
                            {
                                f.address + " " + f.postal_code + " " + f.city + " " + f.state + " " + f.country
                            }
                        </p>
                    </li>
                </ul>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="" className='text-sm'>Document</label>

                    <div className='p-8 py-24 border border-dashed flex flex-col items-center bg-gray-50 gap-4'>
                        {imagePreviewPoint}
                        <input
                            type="file"
                            ref={fileInputRef}
                            accept=".jpg, .jpeg, .png"
                            className="hidden"
                            // @ts-ignore
                            onChange={handleFileChange}
                            hidden
                        />
                        <Button className='bg-primary hover:bg-primary text-gray-800 rounded-lg' onClick={handleUpload}><Upload className='w-4 h-4 mr-3' /> Upload</Button>
                        <small className='text-gray-400'>Max 7 MB in .jpg/.jpeg/.png/.pdf format</small>
                    </div>
                    <small className='text-gray-500'>Please upload full page document, cropped image or screenshot will be rejected</small>
                </div>

            </section>

            <div className='flex gap-3 py-6 justify-end'>
                <Button variant={'ghost'} className='flex gap-3 hover:text-primary hover:bg-white w-fit px-3' onClick={() => stepChange(0)}><ChevronLeft className='w-3 h-3' /> Back</Button>
                <Button variant={'default'} className='flex gap-3 hover:bg-primary bg-primary text-black w-fit px-8 disabled:bg-primary/30' disabled={isUploadingFile} onClick={uploadFileToServer}>
                    {
                        isUploadingFile ?
                            <Loader2 className='animate-spin w-4 h-4' />
                            :
                            'Submit'

                    }
                </Button>
            </div>
        </div>
    )
}

export default UploadDocumemt