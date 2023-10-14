import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PostCard = ({keyy, item}) => {
    const colors = {
        style:"text-blue-500",
        food:"text-green-500",
        coding:"text-purple-500",
        fashion:"text-red-500",
        culture:"text-yellow-500",
        travel:"text-orange-500"
    }
    // console.log(item);
    const apiUrl = process.env.API_URL
    return (
        <div key={keyy} className="flex gap-3 md:gap-10 my-5">
            <div className=" md:my-0 md:h-[250px] md:min-w-[300px] h-[140px] min-w-[150px] relative">
                {item.img && <Image src={item.img} alt="" fill/>}
            </div>
            <div className="md:my-2 flex flex-col justify-between gap-2">
                <div className="">
                    <span className="text-[12px] sm:text-sm md:text-sm lg:text-base inline text-gray-500">{item.createdAt.substring(0,10)}</span>
                    <span className="text-[12px] sm:text-sm md:text-sm lg:text-base inline text-white"> - </span>
                    <span className={`text-[12px] sm:text-sm md:text-sm lg:text-base inline ${colors[item.catSlug]}`}>{item.catSlug}</span>
                </div>
                <h1 className="font-bold md:text-[20px] text-[13px] ms:text-sm text-white">{item.title}</h1>
                <div className="hiddenn text-[12px] md:text-base sm:block text-gray-400" dangerouslySetInnerHTML={{__html:item.desc.substring(0,30)}}/>
                <Link href={`${apiUrl}/posts/${item.slug}`} className="text-sm md:text-base hover:text-white transition block w-fit text-gray-300">Read more</Link>
            </div>
        </div>
    )
}
