import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import React from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='w-full h-auto px-2 md:px-24 text-lg'>
            <div className='flex flex-col md:flex-row justify-between py-2'>
                <h2 className='text-gray-500'>World&apos;s Largest Medical Equipment Market Place</h2>
                <div>
                    <Link href='/'>My account</Link>
                    <span className='px-2'>|</span>
                    <Link href='/'>My account</Link>
                </div>
            </div>
            <hr />
            <NavigationMenu>
                <NavigationMenuList className='flex items-center justify-between p-3'>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='/'><img src="logo.png" alt="logo" /></NavigationMenuLink>
                    </NavigationMenuItem>
                    <div className='hidden md:block'>
                        <div className='flex space-x-4'>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/' className='text-gray-500 hover:text-[#ed1c24]'>About Us</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/' className='text-gray-500 hover:text-[#ed1c24]'>Our Story</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/' className='text-gray-500 hover:text-[#ed1c24]'>Sell on 1MDM</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/' className='text-gray-500 hover:text-[#ed1c24]'>Pricing</NavigationMenuLink>
                            </NavigationMenuItem>
                        </div>
                    </div>
                    <div className='p-3 md:hidden'>
                        <span><Menu size={30} className='border-2 border-gray-600' /></span>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Navbar
