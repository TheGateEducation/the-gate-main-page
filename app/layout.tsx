import './globals.css'
import { Poppins } from 'next/font/google'
import Providers from '@app/provider'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins',
    display: 'swap',
})

export const metadata = {
    title: 'The Gate Education',
    description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 15 países y más de 300 instituciones educacionales.',
    keywords: 'educación internacional, estudiar en el extranjero, programas educacionales, instituciones educacionales, suiza, canada, australia, becas, intercambio, campamento, viajes, anahuac, tec de monterrey, ibero, universidades alemania, universidades australia, universidades italia, nueva zelanda, curso de idiomas',
    openGraph: {
        title: 'Tu Plataforma de Educación Internacional',
        description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 15 países y más de 300 instituciones educacionales.',
        images: 'https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/working.jpg',
        url: 'https://the-gate-main-page.vercel.app',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tu Plataforma de Educación Internacional',
        description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 15 países y más de 300 instituciones educacionales.',
        images: 'https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/working.jpg',
    },
}


export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={poppins.variable}>
            <body className="font-poppins antialiased">
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
