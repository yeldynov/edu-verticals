import Apart from '@/components/home/Apart'
import Boost from '@/components/home/Boost'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Growth from '@/components/home/Growth'
import Hero from '@/components/home/Hero'
import NotSure from '@/components/home/NotSure'
import Partners from '@/components/home/Partners'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
// import VideosCarousel from '@/components/VideosCarousel'

export default function Home() {
  return (
    <div className='bg-[linear-gradient(to_bottom,_#EFF0F9_100%,_#EFF0F9_79%,_#EFF0F9_0%)] min-h-screen rounded-3xl px-5 xl:px-20'>
      <Hero />
      <Testimonials />
      <Partners />
      <Process />
      <Boost />
      <NotSure />
      <Apart />
      {/* <VideosCarousel /> */}
      <Growth />
      <FAQ />
      <Footer />
    </div>
  )
}
