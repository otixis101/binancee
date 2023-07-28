"use client"

import EstimateBalance from "./balance"
import UserDetails from "./userDetails"
import CTADeposit from '../components/ctaDeposit'

const MainTab = () => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <section className="grow">
                <UserDetails />
                <section className="flex">
                    <div className="md:w-[50%]">
                        <EstimateBalance />
                        <CTADeposit />
                    </div>

                </section>
            </section>
        </>
    )
}

export default MainTab