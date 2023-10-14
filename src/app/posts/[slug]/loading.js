import { Menu } from '@/components/Menu/Menu'
import React from 'react'

export default function Loading (){
    return (
        <div className='text-white animate-pulse'>
        <div className="flex flex-col w-full lg:flex-row my-6 gap-10">
            <div className="flex-1 flex-col flex justify-between">
                <div>
                    <div className='sm:text-2xl mb-2 md:text-4xl font-bold rounded-lg  w-full h-[20px] bg-slate-700'></div>
                    <div className='sm:text-2xl mb-2 md:text-4xl font-bold rounded-lg sm:w-[250px] w-[150px] h-[20px] bg-slate-700'></div>
                    <div className='sm:text-2xl mb-2 md:text-4xl font-bold rounded-lg sm:w-[500px] w-[250px] h-[20px] bg-slate-700'></div>
                    <div className='sm:text-2xl mb-2 md:text-4xl font-bold rounded-lg sm:w-[250px] w-[150px] h-[20px] bg-slate-700'></div>
                </div> 
                <div className="lg:flex items-center gap-3 hidden ">
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-slate-700">
                    {/* image */}
                    </div>
                    <div className="">
                    <span className="block font-bold text-sm text-white w-[100px] bg-slate-700 h-[15px] rounded-lg mb-2"></span>
                    <span className="block text-[12px] text-gray-300 w-[70px] bg-slate-700 h-[15px] rounded-lg"></span>
                    </div>
                </div>
            </div>
            <div className="lg:flex-1">
            <div className=" relative sm:h-[400px] h-[300px] md:h-[300px] bg-slate-700 rounded-lg w-full md:min-w-[500px] md:max-w-[600px  mx-auto">
                {/* image */}
            </div>
            </div>
            <div className="lg:hidden flex items-center gap-3 ">
            <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-slate-700">
                {/* image */}
                </div>
                <div className="">
                <span className="block font-bold text-sm text-white w-[100px] bg-slate-700 h-[15px] rounded-lg mb-2"></span>
                <span className="block text-[12px] text-gray-300 w-[70px] bg-slate-700 h-[15px] rounded-lg"></span>
                </div>
            </div>
        </div>
        <div className="flex my-16 gap-10">
            <div className="flex-[5]">
            <div className=''>
                <div className="w-full bg-slate-700 mb-2 rounded-lg h-[15px]"></div>
                <div className="w-[70%] bg-slate-700 mb-2 rounded-lg h-[15px]"></div>
                <div className="w-[80%] bg-slate-700 mb-2 rounded-lg h-[15px]"></div>
                <div className="w-[100px] bg-slate-700 mb-2 rounded-lg h-[15px]"></div>
                <div className="w-[100px] bg-slate-700 mb-2 rounded-lg h-[15px]"></div>
                <div className="w-[100px] bg-slate-700 mb-2 rounded-lg h-[15px]"></div>
            </div>
            <div className="mt-10">
                    <h1 className="my-6 font-bold text-white text-xl ">Comments</h1>
                    <div  className="flex  gap-3 mb-6 ">
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
                    </div>
                    <div  className="flex  gap-3 mb-6 ">
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
                    </div>
                    <div  className="flex  gap-3 mb-6 ">
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
                    </div>
            </div>
            </div>
            <Menu />
        </div>
        </div>
    )
}


