import React from 'react'
import { Button } from './ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = () => {
  return (
    <div className='bg-darkbg p-5 2xl:-mx-20 2xl:p-32 lg:px-12 xl:py-16 rounded-[32px] text-eduwhite'>
      <div className='flex items-center flex-col lg:flex-row  justify-between gap-10'>
        {/* left */}
        <div className='flex bg-maintext lg:border-[20px] h-fit border-[#202640] rounded-3xl p-5 flex-1 items-center xl:items-start overflow-hidden flex-col-reverse xl:flex-row gap-5'>
          <img src='/not-sure.png' alt='Group of people' className='' />
          <div className='flex flex-col justify-between gap-8'>
            <h2 className='2xl:text-4xl text-xl sm:text-2xl font-serif'>
              Not satisfied with the answers?
            </h2>
            <div className='flex flex-col'>
              <h6 className='text-base 2xl:text-xl'>
                We have a team of over 12 experienced consultants with over 26+
                years of collective experience available to guide you at a
                moment’s notice.
              </h6>
            </div>
            <Button className='bg-darkbg font-semibold w-fit hover:bg-white hover:text-maintext lg:px-8 py-6'>
              Book a Free Consultation
            </Button>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-1 bg-darkbg flex-col lg:flex-row gap-2'>
          <div className='flex flex-col justify-center w-full gap-2'>
            <h1 className='font-serif text-3xl xl:text-4xl 2xl:text-6xl'>
              Got Questions?
            </h1>
            <Accordion type='single' defaultValue='item-1' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  What Academic help will I receive after registering?
                </AccordionTrigger>
                <AccordionContent>
                  After registering for any program a student will receive
                  semester-wise self learning material (if applicable),
                  recordings of live sessions, course presentations, session
                  presentations and any additional reading material as shared by
                  faculty if any.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  How are the programs delivered at NMIMS Global Access?
                </AccordionTrigger>
                <AccordionContent>
                  After registering for any program a student will receive
                  semester-wise self learning material (if applicable),
                  recordings of live sessions, course presentations, session
                  presentations and any additional reading material as shared by
                  faculty if any.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>
                  What are the charges if the student wishes to attend live
                  lectures for less than 6 subjects?
                </AccordionTrigger>
                <AccordionContent>
                  After registering for any program a student will receive
                  semester-wise self learning material (if applicable),
                  recordings of live sessions, course presentations, session
                  presentations and any additional reading material as shared by
                  faculty if any.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>
                  Student has paid in full for (Program Fees + Live Lectures)
                  for all Semesters. Can he change or opt out of some subjects?
                </AccordionTrigger>
                <AccordionContent>
                  After registering for any program a student will receive
                  semester-wise self learning material (if applicable),
                  recordings of live sessions, course presentations, session
                  presentations and any additional reading material as shared by
                  faculty if any.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-5'>
                <AccordionTrigger>
                  What Academic help will I receive after registering?
                </AccordionTrigger>
                <AccordionContent>
                  After registering for any program a student will receive
                  semester-wise self learning material (if applicable),
                  recordings of live sessions, course presentations, session
                  presentations and any additional reading material as shared by
                  faculty if any.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
