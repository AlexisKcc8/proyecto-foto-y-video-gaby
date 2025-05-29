"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/components/ui/carousel";

const images = [
  "/images/img1.webp",
  "/images/img2.webp",
  "/images/img3.webp",
  "/images/img4.webp",
  "/images/img5.webp",
  "/images/img6.webp",
  "/images/img7.webp",
  "/images/img8.webp",
  "/images/img9.webp",
];

export function CarouselPhotos() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full my-12 flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 phone-lg:max-w-[70%] my-4 phone-lg:text-3xl laptop:text-5xl">
        "Conoce nuestro trabajo y enamórate del arte de capturar emociones."
      </h2>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {images.map((src, index) => (
            <CarouselItem key={index} className="basis-auto ">
              <img
                src={src}
                alt={`Slide ${index}`}
                loading="lazy"
                className="w-full h-96 object-cover object-top rounded-xl shadow-md  hover:cursor-pointer tablet:h-[40rem] "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
