"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import landing from "@/app/assets/images/landing_image 1.svg";

export default function Hero() {
  return (
    <div className="relative bg-[#BA0218]">
      <div className="m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full relative min-h-[600px]">
          <div 
            className="absolute inset-0" 
            style={{
              background: "linear-gradient(92deg, #BA0218 0%, #54010B 50%, transparent 100%)"
            }}
          />
          <div className="max-w-[1540px] lg:pl-25 m-auto text-white space-y-6 py-16 z-50 px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Assistance routière
              <br />
              rapide et fiable.
            </h1>
            <p className="text-lg font-[500] max-w-lg text-center lg:text-left">
              Découvrez MsaAda Afrika, la plateforme numérique qui vous offre
              une assistance routière rapide et fiable partout en Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[#BA0218] hover:bg-gray-100 hover:text-[#4C535D] font-semibold text-base"
                asChild
              >
                <Link href="/devenir-prestataire">Devenir Prestataire</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-white/10 font-semibold text-base"
                asChild
              >
                <Link href="/rendez-vous">Prendre une Rendez vous</Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[50%] h-full hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#54010B] via-[#BA0218] to-transparent" />
            <div className="absolute inset-0 z-10">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(105deg, #54010B 0%, #54010B 20%, transparent 0%)",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
              />
            </div>
            <Image
              src={landing}
              alt="Femme souriante utilisant l'application MsaAda Afrika"
              fill
              className="object-cover object-right"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
