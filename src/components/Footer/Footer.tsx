import Link from "next/link";
import {
    FaInstagram,
    FaXTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaTiktok,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa6";
import React from "react";

type FooterLink = {
    label: string;
    href: string;
    icon?: React.ReactNode;
};

type FooterSection = {
    title: string;
    links: FooterLink[];
};

const footerData: {
    brand: { name: string; href: string };
    sections: FooterSection[];
} = {
    brand: {
        name: "The Gate Education",
        href: "/",
    },
    sections: [
        {
            title: "Redes sociales",
            links:
            [
                {
                    label: "Instagram",
                    href: "https://www.instagram.com/tge.studyabroad/",
                    icon: <FaInstagram />,
                },
                {
                    label: "X",
                    href: "https://x.com/TheGateEdu",
                    icon: <FaXTwitter />
                },
                {
                    label: "Facebook",
                    href: "https://www.facebook.com/TheGateEducation/",
                    icon: <FaFacebookF />
                },
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/thegate-education/",
                    icon: <FaLinkedinIn />,
                },
                {
                    label: "TikTok",
                    href: "https://www.tiktok.com/@tge_international_edu?_t=ZS-8voNfmYVRFS&_r=1",
                    icon: <FaTiktok />
                },
                {
                    label: "+52 8443510141",
                    href: "http://wa.me/528443510141",
                    icon: <FaWhatsapp />,
                },
                {
                    label: "YouTube",
                    href: "http://www.youtube.com/@TheGateEducation",
                    icon: <FaYoutube/>,
                }
            ],
        },
        {
            title: "Nosotros",
            links: [
                { label: "Programas", href: "/programs" },
                { label: "Servicios", href: "/services" },
            ],
        },
        {
            title: "Políticas de privacidad",
            links: [
                {
                    label: "info@thegate-education.com",
                    href: "mailto:info@thegate-education.com",
                },
            ],
        },
        {
            title: "Oficinas",
            links: [
                {
                    label: "Estado de México",
                    href: "https://www.google.com/maps/place/Ignacio+Comonfort+3-c+103,+Atizapan+Centro,+52900+Cdad.+L%C3%B3pez+Mateos,+M%C3%A9x./@19.561066,-99.246263,19z/data=!3m1!4b1!4m5!3m4!1s0x85d21cf09caeeef3:0xb991486de7446bf7!8m2!3d19.5610647!4d-99.2456193?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                },
                {
                    label: "Saltillo",
                    href: "https://maps.app.goo.gl/H1LVJ4Udd6DScQUj8"
                },
            ],
        },
    ],
};

// Componente
export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-700 text-sm">
            <div className="max-w-screen-xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {footerData.sections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-3">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                                {section.title}
                            </h3>
                            {section.links.map(({ label, href, icon }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-600 hover:text-customPurple transition-colors"
                                >
                                    {icon && <span className="text-base">{icon}</span>}
                                    <span>{label}</span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
                    &copy; 2024{" "}
                    <Link
                        href={footerData.brand.href}
                        className="text-yellow-500 hover:underline"
                    >
                        {footerData.brand.name}
                    </Link>
                    . Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};
