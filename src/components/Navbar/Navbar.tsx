"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./components/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/sheet";
import { buttonVariants } from "./components/button";
import { ModeToggle } from "./components/mode-toggle";
import Logo from "./components/Logo";

import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

const navbarData = {
  brand: { name: "The Gate Education", href: "/" },
  routes: [
    { label: "Programas", href: "/programs" },
    { label: "Servicios", href: "/services" },
    { label: "Contacto", href: "/contact" },
  ],
  social: [
    { href: "https://www.instagram.com/tge.studyabroad/", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://x.com/TheGateEdu", icon: <FaXTwitter />, label: "X" },
    { href: "https://www.facebook.com/TheGateEducation/", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://www.linkedin.com/company/thegate-education/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://www.tiktok.com/@tge_international_edu?_t=ZS-8voNfmYVRFS&_r=1", icon: <IoLogoTiktok />, label: "TikTok" },
    { href: "http://wa.me/528443510141", icon: <FaWhatsapp />, label: "WhatsApp" },
    { href: "http://www.youtube.com/@TheGateEducation", icon: <FaYoutube />, label: "YouTube" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { brand, routes, social } = navbarData;

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent">
      <NavigationMenu>
        <NavigationMenuList
          className="container mx-auto flex items-center justify-between
                     h-[143px] px-4 lg:gap-[183px]"
        >
          <NavigationMenuItem>
            <Link href={brand.href} aria-label={brand.name}>
              <Logo />
            </Link>
          </NavigationMenuItem>

          <div
            className="hidden md:flex items-center
                       bg-white backdrop-blur-sm
                       rounded-[30px] px-5 py-[13px] h-[60px]
                       shadow-pill"
          >
            <ul className="flex gap-[98px]">
              {routes.map(({ href, label }) => {
                const active = pathname.startsWith(href);
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`
                        font-semibold text-[18px] underline transition
                        ${active
                          ? "text-[#EDA74C] decoration-[#EDA74C]"
                          : "text-black decoration-transparent hover:decoration-current"}
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link
            href="/#agenda"
            className="hidden md:flex items-center justify-center
                       bg-[#EDA74C] text-white font-semibold
                       w-[168px] h-[60px] rounded-[30px]
                       hover:bg-[#d38f36] transition-shadow"
          >
            Agenda Ahora
          </Link>

          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="p-2">
                <Menu className="h-6 w-6" />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    {brand.name}
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-4">
                  {routes.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={buttonVariants({
                        variant: pathname.startsWith(href) ? "secondary" : "ghost",
                      })}
                    >
                      {label}
                    </Link>
                  ))}

                  <Link
                    href="/#agenda"
                    onClick={() => setOpen(false)}
                    className="bg-[#EDA74C] text-white px-4 py-2 rounded-[30px] mt-2 text-center"
                  >
                    Agenda Ahora
                  </Link>

                  <div className="flex gap-4 mt-6">
                    {social.map(({ href, icon, label }) => (
                      <Link key={label} href={href} target="_blank" aria-label={label}>
                        {icon}
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
