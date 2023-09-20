import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import RegisterForm from '@/components/registerForm'


export const metadata: Metadata = {
  title: 'BinanceVIP | Register new Account',
  description: 'SignUp Page for Binance',
}

export default function Register() {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <RegisterForm />
      </div>
    </>
  )
}
