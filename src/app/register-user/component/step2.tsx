import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import EmailVerify from '../containers/emailVerification'
import GoBack from '../containers/goBack';


export const metadata: Metadata = {
  title: 'Binancee | Verify your e-Mail',
  description: 'SignUp Page for Binancee',
}

interface stageProp {
  onStageChange: (value: number, email?: string) => void;
}

export default function Step2({ onStageChange }: stageProp) {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <GoBack onStageChange={onStageChange} />
        <EmailVerify onStageChange={onStageChange} />
      </div>
    </>
  )
}
