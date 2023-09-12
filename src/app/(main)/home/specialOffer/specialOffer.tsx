'use client';
import Button from '@/common/component/Button';
import { faChevronLeft, faChevronRight, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { products } from '@/common/data/product';

export interface ISpecialOfferProps {
}

export default function SpecialOffer () {
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
    <div className="py-[140px]">
      <div className="container m-auto mb-[100px]">
        <div className="flex justify-between items-end ">
          <div className="flex flex-1 justify-end items-end flex-col gap-y-8 order-1">
            <h1 className="text-[45px] inline-block border-b-[3px] border-[#FF7757]">
            Special Offer
            </h1>
            <span className="text-[18px] text-[#767E86]">
              Check out our special offer and discounts.
            </span>
          </div>
          <div className="flex justify-between items-center gap-10 ">
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
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={true}
          style={{
            width: '100%',
            height: '100%',
          }}
          slidesPerView={3}
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
          {products.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full object-cover rounded-[26px] bg-[#FFF8F1] max-h-[630px]">
                  <div className="relative w-full h-full text-white">
                    <Image
                      src={items.img}
                      alt={items.place}
                      className=" placeholder w-full h-full max-h-[286px] rounded-t-[26px] object-cover"
                    />
                  </div>
                  <div className="px-6 py-10">
                    <div className="text-[#767E86] text-[28px]">
                    {items.place}
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                    <FontAwesomeIcon icon={faStar}  className='text-[#FFC107]'/>
                    <FontAwesomeIcon icon={faStar}  className='text-[#FFC107]'/>
                    <FontAwesomeIcon icon={faStar}  className='text-[#FFC107]'/>
                    <FontAwesomeIcon icon={faStar}  className='text-[#FFC107]'/>
                    <FontAwesomeIcon icon={faStar}  className='text-[#FFC107]'/>
                    </div>
                    <div className="py-6 text-[#172432]">
                      {items.content}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex justify-between items-center gap-2">
                        <span className='text-[#767E86] text-[20px]'>From</span>
                        <p className='text-[#FF7757] text-[40px]'>${items.price}</p>
                      </div>
                      <Button className='px-10 py-5 bg-[#FF7654] rounded-xl text-white text-[20px]' text='DETAILS' />
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
