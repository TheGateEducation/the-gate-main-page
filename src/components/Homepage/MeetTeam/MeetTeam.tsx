"use client";

import React from "react";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useReveal } from "@src/hooks/useReveal";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  socialNetwork: { name: string; url: string }[];
  accentColor: string;
}

const data: TeamMember[] = [
  {
    name: "Paulina Valdés",
    position: "Founder",
    description:
      "Mi misión es abrir puertas reales y acompañar a las personas a transformar su vida.",
    imageUrl:
      "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/pau.jpeg",
    socialNetwork: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/paulina-vald%C3%A9s-roch%C3%ADn-272b294/" },
      { name: "Email",    url: "mailto:paulina@thegate-education.com" },
    ],
    accentColor: "#5F338B",
  },
  {
    name: "Alejandra Hernández",
    position: "Co-Founder",
    description:
      "Sé lo que se siente salir de tu zona de confort. Hoy, quiero ayudarte a dar ese paso con seguridad.",
    imageUrl:
      "/images/alejandra.jpeg",
    socialNetwork: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/alejandra-hernandezgarcia/" },
      { name: "Email",    url: "mailto:alejandra@thegate-education.com" },
    ],
    accentColor: "#EDA74C",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin className="w-5 h-5" />,
  Email:    <Mail className="w-5 h-5" />,
};

const MeetTeam = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#9747FF]/[0.03] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#EDA74C]/[0.04] translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="reveal fade-up text-center mb-16" style={{ animationDuration: "600ms" }}>
          <span className="inline-block px-4 py-1.5 bg-[#5F338B]/10 text-[#5F338B] text-sm font-semibold rounded-full mb-5">
            Nuestro equipo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Conoce a quienes alguna vez{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">soñaron con cruzar la puerta</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {data.map((member, i) => (
            <div
              key={member.name}
              className={`reveal fade-up delay-${i + 1} group`}
              style={{ animationDuration: "600ms" }}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.position}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Name on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {member.name}
                    </h3>
                    <span
                      className="inline-block mt-2 px-3 py-1 rounded-full text-white text-xs font-bold tracking-wide uppercase"
                      style={{ backgroundColor: member.accentColor }}
                    >
                      {member.position}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-base leading-relaxed italic">
                    &ldquo;{member.description}&rdquo;
                  </p>

                  {/* Social */}
                  <div className="flex gap-2 mt-5">
                    {member.socialNetwork.map(({ name, url }) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:text-white transition-colors duration-200"
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = member.accentColor;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "";
                        }}
                      >
                        <span className="sr-only">{name}</span>
                        {iconMap[name]}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Accent bottom bar */}
                <div className="h-1 w-full" style={{ backgroundColor: member.accentColor }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
