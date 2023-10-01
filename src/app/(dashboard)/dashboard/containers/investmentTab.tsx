"use client"

import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { signIn, useSession } from 'next-auth/react'

import { useToast } from "@/components/ui/use-toast"

const InvestmentTab = () => {

    const { data: session } = useSession();
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const [investAmount, setInvestAmount] = useState('0')

    const [invReturn, setInvReturn] = useState(0.00);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInvestAmount(event.target.value);
    }

    const [getResponse, setResponse] = useState({
        isError: false,
        isSuccess: false,
        content: "",
    })


    useEffect(() => {
        setInvReturn(parseInt(investAmount) * 6);
    }, [investAmount])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setResponse({ isError: false, isSuccess: false, content: '' })

        setIsLoading(true)

        if ((parseInt(investAmount) < 50 || isNaN(parseInt(investAmount)))) {
            setResponse(prevResponse => {
                return {
                    isError: true,
                    isSuccess: false,
                    content: "Amount must be a Number and be atleast $50"
                }
            })
            setIsLoading(false)
            alert(getResponse.isError)
            return null;
        }

        const user = await axios.post('/api/get-user', {
            email: session?.user?.email
        })

        // Get the current date
        const currentDate = new Date();

        // Calculate the date one month from now
        const oneMonthFromNow = new Date(currentDate);
        oneMonthFromNow.setMonth(currentDate.getMonth() + 1);
        alert(oneMonthFromNow)

        await axios.post('/api/make-investment', {
            "userId": user.data.id,
            "amount": parseInt(investAmount),
            "leverage": 6,
            "roi": (parseInt(investAmount) * 6),
            "closedAt": oneMonthFromNow.toString()

        }).then((res) => {
            if (res.status == 200) {
                alert("success")
                setResponse({
                    isError: false,
                    isSuccess: true,
                    content: res.data.message
                })
            }
            if (res.status > 200 && res.status < 300) {
                alert("200+ error:" + res.data.message)
                setResponse({
                    isError: true,
                    isSuccess: false,
                    content: res.data.messaage
                })
            }
        }).catch((error) => {
            alert(error)
            setResponse({
                isError: true,
                isSuccess: false,
                content: "Something Went wrong"
            })
        })

        setIsLoading(false)
    }

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            {/* <div className='py-8 px-4'>
                <h2 className="font-semibold text-xl">Crypto Calculator</h2>
            </div> */}
            <article className='py-2 px-4'>
                <div className="bg-slate-100/10 flex flex-col gap-4 py-6 px-4 md:p-8 rounded-md md:rounded-lg">
                    <form onSubmit={handleSubmit} className='flex flex-col w-full text-left gap-2 md:gap-4'>
                        <p className="text-base md:text-xl font-medium">You can start your Binancee investing journey now</p>
                        {/* <p className="text-base md:text-xl font-medium">Calculate ROI</p> */}
                        {/* <small className='text-gray-500'>Recommended entry-level features for beginners.</small> */}
                        <div className='flex shrink-0 justify-between gap-2'>
                            <div className='flex items-center border-b border-dashed border-gray-300 focus-within:border-primary-light px-2'>
                                <span className="text-sm text-gray-600">USD</span>
                                <input type="number" value={investAmount}
                                    onChange={handleChange}
                                    min={0}
                                    className='text-gray-700 py-0 px-0 w-full border-0 text-lg outline-0 bg-transparent text-right' />
                                {/* <span className="text-lg text-gray-400">.00</span> */}
                            </div>
                            <div className="flex shrink-0 flex-col">
                                <p className='text-gray-600 text-right text-xs'>Leverage x6</p>
                                <p className='text-gray-600 text-right text-xs'>1 Month</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3 w-full">
                            <p className='text-gray-500 text-right text-xs'>Return on Investment</p>
                            <p className='text-gray-700 text-right text-xl'>{`$${invReturn < 0 || isNaN(invReturn) ? 0 : invReturn}`}</p>
                        </div>
                        <button className='px-10 text-sm font-semibold py-3 rounded-md bg-primary-light w-full disabled:bg-primary-light/50' disabled={isLoading}>  {isLoading ? "Setting up..." : "Invest"}</button>
                        {getResponse.isError || getResponse.isSuccess &&
                            <small className={classNames("ml-auto font-semibold", getResponse.isError ? "text-red-500" : "text-green-500",)}>{`${getResponse.content}`}</small>
                        }
                    </form>
                    {/* <Image src={heroImg} alt="hero-image" className=' md:flex' /> */}
                </div>
            </article>
        </>
    )
}

export default InvestmentTab