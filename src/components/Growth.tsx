import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Growth = () => {
  return (
    <div className='flex flex-col w-full xl:flex-row gap-5 my-20'>
      <div className='lg:flex-row w-full'>
        <div className='gap-5 w-full flex flex-col min-h-[450px] xl:flex-row bg-white rounded-3xl'>
          <div className='xl:w-2/5 hidden xl:block rounded-3xl'>
            <img
              src='/growth.png'
              alt='Girls working'
              className='object-cover object-center rounded-3xl h-full'
            />
          </div>
          <div className='p-6 xl:px-12 xl:w-3/5'>
            <div className=' lg:px-2 py-5 flex flex-col gap-5 lg:flex-row justify-between'>
              <div className='flex flex-col gap-4'>
                <h2 className='font-serif text-3xl lg:text-5xl'>
                  Fueling Corporate Growth
                </h2>
                <p>
                  We build skilled, ready-to-work talent, helping companies grow
                  and retain top employees.
                </p>
              </div>
              <Link href={'https://yeldynov.tech'}>
                <Button
                  variant={'outline'}
                  className='border-maintext w-fit text-xl hover:bg-maintext hover:text-white bg-transparent p-6 lg:p-8'
                >
                  Learn more <ArrowRight />
                </Button>
              </Link>
            </div>
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='flex flex-col mt-5 gap-2 lg:gap-5'>
                <img
                  className='p-8 w-[100px] h-[100px] bg-[#D8E3FF] rounded-[32px]'
                  src='/arrow-right.svg'
                  alt='Puzzle Icon'
                />
                <div className='flex flex-col'>
                  <h6 className='font-serif mb-2'>
                    Skilled Workforce Pipeline
                  </h6>
                  <p>
                    Our students are equipped with the right skills through
                    certifications and real-world training, ready to make an
                    impact from day one.
                  </p>
                </div>
              </div>
              <div className='flex flex-col mt-5 gap-2 lg:gap-5'>
                <img
                  className='p-8 w-[100px] h-[100px] bg-[#D8E3FF] rounded-[32px]'
                  src='/needle-icon.svg'
                  alt='Needle Icon'
                />
                <div className='flex flex-col'>
                  <h6 className='font-serif mb-2'>
                    Tailored Talent Development
                  </h6>
                  <p>
                    Partnering with us ensures access to professionals who have
                    received personalized mentorship and career guidance,
                    aligned with industry needs.
                  </p>
                </div>
              </div>
              <div className='flex flex-col mt-5 gap-2 lg:gap-5'>
                <img
                  className='p-8 w-[100px] h-[100px] bg-[#D8E3FF] rounded-[32px]'
                  src='/face-icon.svg'
                  alt='Face Icon'
                />
                <div className='flex flex-col'>
                  <h6 className='font-serif mb-2'>
                    Enhanced Employee Retention
                  </h6>
                  <p>
                    Our focus on continuous learning and upskilling boosts
                    employee engagement and retention, reducing turnover for
                    corporate partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Growth
