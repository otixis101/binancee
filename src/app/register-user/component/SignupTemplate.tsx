"use client"

import Link from 'next/link'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { z } from 'zod'

import { createUser } from '@/prismaActions/createUser'


import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';






const SignupTemplate = () => {
    const router = useRouter();

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

        await createUser(getUserForm).then((res) => {
            router.push('./register-complete')
            setSubmitting(false);
        })

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