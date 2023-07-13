import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import RegComplete from './containers/regComplete'


export const metadata: Metadata = {
  title: 'Binancee | Registration Complete',
  description: 'Registration Compltete6',
}

export default function Email_Verification() {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <RegComplete />
      </div>
    </>
  )
}
