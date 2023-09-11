import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'

import Script from 'next/script';

// import './globals.css'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ImgFix',
  description: 'AI Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <link href="/assets/libs/swiper/swiper-bundle.min.css" rel="stylesheet" type="text/css" />
        <link href="/assets/libs/aos/aos.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/style.min.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css"  />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
          <button data-toggle="back-to-top" className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center">
            <i className="fa-solid fa-arrow-up text-base"></i>
          </button>
          <Script src="/assets/libs/@frostui/tailwindcss/frostui.js" />
          <Script src="/assets/libs/swiper/swiper-bundle.min.js"/>
          <Script src="/assets/libs/aos/aos.js" />
          <Script src="/assets/js/theme.min.js" />
        </body>
      </html>
    </ClerkProvider>
  )
}
