import { Inter } from "next/font/google";
import ProgramGrid from '@src/components/cale/ProgramGrid';
import Hero from '@src/components/Hero/Hero';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Programas - The Gate Education",
    description: "Conoce la oferta que tenemos para ti en educación internacional. ",
    keywords: "campamentos, certificados y diplomas, cursos de idiomas, intercambios, maestrias, tours de estudio,  secundaria, educación y formación profesional",
};

const mockPrograms = [
    {
      "id": 1,
      "area": "Campamentos",
      "name": "AI Camp",
      "specialization": "AI",
      "country": "USA",
      "institution": "Harvard",
      "location": "Boston",
      "startDates": "January 2024",
      "duration": "1 year",
      "costPerYearUSD": "$20,000.00",
      "costPerYearCurrency": "€18,000.00",
      "currency": "USD",
      "scholarships": "YES",
      "link": "https://www.harvard.edu/",
      "notes": "A focused camp on AI, machine learning, and deep learning, with cutting-edge research exposure.",
      "images": {
        "area" : "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/campamento.jpg",
        "country": "https://aunclicdelaaventura.com/wp-content/uploads/2021/01/Ciudades-a-visitar-en-Estados-Unidos.jpg",
        "institution": "https://www.harvard.edu/wp-content/uploads/2021/02/091520_Stock_KS_025.jpeg?resize=1200,630",
        
      }
    },
    {
      "id": 2,
      "area": "Certificados y Diplomas",
      "specialization": "Robotics",
      "name": "Diploma in Robotics Engineering",
      "country": "Germany",
      "institution": "University of Stuttgart",
      "location": "Stuttgart",
      "startDates": "March 2024",
      "duration": "2 years part-time",
      "costPerYearUSD": "$12,000.00",
      "costPerYearCurrency": "€10,800.00",
      "currency": "EUR",
      "scholarships": "NO",
      "link": "https://www.uni-stuttgart.de/en/",
      "notes": "This diploma provides hands-on experience in robotics engineering, including automation and AI systems.",
      "images": {
        "area": "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/certificates.jpg",
        "country": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
        "institution": "https://www.studying-in-germany.org/wp-content/uploads/2020/01/stuttgart.jpg",
        
      }
    },
    {
      "id": 3,
      "area": "Cursos de Idiomas",
      "name": "French Language Intensive Course",
      "specialization": "Linguistics",
      "country": "France",
      "institution": "Sorbonne University",
      "location": "Paris",
      "startDates": "May 2024",
      "duration": "6 months",
      "costPerYearUSD": "$8,000.00",
      "costPerYearCurrency": "€7,200.00",
      "currency": "EUR",
      "scholarships": "YES",
      "link": "https://www.sorbonne-universite.fr/en",
      "notes": "Intensive language courses focusing on French and its cultural context.",
      "images": {
        "area": "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/idiomas.jpg",
        "country": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        "institution": "https://www.sorbonne-universite.fr/sites/default/files/styles/992xauto/public/media/2019-12/0-universite.jpg?itok=9sRsL3t2"
      }
    },
    {
      "id": 4,
      "area": "Intercambios",
      "name": "Global Economics Exchange",
      "specialization": "Economics",
      "country": "Japan",
      "institution": "University of Tokyo",
      "location": "Tokyo",
      "startDates": "April 2024",
      "duration": "1 semester",
      "costPerYearUSD": "$15,000.00",
      "costPerYearCurrency": "¥1,650,000.00",
      "currency": "JPY",
      "scholarships": "YES",
      "link": "https://www.u-tokyo.ac.jp/en/",
      "notes": "Exchange program with a focus on global economic policies and Asian markets.",
      "images": {
        "area": "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/intecambio.jpg",
        "country": "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
        "institution": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Yasuda_Auditorium_-_Tokyo_University_3.jpg/1200px-Yasuda_Auditorium_-_Tokyo_University_3.jpg"
      }
    },
    {
      "id": 5,
      "area": "Maestrias",
      "name": "MSc in Quantum Physics",
      "specialization": "Physics",
      "country": "Switzerland",
      "institution": "ETH Zurich",
      "location": "Zurich",
      "startDates": "September 2024",
      "duration": "2 years full time",
      "costPerYearUSD": "$25,000.00",
      "costPerYearCurrency": "CHF23,000.00",
      "currency": "CHF",
      "scholarships": "YES",
      "link": "https://ethz.ch/en.html",
      "notes": "The program focuses on cutting-edge research in quantum mechanics and particle physics.",
      "images": {
        "area": "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/maestria.jpg",
        "country": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
        "institution": "https://ethz.ch/en/campus/access/zentrum/_jcr_content/pageimages/imageCarousel.imageformat.lightbox.1409829054.jpg"
      }
    },
    {
      "id": 6,
      "area": "Tours de Estudio",
      "name": "Renaissance Art Tour",
      "specialization": "Art History",
      "country": "Italy",
      "institution": "University of Florence",
      "location": "Florence",
      "startDates": "June 2024",
      "duration": "2 weeks",
      "costPerYearUSD": "$5,000.00",
      "costPerYearCurrency": "€4,500.00",
      "currency": "EUR",
      "scholarships": "NO",
      "link": "https://www.unifi.it/changelang-eng.html",
      "notes": "A deep dive into Renaissance art, architecture, and history.",
      "images": {
        "area":  "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/male.jpg",
        "country": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
        "institution": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUilLsY6_HS7jJdET1WHOWuESs4umckJSTQ&s"
      }
    },
    
    {
      "id": 8,
      "area": "Secundaria",
      "name": "BSc in Biology",
      "specialization": "Biology",
      "country": "Canada",
      "institution": "University of British Columbia",
      "location": "Vancouver",
      "startDates": "September 2024",
      "duration": "3 years",
      "costPerYearUSD": "$18,000.00",
      "costPerYearCurrency": "CAD24,000.00",
      "currency": "CAD",
      "scholarships": "NO",
      "link": "https://www.ubc.ca/",
      "notes": "Focused on biology, genetics, and ecosystem research.",
      "images": {
        "area": "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/secundaria.jpg",
        "country": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
        "institution": "https://upload.wikimedia.org/wikipedia/en/5/5a/University_of_British_Columbia_seal.svg"
      }
    },
    {
      "id": 9,
      "area": "Licenciaturas",
      "name": "BSc in Engineering",
      "specialization": "Engineering",
      "country": "South Korea",
      "institution": "KAIST",
      "location": "Daejeon",
      "startDates": "March 2024",
      "duration": "4 years",
      "costPerYearUSD": "$10,000.00",
      "costPerYearCurrency": "₩11,200,000.00",
      "currency": "KRW",
      "scholarships": "YES",
      "link": "https://www.kaist.ac.kr/en/",
      "notes": "In-depth engineering courses with a focus on innovation and design.",
      "images": {
        "area": "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/profesional.jpg",
        "country": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
        "institution": "https://upload.wikimedia.org/wikipedia/en/8/80/KAIST_logo.png"
      }
    },
    {
      "id": 10,
      "area": "Campamentos",
      "name": "Finance Camp 2!",
      "specialization": "Finance",
      "country": "UK",
      "institution": "London School of Economics",
      "location": "London",
      "startDates": "January 2024",
      "duration": "1 year",
      "costPerYearUSD": "$20,000.00",
      "costPerYearCurrency": "€18,000.00",
      "currency": "USD",
      "scholarships": "YES",
      "link": "https://www.harvard.edu/",
      "notes": "A focused camp on AI, machine learning, and deep learning, with cutting-edge research exposure.",
      "images": {
        "area": "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/campamento.jpg",
        "country": "https://www.travelandleisure.com/thmb/3Iul9mBZaj40HHmCaHzL6z7Y5J0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/london-cityscape-UKESSAY1222-3c3b4b23062f410080b77839b31243a6.jpg",
        "institution": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm22OgUKmg5VGrcv0Ns7w157rw2gHaj8slSg&s"
      }
    },
    {
      "id": 11,
      "area": "Campamentos",
      "name": "AI Camp 2!",
      "specialization": "AI",
      "country": "Spain",
      "institution": "University of Barcelona",
      "location": "Barcelona",
      "startDates": "June 2024",
      "duration": "1 year",
      "costPerYearUSD": "$20,000.00",
      "costPerYearCurrency": "€18,000.00",
      "currency": "USD",
      "scholarships": "YES",
      "link": "https://www.harvard.edu/",
      "notes": "A focused camp on AI, machine learning, and deep learning, with cutting-edge research exposure.",
      "images": {
        "area" : "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/campamento.jpg",
        "country": "https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid_16x9.jpg?w=1200",
        "institution": "https://www.harvard.edu/wp-content/uploads/2021/02/091520_Stock_KS_025.jpeg?resize=1200,630",
        
      }
    },
    {
      "id": 12,
      "area": "Campamentos",
      "name": "AI Camp 3!",
      "specialization": "AI",
      "country": "USA",
      "institution": "Harvard",
      "location": "Congo capital",
      "startDates": "January 2024",
      "duration": "1 year",
      "costPerYearUSD": "$20,000.00",
      "costPerYearCurrency": "€18,000.00",
      "currency": "USD",
      "scholarships": "YES",
      "link": "https://www.harvard.edu/",
      "notes": "A focused camp on AI, machine learning, and deep learning, with cutting-edge research exposure.",
      "images": {
       "area" : "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/campamento.jpg",
        "country": "https://aunclicdelaaventura.com/wp-content/uploads/2021/01/Ciudades-a-visitar-en-Estados-Unidos.jpg",
        "institution": "https://www.harvard.edu/wp-content/uploads/2021/02/091520_Stock_KS_025.jpeg?resize=1200,630"
      }
    },
  ];

  
export default function Programs() {
    return (
        <main>
            <Hero url="https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/programs.jpg" title="Programas" />
            <ProgramGrid  programsData={mockPrograms}/>
        </main>
    );
}