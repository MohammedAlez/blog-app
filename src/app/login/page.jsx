"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function Page(){
    const {data, status} = useSession();
    // console.log(status);
    const router = useRouter();
    if(status==="loading")
        return <div className="font-bold text-white text-3xl ">Loading...</div>
    else if(status==='authenticated')
        router.push("/");
    else if(status==='unauthenticated'){
        return (
        <div className='mx-auto my-32 p-10 max-w-[400px] flex flex-col justify-between gap-6 bg-gray-800 rounded-lg'>
            <div className="rounded-lg p-3  px-4 mx-auto text-white min-w-[200px] hover:scale-95 text-center bg-[#1d54f755] transition cursor-pointer max-w-[300px]">Sign in with Facebook</div>
            <div onClick={()=>signIn("google")} className="rounded-lg p-3  px-4 mx-auto text-white min-w-[200px] hover:scale-95 text-center bg-[#ff555f] transition cursor-pointer max-w-[300px]">Sign in with Google</div>
            <div className="rounded-lg p-3  px-4 mx-auto text-white min-w-[200px] hover:scale-95 text-center bg-[#636383] transition cursor-pointer max-w-[300px]">Sign in with Github</div>
        </div>
    )
    }
    else 
        return null
}
