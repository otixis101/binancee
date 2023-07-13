import Link from 'next/link';
import Image from 'next/image';
import NewsWidget from '@/components/tradeview_widgets/NewsWidget';
import exploreIllust from '@/assets/feed-entry-pc.svg';

const Trending_Crypt = () => {
    return (
        <section className="px-6 md:px-16 xl:px-48 py-16 flex flex-col">
            <h1 className="text-3xl font-bold">Trending on Crypto Feed</h1>
            <p>Discover the latest crypto news and feed from news media and influencers</p>
            <div className="flex flex-wrap gap-8 my-8">
                <div className="grow bg-gray-50 rounded-md">
                    <NewsWidget />
                </div>
                <div className="flex flex-col gap-4 px-8 rounded-lg py-4 justify-center bg-gray-100">
                    <Image alt="explore illustration" src={exploreIllust} className="" />
                    <h1 className="text-2xl font-bold">World&#39;s Largest Crypto<br /> Community.</h1>
                    <Link href={'/register'} className="p-4 bg-primary-light font-semibold text-center rounded-md">Explore Now</Link>
                </div>


            </div>
        </section>
    )
}

export default Trending_Crypt