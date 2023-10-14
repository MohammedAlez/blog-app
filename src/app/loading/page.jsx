
import React from 'react'

export default function Loading (){
    return (
        <div  className="flex gap-3 md:gap-10 my-5 animate-pulse ">
            <div className="bg-slate-700 rounded-lg md:my-0 md:h-[200px] md:min-w-[300px] h-[140px] min-w-[150px] relative">
                
            </div>
            <div className="md:my-2 flex flex-col justify-between gap-2">
                <div className="flex gap-2">
                    <span className="text-[12px] sm:text-sm md:text-sm lg:text-base inline-block text-gray-500 bg-slate-700 w-[50px] h-[13px]  rounded-lg" ></span>
                    <span className="text-[12px] sm:text-sm md:text-sm lg:text-base inline-block text-white bg-slate-700 w-[50px] h-[13px]  rounded-lg"></span>
                    <span className={`text-[12px] sm:text-sm md:text-sm lg:text-base inline-block bg-slate-700 w-[50px] h-[13px]  rounded-lg`}></span>
                </div>
                <h1 className="font-bold md:text-[20px] text-[13px] ms:text-sm text-white bg-slate-700 w-[100%] h-[13px] rounded-lg"></h1>
                <div className="hiddenn text-[12px] md:text-base sm:block text-gray-400 bg-slate-700 w-[150px] h-[13px] rounded-lg" ></div>
                <div className="hiddenn text-[12px] md:text-base sm:block text-gray-400 bg-slate-700 w-[200px] h-[13px] rounded-lg" ></div>
                <div className="hiddenn text-[12px] md:text-base sm:block text-gray-400 bg-slate-700 w-[120px] h-[13px] rounded-lg" ></div>
                <span className="bg-slate-700 w-[50px] h-[13px] rounded-lg"></span>
            </div>
        </div>
    )
}


