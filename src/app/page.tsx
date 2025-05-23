/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Home = () => {
  interface DataType {
    info: string
    imgSrc: string
  }

  const datas: DataType[] = [
    {
      info: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
      imgSrc: "slider-1.webp"
    },
    {
      info: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade...",
      imgSrc: "slider-2.webp"
    },
    {
      info: "Rupesh Kanna found himself in between jobs in 2016...",
      imgSrc: "slider-3.webp"
    },
    {
      info: "LTA International Global Services LLC is a Florida-based export management company...",
      imgSrc: "slider-4.webp"
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <div className='w-full min-h-screen bg-[url(/background.png)] bg-cover bg-center flex items-center justify-center px-6 md:px-28'>
        <div className='w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>
          <div className='flex flex-col justify-center space-y-10'>
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold'>Sell on 1mdm.com</h2>
              <h1 className='text-4xl md:text-5xl font-semibold'>
                Reach millions of B2B buyers globally
              </h1>
            </div>
            <div className='flex flex-wrap gap-4'>
              <Button className='rounded-full text-lg bg-[#ed1c24] hover:bg-[#ed1c24]'>
                Start Selling
              </Button>
              <Button className='rounded-full text-lg bg-transparent text-[#ed1c24] border-[#ed1c24] border-2 hover:text-white hover:bg-[#ed1c24]'>
                Chat With Consultant
              </Button>
            </div>
          </div>

          <div className='grid gap-6 justify-end'>
            <div>
              <h2 className='text-3xl font-semibold'>26,000,000</h2>
              <p className='text-xl'>active buyers globally</p>
            </div>
            <div>
              <h2 className='text-3xl font-semibold'>400,000</h2>
              <p className='text-xl'>product inquiries daily</p>
            </div>
            <div>
              <h2 className='text-3xl font-semibold'>200</h2>
              <p className='text-xl'>countries and regions represented</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='w-full min-h-screen px-6 md:px-28 py-20 space-y-20'>
        <div className='w-full flex items-center justify-center text-center'>
          <h2 className='text-3xl md:text-4xl font-semibold leading-snug max-w-4xl'>
            1mdm.com is a leading ecommerce platform that helps SMEs go global
          </h2>
        </div>
        <div className='grid md:grid-cols-2 gap-10 w-full'>
          <div className='relative w-full pt-[56.25%]'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src="https://www.youtube.com/embed/TN7iJyc5Uks?si=PTkPUsopmCD0bJ7H"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <noscript>
              <p>Please enable JavaScript to view the video. <a href="https://www.youtube.com/watch?v=TN7iJyc5Uks">Watch on YouTube</a></p>
            </noscript>
          </div>
          <div className='flex flex-col justify-center gap-6'>
            <p className='text-xl'>Connect with millions of business buyers from around the world.</p>
            <p className='text-xl'>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
            <p className='text-xl'>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
          </div>
        </div>
      </div>

      {/* Highlight Section */}
      <div className='w-full min-h-[50vh] grid grid-rows-2'>
        <div className='bg-red-600 flex flex-col items-center text-center justify-center px-6 py-16'>
          <div className='text-white max-w-5xl font-semibold space-y-10'>
            <h2 className='text-4xl md:text-5xl'>
              Largest number of products & categories of medical devices on a single place - 1mdm.com
            </h2>
            <p className='text-xl'>
              Connect with buyers worldwide for your product & start selling now.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center text-center text-2xl md:text-4xl text-red-700 font-bold px-4'>
          <h2>Grow your business with a suite of tools built for you</h2>
        </div>
      </div>

      {/* Tabs Section */}
      <div className='w-full px-6 md:px-28 py-20'>
        <Tabs defaultValue='Customer storefront' className="w-full space-y-10">
          <TabsList className='flex flex-wrap justify-center gap-4'>
            <TabsTrigger className='h-16 px-6 text-lg' value="Customer storefront">Customer storefront</TabsTrigger>
            <TabsTrigger className='h-16 px-6 text-lg' value="Advertising tools">Advertising tools</TabsTrigger>
            <TabsTrigger className='h-16 px-6 text-lg' value="Data and analytics">Data and analytics</TabsTrigger>
            <TabsTrigger className='h-16 px-6 text-lg' value="Customer support">Customer support</TabsTrigger>
          </TabsList>
          <TabsContent value="Customer storefront">
            <Card><CardContent className="p-6">Engaging storefront content here.</CardContent></Card>
          </TabsContent>
          <TabsContent value="Advertising tools">
            <Card><CardContent className="p-6">Ad tool details here.</CardContent></Card>
          </TabsContent>
          <TabsContent value="Data and analytics">
            <Card><CardContent className="p-6">Analytics insights here.</CardContent></Card>
          </TabsContent>
          <TabsContent value="Customer support">
            <Card><CardContent className="p-6">Support features here.</CardContent></Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Carousel Section */}
      <div className='w-full flex justify-center items-center py-20 px-6'>
        <Carousel className="w-full max-w-5xl">
          <CarouselContent>
            {datas.map((data, index) => (
              <CarouselItem key={index}>
                <Card className='w-full'>
                  <CardContent className="p-6 space-y-4">
                    <p className='text-lg'>{data.info}</p>
                    <img
                      src={data.imgSrc}
                      alt={data.info.substring(0, 50)}
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  )
}

export default Home
