'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/partner', label: 'Corporate Partnership' },
    { href: '/academic', label: 'Academic Partners' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className='sticky xl:top-16 2xl:top-24 top-10 z-50 mx-auto border-b rounded-full xl:w-11/12 w-[98%] bg-white'>
      <div className='container mx-auto flex h-24 gap-2  items-center justify-between px-4 lg:px-6'>
        <Link href='#' className='flex items-center gap-2' prefetch={false}>
          <Image
            src='/logo-full.png'
            alt=''
            width={212}
            height={69}
            className='min-w-[120px] sm:w-[212px]'
          />
          <span className='sr-only'>EduVerticals Inc.</span>
        </Link>
        <nav className='hidden items-center rounded-full p-2 bg-[#EFF0F9] xl:gap-5 text-sm font-medium lg:flex'>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              prefetch={false}
              className={` hover:bg-maintext xl:p-4 px-2 rounded-full hover:text-[#E6EFFC]  ${
                pathname === href
                  ? 'bg-maintext p-4 rounded-full text-[#E6EFFC] font-bold'
                  : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-4'>
          <div className='hidden items-center gap-2 text-sm font-medium lg:flex'>
            <Button className='rounded-3xl h-12 font-bold hover:bg-[#E6EFFC] hover:text-maintext'>
              Inquire now
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full lg:hidden'
              >
                <Menu size={80} className='text-gray-500' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='lg:hidden'>
              <div className='grid gap-4 p-4'>
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    prefetch={false}
                    className={`text-sm font-medium text-gray-500 hover:text-gray-900 ${
                      pathname === href
                        ? 'text-gray-900 font-bold dark:text-gray-50'
                        : ''
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Button className='rounded-3xl h-12 font-bold hover:bg-[#E6EFFC] hover:text-maintext'>
                Inquire now
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
