'use client';
import Button from '@/common/component/Button';
import { faChevronLeft, faChevronRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slide_destination } from './data';
import './destinations.css';
import Image from 'next/image';

export interface IDestinationsProps {}

export default function Destinations() {
  const swiperRef = React.useRef<any>(null);

  const [swiperState, setSwiperState] = React.useState<{
    isBeginning: boolean;
    isEnd: boolean;
  }>({
    isBeginning: true,
    isEnd: false,
  });

  // Kiểm tra click chạy đến cuối
  const handleEnd = () => {
    setSwiperState((prevState) => ({
      ...prevState,
      isEnd: true,
    }));
  };

  // Kiểm tra click chạy về đoạn đầu

  const handleBegin = () => {
    setSwiperState((prevState) => ({
      ...prevState,
      isBeginning: true,
    }));
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const isBeginning = swiperRef.current.isBeginning;
      const isEnd = swiperRef.current.isEnd;
      setSwiperState({ isBeginning, isEnd });
    }
  };
  const buttonBackgroundColorisBeginning = swiperState.isBeginning ? 'bg-black' : 'bg-[#FF7757]';
  const buttonBackgroundColorisEnd = swiperState.isEnd ? 'bg-black' : 'bg-[#FF7757]';
  return (
    <>
      <div className="destinations py-[140px]">
        <div className="container m-auto mb-[100px]">
          <div className="flex justify-between items-end ">
            <div className="flex flex-1 justify-start items-start flex-col gap-y-8">
              <h1 className="text-[45px] inline-block border-b-[3px] border-[#FF7757]">
                Popular Destinations
              </h1>
              <span className="text-[18px] text-[#767E86]">
                Most popular destinations around the world, from historical places to natural
                wonders.
              </span>
            </div>
            <div className="flex justify-between items-center gap-10">
              <Button
                icon={faChevronLeft}
                onClick={() => {
                  if (!swiperState.isBeginning) {
                    swiperRef.current.slidePrev();
                  }
                }}
                className={` rounded-xl text-white px-[18px] py-5 ${buttonBackgroundColorisBeginning}`}
                classIcon="w-[30px] h-[20px]"
              />
              <Button
                icon={faChevronRight}
                className={`rounded-xl text-white px-[18px] py-5 ${buttonBackgroundColorisEnd}`}
                onClick={() => {
                  if (!swiperState.isEnd) {
                    swiperRef.current.slideNext();
                  }
                }}
                classIcon="w-[30px] h-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="ml-[174px]">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={true}
            style={{
              width: '100%',
              height: '100%',
            }}
            slidesPerView={3.5}
            speed={1000}
            spaceBetween={32}
            // autoplay={{
            //   delay: 4000,
            // }}
            scrollbar={{
              draggable: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onReachEnd={handleEnd}
            onReachBeginning={handleBegin}
            onSlideChange={handleSlideChange}
          >
            {slide_destination.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full object-cover ">
                    <div className="relative w-full h-full text-white">
                      <Image
                        src={slide.img}
                        alt={slide.name}
                        className=" placeholder w-full h-full max-h-[580px] rounded-3xl object-cover"
                      />
                      <div className="absolute bottom-0 mb-10 ml-6">
                        <h1 className="text-[28px]">{slide.name}</h1>
                        <h2 className="text-big line-clamp-4 flex items-center gap-4">
                          <FontAwesomeIcon icon={faLocationDot} />
                          {slide.address}
                        </h2>
                      </div>
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
