"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const Pagination = ({page, hasPrev, hasNext, cat}) => {
  const router = useRouter();
  return (
    <div className='flex justify-between mt-10'>
      <button disabled={!hasPrev} onClick={()=>router.push(`${cat ? '?cat='+cat+'&' : '?'}page=${page-1}`)} className="disabled:bg-gray-500  p-2 px-3 rounded-xl hover:bg-red-700 transition bg-red-600 text-white">Previous</button>
      <button disabled={!hasNext} onClick={()=>router.push(`${cat ? '?cat='+cat+'&' : '?'}page=${page+1}`)} className="disabled:bg-gray-500  p-2 px-3 rounded-xl hover:bg-red-700 transition bg-red-600 text-white">Next</button>
    </div>
  )
}
