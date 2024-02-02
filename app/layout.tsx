import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export const metadata: Metadata = {
  title: 'Gasal',
  description: 'Home Page of my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont w-full bg-light dark:bg-dark min-h-screen`}>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
