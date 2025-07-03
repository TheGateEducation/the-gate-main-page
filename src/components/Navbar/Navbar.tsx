import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@src/components/Navbar/components/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@src/components/Navbar/components/sheet";

import { buttonVariants } from "@src/components/Navbar/components/button";
import { ModeToggle } from "@src/components/Navbar/components/mode-toggle";
import Logo from "@src/components/Navbar/components/Logo";

import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";



const navbarData = {
    "brand":
    {
        "name": "The Gate Education",
        "href": "/"
    },
    "routes":
    [
        {
            "label": "Programas",
            "href": "/programs"
        },
        {
            "label": "Servicios",
            "href": "/services"
        },
        {
            "label": "Contacto",
            "href": "/contact"
        }
    ],
    "social":
    [
        {
            "label": "Instagram",
            "href": "https://www.instagram.com/tge.studyabroad/",
            "iconPath": <FaInstagram />
        },
        {
            "label": "X",
            "href": "https://x.com/TheGateEdu",
            "iconPath": <FaXTwitter />
        },
        {
            "label": "Facebook",
            "href": "https://www.facebook.com/TheGateEducation/",
            "iconPath": <FaFacebook />
        },
        {
            "label": "Linkedin",
            "href": "https://www.linkedin.com/company/thegate-education/",
            "iconPath": <FaLinkedin />
        },
        {
            "label": "TikTok",
            "href": "https://www.tiktok.com/@tge_international_edu?_t=ZS-8voNfmYVRFS&_r=1",
            "iconPath": <IoLogoTiktok />
        },
        {
            "label": "+52 528443510141",
            "href": "http://wa.me/528443510141",
            "iconPath": <FaWhatsapp />
        },
        {
            "label": "YouTube",
            "href": "http://www.youtube.com/@TheGateEducation",
            "iconPath": <FaYoutube />
        }
    ]
}

type Route = {
    href: string;
    label: string;
};

type Social = {
    href: string;
    label: string;
    iconPath: any;
};

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { brand, routes, social } = navbarData;

    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between">
                    <NavigationMenuItem className="font-bold flex">
                        <Link rel="noreferrer noopener" href={brand.href}>
                            <Logo />
                        </Link>
                    </NavigationMenuItem>

                    <span className="flex md:hidden">
                        <ModeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="px-2">
                                <Menu
                                    className="flex md:hidden h-5 w-5"
                                    onClick={() => setIsOpen(true)}
                                />
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl">{brand.name}</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                    {(routes as Route[]).map(({ href, label }) => (
                                        <Link
                                            key={label}
                                            href={href}
                                            onClick={() => setIsOpen(false)}
                                            className={buttonVariants({ variant: "ghost" })}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    <nav className="hidden md:flex gap-2">
                        {(routes as Route[]).map(({ href, label }) => (
                            <Link
                                key={label}
                                href={href}
                                className={`
                                    text-[17px]
                                    ${buttonVariants({ variant: "ghost" })}
                                    hover:text-customPurple hover:border-customPurple hover:bg-customPurple hover:bg-opacity-10
                                `}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-2">
                        <div className="hidden md:flex gap-3">
                            {(social as Social[]).map(({ href, label, iconPath }) => (
                                <Link
                                    key={label}
                                    rel={`${label} logo`}
                                    href={href}
                                    target="_blank"
                                    className="text-xl mt-3 hover:text-customPurple transition-colors"
                                >
                                    {iconPath}
                                </Link>
                            ))}
                        </div>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};
