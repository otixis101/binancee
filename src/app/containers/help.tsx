import Image from 'next/image';
import asset_cs from '@/assets/cs.svg'
import asset_faq from '@/assets/community.svg'
import Link from 'next/link';


const help = () => {
    return (
        <section className='px-6 md:px-16 xl:px-48 py-16 flex flex-col gap-16'>
            <h1 className="text-3xl font-bold">Need Help?</h1>
            <div>
                <ul className="flex flex-wrap lg:flex-nowrap p-4 gap-8">
                    <li className="flex gap-4 lg:basis-1/2 grow">
                        <div>
                            <Image src={asset_cs} alt="chat support" className='' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-lg font-bold'>24/7 Chat Support</h2>
                            <p className='text-sm'>Get 24/7 chat support with our friendly customer service agents at your service.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 lg:basis-1/2 grow">
                        <div>
                            <Image src={asset_faq} alt="chat support" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-lg font-bold'>FAQs</h2>
                            <p className='text-sm'>View FAQs for detailed instructions on specific features.</p>
                            <Link href={'/faq'} className=' text-amber-800 text-sm'>View more</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default help