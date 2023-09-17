import Image from 'next/image';
import asset_KYC from '@/assets/kyc.svg'
import asset_User from '@/assets/user.svg'
import asset_Trading from '@/assets/spot.svg'
import asset_dashboard from '@/assets/portfolio-section.webp'
import Link from 'next/link';


const build_portfolio = () => {
    return (
        <section className="px-6 md:px-16 xl:px-48 py-16 flex flex-col">
            <h1 className="text-3xl font-bold">Build your crypto portfolio</h1>
            <p>Start your first trade with these easy steps</p>
            <div className='flex gap-4 items-stretch'>
                <ul className="grow flex flex-col gap-16 my-16">
                    <li>
                        <div className='flex gap-4 items-center'>
                            <Image src={asset_KYC} alt="kyc image" className='' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-2xl font-bold'>Verify your identity</h2>
                                <p>Complete the identity verification process to secure your account and transactions.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-4 items-center'>
                            <Image src={asset_User} alt="kyc image" className='' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-2xl font-bold'>Fund your account</h2>
                                <p>Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-4 items-center'>
                            <Image src={asset_Trading} alt="kyc image" className='' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-2xl font-bold'>Start Trading</h2>
                                <p>You&#39;re good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.</p>
                            </div>
                        </div>
                    </li>

                    <Link href={'/login'} className="px-16 py-3 font-semibold rounded-md bg-primary-light w-fit">Get Started</Link>

                </ul>
                <div className="grow shrink-0 basis-1/2 lg:flex justify-center p-8 hidden">
                    <Image src={asset_dashboard} alt='dashboard image' className='w-[300px] h-auto' />

                </div>

            </div>
        </section>
    )
}

export default build_portfolio