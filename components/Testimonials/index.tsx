"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import ero from "@/app/assets/images/ad1 1.svg";
export default function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const testimonials = [
    {
      id: 1,
      name: "CEO AFRIKA GARAGE",
      role: "IDF",
      image: ero,
      content: [
        "Lorem ipsum dolor sit amet consectetur. Neque proin placerat sit feugiat eget risus pharetra sit a.",
        "Lorem ipsum dolor sit amet consectetur. Neque proin placerat sit feugiat eget risus pharetra sit a.",
      ],
    },
    {
      id: 2,
      name: "CEO AFRIKA GARAGE",
      role: "IDF",
      image: ero,
      content: [
        "Lorem ipsum dolor sit amet consectetur. Neque proin placerat sit feugiat eget risus pharetra sit a.",
        "Lorem ipsum dolor sit amet consectetur. Neque proin placerat sit feugiat eget risus pharetra sit a.",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="custom-container">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none overflow-hidden">
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 p-0">
                    <div className="relative h-[300px] md:h-[600px] bg-[#54010B] rounded-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-[#54010B]/90 text-white p-4">
                        <h3 className="text-xl font-bold uppercase">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm uppercase">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="bg-[#BA0218] h-full flex items-center lg:rounded-r-4xl">
                      <div className="text-white p-8 space-y-6">
                        {testimonial.content.map((text, index) => (
                          <p key={index} className="text-lg text-center">
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="hidden md:flex cursor-pointer" />
          <CarouselNext className="hidden md:flex cursor-pointer" /> */}
        </Carousel>
      </div>
    </section>
  );
}
