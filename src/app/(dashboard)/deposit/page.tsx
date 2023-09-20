"use client"

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

import { Button } from "@/components/ui/button"

import Image from 'next/image'

import iconQR from '@/assets/qr-icon.png'
import { ChevronLeft, CopyIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




const Dashboard = () => {
    const router = useRouter();
    return (
        <>
            <Navbar />
            <div className='flex w-full'>
                <Sidebar />
                <main className="grow px-4 lg:px-16 py-8 flex flex-col gap-3">
                    <div className='flex items-center gap-2'>
                        <Button variant="default" size="icon" className='bg-transparent hover:bg-gray-50 text-gray-800' onClick={() => router.back()}>
                            <ChevronLeft className='w-6 h-6' />
                        </Button>
                        <h1 className='text-2xl font-semibold'>Deposit Crypto</h1>
                    </div>

                    <section className=''>
                        <section className="text-gray-600 ">
                            <div className="flex flex-wrap">
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full py-6">
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 inline-flex items-center justify-center text-orange-900 relative z-10">
                                                <p>1</p>
                                            </div>
                                            <div className="flex-grow flex flex-col gap-3 pl-4">
                                                <h2 className="font-semibold text-gray-900 tracking-wider">Select Coin</h2>

                                                <Select>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select A Coin" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="btc">Bitcoin</SelectItem>
                                                        <SelectItem value="eth">Ethereum</SelectItem>
                                                        <SelectItem value="usdt">USDT</SelectItem>
                                                        <SelectItem value="ltc">Litcoin</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        {/* <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 inline-flex items-center justify-center text-orange-900 relative z-10">
                                                <p>2</p>
                                            </div>
                                            <div className="flex-grow flex flex-col gap-3 pl-4">
                                                <h2 className="font-semibold text-gray-900 tracking-wider">Select Network</h2>
                                                <div className='flex gap-1 items-center border border-gray-200 rounded-lg px-3 overflow-hidden py-2 w-fit'>
                                                    <SearchIcon className='w-4 h-4 text-gray-400' />
                                                    <input type="text" className='outline-0 border-none' />
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 inline-flex items-center justify-center text-orange-900 relative z-10">
                                                <p>2</p>
                                            </div>
                                            <div className="flex-grow flex flex-col gap-3 pl-4 ">
                                                <h2 className="font-semibold text-gray-900 tracking-wider">Deposit Address</h2>
                                                <ul className="flex flex-wrap gap-6 items-center mt-8 p-4 bg-gray-50 w-fit">
                                                    <li className='h-20 aspect-square relative'>
                                                        <Image src={iconQR} alt='image qr' className='object-cover' fill />
                                                    </li>
                                                    <li className="flex justify-between flex-wrap items-center gap-4">
                                                        <div className='flex flex-col gap-1'>
                                                            <small className='text-gray-500'>Address</small>
                                                            <small className='font-semibold'>1BEjMSqbWHDKQuVuXVi31sKMhnruVJfq5a</small>
                                                        </div>
                                                        <Button variant="default" size="icon" className='bg-gray-100 hover:bg-gray-200 rounded-lg'>
                                                            <CopyIcon className='w-4 h-4 text-gray-800' />
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <section className='flex flex-col gap-4 px-4'>
                                    <div className='flex flex-row justify-between text-gray-600 border-b py-4 text-sm font-light'>
                                        <p>
                                            Minimum Deposit
                                        </p>
                                        <p>
                                            0.00000001 BTC
                                        </p>
                                    </div>
                                    <ul className='flex flex-col text-gray-500 gap-3 list-disc text-xs font-light pl-8'>
                                        <li>
                                            Deposits will be credited and available for Spot Trading after 1 confirmations.
                                        </li>
                                        <li>
                                            Deposits will be unlocked and available for withdrawal/other activities after 2 network confirmations.
                                        </li>
                                        <li>
                                            Do not send NFTs to this address. Learn how to deposit NFTs
                                        </li>
                                        <li>
                                            Do not send NFTs to this address. Learn how to deposit NFTs
                                        </li>
                                    </ul>

                                </section>
                            </div>
                        </section>
                    </section>

                    <section></section>

                </main>
            </div>
        </>
    )
}

export default Dashboard