"use client"

import EstimateBalance from "./balance"
import UserDetails from "./userDetails"
import CTADeposit from '../components/ctaDeposit'

import MarketWidget from "@/components/tradeview_widgets/MarketWidget";

const MainTab = () => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <section className="grow">
                <UserDetails />
                <section className="flex">
                    <div className="md:w-[60%]">
                        <EstimateBalance />
                        <CTADeposit />
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