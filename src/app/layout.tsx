import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

export const metadata: Metadata = {
  title: 'Edu Verticals - Unlock the future of online learning.',
  description:
    'We’re all about creating a welcoming, energizing place to work! Our modern office is designed with everyone in mind, offering comfy seating and flexible spaces that suit different work styles.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`font-inter antialiased mx-auto max-w-[1920px] text-maintext bg-[#DDDEF8]`}
      >
        <main className='2xl:mr-[77px] relative 2xl:ml-[51px] 2xl:mt-[55px] bg-gray-100 rounded-3xl'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
