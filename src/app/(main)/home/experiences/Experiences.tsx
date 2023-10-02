'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { slide_experiences } from './data';
import Image from 'next/image';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export interface IExperiencesProps {}

export default function Experiences() {
  return (
    <>
      <div className="destinations py-[140px]">
        <div className="container m-auto mb-[100px]">
          <div className="flex justify-between items-end ">
            <div className="flex flex-1 justify-start items-start flex-col gap-y-8">
              <h1 className="text-[45px] inline-block border-b-[3px] border-[#FF7757]">
                Traveler’s Experiences
              </h1>
              <span className="text-[18px] text-[#767E86]">
                Here some awesome feedback from our travelers
              </span>
            </div>
          </div>
        </div>
        <div className="ml-[174px]">
          <Swiper
            modules={[Autoplay]}
            style={{
              width: '100%',
              height: '100%',
            }}
            slidesPerView={2.5}
            speed={1000}
            spaceBetween={32}
            // autoplay={{
            //   delay: 4000,
            // }}
            loop={true}
            scrollbar={{
              draggable: true,
            }}
          >
            {slide_experiences.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full relative object-cover bg-[#F5F6F7] rounded-xl p-[40px] flex flex-col gap-y-5 text-[#767E86]">
                    <div className="flex gap-x-4 items-center">
                      <Image
                        src={slide.img}
                        alt={slide.name}
                        className=" placeholder w-[100px] h-[100px] rounded-full object-cover"
                      />
                      <div className="flex flex-col gap-y-2">
                        <p className="text-[24px]">{slide.name}</p>
                        <p className="text-big">{slide.position}</p>
                        <div className="flex items-center gap-4">
                          <FontAwesomeIcon icon={faStar} className="text-[#FFC107] text-[24px]" />
                          <FontAwesomeIcon icon={faStar} className="text-[#FFC107] text-[24px]" />
                          <FontAwesomeIcon icon={faStar} className="text-[#FFC107] text-[24px]" />
                          <FontAwesomeIcon icon={faStar} className="text-[#FFC107] text-[24px]" />
                          <FontAwesomeIcon icon={faStar} className="text-[#FFC107] text-[24px]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-5">
                      <p>{slide.content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
