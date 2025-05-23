"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/images/logo.svg";
import { useTranslation } from "@/app/hooks/useTranslation"; 

export default function Footer() {
  const { t } = useTranslation(); 

  const FooterItems = [
    {
      id: 1,
      title: t.footer.aboutUs, 
      links: [
        {
          id: 1,
          name: t.footer.services, 
          href: "/nos-services",
        },
        {
          id: 2,
          name: t.footer.services, // Traduction
          href: "/nos-services",
        },
        {
          id: 3,
          name: t.footer.services, // Traduction
          href: "/nos-services",
        },
      ],
    },
    {
      id: 2,
      title: t.footer.pageLinks, // Traduction
      links: [
        {
          id: 1,
          name: t.footer.home, // Traduction
          href: "/accueil",
        },
        {
          id: 2,
          name: t.footer.aboutUs, // Traduction
          href: "/a-propos",
        },
        {
          id: 3,
          name: t.footer.services, // Traduction
          href: "/nos-services",
        },
        {
          id: 4,
          name: t.footer.providers, 
          href: "/prestataires",
        },
      ],
    },
    {
      id: 3,
      title: t.footer.ourServices, 
      links: [
        {
          id: 1,
          name: t.footer.services, 
          href: "/nos-services",
        },
        {
          id: 2,
          name: t.footer.services, 
          href: "/nos-services",
        },
        {
          id: 3,
          name: t.footer.services, 
          href: "/nos-services",
        },
      ],
    },
    {
      id: 4,
      title: t.footer.pages, 
      links: [
        {
          id: 1,
          name: t.footer.followUs, 
          href: "/follow-us",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#54010B] pt-30">
        <div className="custom-container">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
            <div className="w-full lg:w-1/4">
              <Link href={"/"}>
                <Image src={logo} width={200} height={200} alt="Logo" className="mb-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-3/4 text-white font-extralight pb-8">
              {FooterItems.map((items) => (
                <div key={items.id} className="flex flex-col">
                  <h3 className="text-2xl mb-6">{items.title}</h3>
                  <ul className="space-y-4">
                    {items.links?.map((link) => (
                      <li key={link.id}>
                        <Link href={link.href} className="hover:text-gray-300 transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="flex justify-center items-center text-white font-extralight text-lg">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </>
  );
}
