
import React from "react";

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'





export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  // const session = await getServerSession();
  return (
    <>
      <section className='flex flex-col max-w-full overflow-x-hidden w-full min-h-screen'>
        <Navbar />
        <div className='flex w-full'>
          <Sidebar />
          {children}
        </div>
      </section>
    </>

  )
}
