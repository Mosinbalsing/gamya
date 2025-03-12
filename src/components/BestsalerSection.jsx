import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "./ProductCard";

const  Necklace=[
      {
        id: 1,
        name: "Blossom bouquet flower",
        price: 1550.0,
        originalPrice: 1800.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: null,
      },
      {
        id: 2,
        name: "Golden Lakshmi pendant",
        price: 1250.0,
        originalPrice: 1400.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
      {
        id: 3,
        name: "Ruby studded necklace",
        price: 1800.0,
        originalPrice: 2000.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 15,
      },
      {
        id: 4,
        name: "Emerald classic chain",
        price: 1350.0,
        originalPrice: 1500.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
      {
        id: 5,
        name: "Emerald classic chain",
        price: 1350.0,
        originalPrice: 1500.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
      {
        id: 6,
        name: "Emerald classic chain",
        price: 1350.0,
        originalPrice: 1500.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
      {
        id: 7,
        name: "Emerald classic chain",
        price: 1350.0,
        originalPrice: 1500.0,
        image: "assets/placeholder.svg?height=300&width=300",
        isNew: true,
        discount: 10,
      },
    ]
    



const BestsalerSection = () => {
  return (
    <div className="container-fluid py-14 flex flex-col justify-center items-center h-auto px-9 md:px-8 lg:px-16 overflow-hidden gap-4">
      <h2 className="text-4xl font-serif text-amber-900 mb-3">
          Bestseller Saler
        </h2>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] "
    >
      <CarouselContent className="pl-4  ">
        {Necklace.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 sm:basis-1/1 w-full h-auto p-0 ml-2 m-0">
            <div className="p-2">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
};

export default BestsalerSection;
