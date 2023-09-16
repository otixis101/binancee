import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import GoBack from '@/components/goBack'
import EmailVerify from '../containers/emailVerification'


export const metadata: Metadata = {
  title: 'Binancee | Verify your e-Mail',
  description: 'SignUp Page for Binancee',
}

interface stageProp {
  onStageChange: (value: number) => void;
}

export default function Step2({ onStageChange }: stageProp) {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <GoBack />
        <EmailVerify onStageChange={onStageChange} />
      </div>
    </>
  )
}
