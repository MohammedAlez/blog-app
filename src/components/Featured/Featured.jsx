import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Featured = () => {
  return (
    <div className="my-6">
      <h1 className="text-3xl md:text-5xl my-10 text-[#ddd]">
        <b className='block my-2'>Hey, This is My Blog </b> 
        Discover my stories and creative Content
      </h1>
      <div className="flex gap-10 flex-col lg:flex-row">
        <div className=" text-center h-[300px] flex-1  overflow-hidden rounded-lg">
          <Image className=' rounded-lg mx-auto object-cover h-[300px]' src="/p1.jpeg" alt="" width={500} height={300} />
        </div>
        <div className="flex-1 ">
          <h1 className="font-bold text-2xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sequi esse illo nihil a eius</h1>
          <p className="text-gray-400 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sequi esse illo nihil a eius reiciendis, blanditiis in numquam maxime ducimus enim odit. Minus ullam sapiente consectetur soluta perferendis quasi!
            <Link href="" className='block p-2 rounded-lg text-black font-bold text-sm hover:bg-gray-400 transition bg-gray-300 min-w-fit max-w-fit my-4'>Read More</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
