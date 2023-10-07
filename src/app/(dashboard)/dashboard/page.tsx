import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MainTab from './containers/MainTab'



export const metadata: Metadata = {
    title: 'Binancee | User Dashboard',
    description: 'Use Dashboard',
}

const dashboard = () => {
    return (
        <section className='flex flex-col max-w-full overflow-x-hidden w-full h-screen'>
            <Navbar />
            <div className='flex w-full'>
                <Sidebar />
                <MainTab />
            </div>
        </section>
    )
}

export default dashboard