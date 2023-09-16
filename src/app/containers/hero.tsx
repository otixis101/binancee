import Image from 'next/image'
import heroImage from "@/assets/foreground-image-light.png"
import googleImage from "@/assets/icons8-google.svg"
import { UserIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'


const Hero = () => {
    return (
        <section className="flex flex-col px-6 md:px-16 xl:px-48 py-16 bg-gray-50 gap-10">
            <ul className="flex flex-col md:flex-col-reverse lg:flex-row justify-between items-center">
                <li className="flex flex-col gap-10 grow basis-[52%]">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">Deposit, hodl, Invest and Leverage 350+ cryptocurrencies on Binance<span className='text-2xl text-amber-300'>VIP</span></h2>
                    <div className='flex flex-col gap-4 w-full lg:w-[80%]'>
                        <Link href={'/signin'} className="flex items-center justify-center gap-4 bg-primary-light p-4 font-semibold rounded-md"><UserIcon className="w-6 h-6" /> Sign up with Email or Phone</Link>
                        <div className='flex flex-row items-center gap-4'>
                            <span className='border-slate-900/10 border-t border-b grow'></span>
                            <p className=''>or continue with</p>
                            <span className='border-teal-900/10 border-t border-b grow'></span>
                        </div>
                        <Link href={'/signin'} className="flex justify-center gap-4 bg-gray-200 p-4 font-semibold rounded-md"> <Image src={googleImage} alt="hero_image" className='w-6 h-6' />  Google</Link>

                    </div>
                </li>
                <li className="grow p-2 basis-[48%] hidden md:flex">
                    <Image src={heroImage} alt="hero_image" className='w-full' />
                </li>

            </ul>
            <div>
                <ul className='grid grid-cols-2 lg:grid-cols-4 gap-8 py-4'>
                    <li>
                        <h2 className='text-2xl lg:text-3xl font-bold'>$38 Billion</h2>
                        <p className="text-sm lg:text-base">24h trading volume on Binance exchange</p>
                    </li>
                    <li>
                        <h2 className='text-2xl lg:text-3xl font-bold'>350+</h2>
                        <p className="text-sm lg:text-base">Cryptocurrencies Listed</p>
                    </li>
                    <li>
                        <h2 className='text-2xl lg:text-3xl font-bold'>10 Million</h2>
                        <p className="text-sm lg:text-base">Registered User</p>
                    </li>
                    <li>
                        <h2 className='text-2xl lg:text-3xl font-bold'>0.10%</h2>
                        <p className="text-sm lg:text-base">Lowest transaction fees</p>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default Hero