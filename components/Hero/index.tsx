"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import landing from "@/app/assets/images/landing_image 1.svg";
import { useTranslation } from "@/app/hooks/useTranslation"; 

export default function Hero() {
  const { t } = useTranslation(); 

  return (
    <div className="relative bg-[#BA0218]">
      <div className="m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full relative min-h-[600px]">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(92deg, #BA0218 0%, #54010B 50%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 custom-container flex flex-col justify-center text-white space-y-6 py-16 z-50 px-4 lg:px-8">
            <h1 className="text-xl lg:text-4xl font-bold leading-tight">
              {t.hero.title} 
            </h1>
            <p className="text-lg font-[500] max-w-lg text-center lg:text-left">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[#BA0218] hover:bg-gray-100 hover:text-[#4C535D] font-semibold text-base"
                asChild
              >
                <Link href="/devenir-prestataire">{t.hero.becomeProvider}</Link> 
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-white/10 font-semibold text-base"
                asChild
              >
                <Link href="/rendez-vous">{t.hero.bookAppointment}</Link> 
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
              alt={t.hero.imageAlt}
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
