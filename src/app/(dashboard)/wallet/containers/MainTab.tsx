"use client"


import axios from "axios";
import { signIn, useSession } from 'next-auth/react'
import EstimateBalance from "@/components/balance"


import Link from "next/link";
import { useEffect, useState } from "react";



type tAsset = {
    id: string;
    symbol: string;
    name: string;
    balance: number;
    createdAt: string;
    ownerId: string;
}

export const revalidate = 30

const MainTab = () => {

    const { data: session } = useSession();

    const [transactions, setTransactions] = useState([])

    const [investments, setInvestments] = useState([])

    const [totalInvest, setTotalInvest] = useState(0)

    const [Asset, setAsset] = useState<tAsset>()

    const [translatedBal, setTranslatedBal]: any = useState('0.00')



    const getAsset = async () => {
        await axios.post('/api/get-asset', {
            email: session?.user?.email
        }).then((res) => setAsset(res.data));
    }


    const getEstimate = async () => {
        const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=btc`;

        fetch(apiUrl)
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
                // const bal = Asset ? (Asset.balance * (result as unknown as number)) : 0.00;
                setTranslatedBal(result.toString())

            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error:', error);
            });
    }

    const getInvestments = async () => {
        const user = await axios.post('/api/get-user', {
            email: session?.user?.email
        })

        await axios.post('/api/get-investment', {
            "userId": user.data.id,
        }).then((res) => {
            setInvestments(res.data.inv)
        })


    }

    const getTransactions = async () => {
        const user = await axios.post('/api/get-user', {
            email: session?.user?.email
        })

        await axios.post('/api/get-transactions', {
            "userId": user.data.id,
        }).then((res) => {
            setTransactions(res.data.transactions)
        })
    }

    useEffect(() => {
        //
        if (investments.length > 0) {
            investments.map((inve: any) => {
                setTotalInvest((prevTotal) => prevTotal + inve.amount)
                // console.log(inve.amount)
            })
        }
    }, [investments])

    useEffect(() => {
        getTransactions();
        console.log(translatedBal)

    }, [translatedBal])


    useEffect(() => {
        getEstimate();
        getAsset();
        getInvestments();
    }, [])


    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <section className="grow flex flex-col w-full">
                <nav className='bg-gray-50 px-8 py-8 flex flex-wrap justify-between gap-4 '>
                    <h1 className="text-3xl font-semibold">Wallet Overview</h1>
                    <div className="flex gap-4 flex-wrap">
                        <Link href={'/deposit'} className="py-2 px-6 font-medium bg-primary-light hover:bg-primary/80 text-sm rounded flex gap-2">Make a Deposit</Link>
                        <Link href={'/withdrawal'} className="py-2 px-6 font-medium bg-gray-200 hover:bg-gray-300 text-sm rounded flex gap-2">Make a Withdrawal</Link>
                    </div>
                </nav>
                <section className="flex flex-col lg:flex-row p-4 gap-4">
                    <div className="md:w-[60%] w-full shrink-0">
                        <EstimateBalance />
                        <div className="px-3 py-8 flex flex-col gap-6">
                            <h1>My Assets</h1>
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 ">
                                    <thead className="text-xs text-gray-700 capitalize">
                                        <tr>
                                            <th scope="col" className="px-4 py-3">
                                                Wallet
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Ratio
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-right">
                                                Amount
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white dark:border-gray-700">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                Personal
                                            </th>
                                            <td className="px-4 py-4">
                                                -
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="flex flex-col items-end">
                                                    <b>{Asset ? ((Asset?.balance - totalInvest) * parseFloat(translatedBal)) : 0.00} BTC</b>
                                                    <small className="text-gray-400">{
                                                        Asset ?
                                                            Asset?.symbol + "" + (Asset?.balance - totalInvest)
                                                            : '$0.00'
                                                    }</small>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr className="bg-white dark:border-gray-700">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                Investment
                                            </th>
                                            <td className="px-4 py-4">
                                                -
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="flex flex-col items-end">
                                                    <b>{Asset ? (Asset?.balance * parseFloat(translatedBal)) : 0.00} BTC</b>
                                                    <small className="text-gray-400">${totalInvest}</small>
                                                </div>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-[40%] shrink-0 flex flex-col p-4 gap-6">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">Recent Transactions</p>
                            <Link href={''} className="px-2 py-1 font-medium bg-gray-100 hover:bg-gray-200 text-xs">View All</Link>
                        </div>
                        <div className="flex flex-col">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-4 py-3">
                                                Tansaction ID
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Amount
                                            </th>
                                            <th scope="col" className="px-4 py-3">
                                                Status
                                            </th>

                                        </tr>
                                    </thead>
                                    {
                                        transactions?.length > 0 &&
                                        (
                                            <tbody>
                                                {
                                                    transactions.map((transact: any, index) =>
                                                    (
                                                        <tr key={index} className="bg-white border-b  dark:border-gray-700">
                                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap truncate max-w-[100px]">
                                                                {transact.id}
                                                            </th>
                                                            <td className="px-4 py-4">
                                                                ${transact.amount}
                                                            </td>
                                                            <td className="px-4 py-4">
                                                                <span className={classNames("px-2 py-1 rounded-lg text-xs",
                                                                    transact.status == 'SUCCESS' ? "bg-green-200" :
                                                                        transact.status == "FAILED" ? "bg-red-200" : "bg-yellow-200",
                                                                )}>
                                                                    {transact.status}
                                                                </span>
                                                            </td>

                                                        </tr>
                                                    ))
                                                }


                                            </tbody>
                                        )
                                    }
                                </table>
                            </div>

                        </div>

                    </div>


                </section>

            </section>
        </>
    )
}

export default MainTab