"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { ChevronDown } from "lucide-react";

type Language = "fr" | "en";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, changeLanguage, language } = useTranslation();

  const MenuNav = [
    {
      id: 1,
      name: t.menu.home,
      href: "/",
    },
    {
      id: 2,
      name: t.menu.about,
      href: "/a-propos",
    },
    {
      id: 3,
      name: t.menu.services,
      href: "/services",
    },
    {
      id: 4,
      name: t.menu.providers,
      href: "/prestataires",
    },
    {
      id: 5,
      name: t.menu.contacts,
      href: "/contacts",
    },
  ];

  return (
    <nav className="py-8">
      <div className="custom-container">
        <span className="flex justify-end text-[#BA0218] pb-8">
          <Link href={"/help"}>{t.header.needHelp}</Link>
        </span>

        <div className="hidden md:flex justify-between items-center">
          <ul className="flex items-center gap-5">
            {MenuNav.map((menu) => (
              <li
                key={menu.id}
                className="text-[#4C535D] hover:text-[#BA0218] font-medium"
              >
                <Link href={menu.href}>{menu.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value as Language)}
                className="appearance-none pl-8 pr-2 py-2 bg-white text-[#4C535D]"
              >
                <option value="fr">Fr</option>
                <option value="en">En</option>
              </select>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-[#BA0218]" />
              </div>
            </div>
            <Button
              variant={"default"}
              size={"lg"}
              className="bg-[#4C535D] text-white"
              asChild
            >
              <Link href={"/login"}>{t.header.login}</Link>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden justify-between items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#4C535D]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-white px-5">
              <div className="flex flex-col gap-8 mt-8">
                <ul className="flex flex-col gap-4">
                  {MenuNav.map((menu) => (
                    <li
                      key={menu.id}
                      className="text-[#4C535D] hover:text-[#BA0218] font-medium"
                    >
                      <Link href={menu.href} onClick={() => setIsOpen(false)}>
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-4">
            <Button
              variant={"default"}
              size={"default"}
              className="bg-[#4C535D] text-white"
              asChild
            >
              <Link href={"/login"}>{t.header.login}</Link>
            </Button>
            <div className="relative">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value as Language)}
                className="appearance-none pl-8 pr-2 py-2 bg-white text-[#4C535D]"
              >
                <option value="fr">Fr</option>
                <option value="en">En</option>
              </select>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-[#BA0218]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}