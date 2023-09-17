'use client';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slide_banner } from './data';
import Image from 'next/image';
import DatepickerCustom from '@/common/component/Datepicker';
import Input from '@/common/component/Input';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import Button from '@/common/component/Button';

export interface ISlidesProps {}

export default function Slides(props: ISlidesProps) {
  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay,Navigation]}
        // pagination={{ clickable: true }}
        style={{
          width: '100%',
          height: '100%',
        }}
        slidesPerView={1}
        speed={1000}
        spaceBetween={5}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
      
        scrollbar={{
          draggable: true,
        }}
        loop={true}
      >
        {slide_banner.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full object-cover ">
                <div className="relative w-full h-full overflow-hidden text-white">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    className=" placeholder w-full h-full max-h-[100vh]"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-[45px] text-center">{slide.title}</h1>
                    <h2 className="text-big text-center line-clamp-4">{slide.subTitle}</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute bottom-[calc(25%-20px)] z-50 w-full">
        <form action="">
          <div className="flex items-center justify-center gap-x-2.5 ">
            <div className="">
              <Input
                nameIcon={faBed}
                classIcon="w-[20px] h-[20px] text-black absolute top-[calc(50%-10px)] left-1"
                className="w-full"
                height="auto"
                rounded={6}
                placeholder="Bạn muốn đến đâu?"
                classNameInput=" pl-7 py-5"
                type="text"
              />
            </div>
            <div className="max-w-[300px] w-full ">
              <DatepickerCustom classInputCustom="h-[auto] border border-[#ccc] focus:outline-none rounded-[6px] w-full py-5 cursor-pointer" />
            </div>
            <div className="relative max-w-[300px] w-full cursor-pointer">
              <Input
                nameIcon={faBed}
                classIcon="w-[20px] h-[20px] text-black absolute top-[calc(50%-10px)] left-1 "
                className="w-full"
                height="auto"
                rounded={6}
                classNameInput=" pl-7 py-5 cursor-pointer bg-white"
                type="button"
              />
              <span className="top-[calc(50%-10px)] left-9 absolute block w-auto">
                2 người lớn · 0 trẻ em · 1 phòng
              </span>
            </div>
            <Button className="bg-[#FF7757] py-5 px-7 text-white rounded-md" text="Tìm"></Button>
          </div>
        </form>
      </div>
    </div>
  );
}
