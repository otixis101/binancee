import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'


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
                    Identification
                </section>
            </div>
        </>
    )
}

export default dashboard