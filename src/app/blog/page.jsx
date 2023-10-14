import { CardList } from '@/components/CardList/CardList'
import { Menu } from '@/components/Menu/Menu'
import { PostsLoading } from '@/components/PostsLoading';
import React, { Suspense } from 'react'

export default function page({searchParams}){
    const page = parseInt(searchParams.page) || 1
    const {cat} = searchParams ; 
    const colors = {
        style:"bg-blue-500/30",
        food:"bg-green-500/30",
        coding:"bg-purple-500/30",
        fashion:"bg-red-500/30",
        culture:"bg-yellow-500/30",
        travel:"bg-orange-500/30"
    }
    return (<>
        <h1 className={`${colors[cat]} text-center text-white text-xl my-6  font-bold py-2`}>{cat}&apos;s posts</h1>
        <div className="my-10 flex gap-14 justify-end">
            <div className="flex-[5]">
            <div className="flex-[5]">
                <h1 className="my-6 font-bold text-white text-xl ">Recent Posts</h1>
                <Suspense fallback={<PostsLoading />}>
                    <CardList page={page} cat={cat}/>
                </Suspense>
            </div>
            </div>
            <Menu />
        </div>
    </>)
}
