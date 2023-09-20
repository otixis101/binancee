import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import LoginForm from '@/components/loginForm'


export const metadata: Metadata = {
  title: 'BinanceVIP | Log in to Account',
  description: 'Login Page for Binancee',
}

export default function Login() {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <LoginForm />
      </div>
    </>
  )
}
