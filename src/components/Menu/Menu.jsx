import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Menu = () => {
  const colors = {
    style:"bg-blue-500",
    food:"bg-green-500",
    coding:"bg-purple-500",
    fashion:"bg-red-500",
    culture:"bg-yellow-500",
    travel:"bg-orange-500"
}

  return (
    <div className='flex-[2] hidden lg:block'>
      <div className='text-gray-400 text-sm'>{"What's new"}</div>
      <h1 className="my-6 font-bold text-white text-xl mt-1">Most Popular</h1>
      <div className="mb-16">
        <div className='mb-6'>
          <span className={`block p-2 py-1 text-[12px] w-fit font-medium rounded-lg ${colors.travel} text-white`}>Travel </span>
          <p className="text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet,  consequuntur doloribus neque odio ut nobis eum quidem facere.oloremque facere? Aut sint ab quidem.
            <span className='text-gray-500'> 12.2.2023</span>
          </p>
        </div>
        <div className='mb-6'>
          <span className={`block p-2 py-1 text-[12px] w-fit font-medium rounded-lg ${colors.culture} text-white`}>Culture</span>
          <p className="text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet,  consequuntur doloribus neque odio ut nobis eum quidem facere.oloremque facere? Aut sint ab quidem.
            <span className='text-gray-500'> 12.2.2023</span>
          </p>
        </div>
        <div className='mb-6'>
          <span className={`block p-2 py-1 text-[12px] w-fit font-medium rounded-lg ${colors.coding} text-white`}>Coding</span>
          <p className="text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet,  consequuntur doloribus neque odio ut nobis eum quidem facere.oloremque facere? Aut sint ab quidem.
            <span className='text-gray-500'> 12.2.2023</span>
          </p>
        </div>
        <div className='mb-6'>
          <span className={`block p-2 py-1 text-[12px] w-fit font-medium rounded-lg ${colors.fashion} text-white`}>Fashion</span>
          <p className="text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet,  consequuntur doloribus neque odio ut nobis eum quidem facere.oloremque facere? Aut sint ab quidem.
            <span className='text-gray-500'> 12.2.2023</span>
          </p>
        </div>
      </div>
      <div className='mb-16'>
        <div className='text-gray-400 text-sm'>Discover by Topics</div>
        <h1 className="my-6 font-bold text-white text-xl mt-1">Categories</h1>
        <div className="flex gap-2">
          <Link href="" className='bg-blue-900/30 text-gray-300 rounded-lg p-2 px-4 hover:scale-95 transition'>Style</Link>
          <Link href="" className='bg-red-900/30 text-gray-300 rounded-lg p-2 px-4 hover:scale-95 transition'>Fashion</Link>
          <Link href="" className='bg-green-900/30 text-gray-300 rounded-lg p-2 px-4 hover:scale-95 transition'>Food</Link>
        </div>
        <div className="flex gap-2 mt-2">
          <Link href="" className='bg-purple-900/30 text-gray-300 rounded-lg p-2 px-4 hover:scale-95 transition'>Coding</Link>
          <Link href="" className='bg-orange-900/30 text-gray-300 rounded-lg p-2 px-4 hover:scale-95 transition'>Culture</Link>
          <Link href="" className='bg-yellow-900/30 text-gray-300 rounded-lg p-2 px-4 hover:scale-95 transition'>Travel</Link>
        </div>
      </div>
      <div className=''>
        <div className='text-gray-400 text-sm'>Chossen by the editors</div>
        <h1 className="my-6 font-bold text-white text-xl mt-1">Editors Pick</h1>
        <div className="mb-4 flex gap-4 items-center">
          <div className="overflow-hidden min-w-[55px] h-[55px] rounded-full relative flex gap-3 items-center">
            <Image fill src="/p1.jpeg" alt="" />
          </div>
          <div className="">
              <span className={`block mb-1 p-2 py-1 text-[10px] w-fit font-medium rounded-lg ${colors.travel} text-white`}>Travel</span>
              <p className='text-sm text-white'>Lorem ipsum. Perferendis quis ex voluptas sapiente nemo! Laboriosam, quisquam inventore 
                <span className='text-gray-500'> 12.2.2023</span>
              </p>
            </div>
        </div>
        <div className="mb-4 flex gap-4 items-center">
          <div className="overflow-hidden min-w-[55px] h-[55px] rounded-full relative flex gap-3 items-center">
            <Image fill src="/p1.jpeg" alt="" />
          </div>
          <div className="">
              <span className={`block mb-1 p-2 py-1 text-[10px] w-fit font-medium rounded-lg ${colors.culture} text-white`}>Culture</span>
              <p className='text-sm text-white'>Lorem ipsum. Perferendis quis ex voluptas sapiente nemo! Laboriosam, quisquam inventore 
                <span className='text-gray-500'> 12.2.2023</span>
              </p>
            </div>
        </div>
        <div className="mb-4 flex gap-4 items-center">
          <div className="overflow-hidden min-w-[55px] h-[55px] rounded-full relative flex gap-3 items-center">
            <Image fill src="/p1.jpeg" alt="" />
          </div>
          <div className="">
              <span className={`block mb-1 p-2 py-1 text-[10px] w-fit font-medium rounded-lg ${colors.coding} text-white`}>Coding</span>
              <p className='text-sm text-white'>Lorem ipsum. Perferendis quis ex voluptas sapiente nemo! Laboriosam, quisquam inventore 
                <span className='text-gray-500'> 12.2.2023</span>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}
