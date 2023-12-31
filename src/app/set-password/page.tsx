import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import SetPassword from './containers/setPassword'


export const metadata: Metadata = {
  title: 'Binancee | Set Registration Password',
  description: 'Set Up Password for Binancee Account',
}

export default function Email_Verification() {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <SetPassword />
      </div>
    </>
  )
}
