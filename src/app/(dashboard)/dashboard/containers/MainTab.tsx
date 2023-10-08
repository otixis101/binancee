"use client"

import EstimateBalance from "@/components/balance"
import UserDetails from "./userDetails"
import CTADeposit from '../components/ctaDeposit'

import MarketWidget from "@/components/tradeview_widgets/MarketWidget";
import InvestmentTab from "./investmentTab";

import { useSession } from 'next-auth/react'
import axios from "axios"
import { useEffect, useState } from "react";

const MainTab = () => {

    const { data: session } = useSession();

    const [Asset, setAsset] = useState([])

    const getAsset = async () => {
        await axios.post('/api/get-asset', {
            email: session?.user?.email
        }).then((res) => setAsset(res.data));
    }

    useEffect(() => {
        getAsset()
    }, [])


    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <section className="grow">
                <UserDetails />
                <section className="flex flex-wrap">
                    <div className="md:w-[60%] w-full">
                        <EstimateBalance />
                        {
                            Asset &&
                            (
                                <CTADeposit />
                            )
                        }
                    </div>
                    <div className="md:w-[40%] w-full">
                        <InvestmentTab />
                    </div>

                </section>
                <div className="p-8">
                    <MarketWidget />
                </div>

            </section>
        </>
    )
}

export default MainTab