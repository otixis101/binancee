import Link from 'next/link'

const Activities = () => {
    return (
        <section className='px-8 flex flex-col gap-4'>
            <h1 className="text-xl text-gray-800 font-semibold mt-4 mb-2">Device and Acivities</h1>
            <ul className='flex flex-col'>
                <li className='flex justify-between item-center pb-6 border-b border-gray-200'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-md mb-1 font-semibold'>Account Activity</h2>
                        <p className='text-sm text-gray-500'>Last login: 2023-08-08 04:41:28</p>
                        <p className='text-sm text-gray-500'>Suspicious account activity? <Link href={''} className='text-primary-dark underline'>Disable Account</Link></p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Activities