"use client"

import { CheckBadgeIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { signIn, useSession } from 'next-auth/react'

const Authentication = () => {
    const { data: session } = useSession();
    return (
        <section className='px-8 flex flex-col gap-4'>
            <h1 className="text-xl text-gray-800 font-semibold mt-4 mb-2">Authentication</h1>
            <ul className='flex flex-col gap-6'>
                <li className='flex justify-between items-center border-b border-gray-200 pb-6 gap-4 flex-wrap'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-md font-semibold'>Email</h2>
                        <p className='text-sm text-gray-500'>Protect your account and transactions.</p>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <CheckCircleIcon className="w-4 h-4 text-green-600" />
                        <small className='font-semibold'>
                            {session?.user?.email}
                        </small>
                    </div>
                    <button className='px-4 py-2 text-sm rounded-md bg-gray-200'>
                        Manage
                    </button>
                </li>
                <li className='flex justify-between items-center border-b border-gray-200 pb-6'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-md font-semibold'>Login password</h2>
                        <p className='text-sm text-gray-500'>Login password is used to log in to your account.</p>

                    </div>

                    <button className='px-4 py-2 text-sm rounded-md bg-gray-200'>
                        Manage
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default Authentication