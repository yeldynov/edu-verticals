import React from 'react'
import { Button } from './ui/button'

const NotSure = () => {
  return (
    <div className='bg-darkbg p-5 2xl:-mx-20 2xl:p-32 lg:px-12 xl:py-16 rounded-[32px] text-eduwhite'>
      <div className='flex  flex-col lg:flex-row gap-6'>
        {/* left */}
        <div className='flex flex-1 bg-darkbg flex-col lg:flex-row gap-2'>
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='font-serif text-3xl xl:text-4xl 2xl:text-6xl'>
              Not Sure?
            </h1>
            <h1 className='font-serif text-3xl xl:text-4xl 2xl:text-6xl'>
              Got Questions?
            </h1>
            <h1 className='font-serif text-3xl xl:text-4xl 2xl:text-6xl'>
              Financial Constraints?
            </h1>

            <div className='flex gap-5 mt-10 border-l-4 pl-4 border-[#5A6FA8] flex-col'>
              <p>That’s expected.</p>
              <p>
                We offer free consultation services to help you get into the
                placement of your choice.
              </p>
              <p>
                If you already have a university in mind, we’ll guide you on the
                requirements and application of your choice.{' '}
              </p>
              <p>
                No upselling. No preferences. Let’s set you up for your success.
              </p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className='flex bg-maintext lg:border-[20px] border-[#202640] rounded-3xl p-5 flex-1 items-center xl:items-start overflow-hidden flex-col-reverse xl:flex-row gap-5'>
          <div className='flex flex-col justify-between gap-8'>
            <h2 className='2xl:text-4xl text-xl sm:text-2xl font-serif'>
              Meet Our Education Counselors
            </h2>
            <div className='flex flex-col'>
              <h6 className='text-base 2xl:text-xl'>
                We have a team of over 12 experienced consultants with over 26+
                years of collective experience available to guide you at a
                moment’s notice.
              </h6>
            </div>
            <Button className='bg-darkbg font-semibold w-fit  hover:bg-white hover:text-maintext lg:px-8 py-6'>
              Book a Free Consultation
            </Button>
          </div>
          <img src='/not-sure.png' alt='Group of people' className='' />
        </div>
      </div>
    </div>
  )
}

export default NotSure
