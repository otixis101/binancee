"use client"


import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'
import { Tab } from '@headlessui/react'


export const metadata: Metadata = {
    title: 'Payment Page | Binancee',
    description: 'Payment page or Binancee',
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Page = () => {

    let [categories] = useState(['P2P', 'Buy Crypto'])

    return (
        <>
            <Navbar />
            <div className='flex w-full'>
                <Sidebar />
                <section className="grow flex flex-col gap-4 px-10 py-6">

                    <h1 className='text-2xl font-bold'>Payment</h1>

                    <Tab.Group>
                        <Tab.List className="flex gap-6 border-b border-gray-300 outline-0">
                            {(categories).map((category, index) => (
                                <Tab
                                    key={index}
                                    className={({ selected }) =>
                                        classNames(
                                            'text-base px-2 py-2  outline-0',
                                            selected ?
                                            'border-b font-semibold text-gray-900 border-primary-dark' :
                                            'text-gray-400 font-medium'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white py-3 text-gray-600',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <div>
                                    <p>P2P payment methods: When you sell cryptocurrencies, the payment method added will be displayed to buyer as options to accept payment, please ensure that the account owner’s name is consistent with your verified name on Binance. You can add up to 20 payment methods.</p>
                                </div>

                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white py-3 text-gray-600',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <div>
                                    <p>Manage the payment method of your credit and debit card on the buy crypto page</p>
                                </div>

                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                </section>
            </div>
        </>
    )
}

export default Page