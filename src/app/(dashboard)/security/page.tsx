import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MainTab from './containers/MainTab'
import Banner from './containers/banner'
import Activities from './containers/activities'
import Authentication from './containers/authentication'

export const metadata: Metadata = {
    title: 'Binancee | User Dashboard',
    description: 'Use Dashboard',
}

const dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='flex w-full'>
                <Sidebar />
                <section className="grow flex flex-col gap-3">
                    <Banner />
                    <Activities />
                    <Authentication />
                </section>
            </div>
        </>
    )
}

export default dashboard