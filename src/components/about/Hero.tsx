import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='xl:mt-20 relative my-8 xl:my-16 flex flex-col 2xl:mt-40 lg:flex-row gap-20'>
      {/* left */}
      <div className='flex flex-col lg:w-1/2 justify-center gap-8'>
        <Link
          href='https://yeldynov.tech'
          target='_blank'
          rel='noreferrer'
          className='border flex items-center w-fit text-wrap lg:text-nowrap border-black rounded-full px-4 py-2'
        >
          We're hiring! Get in touch.
          <span className='bg-white p-1 rounded-full'>
            <ArrowUpRight />
          </span>
        </Link>
        <div className='flex scale-75 -ml-10 sm:ml-0 sm:scale-100 items-center gap-2'>
          <h1 className=' font-serif text-nowrap font-light text-4xl xl:text-6xl leading-tight'>
            Life @
          </h1>
          <img src='/logo-purple.png' alt='Logo Purple' />
        </div>
        <div className='flex flex-col gap-5 max-w-[610px]'>
          <p>
            We’re all about creating a welcoming, energizing place to work! Our
            modern office is designed with everyone in mind, offering comfy
            seating and flexible spaces that suit different work styles.
          </p>
          <p>
            Our team is a diverse group of friendly, collaborative people who
            make work feel enjoyable. We love to keep things lively with
            team-building events, social gatherings, and off-site trips that
            bring us closer together.
          </p>
          <p>
            We also make it a point to celebrate achievements—big or
            small—whether it’s hitting a goal or celebrating work anniversaries.
          </p>
          <p>
            Come join us and experience our positive, supportive culture
            firsthand!
          </p>
        </div>
      </div>
      {/* right */}
      <div className='gap-5 hidden lg:scale-[60%] lg:absolute xl:static -right-32 -top-28 lg:flex xl:scale-100'>
        <div className='flex relative flex-col gap-5 rounded-3xl w-[393px] bg-center h-[700px] bg-[url("/about-hero-1.png")]'></div>
        <div className='flex flex-row lg:flex-col gap-5'>
          <div className='flex relative flex-col gap-5 rounded-3xl w-[275px] bg-top h-[339px] bg-[url("/about-hero-2.png")]'>
            {' '}
          </div>
          <div className='flex relative flex-col gap-5 rounded-3xl w-[275px] bg-center h-[339px] bg-[url("/about-hero-3.png")]'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
