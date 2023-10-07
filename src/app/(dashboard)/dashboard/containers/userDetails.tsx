
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Image from 'next/image'
import Link from 'next/link'
import profile from '@/assets/default-avater.svg'
import { PencilIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

import { signIn, useSession } from 'next-auth/react'
import axios from "axios"

const UserDetails = () => {

    const { data: session } = useSession();

    const [user, setUser]: any = useState([])

    const getUser = async () => {
        await axios.post('/api/get-user', {
            email: session?.user?.email
        }).then((res) => {
            setUser(res.data)
        })

    }

    useEffect(() => {
        getUser()
    }, [])


    return (
        <>
            <nav className='bg-gray-50'>
                <ul className='flex py-6 gap-4 md:gap-12 justify-between items-center flex-wrap'>
                    <li className='md:border-r md:border-gray-200 border-0 px-8'>
                        <div className="flex gap-4 items-center">
                            <Image src={profile} alt='' />
                            <div className='flex flex-col gap-4'>
                                <p className='font-semibold'>
                                    {session?.user?.email}
                                    <Link href={'#'} className=""><PencilSquareIcon className="w-5 h-5 p-1 rounded-sm hover:text-gray-800 text-gray-500 bg-gray-200" /></Link>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='grow flex'>
                        <ul className='flex justify-around w-full md:gap-16 md:justify-start'>
                            <li className='flex flex-col'>
                                <small className="text-xs text-gray-400">User ID</small>
                                <small className='text-xs font-semibold'>{user?.id}</small>
                            </li>
                            <li className='flex flex-col'>
                                <small className="text-xs text-gray-400">VIP Level</small>
                                <small className='text-xs font-semibold'>Regular User</small>
                            </li>
                            <li className='flex flex-col'>
                                <small className="text-xs text-gray-400">User Type</small>
                                <small className='text-xs font-semibold'>Personal</small>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default UserDetails