import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-full h-screen'>
            <div className='h-full grid grid-flow-col grid-rows-2'>
                <div className='bg-red-600 flex flex-col items-center text-center justify-center'>
                    <div className='text-white max-w-5xl font-semibold space-y-10'>
                        <h1 className='text-5xl'>Ready to Grow Your Business?</h1>
                        <div className='flex flex-wrap items-center justify-center gap-4'>
                            <Button className='rounded-full text-lg bg-white text-[#ed1c24]'>
                                Start Selling
                            </Button>
                            <Button className='rounded-full text-lg bg-transparent text-white border-white border-2 hover:text-white hover:bg-[#ed1c24]'>
                                Chat With Consultant
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 px-28 py-10 bg-black text-white'>
                    <div><img src="logo.png" alt="logo" /><h1>One Medical Devices
                        Market Place</h1></div>
                    <div>
                        <h1>Platform</h1>
                        <div className='grid gap-5'>
                            <Link className='text-gray-300' href="/">Sell on 1MDM</Link>
                            <Link className='text-gray-300' href="/">Pricing</Link>
                            <Link className='text-gray-300' href="/">About Us</Link>
                            <Link className='text-gray-300' href="/">Our Story</Link>
                            <Link className='text-gray-300' href="/">Careers</Link>
                            <Link className='text-gray-300' href="/">Blog</Link>
                            <Link className='text-gray-300' href="/">Brands</Link>
                        </div>
                    </div>
                    <div>
                        <h1>Press Room</h1>
                        <div className='grid gap-5'>
                            <Link className='text-gray-300' href="/">Images & B-roll</Link>
                            <h1>Policies</h1>
                            <Link className='text-gray-300' href="/">Terms of Services</Link>
                            <Link className='text-gray-300' href="/">Privacy Policy</Link>
                            <Link className='text-gray-300' href="/">Delivery Information</Link>
                        </div>
                    </div>
                    <div>
                        <h1>Reach Us</h1>
                        <div className='grid gap-5'>
                            <Link className='text-gray-300' href="/">Coorporate Information</Link>
                            <Link className='text-gray-300' href="/">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
