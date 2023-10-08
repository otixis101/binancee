"use client"

import { CheckIcon, ChevronDownIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import { Menu, Listbox } from "@headlessui/react"
import { useState, Fragment, useEffect } from 'react'

import { useSession } from 'next-auth/react'
import axios from "axios"
import { Button } from "./ui/button"

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
    const [selectedCoin, setSelectedCoin] = useState(cryptos[0])

    const { data: session } = useSession();

    const [Asset, setAsset] = useState<tAsset>()

    const [translatedBal, setTranslatedBal] = useState('0.00')

    const [isHidden, setIsHidden] = useState(false)

    const getAsset = async () => {
        await axios.post('/api/get-asset', {
            email: session?.user?.email
        }).then((res) => setAsset(res.data));
    }

    const getEstimate = async () => {
        const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${selectedCoin.name.toLowerCase()}`;

        const conv_price = fetch(apiUrl)
            .then((response) => {
                // Check if the request was successful (status code 2xx)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the response data as JSON
                return response.json();
            })
            .then((data) => {
                const result = Object.values(data);
                const bal = Asset ? (Asset.balance * (result as unknown as number)) : 0.00;
                setTranslatedBal(bal.toString().slice(0, 8))
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error:', error);
            });
    }

    const handleToggle = () => {
        setIsHidden((prevHidden) => !prevHidden);
        console.log(isHidden)
    }

    useEffect(() => {
        getAsset()
    }, [])

    useEffect(() => {
        getEstimate()
    }, [selectedCoin, Asset])

    // useEffect(() => {
    //     console.log(isHidden)
    // }, [isHidden])


    // const {balance} = asset

    return (
        <>
            <section className="px-4 py-8 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <p className="flex gap-2 items-center font-semibold text-lg">Estimated Balance
                    </p>
                    <Button variant={'ghost'} size={'icon'} className="bg-gray-100 rounded-md w-8 h-8" onClick={handleToggle}>
                        {
                            isHidden ?
                                (
                                    <EyeIcon className="w-4 h-4 text-gray-400" />

                                ) :
                                (
                                    <EyeSlashIcon className="w-4 h-4 text-gray-400 " />
                                )
                        }
                    </Button>
                </div>
                <div className="flex gap-1 text-xl lg:text-2xl items-center border-b border-dotted w-fit">
                    {
                        isHidden ?
                            (
                                <>
                                    <p className="font-medium text-gray-600">***Balance Hidden***</p>

                                    <div className="flex gap-2 ml-2">
                                        <p>=</p>
                                        <h1 className="text-gray-500"> XXXX.XXXX
                                        </h1>
                                    </div>
                                </>
                            ) :
                            (
                                <>
                                    <p className="font-medium text-2xl text-gray-600">{translatedBal}</p>
                                    <div className="flex gap-1 items-center z-0 relative">
                                        <Listbox value={selectedCoin} onChange={setSelectedCoin}>
                                            <Listbox.Button className={`flex gap-2 items-center`}>{selectedCoin.name} <ChevronDownIcon className="w-6 h-6 bg-gray-100 p-1 rounded-md" /></Listbox.Button>
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
                                        <h1 className="text-gray-500 text-2xl"> {
                                            Asset ?
                                                Asset?.symbol + "" + Asset?.balance
                                                : '$0.00'
                                        }
                                        </h1>
                                    </div>
                                </>
                            )
                    }

                </div >
                <small className="text-sm text-gray-400">
                    {

                        (Asset && Asset!.balance > 0) ? (
                            "You can start your investment Journey now with ROI of x6 leverage"

                        ) : (
                            "Your account does not currently have any assets, complete identity verification in order to make deposits to your account."
                        )

                    }
                </small>

            </section >
        </>
    )
}

export default Balance