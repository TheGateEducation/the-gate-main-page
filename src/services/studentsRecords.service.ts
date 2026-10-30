const WEB3FORMS_URL = "https://api.web3forms.com/submit";
// Llave pública de Web3Forms: los envíos llegan a paulina@thegate-education.com
const WEB3FORMS_ACCESS_KEY = "66ce6222-8702-4166-a011-6d1303892377";

interface StudentRecord {
    name: string;
    email: string;
    phone: string;
    country: string;
    destinationCountry: string;
    program: string;
    howDidYouHearAboutUs: string;
}

class StudentsRecordsService {
    async createStudentRecord(data: StudentRecord): Promise<any> {
        const response = await fetch(WEB3FORMS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `Nuevo contacto en la página: ${data.name}`,
                from_name: "Página The Gate Education",
                "Nombre": data.name,
                email: data.email,
                "Teléfono": data.phone,
                "País de origen": data.country,
                "País de destino": data.destinationCountry,
                "Programa de interés": data.program,
                "¿Cómo se enteró de nosotros?": data.howDidYouHearAboutUs,
            })
        });
        if (!response.ok) {
            throw new Error('Failed to create student record');
        }
        return response.json();
    }
}

export default StudentsRecordsService;
