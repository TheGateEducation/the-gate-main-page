"use client";

import React, { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";

import InputField from "./Label";
import StudentsRecordsService from "@src/services/studentsRecords.service"

const ContactUsForm = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [destinationCountry, setDestinationCountry] = React.useState("");
    const [program, setProgram] = React.useState("");
    const [howDidYouHearAboutUs, setHowDidYouHearAboutUs] = React.useState("");
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState("");

    const sendForm = async () => {
        const studentsRecordsService = new StudentsRecordsService();
        const data = {
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            name,
            email,
            phone,
            country,
            destinationCountry,
            program,
            howDidYouHearAboutUs,
            counsellor: "",
            areaOfInterest: "",
            firstContact: "",
            levelOfEducation: "",
            levelOfInterest: "",
            institution: "",
            intake: "",
            information: "",
            documents: "",
            application: "",
            offerLetter: "",
            scholarship: "",
            acceptance: "",
            payment: "",
            coe: "",
            visa: "",
            invoice: "",
            status: "",
            visaResolutionTime: "",
            notes: "",
            currency: "",
            totalTuition: "",
            yearlyTuition: "",
            commission: "",
            tge: "",
            salesPax: "",
        };

        try {
            const response = await studentsRecordsService.createStudentRecord(data);
            toast.success("Registro exitoso. ¡Gracias por contactarnos!. Nos pondremos en contacto contigo pronto.");
            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
            toast.error("Hubo un error al enviar el formulario.");
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 items-center justify-center px-4 md:px-6 lg:px-12 xl:px-40 pt-10">
            <div className="mb-6 md:mb-0 flex items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold text-customPurple text-center">¡Aquí empieza tu viaje!</h1>
            </div>
            <div className="w-full shadow-md rounded-lg p-10 pt-6 pb-8 mb-4 bg-gray-100 w-2/3 mx-auto mt-10">
                {successMessage && (
                    <div className="mb-6 text-green-600 text-center">
                        {successMessage}
                    </div>
                )}

                <InputField
                    onChange={(e) => setName(e.target.value)}
                    type="text" placeholder="Escribe tu nombre completo">Nombre completo</InputField>
                <InputField
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Escribe tu correo electrónico">Email</InputField>
                <InputField
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel" placeholder="Escribe tu número de teléfono">Teléfono</InputField>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">País de origen</span>
                    <select
                        onChange={(e) => setCountry(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    >
                        <option value="">Selecciona tu país de origen</option>
                        <option value="AF">Afganistán</option>
                        <option value="AL">Albania</option>
                        <option value="DE">Alemania</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguila</option>
                        <option value="AQ">Antártida</option>
                        <option value="AG">Antigua y Barbuda</option>
                        <option value="AN">Antillas Holandesas</option>
                        <option value="SA">Arabia Saudita</option>
                        <option value="DZ">Argelia</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaiyán</option>
                        <option value="BS">Bahamas</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BH">Baréin</option>
                        <option value="BE">Bélgica</option>
                        <option value="BZ">Belice</option>
                        <option value="BJ">Benín</option>
                        <option value="BY">Bielorrusia</option>
                        <option value="BO">Bolivia</option>
                        <option value="BQ">Bonaire</option>
                        <option value="BA">Bosnia y Herzegovina</option>
                        <option value="BW">Botsuana</option>
                        <option value="BR">Brasil</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="BT">Bután</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="KH">Camboya</option>
                        <option value="CM">Camerún</option>
                        <option value="CA">Canadá</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China continental</option>
                        <option value="CY">Chipre</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoras</option>
                        <option value="CG">Congo</option>
                        <option value="KR">Corea del Sur</option>
                        <option value="CI">Costa de Marfil</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croacia</option>
                        <option value="CU">Cuba</option>
                        <option value="DK">Dinamarca</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egipto</option>
                        <option value="LB">El Líbano</option>
                        <option value="SV">El Salvador</option>
                        <option value="AE">Emiratos Árabes Unidos</option>
                        <option value="ER">Eritrea</option>
                        <option value="SK">Eslovaquia (República Eslovaca)</option>
                        <option value="SI">Eslovenia</option>
                        <option value="ES">España</option>
                        <option value="FM">Estados Federados de Micronesia</option>
                        <option value="US">Estados Unidos</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Etiopía</option>
                        <option value="RU">Federación Rusa</option>
                        <option value="FJ">Fiji</option>
                        <option value="PH">Filipinas</option>
                        <option value="FI">Finlandia</option>
                        <option value="FR">Francia</option>
                        <option value="GA">Gabón</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GD">Granada</option>
                        <option value="GR">Grecia</option>
                        <option value="GL">Groenlandia</option>
                        <option value="GP">Guadalupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GF">Guayana Francesa</option>
                        <option value="GN">Guinea</option>
                        <option value="GQ">Guinea Ecuatorial</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haití</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungría</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Irán (República Islámica de)</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Irlanda</option>
                        <option value="BV">Isla Bouvet</option>
                        <option value="CX">Isla de Navidad</option>
                        <option value="NF">Isla Norfolk</option>
                        <option value="IS">Islandia</option>
                        <option value="KY">Islas Caimán</option>
                        <option value="CC">Islas Cocos (Keeling)</option>
                        <option value="CK">Islas Cook</option>
                        <option value="FO">Islas Feroe</option>
                        <option value="GS">Islas Georgias del Sur y Sandwich del Sur</option>
                        <option value="HM">Islas Heard y Mc Donald</option>
                        <option value="FK">Islas Malvinas (Falkland Islands)</option>
                        <option value="MP">Islas Marianas del Norte</option>
                        <option value="MH">Islas Marshall</option>
                        <option value="SB">Islas Salomón</option>
                        <option value="SJ">Islas Svalbard y Jan Mayen</option>
                        <option value="TC">Islas Turcas y Caicos</option>
                        <option value="UM">Islas Ultramarinas Menores de los Estados Unidos</option>
                        <option value="VG">Islas Vírgenes (Británicas)</option>
                        <option value="VI">Islas Vírgenes (Estadounidenses)</option>
                        <option value="WF">Islas Wallis y Futuna</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italia</option>
                        <option value="LY">Jamahiriya Árabe Libia</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japón</option>
                        <option value="JO">Jordán</option>
                        <option value="KZ">Kazajstán</option>
                        <option value="KE">Kenia</option>
                        <option value="KG">Kirguistán</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Kuwait</option>
                        <option value="LA">Laos</option>
                        <option value="BM">Las Bermudas</option>
                        <option value="Latin_America">Latinoamérica</option>
                        <option value="LS">Lesotho</option>
                        <option value="LV">Letonia</option>
                        <option value="LR">Liberia</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lituania</option>
                        <option value="LU">Luxemburgo</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macedonia</option>
                        <option value="MG">Madagascar</option>
                        <option value="MY">Malasia</option>
                        <option value="MW">Malawi</option>
                        <option value="MV">Maldivas</option>
                        <option value="ML">Malí</option>
                        <option value="MT">Malta</option>
                        <option value="MA">Marruecos</option>
                        <option value="MQ">Martinica</option>
                        <option value="MU">Mauricio</option>
                        <option value="MR">Mauritania</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">México</option>
                        <option value="MC">Mónaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar (Birmania)</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Níger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NO">Noruega</option>
                        <option value="NC">Nueva Caledonia</option>
                        <option value="NZ">Nueva Zelanda</option>
                        <option value="OM">Omán</option>
                        <option value="NL">Países Bajos</option>
                        <option value="PK">Pakistán</option>
                        <option value="PW">Palau</option>
                        <option value="PA">Panamá</option>
                        <option value="PG">Papúa Nueva Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Perú</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PF">Polinesia Francesa</option>
                        <option value="PL">Polonia</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="GB">Reino Unido</option>
                        <option value="SY">República Árabe de Siria</option>
                        <option value="CF">República Centroafricana</option>
                        <option value="CZ">República Checa</option>
                        <option value="MD">República de Moldavia</option>
                        <option value="CD">República Democrática del Congo</option>
                        <option value="KP">República Democrática Popular de Corea</option>
                        <option value="DO">República Dominicana</option>
                        <option value="TZ">República Unida de Tanzania</option>
                        <option value="RE">Reunión</option>
                        <option value="RW">Ruanda</option>
                        <option value="RO">Rumanía</option>
                        <option value="EH">Sáhara Occidental</option>
                        <option value="KN">Saint Kitts y Nevis</option>
                        <option value="WS">Samoa</option>
                        <option value="AS">Samoa Americana</option>
                        <option value="SM">San Marino</option>
                        <option value="PM">San Pedro y Miquelón</option>
                        <option value="VC">San Vicente y las Granadinas</option>
                        <option value="SH">Santa Elena</option>
                        <option value="LC">Santa Lucía</option>
                        <option value="VA">Santa Sede (Estado de la Ciudad del Vaticano)</option>
                        <option value="ST">Santo Tomé y Príncipe</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leona</option>
                        <option value="SG">Singapur</option>
                        <option value="SO">Somalia</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SZ">Suazilandia</option>
                        <option value="ZA">Sudáfrica</option>
                        <option value="SD">Sudán</option>
                        <option value="SS">Sudán del Sur</option>
                        <option value="SE">Suecia</option>
                        <option value="CH">Suiza</option>
                        <option value="SR">Surinam</option>
                        <option value="TH">Tailandia</option>
                        <option value="TW">Taiwán</option>
                        <option value="TJ">Tayikistán</option>
                        <option value="IO">Territorio Británico del Océano Índico</option>
                        <option value="PS">Territorio Palestino</option>
                        <option value="TF">Territorios Franceses del Sur</option>
                        <option value="TL">Timor Oriental</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad y Tobago</option>
                        <option value="TN">Túnez</option>
                        <option value="TM">Turkmenistán</option>
                        <option value="TR">Turquía</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UA">Ucrania</option>
                        <option value="UG">Uganda</option>
                        <option value="EU">Unión Europea</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistán</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabue</option>
                    </select>
                </label>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">País de destino</span>
                    <select
                        onChange={(e) => setDestinationCountry(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    >
                        <option value="">Selecciona tu país de destino</option>
                        <option value="AF">Afganistán</option>
                        <option value="AL">Albania</option>
                        <option value="DE">Alemania</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguila</option>
                        <option value="AQ">Antártida</option>
                        <option value="AG">Antigua y Barbuda</option>
                        <option value="AN">Antillas Holandesas</option>
                        <option value="SA">Arabia Saudita</option>
                        <option value="DZ">Argelia</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaiyán</option>
                        <option value="BS">Bahamas</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BH">Baréin</option>
                        <option value="BE">Bélgica</option>
                        <option value="BZ">Belice</option>
                        <option value="BJ">Benín</option>
                        <option value="BY">Bielorrusia</option>
                        <option value="BO">Bolivia</option>
                        <option value="BQ">Bonaire</option>
                        <option value="BA">Bosnia y Herzegovina</option>
                        <option value="BW">Botsuana</option>
                        <option value="BR">Brasil</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="BT">Bután</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="KH">Camboya</option>
                        <option value="CM">Camerún</option>
                        <option value="CA">Canadá</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China continental</option>
                        <option value="CY">Chipre</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoras</option>
                        <option value="CG">Congo</option>
                        <option value="KR">Corea del Sur</option>
                        <option value="CI">Costa de Marfil</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croacia</option>
                        <option value="CU">Cuba</option>
                        <option value="DK">Dinamarca</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egipto</option>
                        <option value="LB">El Líbano</option>
                        <option value="SV">El Salvador</option>
                        <option value="AE">Emiratos Árabes Unidos</option>
                        <option value="ER">Eritrea</option>
                        <option value="SK">Eslovaquia (República Eslovaca)</option>
                        <option value="SI">Eslovenia</option>
                        <option value="ES">España</option>
                        <option value="FM">Estados Federados de Micronesia</option>
                        <option value="US">Estados Unidos</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Etiopía</option>
                        <option value="RU">Federación Rusa</option>
                        <option value="FJ">Fiji</option>
                        <option value="PH">Filipinas</option>
                        <option value="FI">Finlandia</option>
                        <option value="FR">Francia</option>
                        <option value="GA">Gabón</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GD">Granada</option>
                        <option value="GR">Grecia</option>
                        <option value="GL">Groenlandia</option>
                        <option value="GP">Guadalupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GF">Guayana Francesa</option>
                        <option value="GN">Guinea</option>
                        <option value="GQ">Guinea Ecuatorial</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haití</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungría</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Irán (República Islámica de)</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Irlanda</option>
                        <option value="BV">Isla Bouvet</option>
                        <option value="CX">Isla de Navidad</option>
                        <option value="NF">Isla Norfolk</option>
                        <option value="IS">Islandia</option>
                        <option value="KY">Islas Caimán</option>
                        <option value="CC">Islas Cocos (Keeling)</option>
                        <option value="CK">Islas Cook</option>
                        <option value="FO">Islas Feroe</option>
                        <option value="GS">Islas Georgias del Sur y Sandwich del Sur</option>
                        <option value="HM">Islas Heard y Mc Donald</option>
                        <option value="FK">Islas Malvinas (Falkland Islands)</option>
                        <option value="MP">Islas Marianas del Norte</option>
                        <option value="MH">Islas Marshall</option>
                        <option value="SB">Islas Salomón</option>
                        <option value="SJ">Islas Svalbard y Jan Mayen</option>
                        <option value="TC">Islas Turcas y Caicos</option>
                        <option value="UM">Islas Ultramarinas Menores de los Estados Unidos</option>
                        <option value="VG">Islas Vírgenes (Británicas)</option>
                        <option value="VI">Islas Vírgenes (Estadounidenses)</option>
                        <option value="WF">Islas Wallis y Futuna</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italia</option>
                        <option value="LY">Jamahiriya Árabe Libia</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japón</option>
                        <option value="JO">Jordán</option>
                        <option value="KZ">Kazajstán</option>
                        <option value="KE">Kenia</option>
                        <option value="KG">Kirguistán</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Kuwait</option>
                        <option value="LA">Laos</option>
                        <option value="BM">Las Bermudas</option>
                        <option value="Latin_America">Latinoamérica</option>
                        <option value="LS">Lesotho</option>
                        <option value="LV">Letonia</option>
                        <option value="LR">Liberia</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lituania</option>
                        <option value="LU">Luxemburgo</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macedonia</option>
                        <option value="MG">Madagascar</option>
                        <option value="MY">Malasia</option>
                        <option value="MW">Malawi</option>
                        <option value="MV">Maldivas</option>
                        <option value="ML">Malí</option>
                        <option value="MT">Malta</option>
                        <option value="MA">Marruecos</option>
                        <option value="MQ">Martinica</option>
                        <option value="MU">Mauricio</option>
                        <option value="MR">Mauritania</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">México</option>
                        <option value="MC">Mónaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar (Birmania)</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Níger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NO">Noruega</option>
                        <option value="NC">Nueva Caledonia</option>
                        <option value="NZ">Nueva Zelanda</option>
                        <option value="OM">Omán</option>
                        <option value="NL">Países Bajos</option>
                        <option value="PK">Pakistán</option>
                        <option value="PW">Palau</option>
                        <option value="PA">Panamá</option>
                        <option value="PG">Papúa Nueva Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Perú</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PF">Polinesia Francesa</option>
                        <option value="PL">Polonia</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="GB">Reino Unido</option>
                        <option value="SY">República Árabe de Siria</option>
                        <option value="CF">República Centroafricana</option>
                        <option value="CZ">República Checa</option>
                        <option value="MD">República de Moldavia</option>
                        <option value="CD">República Democrática del Congo</option>
                        <option value="KP">República Democrática Popular de Corea</option>
                        <option value="DO">República Dominicana</option>
                        <option value="TZ">República Unida de Tanzania</option>
                        <option value="RE">Reunión</option>
                        <option value="RW">Ruanda</option>
                        <option value="RO">Rumanía</option>
                        <option value="EH">Sáhara Occidental</option>
                        <option value="KN">Saint Kitts y Nevis</option>
                        <option value="WS">Samoa</option>
                        <option value="AS">Samoa Americana</option>
                        <option value="SM">San Marino</option>
                        <option value="PM">San Pedro y Miquelón</option>
                        <option value="VC">San Vicente y las Granadinas</option>
                        <option value="SH">Santa Elena</option>
                        <option value="LC">Santa Lucía</option>
                        <option value="VA">Santa Sede (Estado de la Ciudad del Vaticano)</option>
                        <option value="ST">Santo Tomé y Príncipe</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leona</option>
                        <option value="SG">Singapur</option>
                        <option value="SO">Somalia</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SZ">Suazilandia</option>
                        <option value="ZA">Sudáfrica</option>
                        <option value="SD">Sudán</option>
                        <option value="SS">Sudán del Sur</option>
                        <option value="SE">Suecia</option>
                        <option value="CH">Suiza</option>
                        <option value="SR">Surinam</option>
                        <option value="TH">Tailandia</option>
                        <option value="TW">Taiwán</option>
                        <option value="TJ">Tayikistán</option>
                        <option value="IO">Territorio Británico del Océano Índico</option>
                        <option value="PS">Territorio Palestino</option>
                        <option value="TF">Territorios Franceses del Sur</option>
                        <option value="TL">Timor Oriental</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad y Tobago</option>
                        <option value="TN">Túnez</option>
                        <option value="TM">Turkmenistán</option>
                        <option value="TR">Turquía</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UA">Ucrania</option>
                        <option value="UG">Uganda</option>
                        <option value="EU">Unión Europea</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistán</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabue</option>
                    </select>
                </label>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">Programa de interés</span>
                    <select
                        onChange={(e) => setProgram(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    >
                        <option value="">Selecciona tu programa de interés</option>
                        <option value="Campamento">Campamento</option>
                        <option value="Diplomas y Certificados">Diplomas y Certificados</option>
                        <option value="Cursos de idiomas">Cursos de idiomas</option>
                        <option value="Intercambios">Intercambios</option>
                        <option value="Maestrias">Maestrias</option>
                        <option value="Tours de estudio">Tours de estudio</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Licenciatura">Licenciatura</option>
                        <option value="Doctorados">Doctorados</option>
                    </select>
                </label>

                <label className="block mb-4">
                    <span className="block text-lg font-medium text-gray-700">
                        ¿Cómo te enteraste de nosotros?
                    </span>
                    <select
                        onChange={(e) => setHowDidYouHearAboutUs(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-900 
                            focus:ring-2 focus:ring-customPurple"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Referencia">Referencia</option>
                        <option value="Otro">Otro</option>
                    </select>
                </label>

                
                <div className="mt-8 mb-6 text-sm text-gray-600 text-center px-2">
                    Al enviar este formulario, aceptas nuestro{' '}
                    <Link href="/aviso-de-privacidad" className="text-customOrange hover:text-customOrangeHover underline font-semibold transition-colors">
                        Aviso de Privacidad
                    </Link>{' '}
                    y el tratamiento de tus datos personales.
                </div>

                <div className="pt-2">
                    {!isSubmitted ? (
                        <button
                            type="submit"
                            onClick={sendForm}
                            className="w-full bg-customOrange text-white py-3 px-4 rounded-3xl hover:bg-customOrangeHover transition-all font-semibold shadow-md hover:shadow-lg"
                            disabled={isSubmitted}
                        >
                            Enviar
                        </button>
                    ) :
                        (
                            <p className="w-full cursor-pointer text-center bg-customOrange text-white py-3 px-4 rounded-3xl hover:bg-customOrangeHover transition-colors font-semibold shadow-md"
                            >
                                Registro completado. ¡Gracias por contactarnos!
                            </p>
                        )
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ContactUsForm;