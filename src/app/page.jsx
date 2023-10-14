// "use client"
import { Featured } from "@/components/Featured/Featured";
import { CategoryList } from "@/components/Category List/CategoryList";
import { CardList } from "@/components/CardList/CardList";
import { Menu } from "@/components/Menu/Menu";
import { Suspense } from "react";
import { PostsLoading } from "@/components/PostsLoading";
import { CatLoading } from "@/components/CatLoading";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1
  return <div className=' p-[10px] '>
      <Featured />
      <Suspense fallback={<CatLoading />}>
        <CategoryList />
      </Suspense>
      <div className="my-10 flex gap-14">
        <div className="flex-[5]">
          <h1 className="my-6 font-bold text-white text-xl ">Recent Posts</h1>
          <Suspense fallback={<PostsLoading />}>
            <CardList page={page}/>
          </Suspense>
        </div>
        <Menu />
      </div>
  </div>
}
