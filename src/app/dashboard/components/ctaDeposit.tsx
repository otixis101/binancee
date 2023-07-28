import Image from 'next/image'
import heroImg from '@/assets/onboard-deposit.svg'

const ctaDeposit = () => {
    return (
        <>
            <article className='py-8 px-4'>
                <div className="bg-primary-light/10 flex flex-col-reverse md:flex-row gap-4 py-6 px-4 md:p-8 rounded-md md:rounded-2xl items-center">
                    <div className='flex flex-col md:items-start items-center text-center md:text-left gap-4 md:gap-8'>
                        <p className="text-base md:text-xl font-medium">Complete a Deposit to Start Your Investment Journey on Binancee</p>
                        <button className='px-10 text-sm font-semibold py-3 rounded-md bg-primary-light w-fit'>Deposit</button>
                    </div>
                    <Image src={heroImg} alt="hero-image" className=' md:flex' />
                </div>
            </article>
        </>
    )
}

export default ctaDeposit