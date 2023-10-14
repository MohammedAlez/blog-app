"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react'

export const AuthLinks = () => {
  const {status} = useSession();
  const [open, setOpen] = useState(false);
  return (
    <div className='flex gap-3'>
        {status==="unauthenticated" ? <Link href="/login" className='hiddenmd:block text-white rounded-xl p-2 hover:bg-green-700 transition bg-green-800 text-sm font-bold'>Login</Link>
        : status==="authenticated" ? <div className="flex gap-3  items-center">
            <Link href="/write" className='text-[#ddd]'>Write</Link>
            <button onClick={()=>signOut()} className='text-white min-w-[75px] rounded-xl p-2 hover:bg-red-700 transition bg-red-600 text-sm font-bold'>Sign Out</button>
          </div>
        : <></>}
        {/* menu button */}
        <div onClick={()=>setOpen(true)} className="md:hidden cursor-pointer rounded-full transition justify-center hover:bg-gray-200 p-2 w-[38px] h-[38px] flex flex-col items-center gap-[3px]">
          <span className="h-[4px] w-full rounded-sm inline-block bg-gray-700"></span>
          <span className="h-[4px] w-full rounded-sm inline-block bg-gray-700"></span>
          <span className="h-[4px] w-full rounded-sm inline-block bg-gray-700"></span>
        </div>
        {/* the menu */}
        <div
          style={{top:open?"0":"-1000px",transition:'.2s',opacity:open? "1" : "0"}}
          className="md:hidden z-[99999] fixed w-full h-[100vh] top-0 left-0 bg-[#0f172a] flex flex-col pt-[80px] items-center gap-[20px]">
          <button onClick={()=>setOpen(false)} className="absolute h-[37px] w-[37px] rounded-full flex justify-center items-center  top-[15px] right-[15px] p-2 text-gray-400 font-bold text-lg hover:bg-gray-300">X</button>
          <Link onClick={()=>setOpen(false)} className='hover:scale-95 transition text-white font-bold text-2xl' href="/">Homepage</Link>
          <Link onClick={()=>setOpen(false)} className='hover:scale-95 transition text-white font-bold text-2xl' href="/">Contact</Link>
          <Link onClick={()=>setOpen(false)} className='hover:scale-95 transition text-white font-bold text-2xl' href="/">About</Link>
          <Link onClick={()=>setOpen(false)} className='hover:scale-95 transition text-white font-bold text-2xl' href="/write">Write</Link>
        </div>
    </div>
  )
}
