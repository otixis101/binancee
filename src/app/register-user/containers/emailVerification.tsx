"use client"

import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import { useState, useEffect } from "react";
const { authenticator } = require('otplib');

interface stageProp {
    onStageChange: (value: number) => void;
}

const EmailVerify = ({ onStageChange }: stageProp) => {

    // const searchParams = useSearchParams()
    // const search = searchParams.get('email')
    // console.log(search)
    const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';

    const [otp, setOtp] = useState('');

    const [otpCode, setOtpCode] = useState('')

    const verifyOTP = async () => {
        // Verify the OTP
        const isValid = await authenticator.verify({ token: parseInt(otpCode), secret: secret });
        if (isValid) {
            console.log('OTP is valid.');
            // onStageChange(3)
        } else {
            console.log('OTP is not valid.');
            console.log("OTP : " + otp)
            console.log("CODE : " + otpCode)
            console.log("SECRET : " + secret)
        }
    }

    const generateOTP = async () => {
        await setOtp(authenticator.generate(secret));
        console.log("OTP : " + otp)
        console.log("CODE : " + otpCode)
        console.log("SECRET : " + secret)
    }

    useEffect(() => {
        generateOTP();
    }, [])




    return (
        <div className="flex flex-col py-16 justify-center px-8 items-center">
            <div className="flex flex-col gap-8 w-full md:w-[460px] ">
                <div className="">
                    <h1 className="text-3xl font-bold text-left w-full mb-4">Email Verification</h1>
                    <p>Please enter the 6-digit verification code that was sent to user@email.com. The code is valid for 30 minutes.</p>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="uid" className="text-sm text-slate-500">Email Verification Code</label>
                        <div className="relative w-full flex items-center">
                            <input type="text" id="uid" value={otpCode} onChange={(e) => setOtpCode(e.target.value)} className="border w-full outline-0 px-3 py-3 text-lg rounded-sm focus:border-primary-dark" />
                            <small className="absolute right-4 text-green-500 flex items-center gap-1"><InformationCircleIcon className="w-5 h-5" /> Email Sent</small>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-4 bg-primary-light p-4 font-semibold rounded-md" onClick={verifyOTP}>Submit</button>
                </div>
                <div className="flex justify-between">
                    <div onClick={() => generateOTP()} className="text-amber-700 hover:underline cursor-pointer text-sm">Didn&#39;t Receive the Code?</div>
                    <Link href={'#'} className="text-amber-700 hover:underline text-sm">Resend Code</Link>
                </div>

            </div>

        </div>
    )
}

export default EmailVerify