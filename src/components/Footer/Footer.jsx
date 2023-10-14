import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className="flex gap-4 py-4 border-t border-t-gray-800 flex-col lg:flex-row">
      <div className="  flex-1 ">
          <div className="flex gap-2 items-center mb-6 justify-center lg:justify-start" >
            <div className="relative bg-red-600 font-bold text-xl text-center text-white w-[30px] h-[30px] rounded-full overflow-hidden ">
              B
            </div>
            <span className='inline-block text-gray-300 font-bold'>Bloogie.</span>
          </div>
          <p className="text-sm text-gray-200 text-center lg:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio accusamus consequuntur tenetur. Odit eaque error optio veniam asperiores quasi quidem neque earum fugiat natus? A iusto error aliquid quos eius.</p>
          <div className="flex mt-4 gap-3 justify-center  lg:justify-start">
          <Link href="https://facebook.com">
            <Image src='/facebook.png' alt='' width={20} height={20} /> 
          </Link>
          <Link href="https://instagram.com">
            <Image src='/instagram.png' alt='' width={20} height={20} /> 
          </Link>
          <Link href="https://youtube.com">
            <Image src='/youtube.png' alt='' width={20} height={20} /> 
          </Link>
          </div>
      </div>
      <div className="flex-1 flex justify-center gap-16">
        <div className="">
          <h1 className='text-white font-bold mb-3'>Links</h1>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Home page</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>About</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Contact</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Blog</Link>
        </div>
        <div className="">
          <h1 className='text-white font-bold mb-3'>Tags</h1>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Style</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Fashion</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Coding</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Travel</Link>
        </div>
        <div className="">
          <h1 className='text-white font-bold mb-3'>Socials</h1>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Facebook</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Instagram</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>Youtube</Link>
          <Link href="" className='block text-sm mb-1 text-gray-400 hover:text-white transition'>TikTok</Link>
        </div>
      </div>
    </div>  
  )
}
