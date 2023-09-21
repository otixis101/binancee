"use client"

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

import { Button } from "@/components/ui/button"

import Image from 'next/image'

import illust from "@/assets/il-guide.svg"
import { ChevronLeft,VariableIcon } from 'lucide-react'

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
                <main className="grow flex flex-col w-full">
                    <div className='flex items-center bg-gray-50 px-8 py-6 gap-2'>
                        <Button variant="default" size="icon" className='bg-transparent hover:bg-gray-50 text-gray-800' onClick={() => router.back()}>
                            <ChevronLeft className='w-6 h-6' />
                        </Button>
                        <h1 className='text-2xl font-semibold'>Withdraw Crypto</h1>
                    </div>


                    <section className='bg-gray-50 flex flex-col'>
                        <section className="text-gray-600 bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col p-6 lg:p-8">
                            <div className="flex w-full lg:flex-row flex-col gap-4 p-6 rounded-xl bg-gray-50">
                                <Image src={illust} alt='iluustration' className='w-16 h-16' />
                                <div className="w-full flex flex-col lg:flex-row">
                                    <div className="flex flex-row lg:flex-col relative pb-12 lg:pb-0">
                                        <div className="h-full lg:h-10 w-10 lg:w-full absolute inset-0 flex items-center justify-center">
                                            <div className="h-full lg:h-1 w-1 lg:w-full bg-primary-light pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full border-8 border-gray-50 bg-primary inline-flex items-center justify-center relative z-10">
                                            1
                                        </div>
                                        <div className="flex-grow pl-4 lg:pl-1.5">
                                            <h2 className="font-semibold text-sm text-gray-900 mb-1">Initiate a withdrawal</h2>
                                            <p className="text-sm text-gray-400">Start a withdrawal request on Binance</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row lg:flex-col relative pb-12 lg:pb-0">
                                        <div className="h-full lg:h-10 w-10 lg:w-full absolute inset-0 flex items-center justify-center">
                                            <div className="h-full lg:h-1 w-1 lg:w-full bg-primary-light pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full border-8 border-gray-50 bg-primary inline-flex items-center justify-center relative z-10">
                                            2
                                        </div>
                                        <div className="flex-grow pl-4 lg:pl-1.5">
                                            <h2 className="font-semibold text-sm text-gray-900 mb-1">Get address</h2>
                                            <p className="text-sm text-gray-400">Copy and paste the deposit address of the receiver</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row lg:flex-col relative pb-12 lg:pb-0">
                                        <div className="h-full lg:h-10 w-10 lg:w-full absolute inset-0 flex items-center justify-center">
                                            <div className="h-full lg:h-1 w-1 lg:w-full bg-primary-light pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full border-8 border-gray-50 bg-primary inline-flex items-center justify-center relative z-10">
                                            3
                                        </div>
                                        <div className="flex-grow pl-4 lg:pl-1.5">
                                            <h2 className="font-semibold text-sm text-gray-900 mb-1">Network confirmation</h2>
                                            <p className="text-sm text-gray-400">Wait for withdrawal network confirmation</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row lg:flex-col relative">

                                        <div className="flex-shrink-0 w-10 h-10 rounded-full border-8 border-gray-50 bg-primary inline-flex items-center justify-center relative z-10">
                                            4
                                        </div>
                                        <div className="flex-grow pl-4 lg:pl-1.5">
                                            <h2 className="font-semibold text-sm text-gray-900 mb-1">Deposit Successful</h2>
                                            <p className="text-sm text-gray-400">Deposit successfully sent to receiver&apos;s address</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 py-8 w-full">
                                <div className="flex flex-col gap-2 w-full lg:w-[180px]">
                                    <label htmlFor="send-to" className="block text-sm font-medium leading-6 text-gray-900">Select Coin</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
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
                                <div className="flex flex-col gap-2 w-full lg:w-fit">
                                    <label htmlFor="send-to" className="block text-sm font-medium leading-6 text-gray-900">Send To Address</label>
                                    <div className="flex flex-row gap-2 items-center shadow-sm ring-1 ring-inset ring-gray-300 px-2 py-2.5 w-full lg:w-[480px]">
                                        <input type="text" name="send-to" id="send-to" className="block bg-transparent outline-none rounded-md border-0 p-0 text-gray-900 text-sm placeholder:text-gray-400 grow" />
                                        <VariableIcon className='w-4 h-4 shrink-0' />
                                    </div>
                                </div>
                            </div>
                            <section className='flex flex-col gap-4 px-4 w-full'>
                                <ul className='grid grid-flow-row grid-cols-2 text-sm gap-4 w-full lg:w-1/2'>
                                    <li>
                                        <small className='text-gray-500'>BTC Balance</small>
                                        <p className='font-semibold'>0 BTC</p>
                                    </li>
                                    <li>
                                        <small className='text-gray-500'>Minimum withdrawal</small>
                                        <p className='font-semibold'>0.000005 BTC</p>
                                    </li>
                                    <li>
                                        <small className='text-gray-500'>Network fee</small>
                                        <p className='font-semibold'>0.000001 ~ 0.000085 BTC</p>
                                    </li>
                                    <li>
                                        <small className='text-gray-500'>24h remaining limit</small>
                                        <p className='font-semibold'>8,000,000.00 BUSD/8,000,000.00 BUSD</p>
                                    </li>
                                </ul>

                            </section>
                        </section>
                    </section>

                    <section></section>

                </main>
            </div>
        </>
    )
}

export default Dashboard