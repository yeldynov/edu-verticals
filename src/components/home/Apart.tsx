import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'

const Apart = () => {
  return (
    <div className='my-16 rounded-[64px] '>
      <div className='lg:p-16 lg:px-2 py-5 flex flex-col gap-5 lg:flex-row justify-between'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-serif text-3xl lg:text-5xl'>
            What Sets us Apart
          </h2>
        </div>
        <Link href={'/courses'}>
          <Button
            variant={'outline'}
            className='border-maintext w-fit text-xl hover:bg-maintext hover:text-white bg-transparent p-6 lg:p-8'
          >
            About Us <ArrowUpRight />
          </Button>
        </Link>
      </div>
      <div className='flex flex-col gap-5'>
        {/* top */}
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='lg:w-2/3 bg-darkbg rounded-3xl p-5 text-eduwhite lg:p-16'>
            {/* 1st line */}
            <div className='flex flex-col justify-between lg:flex-row gap-5'>
              <div className='flex gap-6 items-center justify-between lg:text-right'>
                <div className='flex flex-col'>
                  <h5 className='text-xl lg:text-2xl'>Personal Mentorship</h5>
                  <p className='max-w-[300px] text-xs lg:text-base'>
                    One-on-one career coaching with industry leaders.
                  </p>
                </div>
                <img
                  className='lg:h-fit'
                  src='/process-1.png'
                  alt='Heartshake'
                />
              </div>
              <div className='flex gap-6 items-center justify-between'>
                <img
                  className='lg:h-fit'
                  src='/process-2.png'
                  alt='Heartshake'
                />
                <div className='flex flex-col'>
                  <h5 className='text-xl lg:text-2xl'>Human Support</h5>
                  <p className='max-w-[300px] text-xs lg:text-base'>
                    Real people guide students through assignments and exams.
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd line */}
            <div className='lg:flex flex-col hidden items-center justify-center lg:flex-row'>
              <img className='lg:h-fit' src='/process-4.png' alt='Heartshake' />
            </div>
            {/* 3rd line */}
            <div className='flex flex-col justify-between lg:flex-row gap-5'>
              <div className='flex gap-6 items-center justify-between lg:text-right'>
                <div className='flex flex-col'>
                  <h5 className='text-xl lg:text-2xl'>True Value</h5>
                  <p className='max-w-[300px] text-xs lg:text-base'>
                    We offer significant, lasting value - not superficial
                    discounts.
                  </p>
                </div>
                <img
                  className='lg:h-fit'
                  src='/process-4.png'
                  alt='Heartshake'
                />
              </div>
              <div className='flex gap-6 items-center justify-between'>
                <img
                  className='lg:h-fit'
                  src='/process-5.png'
                  alt='Heartshake'
                />
                <div className='flex flex-col'>
                  <h5 className='text-xl lg:text-2xl'>Personal Mentorship</h5>
                  <p className='max-w-[300px] text-xs lg:text-base'>
                    We always and ever thrive together, not in isolation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 p-6 bg-white rounded-3xl'>
            <div className='flex flex-col gap-2'>
              <h4 className='text-2xl lg:text-3xl font-serif'>
                Thriving, not just surviving.
              </h4>
              <p>Reduce Stress, Boost Performance.</p>
            </div>
            <div className='flex mt-5 gap-2 lg:gap-5'>
              <img
                className='p-8 max-w-[100px] max-h-[100px] bg-[#D8E3FF] rounded-[32px]'
                src='/puzzle-icon.svg'
                alt='Puzzle Icon'
              />
              <div className='flex flex-col'>
                <h5 className='font-serif mb-2'>Doings</h5>
                <ul className='list-disc list-inside'>
                  <li className='text-xs 2xl:text-sm'>
                    Personalized help with assignments and projects.
                  </li>
                  <li className='text-xs 2xl:text-sm'>
                    Encouraging academic success through expert-led-guidance and
                    support.
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex mt-5 gap-2 lg:gap-5'>
              <img
                className='p-8 max-w-[100px] max-h-[100px] bg-[#D8E3FF] rounded-[32px]'
                src='/clip-icon.svg'
                alt='Clip Icon'
              />
              <div className='flex flex-col'>
                <h5 className='font-serif mb-2'>Outcomes</h5>
                <ul className='list-disc list-inside'>
                  <li className='text-xs 2xl:text-sm'>
                    Not feeling forced to do assignments instead gaining
                    knowledge.
                  </li>
                  <li className='text-xs 2xl:text-sm'>
                    Excelling in your field of expertise.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className='flex flex-col xl:flex-row gap-5'>
          <div className='xl:w-1/2 lg:flex-row'>
            <div className='gap-5 flex flex-col min-h-[450px] lg:flex-row bg-white rounded-3xl'>
              <div className='xl:w-1/2 rounded-3xl'>
                <img
                  src='/guidance.png'
                  alt='Girls working'
                  className='object-cover rounded-3xl h-full'
                />
              </div>
              <div className='p-6'>
                <div className='flex flex-col gap-2'>
                  <h4 className='text-2xl lg:text-3xl font-serif'>
                    Honest guidance, real results.
                  </h4>
                  <p>More Than Generic Advice.</p>
                </div>
                <div className='flex mt-5 gap-2 lg:gap-5'>
                  <img
                    className='p-8 max-w-[100px] max-h-[100px] bg-[#D8E3FF] rounded-[32px]'
                    src='/puzzle-icon.svg'
                    alt='Puzzle Icon'
                  />
                  <div className='flex flex-col'>
                    <h5 className='font-serif mb-2'>Doings</h5>
                    <ul className='list-disc list-inside'>
                      <li className='text-xs 2xl:text-sm'>
                        Direct mentorship with industry experts, tailored to
                        individual goals.
                      </li>
                      <li className='text-xs 2xl:text-sm'>
                        Expert help with resume building and strategic career
                        moves.
                      </li>
                      <li className='text-xs 2xl:text-sm'>
                        Access to exclusive certifications from premier
                        institutes like IIMs.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='flex mt-5 gap-2 lg:gap-5'>
                  <img
                    className='p-8 max-w-[100px] max-h-[100px] bg-[#D8E3FF] rounded-[32px]'
                    src='/clip-icon.svg'
                    alt='Clip Icon'
                  />
                  <div className='flex flex-col'>
                    <h5 className='font-serif mb-2'>Outcomes</h5>
                    <ul className='list-disc list-inside'>
                      <li className='text-xs 2xl:text-sm'>
                        Learning from the experts, creates another expert.
                      </li>
                      <li className='text-xs 2xl:text-sm'>
                        Sustainability, as you persue what you love and enjoy a
                        productive career.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:w-1/2 lg:flex-row'>
            <div className='gap-5 flex flex-col  min-h-[450px] lg:flex-row bg-white rounded-3xl'>
              <div className='xl:w-1/2 rounded-3xl'>
                <img
                  src='/guidance-2.png'
                  alt='Girls working'
                  className='object-cover rounded-3xl h-full'
                />
              </div>
              <div className='p-6'>
                <div className='flex flex-col gap-2'>
                  <h4 className='text-2xl lg:text-3xl font-serif'>
                    No more going at it alone.
                  </h4>
                  <p>Build Connections, Not Credentials.</p>
                </div>
                <div className='flex mt-5 gap-2 lg:gap-5'>
                  <img
                    className='p-8 max-w-[100px] max-h-[100px] bg-[#D8E3FF] rounded-[32px]'
                    src='/puzzle-icon.svg'
                    alt='Puzzle Icon'
                  />
                  <div className='flex flex-col'>
                    <h5 className='font-serif mb-2'>Doings</h5>
                    <ul className='list-disc list-inside'>
                      <li className='text-xs 2xl:text-sm'>
                        You become part of a supportive community, sharing your
                        journey with peers and mentors.
                      </li>
                      <li className='text-xs 2xl:text-sm'>
                        Collaboration and connection fosters a richer academic
                        experience.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='flex mt-5 gap-2 lg:gap-5'>
                  <img
                    className='p-8 max-w-[100px] max-h-[100px] bg-[#D8E3FF] rounded-[32px]'
                    src='/clip-icon.svg'
                    alt='Clip Icon'
                  />
                  <div className='flex flex-col'>
                    <h5 className='font-serif mb-2'>Outcomes</h5>
                    <ul className='list-disc list-inside'>
                      <li className='text-xs 2xl:text-sm'>
                        You excel in teamwork which boosts your corporate
                        journey.
                      </li>
                      <li className='text-xs 2xl:text-sm'>
                        Learn leadership skills and the process of becoming a
                        future leader.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apart
