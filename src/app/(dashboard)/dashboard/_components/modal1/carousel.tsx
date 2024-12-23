'use client';
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselImage = [
  '/assets/facebook.png', '/assets/linkedin.png', '/assets/instagram.png','/assets/x.png','/assets/tiktok.png'
]

export default function SectionCompare() {
  return (
    <div className="layout-padding bg-white pt-32">
      <div className=" text-center">
        <h1 className="text-[32px] md:text-[52px] font-semibold leading-[62px] text-gray-950 lg:mx-auto lg:w-[755px]">
          Compartible with Various Platform
        </h1>
        <p className=" mt-10 text-lg font-normal leading-[30px]  text-zinc-900">
          smartparrot.ai works with social platform and allow you to post
          across them all.
        </p>
      </div>
      <div className="SecCompare !mt-20">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          arrows={false}
        >
          {
            CarouselImage.map((image, i) => (
              <div key={i}>
                {' '}
                <Image
                  src={image}
                  alt=""
                  width={316}
                  height={568}
                />{' '}
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}
