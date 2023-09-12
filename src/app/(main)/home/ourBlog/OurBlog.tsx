'use client';
import Image from 'next/image';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { blogs } from './data';

export interface IOurBlogProps {}

export default function OurBlog() {
  return (
    <>
      <div className="py-[140px]">
        <div className="container m-auto mb-[100px]">
          <div className="flex justify-between items-start ">
            <div className="flex flex-1 justify-start items-start flex-col gap-y-8 order-1">
              <h1 className="text-[45px] inline-block border-b-[3px] border-[#FF7757]">Our Blog</h1>
              <span className="text-[18px] text-[#767E86]">
                An insight the incredible experience in the world
              </span>
            </div>
          </div>
        </div>
        <div className="container m-auto">
          <div className="flex justify-between items-center">
            <Swiper
              modules={[Autoplay, Pagination]}
              style={{
                width: '100%',
                height: '100%',
              }}
              slidesPerView={1}
              speed={1000}
              spaceBetween={32}
              // autoplay={{
              //   delay: 4000,
              // }}
              scrollbar={{
                draggable: true,
              }}
            >
              {blogs.map((items, index) => {
                return (
                  <>
                    <SwiperSlide key={index}>
                      <div className="flex justify-between items-center gap-8">
                        <div className="w-full object-cover bg-[#FFF8F1] max-h-[630px] ">
                          <div className="relative w-full h-full text-white ">
                            <Image
                              src={items.img}
                              alt={items.title}
                              className=" placeholder w-full h-full max-h-[286px] rounded-[26px] object-cover"
                            />
                          </div>
                        </div>
                        <div className="w-full">{items.title}</div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
