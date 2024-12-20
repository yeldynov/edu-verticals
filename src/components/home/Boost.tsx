import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

interface Course {
  title: string
  description: string
  details: {
    coursesCount: number
    universitiesCount: number
    duration: string
  }
}

const courses: Course[] = [
  {
    title: 'PG Courses',
    description: 'After Graduation',
    details: {
      coursesCount: 27,
      universitiesCount: 12,
      duration: '1 - 2 Years',
    },
  },
  {
    title: 'Executive Education',
    description: 'Working Professionals & CXOs',
    details: {
      coursesCount: 21,
      universitiesCount: 25,
      duration: '3 - 24 Months',
    },
  },
  {
    title: 'Doctorate/Ph.D',
    description: 'Dr. Title (After UG + Work Ex)',
    details: {
      coursesCount: 27,
      universitiesCount: 52,
      duration: '3 Years',
    },
  },
  {
    title: 'UG Courses',
    description: 'After 12th',
    details: {
      coursesCount: 82,
      universitiesCount: 12,
      duration: '3 Years',
    },
  },
  {
    title: 'Advanced Diploma',
    description: 'Advanced Diploma Details',
    details: {
      coursesCount: 27,
      universitiesCount: 12,
      duration: '1 - 2 Years',
    },
  },
  {
    title: 'Skilling & Certification',
    description: 'Skilling & Certification Details',
    details: {
      coursesCount: 27,
      universitiesCount: 8,
      duration: '3 - 36 Months',
    },
  },
]

const Boost = () => {
  return (
    <div className='my-16 rounded-[64px] '>
      <div className='lg:p-16 lg:px-2 py-5 flex flex-col gap-5 lg:flex-row justify-between'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-serif text-3xl lg:text-5xl'>Boost Your Career</h2>
          <p className='max-w-lg'>
            There are over 489 courses offered by our academy partners. Find
            exactly what you’re looking for through our diverse catalog.
          </p>
        </div>
        <Link href={'/courses'}>
          <Button
            variant={'outline'}
            className='border-maintext w-fit text-xl hover:bg-maintext hover:text-white bg-transparent p-6 lg:p-8'
          >
            View All <ArrowRight />
          </Button>
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
        {courses.map((course, index) => (
          <Link
            href={`/courses/#`}
            key={index}
            className='p-6 border rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-200'
          >
            <div className='flex justify-between items-center'>
              <h2 className='text-3xl font-serif font-medium mb-2'>
                {course.title}
              </h2>
              <ArrowUpRight className='cursor-pointer' />
            </div>
            <p className='text-[#5A6FA8] mb-4'>{course.description}</p>
            <p className='text-gray-700'>
              {course.details.coursesCount} Courses •{' '}
              {course.details.universitiesCount} Universities •{' '}
              {course.details.duration}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Boost
