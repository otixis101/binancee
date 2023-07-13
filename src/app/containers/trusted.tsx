import Image from 'next/image';
import asset_Secure from '@/assets/secure-asset.svg'
import asset_Control from '@/assets/access-control.svg'
import asset_Unlock from '@/assets/unlock.svg'
import asset_trust from '@/assets/trusted-section.webp'
import Link from 'next/link';


const trusted = () => {
    return (
        <section className="px-6 md:px-16 xl:px-48 py-16 flex flex-col">
            <h1 className="text-3xl font-bold">Your trusted crypto exchange</h1>
            <p>Here at Binance, we are committed to user protection with strict protocols and industry-leading technical measures.</p>
            <div className='flex items-stretch'>
                <ul className="grow flex flex-col gap-16 my-16">
                    <li>
                        <div className='flex gap-4 items-center'>
                            <Image src={asset_Secure} alt="kyc image" className='' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-xl font-bold'>Secure Asset Fund for Users (SAFU)</h2>
                                <p>Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-4 items-center'>
                            <Image src={asset_Control} alt="kyc image" className='' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-xl font-bold'>Personalised Access Control</h2>
                                <p>Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-4 items-center'>
                            <Image src={asset_Unlock} alt="kyc image" className='' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-xl font-bold'>Advanced Data Encryption</h2>
                                <p>Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.</p>
                            </div>
                        </div>
                    </li>

                    <Link href={'/register'} className="px-16 py-3 font-semibold rounded-md bg-primary-light w-fit">Get Started</Link>

                </ul>
                <div className="grow shrink-0 basis-1/2 lg:flex flex-col p-8 hidden">
                    <Image src={asset_trust} alt='dashboard image' className='w-full h-auto' />

                </div>

            </div>
        </section>
    )
}

export default trusted