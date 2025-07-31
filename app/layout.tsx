import './globals.css'
import Providers from '@app/provider'

export const metadata = {
    title: 'The Gate Education',
    description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales.',
    keywords: 'educación internacional, estudiar en el extranjero, programas educacionales, instituciones educacionales, suiza, canada, australia, becas, intercambio, campamento, viajes, anahuac, tec de monterrey, ibero, universidades alemania, universidades australia, universidades italia, nueva zelanda, curso de idiomas',
    openGraph: {
        title: 'Tu Plataforma de Educación Internacional',
        description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales.',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLArqt49pngG4Dpo29bskouB_YD8MSJ2krwGKhE6CwctyyTFEWp1BQk59TLOVBg3HegY&usqp=CAU',
        url: 'URL_DE_TU_SITIO_WEB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tu Plataforma de Educación Internacional',
        description: 'Haz realidad tu sueño de educación internacional con nosotros. Ofrecemos programas en más de 10 países y más de 100 instituciones educacionales.',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLArqt49pngG4Dpo29bskouB_YD8MSJ2krwGKhE6CwctyyTFEWp1BQk59TLOVBg3HegY&usqp=CAU',
    },
}


export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
