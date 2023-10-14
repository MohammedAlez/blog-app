import React from 'react'

export const CatLoading = () => {
    
    return (
        <div className='flex justify-between animate-pulse'>
            <div className="rounded-lg bg-slate-700 w-[140px] h-[50px] "></div>
            <div className="rounded-lg bg-slate-700 w-[140px] h-[50px] "></div>
            <div className="hidden sm:block rounded-lg bg-slate-700 w-[140px] h-[50px] "></div>
            <div className="hidden md:block rounded-lg bg-slate-700 w-[140px] h-[50px] "></div>
            <div className="hidden lg:block rounded-lg bg-slate-700 w-[140px] h-[50px] "></div>
            <div className="hidden lg:block rounded-lg bg-slate-700 w-[140px] h-[50px] "></div>
        </div>
    )
}
