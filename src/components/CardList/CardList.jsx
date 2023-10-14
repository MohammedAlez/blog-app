import React from 'react'
import { Pagination } from '../Pagination/Pagination'
import { PostCard } from '../Post Card/PostCard'

const getData=async(page, cat)=>{
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/posts?page=${page}&cat=${cat || ""}`,{
      cache:"no-store"
  });
  if(!res.ok)
      throw new Error("failed")
  
  return res.json();
}
export const CardList =async({page, cat}) => {
  const data = await getData(page, cat);
  const POST_PER_PAGE = 4;
  const hasPrev = page > 1 ;
  const hasNext = Math.ceil(parseInt(data.count)/POST_PER_PAGE) > page ;
  return (
    <div className='flex-[5]'>
        
        {data.posts?.length!==0 ? data.posts?.map(item=>(
          <PostCard  keyy={item.id} key={item.id} item={item}/>
        ))
        : <div className='p-4 min-h-[500px] text-gray-300 text-lg'>
          There is no posts to show 
        </div> 
        }
        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} cat={cat}/>
    </div>
  )
}
