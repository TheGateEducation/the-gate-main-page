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
            <div>
                <Navbar />
            </div>
            <main>
                {children}
                <footer>
                    <Carousel />
                    <Footer />
                </footer>
            </main>
        </>
    )
}