import React from 'react'
import { CatSlider } from '../Category Slider/CatSlider';

const getData=async()=>{
    const apiUrl = process.env.API_URL
    const res = await fetch(`${apiUrl}/api/categories`,{
        cache:"no-store"
    });
    if(!res.ok)
        throw new Error("failed")
    
    return res.json();
}
export const CategoryList =async() => {
    const data = await getData();
    // console.log(data);
    return (
        <CatSlider categories={data.categories} />
    )
}

// export const CategoryList =async() => {
//     return <>hello world category list</>
// }
