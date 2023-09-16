import type { Metadata } from 'next'
import Header from '@/components/blankHeader'
import SetPassword from '../containers/setPassword'


export const metadata: Metadata = {
  title: 'Binancee | Set Registration Password',
  description: 'Set Up Password for Binancee Account',
}

interface stageProp {
  onFormSubmit: () => void;
  onFormUpdate: (key: string, value: any) => void;
  isSubmitting: boolean;
}

export default function Step3({ onFormUpdate, onFormSubmit, isSubmitting }: stageProp) {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <SetPassword onFormUpdate={onFormUpdate} onFormSubmit={onFormSubmit}  />
      </div>
    </>
  )
}
