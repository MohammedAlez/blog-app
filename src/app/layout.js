import { Footer } from '@/components/Footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar/NavBar'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html className='' lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='bg-[#0f172a]'>
            <div className="max-w-[1300px] px-[10px] mx-auto ">
              <NavBar />
                <div className=''>
                {children}
                </div>
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
