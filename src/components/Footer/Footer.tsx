import Link from "next/link";
import React from "react";

export const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-100">
            <hr className="w-11/12 mx-auto" />
            <section className="container mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 px-4">
                <div className="col-span-full xl:col-span-2">
                    <Link
                        rel="noreferrer noopener"
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        The Gate Education
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Follow Us</h3>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="https://www.instagram.com/the_gate_education/"
                            className="opacity-60 hover:opacity-100"
                        >
                            Instagram
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="https://x.com/TheGateEdu"
                            className="opacity-60 hover:opacity-100"
                        >
                            X
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Facebook
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="https://www.linkedin.com/company/thegate-education/"
                            className="opacity-60 hover:opacity-100"
                        >
                            Linkedin
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">About</h3>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Features
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/programs"
                            className="opacity-60 hover:opacity-100"
                        >
                            Programas
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/services"
                            className="opacity-60 hover:opacity-100"
                        >
                            Servicios
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/news"
                            className="opacity-60 hover:opacity-100"
                        >
                            Noticias
                        </Link>
                    </div>
                    <div>
                        <Link
                            rel="noreferrer noopener"
                            href="/contact"
                            className="opacity-60 hover:opacity-100"
                        >
                            Contacto
                        </Link>
                    </div>
                </div>
            </section>
            <section className="container mx-auto pb-14 text-center px-4">
                <h3>
                    &copy; 2024 Copyright {" "}
                    <Link
                        rel="noreferrer noopener"
                        target="_blank"
                        href="/"
                        className="text-primary transition-all border-primary hover:border-b-2 text-yellow-400"
                    >
                        The Gate Education
                    </Link>
                </h3>
            </section>
        </footer>
    );
};
