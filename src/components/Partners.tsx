// Partners.tsx
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Partner {
  logo: string
  labels: string[]
  image: string
  naac: string
  credit: number
  rank: number
  managementRank: number
  name: string
  city: string
  durationInYears: number
  durationInSemesters: number
  priceFrom: number
}

const labelColors: Record<string, string> = {
  Scholarship: 'bg-green-500',
  'EMI Plan': 'bg-blue-500',
  'Full-time': 'bg-yellow-500',
  'Part-time': 'bg-purple-500',
}

const partners: Partner[] = [
  {
    logo: '/client-1.png',
    labels: ['Scholarship', 'EMI Plan'],
    image: '/academic-1.png',
    naac: 'A+',
    credit: 120,
    rank: 10,
    managementRank: 5,
    name: 'Amrita University',
    city: 'Uttar Pradesh',
    durationInYears: 2.5,
    durationInSemesters: 4,
    priceFrom: 10000,
  },
  {
    logo: '/client-2.png',
    labels: ['EMI Plan'],
    image: '/academic-2.png',
    naac: 'A',
    credit: 100,
    rank: 15,
    managementRank: 7,
    name: 'Chandigarh University',
    city: 'Punjab',
    durationInYears: 2,
    durationInSemesters: 4,
    priceFrom: 12000,
  },
  {
    logo: '/client-3.png',
    labels: ['EMI Plan'],
    image: '/academic-3.png',
    naac: 'A',
    credit: 100,
    rank: 15,
    managementRank: 7,
    name: 'IIM Indore',
    city: 'Uttar Pradesh',
    durationInYears: 2.5,
    durationInSemesters: 6,
    priceFrom: 12000,
  },
  // Add more partners as needed
]

const Partners = () => {
  return (
    <div className='my-16 rounded-[64px] '>
      <div className='lg:p-16 lg:px-2 py-5 flex flex-col gap-5 lg:flex-row justify-between'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-serif text-3xl lg:text-5xl'>
            Our Academic Partners
          </h2>
          <p>
            We have over 60 universities as our academic partners. Find yours
            today.
          </p>
        </div>
        <Link href={'/academic'}>
          <Button
            variant={'outline'}
            className='border-maintext w-fit text-xl hover:bg-maintext hover:text-white bg-transparent p-6 lg:p-8'
          >
            View All <ArrowRight />
          </Button>
        </Link>
      </div>
      <Carousel>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {partners.map((partner: Partner, index: number) => (
            <CarouselItem
              className='pl-2 md:pl-4 sm:basis-1/2 xl:basis-1/3'
              key={index}
            >
              <div className='bg-white p-4 lg:p-8 rounded-lg shadow-lg'>
                <div className='flex flex-col items-center'>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className='mb-4'
                  />
                  <div className='flex gap-2'>
                    {partner.labels.map((label, i) => (
                      <span
                        key={i}
                        className={`text-white px-3 py-1 text-xs rounded-full ${
                          labelColors[label] || 'bg-gray-500'
                        }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='mt-4'>
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className='w-full h-48 lg:h-60 object-cover rounded-lg'
                  />
                </div>
                <div className='mt-4'>
                  <div className='flex flex-wrap w-fit items-center gap-1 bg-[#E7EDFF] p-2'>
                    <div className='flex flex-col bg-white rounded-xl p-1'>
                      <h4 className='text-2xl lg:text-3xl'>{partner.naac}</h4>
                      <p className='text-[8px] lg:text-xs'>NAAC</p>
                    </div>
                    <div className='flex flex-col bg-white rounded-xl p-1'>
                      <h4 className='text-2xl lg:text-3xl'>{partner.credit}</h4>
                      <p className='text-[10px] lg:text-xs'>Credit P.</p>
                    </div>
                    <div className='flex flex-col bg-white rounded-xl p-1'>
                      <h4 className='text-2xl lg:text-3xl'>{partner.rank}th</h4>
                      <p className='text-[10px] lg:text-xs'>Rank</p>
                    </div>
                    <div className='flex flex-col bg-white rounded-xl p-1'>
                      <h4 className='text-2xl lg:text-3xl'>
                        {partner.managementRank}nd
                      </h4>
                      <p className='text-[10px] lg:text-xs'>Management</p>
                    </div>
                  </div>

                  <div className='flex flex-col py-3'>
                    <h3 className='text-xl lg:text-3xl font-serif font-semibold'>
                      {partner.name}
                    </h3>
                    <p className='text-gray-600 text-sm'>{partner.city}</p>
                  </div>

                  <div className='flex gap-1  items-center'>
                    <p className='text-gray-600 text-[10px]'>
                      {partner.durationInYears} years
                    </p>
                    <span className='text-gray-600 '>•</span>
                    <p className='text-gray-600 text-[10px]'>
                      {partner.durationInSemesters} semesters
                    </p>
                    <span className='text-gray-600 '>•</span>
                    <p className='text-gray-600 text-[10px]'>
                      From: ${partner.priceFrom}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Partners
