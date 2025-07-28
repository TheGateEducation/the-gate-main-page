import React from 'react'
import Navbar from '@src/components/Navbar/Navbar'
import { Footer } from '@src/components/Footer/Footer'
import { Carousel } from '@src/components/Footer/Carousel';

export const metadata = {
  title: 'The Gate Education',
  icons: { icon: '/icon.ico' },
};

export default function template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-50 bg-transparent">
                <Navbar />
            </div>
            <main className="pt-[125px]">
                {children}
                <footer>
                    <Carousel />
                    <Footer />
                </footer>
            </main>
        </>
    )
}