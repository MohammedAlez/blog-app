'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'; 
import 'react-quill/dist/quill.bubble.css';
// import ReactQuill from 'react-quill'; //dont' import like this way it won't work 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import { SpinnerCircular, SpinnerCircularFixed } from 'spinners-react';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

const storage = getStorage(app);


export default function Page (){
    // const ReactQuill = dynamic(()=>import('react-quill'),{ssr:false}) // to avoid build problem becasue all components are server side rendering in next js although we wrote 'use client'
    // const ReactQuill = dynamic(() => import('react-quill'), {
    //   ssr: false, // Disable server-side rendering for this component
    // }); //this ways also don't work, it make the page rerendered every time you write

    
    const [ReactQuill, setReactQuill] = useState(null);
    const [open,setOpen] = useState(false);
    const [file,setFile] = useState(null);
    const [text,setText] = useState("");
    const [media,setMedia] = useState("");
    const [title,setTitle] = useState("");
    const [catSlug,setCatSlug] = useState("style");
    const {status} = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fileUrl,setFileUrl] = useState(null);
    useEffect(() => {
        import('react-quill').then(module => {
            setReactQuill(() => module.default);
        });
    },[]);
    const setImage=(e)=>{
        setFile(e.target.files[0])
        const url =  URL.createObjectURL(e.target.files[0])
        setFileUrl(url)
    }
    useEffect(()=>{
        const upload=()=>{
            const name = new Date().getTime() + file?.name
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    // console.log('Upload is paused');
                    break;
                case 'running':
                    // console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {}, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setMedia(downloadURL)
                });
            }
            );
        }

        file && upload()
    },[file])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // upload()
        const slugify = (str) =>
            str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
            try{
                setLoading(true)
                const res = await fetch(`/api/posts/`,{
                    method:"POST",
                    body:JSON.stringify({
                        desc:text,
                        title,
                        img:media,
                        slug:slugify(title),
                        catSlug
                    })
                })
                router.push(`/posts/${slugify(title)}`);
                setLoading(false);
                toast.success('Your post has been posted', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                
            }catch{
                setLoading(false)
                toast.error('oops something went wrong!!', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        
    }
    // console.log('rendering')
    if(status==="loading")
        return <div className='flex justify-center  min-h-[90vh] md:min-h-[100vh]'>
            <SpinnerCircular className='h-fit mt-[150px] md:mt-[200px]' size={40} thickness={120} speed={100} color="rgba(57, 126, 172, 0.89)" secondaryColor="rgba(209, 209, 209, 0.27)" />
        </div>
    else if(status==='unauthenticated')
        router.push("/login");
    else if(status==='authenticated')
        return (
            <div className='min-h-[100vh] py-10 sm:pl-32 flex flex-col gap-6'>
                <ToastContainer />
                <input onChange={(e)=>setTitle(e.target.value)} className='text-white text-2xl bg-transparent outline-none' type="text" placeholder='Title'/>
                <div className=''>
                    <span className='text-gray-200 mr-6'>Choose a category</span>
                    <select id="cat" className='font-medium  outline-none p-2 px-3 rounded-md cursor-pointer bg-gray-300' onChange={(e) => setCatSlug(e.target.value)}>
                        <option className='p-2' value="style">style</option>
                        <option className='p-2' value="fashion">fashion</option>
                        <option className='p-2' value="food">food</option>
                        <option className='p-2' value="culture">culture</option>
                        <option className='p-2' value="travel">travel</option>
                        <option className='p-2' value="coding">coding</option>
                    </select>
                </div>
                {fileUrl && <Image className='' width={300} height={300} alt='' src={fileUrl} />}
                <div className="relative">
                    <button className='bg-transparent rounded-full border border-gray-600 flex w-[36px] h-[36px] justify-center items-center' onClick={()=>setOpen(!open)}>
                        <Image src='/plus.png' alt='' width={16} height={16} />
                    </button>
                    <div style={{left:open?'80px':'60px',opacity:open?"1":"0",transition:".3s"}} className="flex gap-4 absolute top-0">
                        <button className='hover:scale-95 transition bg-transparent rounded-full border border-gray-600 flex w-[36px] h-[36px] justify-center items-center'>
                            <label >
                                <input type="file" name="" className='hidden' onChange={setImage}/>
                                <Image src='/image.png' alt='' width={16} height={16} />
                            </label>
                        </button>
                        <button className='hover:scale-95 transition bg-transparent rounded-full border border-gray-600 flex w-[36px] h-[36px] justify-center items-center'>
                            <Image src='/external.png' alt='' width={16} height={16} />
                        </button>
                        <button className='hover:scale-95 transition bg-transparent rounded-full border border-gray-600 flex w-[36px] h-[36px] justify-center items-center'>
                            <Image src='/video.png' alt='' width={16} height={16} />
                        </button>
                    </div>
                </div>
                {ReactQuill ?<ReactQuill theme='bubble'  onChange={setText} placeholder="Write Some Thing..." className='text-3xl text-white'/> : null }
                <button onClick={handleSubmit} className='text-white hover:scale-95 transition min-w-[81px] min-h-[40px]  bg-green-600  p-2 px-3 rounded-lg font-bold w-fit '>
                    {loading ? 
                    <SpinnerCircularFixed className='mx-auto' size={20} thickness={150} speed={100} color="rgba(57, 172, 148, 0.77)" secondaryColor="rgba(209, 209, 209, 0.79)" /> 
                    : 'Publish'} 
                </button>
            </div>
        )
    else return <div className='flex justify-center  min-h-[90vh] md:min-h-[100vh]'>
        <SpinnerCircular className='h-fit mt-[150px] md:mt-[200px]' size={40} thickness={120} speed={100} color="rgba(57, 126, 172, 0.89)" secondaryColor="rgba(209, 209, 209, 0.27)" />
    </div>
}