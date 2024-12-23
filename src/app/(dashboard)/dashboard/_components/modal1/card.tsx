'use client';
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Cards } from "../../../../lib/card";


const responsive = {
  //desktop: {
   // breakpoint: { max: 3000, min: 1024 },
   // items: 3,
    //slidesToSlide: 1,
  //},
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function InfoCarousel() {
  
  return (
    <div className="py-8">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        arrows={false}
      >
        {Cards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 p-3 rounded-lg bg-white shadow-xl min-w-44"
          >
            <Image src={card.image} alt={card.title} width={50} height={50} />
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-700">{card.title}</p>
              <h3 className="text-sm text-purple-600">{card.value}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
