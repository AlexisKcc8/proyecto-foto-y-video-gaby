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
    <section className="w-full my-12 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-gold phone-lg:text-4xl">
        "Descubre el arte de capturar momentos."
      </h2>
      <p class=" text-base text-cinnamon italic mb-4 max-w-4/5 laptop:text-xl">
        Porque los mejores recuerdos no deberían desvanecerse.
      </p>

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
                className="w-full h-[30rem] object-cover object-top rounded-xl shadow-md  hover:cursor-pointer tablet:h-[40rem] "
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
