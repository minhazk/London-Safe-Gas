import { Footer } from '@/layout/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'London Safe Gas',
    description: 'London plumbing and heating service',
    icons: {
        icon: ['/favicon.ico?v=4'],
        apple: ['./apple-touch-icon.png?v=4'],
        shortcut: ['./apple-touch-icon.png'],
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <main className='flex-grow'>{children}</main>
                <Footer />
                <Script src='https://www.googletagmanager.com/gtag/js?id=AW-16457216240' />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16457216240');
    `}
                </Script>
            </body>
        </html>
    )
}
