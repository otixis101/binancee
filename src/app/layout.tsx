import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { getServerSession } from "next-auth";

import SessionProvider from "./context/Provider";

import { Toaster } from "@/components/ui/toaster"


const main_font = Inter({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Binancee Investment',
  description: 'Investment App for Binancee',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${main_font.className} text-gray-800`}>
        <SessionProvider session={session}>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}
