import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className='mt-20 my-16 flex flex-col lg:mt-40 lg:flex-row gap-20'>
      {/* left */}
      <div className='flex flex-col justify-center gap-8'>
        <Button
          variant='ghost'
          className='border w-fit text-wrap lg:text-nowrap border-black rounded-full p-6 px-4'
        >
          The Changing Landscape of Corporate Learning{' '}
          <span className='bg-white p-1 rounded-full'>
            <ArrowUpRight />
          </span>
        </Button>
        <h1 className='font-serif font-light text-4xl lg:text-6xl leading-tight'>
          Unlock the future of online learning.
        </h1>
        <h4 className='hidden md:block'>
          <span className='font-bold'>Empower, Innovate</span>, and{' '}
          <span className='font-bold'>Lead</span> with us.
        </h4>
        <div className='flex gap-5'>
          <Button className='p-6'>Inquire now</Button>
          <Button className='p-6 border-black' variant={'outline'}>
            Learn more
          </Button>
        </div>
        <div className='flex gap-3 flex-wrap'>
          <img
            className='bg-white p-3 rounded-full'
            src='/client-1.png'
            alt='Client Logo'
          />
          <img
            className='bg-white p-3 rounded-full'
            src='/client-2.png'
            alt='Client Logo'
          />
          <img
            className='bg-white p-3 rounded-full'
            src='/client-3.png'
            alt='Client Logo'
          />
          <img
            className='bg-white p-3 rounded-full'
            src='/client-4.png'
            alt='Client Logo'
          />
          <img
            className='bg-white p-3 rounded-full'
            src='/client-5.png'
            alt='Client Logo'
          />
        </div>
      </div>
      {/* right */}
      <div className='gap-5 hidden lg:flex'>
        <div className='flex relative flex-col gap-5 rounded-3xl w-[393px] bg-center h-[700px] bg-[url("/hero-1.png")]'>
          <div className='rounded-3xl text-right flex flex-col gap-1 w-fit absolute top-2 right-2 bg-white p-2 opacity-75'>
            <h4 className='font-serif font-bold'>5,000+</h4>
            <p className='text-xs'>Careers Transformed</p>
          </div>
        </div>
        <div className='flex flex-row lg:flex-col gap-5'>
          <div className='flex relative flex-col gap-5 rounded-3xl w-[275px] bg-top h-[339px] bg-[url("/hero-2.png")]'>
            {' '}
            <div className='rounded-3xl text-right flex flex-col gap-1 w-fit absolute bottom-2 right-2 bg-white p-2 opacity-75'>
              <h4 className='font-serif font-bold'>65+</h4>
              <p className='text-xs'>Industries Served</p>
            </div>
          </div>
          <div className='flex relative flex-col gap-5 rounded-3xl w-[275px] bg-center h-[339px] bg-[url("/hero-3.png")]'>
            {' '}
            <div className='rounded-3xl text-right flex flex-col gap-1 w-fit absolute bottom-2 right-2 bg-white p-2 opacity-75'>
              <h4 className='font-serif font-bold'>5+</h4>
              <p className='text-xs'>Years In Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
