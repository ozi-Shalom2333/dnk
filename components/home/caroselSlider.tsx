'use client';

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselSlider() {
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  const logos = [
    { id: "logo-1", src: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" },
    { id: "logo-2", src: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" },
    { id: "logo-3", src: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" },
    { id: "logo-4", src: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" },
    { id: "logo-5", src: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" },
    { id: "logo-6", src: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" },
  ];

  // 🔁 Duplicate logos for seamless looping
  const infiniteLogos = [...logos, ...logos];

  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[autoplay.current]}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <CarouselContent>
        {infiniteLogos.map((logo, index) => (
          <CarouselItem
            key={`${logo.id}-${index}`}
            className="basis-1/2 sm:basis-1/3 md:basis-1/5 flex justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.id}
              width={120}
              height={48}
              className="object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
