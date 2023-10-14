"use client"
import Image from 'next/image'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';



export const CatSlider = ({categories}) => {
  
  const colors = {
    style:"bg-blue-900/30",
    food:"bg-green-900/30",
    coding:"bg-purple-900/30",
    fashion:"bg-red-900/30",
    culture:"bg-yellow-900/30",
    travel:"bg-orange-900/30"
  }
  return (
    <div className='my-12'>
      <h1 className="my-6 font-bold text-white text-xl">Popular Categories</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1096: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {categories?.map((item)=>(
          <SwiperSlide key={item.id} >
            <Link href={`/blog?cat=${item.slug}`} className={`hover:scale-95 transition mx-auto py-3 rounded-lg ${colors[item.slug]} w-[140px] items-center justify-center flex gap-2 `}>
              <div className='h-[30px] min-w-[30px] max-w-[30px] rounded-full overflow-hidden relative'>
              <Image className='' src={item.img} alt="" fill />
              </div>
              <span className='inline-block text-gray-300'>{item.title}</span>
            </Link>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Link href="/" className="hover:scale-95 transition mx-auto py-3 rounded-lg bg-red-900/30 w-[140px] items-center justify-center flex gap-2 ">
            <div className='h-[30px] min-w-[30px] max-w-[30px] rounded-full overflow-hidden relative'>
            <Image className='' src="/fashion.png" alt="" fill />
            </div>
            <span className='inline-block text-gray-300'>Fashion</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="hover:scale-95 transition mx-auto py-3 rounded-lg bg-green-900/30 w-[140px] items-center justify-center flex gap-2 ">
            <div className='h-[30px] min-w-[30px] max-w-[30px] rounded-full overflow-hidden relative'>
            <Image className='' src="/food.png" alt="" fill />
            </div>
            <span className='inline-block text-gray-300'>Food</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="hover:scale-95 transition mx-auto py-3 rounded-lg bg-orange-900/30 w-[140px] items-center justify-center flex gap-2 ">
            <div className='h-[30px] min-w-[30px] max-w-[30px] rounded-full overflow-hidden relative'>
            <Image className='' src="/travel.png" alt="" fill />
            </div>
            <span className='inline-block text-gray-300'>Travel</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="hover:scale-95 transition mx-auto py-3 rounded-lg bg-yellow-900/30 w-[140px] items-center justify-center flex gap-2 ">
            <div className='h-[30px] min-w-[30px] max-w-[30px] rounded-full overflow-hidden relative'>
            <Image className='' src="/culture.png" alt="" fill />
            </div>
            <span className='inline-block text-gray-300'>Culture</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="hover:scale-95 transition mx-auto py-3 rounded-lg bg-purple-900/30 w-[140px] items-center justify-center flex gap-2 ">
            <div className='h-[30px] min-w-[30px] max-w-[30px] rounded-full overflow-hidden relative'>
            <Image className='' src="/coding.png" alt="" fill />
            </div>
            <span className='inline-block text-gray-300'>Coding</span>
          </Link>
        </SwiperSlide> */}
      </Swiper>
      
    </div>
  )
}
