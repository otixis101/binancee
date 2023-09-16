"use client"

import EstimateBalance from "./balance"
import UserDetails from "./userDetails"

import MarketWidget from "@/components/tradeview_widgets/MarketWidget";
import InvestmentTab from "./investmentTab";
import Link from "next/link";

const MainTab = () => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <section className="grow">
                <nav className='bg-gray-50 px-8 py-8'>
                    <h1 className="text-3xl font-semibold">Wallet Overview</h1>
                </nav>
                <section className="flex p-4">
                    <div className="md:w-[60%] w-full shrink-0">
                        <EstimateBalance />
                        <div className="px-6 py-8 flex flex-col gap-6">
                            <h1>My Assets</h1>
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 ">
                                    <thead className="text-xs text-gray-700 capitalize ">
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
                                                    <b>0.00 USDT</b>
                                                    <small className="text-gray-400">$0.00</small>
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
                                                    <b>0.00 USDT</b>
                                                    <small className="text-gray-400">$0.00</small>
                                                </div>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[40%] shrink-0 flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <p className="font-medium">Recent Transactions</p>
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
                                    <tbody>
                                        <tr className="bg-white border-b  dark:border-gray-700">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                TRX-dep-jkasbewjdu2382364
                                            </th>
                                            <td className="px-4 py-4">
                                                $2999
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className="px-2 py-1 rounded-full bg-green-200 text-xs">
                                                    Success
                                                </span>
                                            </td>

                                        </tr>
                                        <tr className="bg-white border-b  dark:border-gray-700">
                                            <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                TRX-wth-jkasbewjdu2382364
                                            </th>
                                            <td className="px-4 py-4">
                                                $187
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className="px-2 py-1 rounded-full bg-red-200 text-xs">
                                                    Failed
                                                </span>
                                            </td>

                                        </tr>

                                    </tbody>
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