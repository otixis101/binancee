import MarketWidget from "@/components/tradeview_widgets/MarketWidget";
import Link from "next/link";

const popular_crypt = () => {
    return (
        <section className="px-6 md:px-16 xl:px-48 py-16 gap-3 flex flex-col">
            <h1 className="text-3xl font-bold">Popular Cryptocurrencies</h1>
            <div className="grow bg-gray-50 rounded-md my-4">
                <MarketWidget />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Sign Up now to build your own portfolio for free</h1>
                <Link href={'/signin'} className="px-16 py-3 font-semibold rounded-md bg-primary-light w-fit">Get Started</Link>
            </div>
        </section>
    )
}

export default popular_crypt