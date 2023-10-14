import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AuthLinks } from '../AuthLinks/AuthLinks'

export const NavBar = () => {
  return (
    <div className="px-[10px] py-3 flex items-center justify-between ">
      {/* social media links */}
      <div className="lg:flex gap-2 flex-1 hidden">
        <Link href="https://facebook.com">
          <Image src='/facebook.png' alt='' width={25} height={25} /> 
        </Link>
        <Link href="https://instagram.com">
          <Image src='/instagram.png' alt='' width={25} height={25} /> 
        </Link>
        <Link href="https://youtube.com">
          <Image src='/youtube.png' alt='' width={25} height={25} /> 
        </Link>
      </div>
      <Link href="/" className="flex-1 lg:text-center">
          <h1 className='font-bold text-2xl text-gray-400'>BLOOG 
            <span className='inline-block w-[7px] h-[7px] bg-red-500 rounded-full'></span>
          </h1>
      </Link>
      {/* browsing links */}
      <div className=" flex gap-3 flex-1 justify-end lg:justify-center items-center">
        <Link className='hidden md:block text-[#ddd]' href="/">Homepage</Link>
        <Link className='hidden md:block text-[#ddd]' href="/">Contact</Link>
        <Link className='hidden md:block text-[#ddd]' href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}
