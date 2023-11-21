"use client"


import { ChevronLeftIcon } from '@heroicons/react/24/outline'

import { Button } from "@/components/ui/button"

import Image from 'next/image'

import iconQR from '@/assets/qr-icon.png'
import { ChevronLeft, CopyIcon, Currency, DollarSignIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ChangeEvent, useEffect, useState } from 'react'



import axios from "axios";
import { signIn, useSession } from 'next-auth/react'



const Deposit = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const [token, setToken] = useState("")
    const [result, setResult] = useState<any | null>(null)
    const [getAddress, setAddress] = useState("");
    const [amount, setAmount] = useState('0')

    const [copied, setCopied] = useState(false)
    const [textToCopy, setTextToCopy] = useState('crypto adddress here');


    const handleCopy = async () => {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }

    useEffect(() => {
        const getCryptoAddresses = async () => {
            // setResult(() => null)
            const res = await fetch('/api/get-wallet')
            let data = await res.json();
            setResult(() => data)
            // console.log(data)
        }
        getCryptoAddresses();
    }, [])

    const handleToken = (value: string) => {
        // setToken(value)
        // console.log(token)

        switch (value) {
            case "btc":
                setTextToCopy(result.btc);
                return
            case "eth":
                setTextToCopy(result.eth);
                return
            case "ltc":
                setTextToCopy(result.ltc);
                return
            case "usdt":
                setTextToCopy(result.usdt);
                return
            case "bnb":
                setTextToCopy(result.bnb);
                return
        }
        console.log(textToCopy)
    }

    const handleDeposit = async () => {

        setIsLoading(true)

        if ((parseInt(amount) < 50 || isNaN(parseInt(amount)))) {
            toast({
                variant: "destructive",
                title: "Error Message:",
                description: "Amount must be a Number and be atleast $50",
            })
            // setResponse({
            //     isError: true,
            //     isSuccess: false,
            //     content: "Amount must be a Number and be atleast $50"
            // }
            // )
            setIsLoading(false)
            // alert(getResponse.isError)
            return null;
        }

        const user = await axios.post('/api/get-user', {
            email: session?.user?.email
        })

        await axios.post('/api/make-deposit', {
            "userId": user.data.id,
            "amount": parseInt(amount),
            "token": token

        }).then((res) => {
            if (res.data.isError == false) {
                toast({
                    title: "Success Message:",
                    description: res.data.message,
                })
                setToken('')
                setAmount('0')

            }
            if (res.data.isError == true) {

                toast({
                    variant: "destructive",
                    title: "Error Message:",
                    description: res.data.message
                })
            }
        }).catch((error) => {

            toast({
                variant: "destructive",
                title: "Error Message:",
                description: "Something went Error: " + error,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        })
        setIsLoading(false)
    }

    return (

        <main className="grow px-4 lg:px-16 py-8 w-full flex flex-col gap-3">
            <div className='flex items-center gap-2'>
                <Button variant="default" size="icon" className='bg-transparent hover:bg-gray-50 text-gray-800' onClick={() => router.back()}>
                    <ChevronLeft className='w-6 h-6' />
                </Button>
                <h1 className='text-2xl font-semibold'>Deposit Crypto</h1>
            </div>

            <section className="text-gray-600 w-full">
                <div className="flex flex-col flex-wrap">
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
                                    <h2 className="font-semibold text-gray-900 tracking-wider text-sm mt-2">Select Coin</h2>

                                    <Select onValueChange={
                                        (value: string) => {
                                            handleToken(value)
                                        }
                                    }>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select A Coin" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="btc">Bitcoin</SelectItem>
                                            <SelectItem value="eth">Ethereum</SelectItem>
                                            <SelectItem value="usdt">USDT</SelectItem>
                                            <SelectItem value="ltc">Lite coin</SelectItem>
                                            <SelectItem value="bnb">BNB</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                                    <h2 className="font-semibold text-gray-900 tracking-wider text-sm mt-2">Deposit Amount</h2>
                                    <div className='flex gap-1 items-center border border-gray-200 rounded-lg px-3 overflow-hidden py-2 w-fit'>
                                        <DollarSignIcon className='w-4 h-4 text-gray-400' />
                                        <input type="number" min={0} value={amount}
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                setAmount(event.target.value)
                                            }}
                                            className='outline-0 border-none' />
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
                                <div className="flex-grow flex flex-col gap-3 pl-4 ">
                                    <h2 className="font-semibold text-gray-9006 tracking-wider text-sm mt-2">Deposit Address</h2>
                                    <ul className="flex flex-wrap gap-6 items-center mt-8 p-4 bg-gray-50 w-fit">
                                        <li className='h-20 aspect-square relative'>
                                            <Image src={iconQR} alt='image qr' className='object-contain' fill />
                                        </li>
                                        <li className="flex justify-between flex-wrap items-center gap-4">
                                            <div className='flex flex-col flex-wrap gap-1'>
                                                <small className='text-gray-500'>Address</small>
                                                <small className='font-semibold break-words max-w-xs'>{textToCopy}</small>
                                            </div>
                                            <TooltipProvider>
                                                <Tooltip open={copied}>
                                                    <TooltipTrigger asChild>
                                                        <Button variant="default" size="icon" className='bg-gray-100 hover:bg-gray-200 rounded-lg'>
                                                            <CopyIcon className='w-4 h-4 text-gray-800' onClick={handleCopy} />
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Copied!</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>

                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Button onClick={handleDeposit} className='h-fit w-fit px-8 py-3 mt-2 ml-auto bg-primary-light hover:bg-primary-light text-gray-700 font-semibold' disabled={isLoading} > {isLoading ? 'Setting Up' : 'Confirm Deposit'}</Button>

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
                                Deposits will be credited and available for Investment after 1 confirmations.
                            </li>
                            <li>
                                Deposits will be unlocked and available for withdrawal/other activities after 2 network confirmations.
                            </li>
                            <li>
                                Do not send NFTs to this address. Learn how to deposit NFTs
                            </li>
                        </ul>

                    </section>
                </div>
            </section>


        </main>
    )
}

export default Deposit