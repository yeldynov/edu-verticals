import Hero from '@/components/about/Hero'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='bg-[linear-gradient(to_bottom,_#EFF0F9_100%,_#EFF0F9_79%,_#EFF0F9_0%)] min-h-screen rounded-3xl px-5 xl:px-20'>
      <Hero />
      <FAQ />
      <Footer />
    </div>
  )
}

export default AboutPage
