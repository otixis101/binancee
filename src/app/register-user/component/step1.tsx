import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import RegisterUser from '../containers/registerUser'


export const metadata: Metadata = {
  title: 'Binancee | Register new Account',
  description: 'SignUp Page for Binancee',
}

interface stageProp {
  onStageChange: (value: number) => void;
  onFormUpdate: (key: string, value: any) => void;
}


export default function Step1({ onStageChange, onFormUpdate }: stageProp) {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <RegisterUser onStageChange={onStageChange} onFormUpdate={onFormUpdate} />
      </div>
    </>
  )
}