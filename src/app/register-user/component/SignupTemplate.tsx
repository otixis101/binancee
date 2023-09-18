"use client"

import Link from 'next/link'
import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useToast } from "@/components/ui/use-toast"

import { createUser } from '@/prismaActions/createUser'


import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';






const SignupTemplate = () => {
    const router = useRouter();
    const { toast } = useToast()

    const [getSubmitting, setSubmitting] = useState(false)


    const [getUserForm, setUserForm] = useState([]);

    const [currentStage, setCurrentStage] = useState(1);


    const handleStageChange = (stage: number) => {
        setCurrentStage(stage)
    }

    const handleFormUpdate = (key: string, newValue: any) => {
        let newUserForm = { ...getUserForm } as any;
        newUserForm[key] = newValue;

        setUserForm(newUserForm);

    }

    const handleSubmit = async () => {
        setSubmitting(true)

        axios.post('/api/regUser', getUserForm,)
            .then((res) => {
                toast({
                    title: "Success Message",
                    description: "User Has been created succcesfully",
                })
                router.push('./register-complete')
                setSubmitting(false);
            })
            .catch((res) => {
                toast({
                    variant: "destructive",
                    title: "Error Message",
                    description: "Something went wrong! try again later",
                })
                setSubmitting(false);
            })

        // await createUser(getUserForm).then((res) => {
        //     alert('user has been registered')
        //     // router.push('./register-complete')
        //     setSubmitting(false);
        // }).catch((res) => {
        //     alert(res)
        //     setSubmitting(false);
        // })

    }


    return (
        <>



            {currentStage === 1 && (
                <Step1
                    onStageChange={handleStageChange}
                    onFormUpdate={handleFormUpdate}
                />
            )}
            {currentStage === 2 && (
                <Step2
                    onStageChange={handleStageChange}
                />
            )}
            {currentStage === 3 && (
                <Step3
                    onFormUpdate={handleFormUpdate}
                    isSubmitting={getSubmitting}
                    onFormSubmit={handleSubmit}
                />
            )}




        </>
    )

}


export default SignupTemplate