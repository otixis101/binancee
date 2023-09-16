import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import RegisterUser from './containers/registerUser'
import SignupTemplate from './component/SignupTemplate'


export const metadata: Metadata = {
  title: 'Binancee | Register new Account',
  description: 'SignUp Page for Binancee',
}

export default function Register_User() {
  return (
    <>
      <SignupTemplate />
    </>
  )
}
