"use client"

import { CheckIcon, ChevronDownIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import { Menu, Listbox } from "@headlessui/react"
import { useState, Fragment, useEffect } from 'react'

import { useSession } from 'next-auth/react'
import axios from "axios"

const cryptos = [
    { id: 1, name: 'BTC' },
    { id: 2, name: 'USDT' },
    { id: 3, name: 'ETH' },
    { id: 4, name: 'BNB' },
]

type tAsset = {
    id: string;
    symbol: string;
    name: string;
    balance: number;
    createdAt: string;
    ownerId: string;
}

const Balance = () => {
    const [selectedPerson, setSelectedPerson] = useState(cryptos[0])

    const { data: session } = useSession();

    const [Asset, setAsset] = useState<tAsset>()

    const getAsset = async () => {
        await axios.post('/api/get-asset', {
            email: session?.user?.email
        }).then((res) => setAsset(res.data));
    }


    useEffect(() => {
        getAsset()
    }, [])



    // const {balance} = asset

    return (
        <>
            <section className="px-6 py-8 flex flex-col gap-3">
                <div>
                    <p className="flex gap-2 items-center font-semibold text-lg">Estimated Balance
                        <label className="bg-gray-100 p-1 rounded-md cursor-pointer" htmlFor="balanceCheck">
                            <input type="checkbox" className="hidden peer" name="" id="balanceCheck" />
                            {/* <EyeIcon className="w-4 h-4 text-gray-400 peer-checked:hidden" /> */}
                            <EyeSlashIcon className="w-4 h-4 text-gray-400 " />
                        </label></p>
                </div>
                <div className="flex gap-1 text-2xl items-center border-b border-dotted w-fit">
                    <p className="font-medium text-gray-600">0.00</p>
                    <div className="flex gap-1 items-center z-0 relative">
                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                            <Listbox.Button className={`flex gap-2 items-center`}>{selectedPerson.name} <ChevronDownIcon className="w-6 h-6 bg-gray-100 p-1 rounded-md" /></Listbox.Button>
                            <Listbox.Options className={`absolute top-0 right-0 z-10 mt-8 origin-top-right text-sm rounded-md w-fit bg-white shadow-md overflow-hidden ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                                {cryptos.map((crypto) => (
                                    /* Use the `active` state to conditionally style the active option. */
                                    /* Use the `selected` state to conditionally style the selected option. */
                                    <Listbox.Option key={crypto.id} value={crypto} as={Fragment}>
                                        {({ active, selected }) => (
                                            <li
                                                className={`flex items-center hover:bg-gray-50 bg-white cursor-pointer gap-2 px-4 py-2 ${selected ? 'bg-gray-50 text-primary-dark' : ' text-black'
                                                    }`}
                                            >
                                                {crypto.name}
                                            </li>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Listbox>
                    </div>
                    <div className="flex gap-2 ml-2">
                        <p>=</p>
                        <h1 className="text-gray-500"> {
                            Asset ?
                                Asset?.symbol + "" + Asset?.balance
                                : '$0.00'
                        }
                        </h1>
                    </div>
                </div>
                <small className="text-sm text-gray-400">Your account does not currently have any assets, complete identity verification in order to make deposits to your account.</small>

            </section>
        </>
    )
}

export default Balance