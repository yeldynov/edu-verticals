// Testimonials.tsx
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface Testimonial {
  companyName: string
  testimonialText: string
  rating: number
  userPhoto: string
  userName: string
  userPosition: string
}

export const testimonials: Testimonial[] = [
  {
    companyName: 'ManKind Pharma Ltd',
    testimonialText:
      '“This MBA program transformed my career! The online format was convenient and flexible.”',
    rating: 5,
    userPhoto: '/user1.png',
    userName: 'Vishwajeet Ganguly',
    userPosition: 'HR Executive',
  },
  {
    companyName: 'Global Innovators Pvt. Ltd.',
    testimonialText:
      '“I applied what I learned immediately at work. My promotion came faster than expected!”',
    rating: 5,
    userPhoto: '/user2.png',
    userName: 'Priya Menon',
    userPosition: 'Chief Marketing Officer',
  },
  {
    companyName: 'Axis Financial Group',
    testimonialText:
      '“Exceptional curriculum and world-class faculty—perfect for busy professionals.”',
    rating: 5,
    userPhoto: '/user3.png',
    userName: 'Aarav Kapoor',
    userPosition: 'Financial Analyst',
  },
  {
    companyName: 'ManKind Pharma Ltd',
    testimonialText:
      '“This MBA program transformed my career! The online format was convenient and flexible.”',
    rating: 5,
    userPhoto: '/user1.png',
    userName: 'Vishwajeet Ganguly',
    userPosition: 'HR Executive',
  },
  {
    companyName: 'Global Innovators Pvt. Ltd.',
    testimonialText:
      '“I applied what I learned immediately at work. My promotion came faster than expected!”',
    rating: 5,
    userPhoto: '/user2.png',
    userName: 'Priya Menon',
    userPosition: 'Chief Marketing Officer',
  },
  {
    companyName: 'Axis Financial Group',
    testimonialText:
      '“Exceptional curriculum and world-class faculty—perfect for busy professionals.”',
    rating: 5,
    userPhoto: '/user3.png',
    userName: 'Aarav Kapoor',
    userPosition: 'Financial Analyst',
  },
]

const Testimonials = () => {
  return (
    <div className='my-8 lg:my-16 lg:pt-16'>
      <Carousel>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <CarouselItem
              className='pl-2 md:pl-4 md:basis-1/3 2xl:basis-1/4'
              key={index}
            >
              <div className='flex flex-col h-[460px] lg:h-[500px] 2xl:h-[600px] justify-between text-left bg-white p-4 lg:p-8 rounded-2xl shadow-md'>
                <p className='text-sm mt-2 text-gray-500'>
                  {testimonial.companyName}
                </p>
                <h4 className=' font-serif text-2xl 2xl:text-4xl pt-4 lg:pt-8 my-2'>
                  {testimonial.testimonialText}
                </h4>
                <div className='flex text-3xl pb-4 lg:pb-8 items-center'>
                  {/* Rating Display (using star icons or any other method) */}
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className='flex gap-2 items-center'>
                  <img
                    src={testimonial.userPhoto}
                    alt={testimonial.userName}
                    className='w-20 h-20 rounded-full mb-4'
                  />
                  <div className='flex flex-col gap-2 text-left'>
                    {' '}
                    <h3 className='text-lg font-semibold'>
                      {testimonial.userName}
                    </h3>
                    <p className=' text-gray-600'>{testimonial.userPosition}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden 2xl:flex' />
        <CarouselNext className='hidden 2xl:flex' />
      </Carousel>
    </div>
  )
}

export default Testimonials
