"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Prestataires() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const prestataires = [
    {
      id: 1,
      title: "Recent Prestataires",
      description: "Lorem ipsum dolor sit amet consectetur",
      image: null,
    },
    {
      id: 2,
      title: "Recent Prestataires",
      description: "Lorem ipsum dolor sit amet consectetur",
      image: null,
    },
    {
      id: 3,
      title: "Recent Prestataires",
      description: "Lorem ipsum dolor sit amet consectetur",
      image: null,
    },
    {
      id: 4,
      title: "Recent Prestataires",
      description: "Lorem ipsum dolor sit amet consectetur",
      image: null,
    },
    {
      id: 5,
      title: "Recent Prestataires",
      description: "Lorem ipsum dolor sit amet consectetur",
      image: null,
    },
    {
      id: 6,
      title: "Recent Prestataires",
      description: "Lorem ipsum dolor sit amet consectetur",
      image: null,
    },
  ];

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#54010B] via-[#54010B] to-[#BA0218]" />
      <div 
            className="absolute inset-0" 
            style={{
              background: "linear-gradient(69deg, #BA0218 0%, #54010B 50%, transparent 100%)"
            }}
          />
      <div className="custom-container relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Nos Prestataires
        </h2>
        
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {prestataires.map((prestataire) => (
              <CarouselItem key={prestataire.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-[#BA0218] text-white border-none">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{prestataire.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="relative w-full aspect-square overflow-hidden mb-4">
                      {prestataire.image ? (
                        <Image
                          src={prestataire.image}
                          alt={prestataire.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#D9D9D9]" />
                      )}
                    </div>
                    <p className="text-center">{prestataire.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center pb-6">
                    <Button
                      variant="secondary"
                      className="bg-white text-[#BA0218] hover:bg-gray-100"
                      asChild
                    >
                      <Link href="/prestataires">Read more</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" /> */}
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-white"></span>
          <span className="w-3 h-3 rounded-full bg-white/50"></span>
          <span className="w-3 h-3 rounded-full bg-white/50"></span>
        </div>
      </div>
    </section>
  );
} 