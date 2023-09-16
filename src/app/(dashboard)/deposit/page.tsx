import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { SearchIcon } from 'lucide-react'


export const metadata: Metadata = {
    title: 'Binancee | User Dashboard',
    description: 'Use Dashboard',
}

const dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='flex w-full'>
                <Sidebar />
                <main className="grow px-6 lg:px-16 py-8 flex flex-col gap-3">
                    <div className='flex items-center gap-2'>
                        <ChevronLeftIcon className='w-6 h-6' />
                        <h1 className='text-2xl font-semibold'>Deposit Crypto</h1>
                    </div>

                    <section className=''>
                        <section className="text-gray-600 ">
                            <div className="flex flex-wrap">
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full md:py-6">
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 inline-flex items-center justify-center text-orange-900 relative z-10">
                                                <p>1</p>
                                            </div>
                                            <div className="flex-grow flex flex-col gap-3 pl-4">
                                                <h2 className="font-semibold text-gray-900 tracking-wider">Select Coin</h2>
                                                <div className='flex gap-1 items-center border border-gray-200 rounded-lg px-3 overflow-hidden py-2 w-fit'>
                                                    <SearchIcon className='w-4 h-4 text-gray-400' />
                                                    <input type="text" placeholder='Select Coin' className='outline-0 text-sm border-none' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex relative pb-12">
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
                                        </div>
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 inline-flex items-center justify-center text-orange-900 relative z-10">
                                                <p>3</p>
                                            </div>
                                            <div className="flex-grow flex flex-col gap-3 pl-4">
                                                <h2 className="font-semibold text-gray-900 tracking-wider">Deposit Address</h2>
                                                <div className='flex gap-1 items-center border border-gray-200 rounded-lg px-3 overflow-hidden py-2 w-fit'>
                                                    <SearchIcon className='w-4 h-4 text-gray-400' />
                                                    <input type="text" className='outline-0 border-none' />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>

                </main>
            </div>
        </>
    )
}

export default dashboard