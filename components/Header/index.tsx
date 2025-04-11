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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuNav = [
    {
      id: 1,
      name: "Accueil",
      href: "/",
    },
    {
      id: 2,
      name: "A propos",
      href: "/a-propos",
    },
    {
      id: 3,
      name: "Nos Services",
      href: "/services",
    },
    {
      id: 4,
      name: "Les prestataires",
      href: "/prestataires",
    },
    {
      id: 5,
      name: "Contacts",
      href: "/contacts",
    },
  ];

  return (
    <nav className="py-8">
      <div className="custom-container">
        <span className="flex justify-end text-[#BA0218] pb-8">
          <Link href={"/help"}>Besoin d'aide ?</Link>
        </span>
        
        <div className="hidden md:flex justify-between items-center">
          <ul className="flex items-center gap-5">
            {MenuNav.map((menu) => (
              <li key={menu.id} className="text-[#4C535D] hover:text-[#BA0218] font-medium">
                <Link href={menu.href}>{menu.name}</Link>
              </li>
            ))}
          </ul>
          <Button
            variant={"default"}
            size={"lg"}
            className="bg-[#4C535D] text-white"
            asChild
          >
            <Link href={"/login"}>Se connecter</Link>
          </Button>
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
                    <li key={menu.id} className="text-[#4C535D] hover:text-[#BA0218] font-medium">
                      <Link href={menu.href} onClick={() => setIsOpen(false)}>
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="bg-[#4C535D] text-white w-full"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={"/login"}>Se connecter</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <Button
            variant={"default"}
            size={"default"}
            className="bg-[#4C535D] text-white"
            asChild
          >
            <Link href={"/login"}>Se connecter</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
