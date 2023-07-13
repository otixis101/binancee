import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import GoBack from '@/components/goBack'
import EmailVerify from './containers/emailVerification'


export const metadata: Metadata = {
  title: 'Binancee | Verify your e-Mail',
  description: 'SignUp Page for Binancee',
}

export default function Email_Verification() {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <GoBack />
        <EmailVerify />
      </div>
    </>
  )
}
