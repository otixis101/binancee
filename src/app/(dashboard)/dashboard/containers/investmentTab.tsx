import Image from 'next/image'


const InvestmentTab = () => {
    return (
        <>
            {/* <div className='py-8 px-4'>
                <h2 className="font-semibold text-xl">Crypto Calculator</h2>
            </div> */}
            <article className='py-2 px-4'>
                <div className="bg-slate-100/10 flex flex-col gap-4 py-6 px-4 md:p-8 rounded-md md:rounded-lg">
                    <div className='flex flex-col w-full text-left gap-2 md:gap-4'>
                        <p className="text-base md:text-xl font-medium">You can start your Binancee investing journey now</p>
                        {/* <p className="text-base md:text-xl font-medium">Calculate ROI</p> */}
                        {/* <small className='text-gray-500'>Recommended entry-level features for beginners.</small> */}
                        <div className='flex shrink-0 gap-2'>
                            <div className='flex items-center border-b border-dashed border-gray-300 focus-within:border-primary-light px-2'>
                                <span className="text-sm text-gray-600">USD</span>
                                <input type="text" className='text-gray-700 py-0 px-0 w-full border-0 text-lg outline-0 bg-transparent text-right' />
                                {/* <span className="text-lg text-gray-400">.00</span> */}
                            </div>
                            <div className="flex shrink-0 flex-col">
                                <p className='text-gray-600 text-right text-xs'>Leverage x6</p>
                                <p className='text-gray-600 text-right text-xs'>1 Month</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3 w-full">
                            <p className='text-gray-500 text-right text-xs'>Return on Investment</p>
                            <p className='text-gray-700 text-right text-xl'>$2744.20</p>
                        </div>
                        <button className='px-10 text-sm font-semibold py-3 rounded-md bg-primary-light w-full'>Invest</button>
                    </div>
                    {/* <Image src={heroImg} alt="hero-image" className=' md:flex' /> */}
                </div>
            </article>
        </>
    )
}

export default InvestmentTab