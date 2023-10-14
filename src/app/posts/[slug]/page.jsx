import { Comments } from '@/components/Comments/Comments';
import { Menu } from '@/components/Menu/Menu'
import Image from 'next/image'
import React from 'react'


const getData=async(slug)=>{
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/posts/${slug}`,{
      cache:"no-store"
  });
  if(!res.ok)
      throw new Error("failed")
  
  return res.json();
}
export default async function page ({params}){
  const {slug} = params
  const data = await getData(slug);
  // console.log(data);
  return (
    <div className='text-white'>
      <div className="flex flex-col w-full lg:flex-row my-6 gap-10">
        <div className="flex-1 flex-col flex justify-between">
          <div className='sm:text-2xl md:text-4xl font-bold '>{data.post.title}</div>
          <div className="lg:flex items-center gap-3 hidden ">
            <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden ">
              {data.post.user.image && <Image src={data.post.user.image} alt="" fill />}
            </div>
            <div className="">
              <span className="block font-bold text-sm text-white">{data.post.user.name}</span>
              <span className="block text-[12px] text-gray-300">{data.post.createdAt.substring(0,10)}</span>
            </div>
          </div>
        </div>
        <div className="lg:flex-1">
          {data.post.img ? <div className=" relative sm:h-[400px] h-[300px] md:h-[300px] w-full md:min-w-[500px] md:max-w-[600px  mx-auto">
            {data.post.img && <Image src={data.post.img} alt="" fill className='object-contain x-6 rounded-lg' />}
          </div>
          :null}
        </div>
        <div className="lg:hidden flex items-center gap-3 ">
            <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden ">
              {data.post.user.image && <Image src={data.post.user.image} alt="" fill />} 
            </div>
            <div className="">
              <span className="block font-bold text-sm text-white">{data.post.user.name}</span>
              <span className="block text-[12px] text-gray-300">{data.post.createdAt.substring(0,10)}</span>
            </div>
          </div>
      </div>
      <div className="flex my-16 gap-10">
        <div className="flex-[5]">
          <div className="" dangerouslySetInnerHTML={{__html:data.post?.desc}}/>
          <Comments postSlug={slug}/>
        </div>
        <Menu />
      </div>
    </div>
  )
}

// export default async function page ({params}){
//   return <>post page </>
// }
