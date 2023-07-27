import type { Metadata } from 'next'
import Navbar from './containers/Navbar'
import Sidebar from './componenets/Sidebar'
import MainTab from './containers/MainTab'

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
                <MainTab />
            </div>
        </>
    )
}

export default dashboard