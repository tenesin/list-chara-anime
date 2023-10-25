import Navbar from "@/app/components/Navbar"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Charanime List',
  description: 'Website untuk wibu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
      <Navbar/>
    
        {children}
      </body>
    </html>
  )
}
