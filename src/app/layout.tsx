import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto max-w-[1920px] bg-green-300`}
      >
        <main className='mr-[77px] relative ml-[51px] mt-[55px] bg-gray-100 rounded-3xl'>
          {children}
        </main>
      </body>
    </html>
  )
}
