import Link from "next/link";
import {
    FaInstagram,
    FaXTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaTiktok,
    FaWhatsapp,
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

// Datos
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
            links: [
                {
                    label: "Instagram",
                    href: "https://www.instagram.com/the_gate_education/",
                    icon: <FaInstagram />,
                },
                { label: "X", href: "https://x.com/TheGateEdu", icon: <FaXTwitter /> },
                { label: "Facebook", href: "#", icon: <FaFacebookF /> },
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/thegate-education/",
                    icon: <FaLinkedinIn />,
                },
                { label: "TikTok", href: "#", icon: <FaTiktok /> },
                {
                    label: "+52 ...",
                    href: "https://wa.me/5210000000000",
                    icon: <FaWhatsapp />,
                },
            ],
        },
        {
            title: "Nosotros",
            links: [
                { label: "Servicios", href: "/services" },
                { label: "Programas", href: "/programs" },
                { label: "Partners", href: "#" },
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
                { label: "Estado de México", href: "#" },
                { label: "Monterrey", href: "#" },
                { label: "Saltillo", href: "#" },
                { label: "Panamá", href: "#" },
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
