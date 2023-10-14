"use client" 
import {SessionProvider} from 'next-auth/react'
import {  ToastContainer } from 'react-toastify';


const AuthProvider=({children})=>{
    return <SessionProvider>
        <ToastContainer />
        {children}
    </SessionProvider>
}

export default AuthProvider