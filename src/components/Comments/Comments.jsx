'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { SpinnerCircularFixed } from 'spinners-react';

const fetcher = async(url)=>{
    const res = await fetch(url);
    const data = await res.json();
    if(!res.ok)
        return new Error(res.message);
    return data
}
export const Comments = ({postSlug}) => {
    const [loadingComment,setLoadingComment] = useState(false);
    const {status } = useSession()
    const apiUrl = process.env.API_URL
    const {data,mutate,  isLoading} = useSWR(`/api/comments?postSlug=${postSlug}`,fetcher)
    const [desc, setDesc] = useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // console.log("creating")
        try{
            setLoadingComment(true);
            await fetch(`/api/comments`,{
                method:"POST",
                body:JSON.stringify({desc,postSlug})
            })
            setDesc("");
            setLoadingComment(false);
            mutate();
        }catch{
            setLoadingComment(false);
        }
    }
    const arr = [1,2,3]
    return (
        <div className="mt-10">
                <h1 className="my-6 font-bold text-white text-xl ">Comments</h1>
                {status === 'authenticated' ?  
                    <form action="" className=''>
                        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} name="" id="" className="text-black p-2 w-full outline-none rounded-lg resize-none mb-2" />
                        <div className='text-end'>
                            <button onClick={handleSubmit} className='hover:scale-95 transition min-w-[99px] min-h-[40px] bg-green-600 inline-block text-right rounded-lg py-2 p-3 font-bold text-white hover:bg-green-700 '>
                                {loadingComment ? 
                                <SpinnerCircularFixed className='mx-auto' size={20} thickness={150} speed={100} color="rgba(57, 172, 148, 0.77)" secondaryColor="rgba(209, 209, 209, 0.79)" /> 
                                : 'comment'} 
                            </button>
                        </div>
                    </form>
                    :<div className=''>Login first to write comments</div>}
                <div className="mt-6">{
                    isLoading ? <div className="animate-pulse">
                        {arr.map(item=><div key={item} className="flex  gap-3 mb-6 ">
                        <div className="relative min-w-[40px] bg-slate-700 h-[40px] rounded-full overflow-hidden ">
                            {/* image */}
                        </div>
                        <div className="flex-1">
                            <span className="block font-bold text-sm text-white mb-2 bg-slate-700 w-[100px] h-[13px] rounded-lg"></span>
                            <span className="block text-[12px] text-gray-300 bg-slate-700 w-[50px] h-[13px] rounded-lg"></span>
                            <div className="border-b border-b-gray-700 pb-2">
                                <p className="mt-2 text-gray-300  pb-4 w-full h-[13px] rounded-lg bg-slate-700"></p>
                                <p className="mt-2 text-gray-300  pb-4 w-[50%] h-[13px] rounded-lg bg-slate-700"></p>
                                <p className="mt-2 text-gray-300  pb-4 w-[70%] h-[13px] rounded-lg bg-slate-700"></p>
                            </div>
                        </div>
                        </div>)}
                    </div>
                    : (data && data.comments.length!==0 ? data.comments.map(item=>(
                    <div key={item.id} className="flex  gap-3 mb-6 ">
                        <div className="relative min-w-[40px] h-[40px] rounded-full overflow-hidden ">
                            <Image src={item.user.image} alt="" fill />
                        </div>
                        <div className="flex-1">
                            <span className="block font-bold text-sm text-white mb-1">{item?.user?.name}</span>
                            <span className="block text-[12px] text-gray-300">{item?.createdAt?.substring(0,10)}</span>
                            <p className="mt-3 text-gray-300 border-b border-b-gray-700 pb-4">{item?.desc}</p>
                        </div>
                    </div>))
                    : <div className='text-white '>No comments yet</div>)    
            }</div>
            </div>
    )
}
