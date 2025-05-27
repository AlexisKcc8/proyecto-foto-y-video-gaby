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
  "/images/img1.jpg",
  "/images/img2.JPG",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.webp",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
];

export function CarouselPhotos() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full my-12 flex flex-col items-center gap-4">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((src, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 px-2  ">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-96 object-cover object-center rounded-xl shadow-md  hover:cursor-pointer tablet:h-[38rem]"
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
