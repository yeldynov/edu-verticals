import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Video 1' },
  { id: '3JZ_D3ELwOQ', title: 'Video 2' },
  { id: 'dQw4w9WgXcQ', title: 'Video 3' },
  { id: '3JZ_D3ELwOQ', title: 'Video 4' },
]

const VideosCarousel = () => {
  return (
    <div className='my-16 rounded-[64px] '>
      <div className='lg:p-16 lg:px-2 py-5 flex flex-col gap-5 lg:flex-row justify-between'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-serif text-3xl lg:text-5xl'>Hey, Aspirants!</h2>
          <p className='max-w-[500px]'>
            Follow us on YouTube for dedicated guides on getting through the
            maze of online distance education admissions.
          </p>
        </div>
        <Link href={'https://yeldynov.tech'}>
          <Button
            variant={'outline'}
            className='border-maintext w-fit text-xl hover:bg-maintext hover:text-white bg-transparent p-6 lg:p-8'
          >
            <img src='/youtube-icon.svg' alt='Youtube Icon' /> Subscribe
          </Button>
        </Link>
      </div>
      <Carousel>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {videos.map((video, index) => (
            <CarouselItem
              className='pl-2 md:pl-4 sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4'
              key={index}
            >
              <div className='bg-white rounded-lg shadow-lg'>
                <div className='flex flex-col items-center'>
                  <div className='relative w-full h-48 lg:h-60'>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                      title={video.title}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      className='w-full h-full rounded-lg'
                    />
                  </div>
                </div>
                <div className='mt-4'></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default VideosCarousel
