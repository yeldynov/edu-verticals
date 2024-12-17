import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const Process = () => {
  return (
    <div className='bg-[#181E2E] p-5 2xl:px-20 lg:py-8 lg:px-12 xl:py-16 rounded-[32px] text-[#EFFFF5]'>
      <div className='flex flex-col sm:flex-row items-center gap-4 justify-between'>
        <h1 className='font-serif text-3xl xl:text-6xl'>
          Our process is pretty simple
        </h1>
        <Button className='border-white hover:bg-white hover:text-maintext rounded-2xl self-start bg-transparent border-2 p-6 lg:p-8 text-lg font-bold w-fit'>
          About us <ArrowUpRight />
        </Button>
      </div>
      <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between my-8 lg:my-32 items-center'>
        <div className='flex gap-2 sm:max-w-[150px] md:max-w-[250px] text-center items-center flex-col'>
          <img className='w-fit' src='/process-1.png' alt='Process Item' />
          <h6 className='font-bold text-sm xl:text-xl'>
            01. Initial Consultation
          </h6>
        </div>
        <ArrowRight className='rotate-90 sm:hidden md:block sm:rotate-0' />
        <div className='flex gap-2 sm:max-w-[150px] md:max-w-[250px] text-center items-center flex-col'>
          <img className='w-fit' src='/process-2.png' alt='Process Item' />
          <h6 className='font-bold text-sm xl:text-xl'>
            02. Finding the best fit for your requirements
          </h6>
        </div>
        <ArrowRight className='rotate-90 sm:hidden md:block sm:rotate-0' />
        <div className='flex gap-2 sm:max-w-[150px] md:max-w-[250px] text-center items-center flex-col'>
          <img className='w-fit' src='/process-3.png' alt='Process Item' />
          <h6 className='font-bold text-sm xl:text-xl'>
            03. Admission through University portal only
          </h6>
        </div>
        <ArrowRight className='rotate-90 sm:hidden md:block sm:rotate-0' />
        <div className='flex gap-2 sm:max-w-[150px] md:max-w-[250px] text-center items-center flex-col'>
          <img className='w-fit' src='/process-4.png' alt='Process Item' />
          <h6 className='font-bold text-sm xl:text-xl'>
            04. Support after admission
          </h6>
        </div>
        <ArrowRight className='rotate-90 sm:hidden md:block sm:rotate-0' />
        <div className='flex gap-2 sm:max-w-[150px] md:max-w-[250px] text-center items-center flex-col'>
          <img className='w-fit' src='/process-5.png' alt='Process Item' />
          <h6 className='font-bold text-sm xl:text-xl'>
            05. Networking opportunities through community
          </h6>
        </div>
      </div>
      <div className='flex  flex-col lg:flex-row gap-6'>
        {/* left */}
        <div className='flex bg-maintext border-[20px] border-[#202640] rounded-3xl p-5 flex-1 items-center xl:items-start flex-col xl:flex-row gap-2'>
          <img
            src='/process-w.png'
            alt='Woman Speaker'
            className='rounded-full w-[200px] h-[200px] 2xl:w-[250px] 2xl:h-[250px]'
          />
          <div className='flex flex-col justify-between gap-8'>
            <p className='2xl:text-[25px] text-xl font-serif'>
              “We’re redefining corporate education by bridging the gap between
              conventional learning and today’s fast-evolving business
              landscape.”
            </p>
            <div className='flex flex-col'>
              <h6 className='text-base 2xl:text-xl'>Jyoti Nihalani</h6>
              <p className='text-xs 2xl:text-base text-gray-200'>
                HR Executive
              </p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-1 bg-[#181E2E] flex-col lg:flex-row gap-2'>
          <div className='flex flex-col justify-around gap-8'>
            <p className='2xl:text-[25px] text-xl font-serif'>
              Empowering Through Education
            </p>
            <p>
              EduVerticals specializes in tailored online MBA programs that
              empower professionals to excel and organizations to thrive. With
              cutting-edge courses in Digital Marketing, AI, Finance, and more,
              we deliver results-driven learning solutions designed to sharpen
              leadership skills & boost business growth.
            </p>
            <div className='flex flex-col'>
              <h6 className='text-base 2xl:text-xl'>
                {' '}
                Empower, Innovate, & Lead with EduVerticals.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
