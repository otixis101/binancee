import Link from "next/link"
import { InformationCircleIcon } from "@heroicons/react/24/outline"

interface stageProp {
    onStageChange: (value: number) => void;
}

const EmailVerify = ({ onStageChange }: stageProp) => {
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
                            <input type="text" id="uid" className="border w-full outline-0 px-3 py-3 text-lg rounded-sm focus:border-primary-dark" />
                            <small className="absolute right-4 text-green-500 flex items-center gap-1"><InformationCircleIcon className="w-5 h-5" /> Email Sent</small>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-4 bg-primary-light p-4 font-semibold rounded-md" onClick={() => onStageChange(3)}>Submit</button>
                </div>
                <div className="flex justify-between">
                    <Link href={'#'} className="text-amber-700 hover:underline text-sm">Didn&#39;t Receive the Code?</Link>
                    <Link href={'#'} className="text-amber-700 hover:underline text-sm">Resend Code</Link>
                </div>

            </div>

        </div>
    )
}

export default EmailVerify