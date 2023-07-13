import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const main_font = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Binancee Investment',
  description: 'Investment App for Binancee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${main_font.className} text-zinc-800`}>{children}</body>
    </html>
  )
}
