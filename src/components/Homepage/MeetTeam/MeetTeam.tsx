import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@src/components/Homepage/MeetTeam/Card";
import { buttonVariants } from "@src/components/Homepage/MeetTeam/ButtonVariants";
import { Linkedin } from "lucide-react";
import Image from "next/legacy/image";
import { Mail } from "lucide-react";

interface SocialNetworkProps {
    name: string;
    email?: string;
    url: string;
}

interface DataProps {
    name: string;
    position: string;
    description: string;
    imageUrl: string;
    socialNetwork: SocialNetworkProps[];
    borderColor: string;
}

const data: DataProps[] = [
    {
        name: "Paulina Valdés",
        position: "Founder de The Gate Education",
        description: "Mi misión es abrir puertas reales y acompañar a las personas a transformar su vida.",
        imageUrl:
            "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/pau.jpeg",
        socialNetwork: [
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/paulina-vald%C3%A9s-roch%C3%ADn-272b294/",
            },
            {
                name: "Email",
                url: "mailto:paulina@thegate-education.com",
            },
        ],
        borderColor: "#5F338B",
    },
    {
        name: "Alejandra \"Apellido\"",
        position: "Co-Founder de The Gate Education",
        description: "Sé lo que se siente salir de tu zona de confort. Hoy, quiero ayudarte a dar ese paso con seguridad.",
        imageUrl:
            "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/alejandra.jpeg",
        socialNetwork: [
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/alejandra-hernandezgarcia/",
            },
            {
                name: "Email",
                url: "mailto:alejandra@thegate-education.com",
            },
        ],
        borderColor: "#EDA74C",
    },
];

const MeetTeam = () => {
    const socialIcon = (iconName: string) => {
        switch (iconName) {
            case "Linkedin":
                return <Linkedin size="20" />;
            case "Email":
                return <Mail size="20" />;
        }
    };

    return (
        <div className="relative w-full h-auto py-16 bg-white">
            <div className="flex flex-col items-center justify-center w-full h-full text-center px-5">
                {/* Headline */}
                <div className="max-w-screen-xl w-full mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-[60px] text-black font-poppins">
                        Conoce a las que alguna vez soñaron con cruzar la puerta.
                    </h1>
                </div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16 lg:gap-32 w-full max-w-screen-xl px-4 md:px-16">
                    {data.map(
                        ({
                            imageUrl,
                            name,
                            position,
                            description,
                            socialNetwork,
                            borderColor,
                        }: DataProps) => (
                            <Card
                                key={name}
                                className="w-full max-w-[500px] h-auto md:h-[650px] flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0px_4px_8px_rgba(0,0,0,0.02),0px_6px_12px_rgba(0,0,0,0.03)]"
                                style={{ border: `5px solid ${borderColor}` }}
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-[380px]">
                                    <Image
                                        src={imageUrl}
                                        alt={`${name} ${position}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-2xl"
                                    />
                                </div>

                                {/* Body Section */}
                                <div className="flex flex-col justify-start items-start p-6 md:px-9 md:py-6 gap-8 flex-grow">
                                    {/* Text */}
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <CardTitle className="text-left text-[32px] font-semibold leading-[145%] tracking-[-0.02em] text-black font-poppins">
                                            {name}
                                        </CardTitle>
                                        <CardDescription className="text-left text-2xl font-medium leading-[140%] tracking-[-0.005em] text-[#171717] font-poppins">
                                            {position}
                                        </CardDescription>
                                        <p className="text-left text-lg font-medium leading-[140%] tracking-[-0.005em] text-[#171717] font-poppins mt-2">
                                            {description}
                                        </p>
                                    </div>

                                    {/* Social Icons */}
                                    <CardFooter className="p-0 flex gap-2">
                                        {socialNetwork.map(
                                            ({ name, url }: SocialNetworkProps) => (
                                                <div key={name}>
                                                    <a
                                                        rel="noreferrer noopener"
                                                        href={url}
                                                        target="_blank"
                                                        className={buttonVariants({
                                                            variant: "ghost",
                                                            size: "sm",
                                                        })}
                                                    >
                                                        <span className="sr-only">
                                                            {name} icon
                                                        </span>
                                                        {socialIcon(name)}
                                                    </a>
                                                </div>
                                            )
                                        )}
                                    </CardFooter>
                                </div>
                            </Card>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MeetTeam;