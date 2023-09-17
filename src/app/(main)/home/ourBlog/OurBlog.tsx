'use client';
import Image from 'next/image';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './ourblog.css';
import { blogs } from './data';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export interface IOurBlogProps {}

export default function OurBlog() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  return (
    <>
      <div className="py-[140px] our-blog">
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
        <div className="container m-auto slider">
          <div className="grid grid-cols-2 items-center gap-8 max-h-[900px]">
            <div className="slider__images max-h-[900px]">
              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                slidesPerView={1}
                spaceBetween={10}
                mousewheel={true}
                loop={true}
                pagination={true}
                breakpoints={{
                  0: {
                    direction: 'horizontal',
                  },
                  768: {
                    direction: 'horizontal',
                  },
                }}
                className="swiper-container2 "
                modules={[Thumbs, Mousewheel, Pagination]}
              >
                {blogs.map((items, index) => {
                  return (
                    <SwiperSlide key={index} >
                      <div className="relative w-full h-full rounded-[26px]">
                          <Image
                            src={items.img}
                            alt={items.title}
                            className=" placeholder w-full h-full rounded-[26px] object-cover"
                          />
                        </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="slider__thumbs w-full">
              <Swiper
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={20}
                slidesPerView={1}
                speed= {1500}
                className="swiper-container1"
                breakpoints={{
                  0: {
                    direction: 'horizontal',
                  },
                  768: {
                    direction: 'vertical',
                  },
                }}
                modules={[Thumbs]}
              >
                {blogs.map((items, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="relative w-full h-full flex justify-between gap-y-6 flex-col">
                        <p className='text-[54px]'>{items.title}</p>
                        <p className='text-[24px]'>{items.content}</p>
                        <Link href="#" title='Read More' className='text-[24px] text-[#FF7757] flex items-center gap-5'>Read more <FontAwesomeIcon icon={faArrowRight} /></Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
