"use client"


import { ChangeEvent, useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

import { Button } from "@/components/ui/button"

import Image from 'next/image'

import illust from "@/assets/il-guide.svg"
import { ChevronLeft, DollarSign, Loader2, VariableIcon } from 'lucide-react'

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


import axios from "axios";
import { signIn, useSession } from 'next-auth/react'

type tAsset = {
    id: string;
    symbol: string;
    name: string;
    balance: number;
    createdAt: string;
    ownerId: string;
}

export const revalidate = 30

const Dashboard = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const [token, setToken] = useState("")
    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState('0')

    const [Asset, setAsset] = useState<tAsset>()

    const getAsset = async () => {
        await axios.post('/api/get-asset', {
            email: session?.user?.email
        }).then((res) => setAsset(res.data));
    }


    const handleWithdrawal = async () => {

        setIsLoading(true)

        if ((parseInt(amount) < 50 || isNaN(parseInt(amount)))) {
            toast({
                variant: "destructive",
                title: "Error Message:",
                description: "Amount must be a Number and be atleast $50",
            })
            setIsLoading(false)

            return null;
        }

        if (Asset && Asset?.balance < parseInt(amount)) {
            toast({
                variant: "destructive",
                title: "Error Message:",
                description: "Not enough funds to make a withdrawal",
            })
            setIsLoading(false)

            return null;
        }

        const user = await axios.post('/api/get-user', {
            email: session?.user?.email
        })

        await axios.post('/api/make-withdrawal', {
            "userId": user.data.id,
            "amount": parseInt(amount),
            "token": token,
            "address": address

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


    useEffect(() => {
        getAsset();
    }, [])

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
                                <Image src={illust} alt='iluustration' className='w-16 h-16' quality={50} />
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
                            <div className="flex items-end flex-wrap gap-4 py-8 w-full">
                                <div className="flex flex-col gap-2 w-full lg:w-[180px]">
                                    <label htmlFor="send-to" className="block text-sm font-medium leading-6 text-gray-900">Select Coin</label>
                                    <Select onValueChange={(value: string) => setToken(value)}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select A Coin" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="btc">Bitcoin</SelectItem>
                                            <SelectItem value="eth">Ethereum</SelectItem>
                                            <SelectItem value="usdt">USDT</SelectItem>
                                            <SelectItem value="ltc">Litcoin</SelectItem>
                                            <SelectItem value="bnb">BNB</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-fit">
                                    <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
                                    <div className="flex flex-row gap-2 items-center shadow-sm ring-1 ring-inset ring-gray-300 px-2 py-2.5 w-full lg:w-[480px]">
                                        <input
                                            value={amount}
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                setAmount(event.target.value)
                                            }}
                                            type="number" min={0} name="amount" id="amount" className="block bg-transparent outline-none rounded-md border-0 p-0 text-gray-900 text-sm placeholder:text-gray-400 grow" />
                                        <DollarSign className='w-4 h-4 shrink-0' />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-fit">
                                    <label htmlFor="send-to" className="block text-sm font-medium leading-6 text-gray-900">Send To Address</label>
                                    <div className="flex flex-row gap-2 items-center shadow-sm ring-1 ring-inset ring-gray-300 px-2 py-2.5 w-full lg:w-[480px]">
                                        <input
                                            value={token}
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                setToken(event.target.value)
                                            }}
                                            type="text" required name="send-to" id="send-to" className="block bg-transparent outline-none rounded-md border-0 p-0 text-gray-900 text-sm placeholder:text-gray-400 grow" />
                                        <VariableIcon className='w-4 h-4 shrink-0' />
                                    </div>
                                </div>
                                <Button variant={'default'} onClick={handleWithdrawal} className='bg-primary-light w-full lg:w-fit h-fit px-12 py-2.5 rounded-sm hover:bg-primary-light text-gray-800 font-semibold' disabled={isLoading}>{isLoading ? <Loader2 className='animate-spin' /> : "Proceed"}</Button>
                            </div>
                            <section className='flex flex-col gap-4 px-4 mt-4 w-full'>
                                <ul className='grid grid-flow-row grid-cols-2 text-sm gap-4 w-full lg:w-1/2'>
                                    <li>
                                        <small className='text-gray-500'>Asset Balance</small>
                                        <p className='font-semibold'>{Asset?.balance} USD</p>
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