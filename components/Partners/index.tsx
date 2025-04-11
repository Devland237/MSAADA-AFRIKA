"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import mutualisLogo from "@/app/assets/images/90c8d6d8c13dc105f8014a5b0d51b447 3.svg";
import msaadaLogo from "@/app/assets/images/Group 7.svg";

export default function Partners() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const partners = [
    {
      id: 1,
      name: "Mutualis Group",
      logo: mutualisLogo,
    },
    {
      id: 2,
      name: "Msaada Afrika",
      logo: msaadaLogo,
    },
    {
      id: 3,
      name: "Mutualis Group",
      logo: mutualisLogo,
    },
    {
      id: 4,
      name: "Msaada Afrika",
      logo: msaadaLogo,
    },
    {
      id: 5,
      name: "Mutualis Group",
      logo: mutualisLogo,
    },
    {
      id: 6,
      name: "Msaada Afrika",
      logo: msaadaLogo,
    },
    {
      id: 7,
      name: "Mutualis Group",
      logo: mutualisLogo,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="custom-container">
        <h2 className="text-4xl font-bold text-[#54010B] text-center mb-12">
          Nos Partenaires
        </h2>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner) => (
              <CarouselItem 
                key={partner.id} 
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="flex items-center justify-center p-4 h-[150px]">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <div className="flex justify-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-[#BA0218]"></span>
            <span className="w-2 h-2 rounded-full bg-[#BA0218]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#BA0218]/50"></span>
          </div> */}
        </Carousel>
      </div>
    </section>
  );
} 